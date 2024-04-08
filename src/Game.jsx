import React, { useState, useEffect } from 'react';
import PlayerCharacter from './PlayerCharacter';
import Monster from './Monster';
import Monsters from './Monsters';
import styles from './css/GameArea.module.css';
import Inventory from "./Inventory";
import CharacterStatus from "./CharacterStatus";

const Game = () => {
  const initializeMonsters = (Monsters) => {
    return Monsters.map((monster) => ({
      ...monster,
      position: {
        x: Math.random() * 100, 
        y: Math.random() * 100,
      },
    }));
  };

  const [monsters, setMonsters] = useState(initializeMonsters(Monsters));
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 0 });
  const [projectiles, setProjectiles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMonsters(monsters.map(monster => ({
        ...monster,
        position: {
          x: Math.random() * (800 - 32),
          y: Math.random() * (600 - 32),
        }
      })));
    }, 5000);

    return () => clearInterval(interval); 
  }, [monsters]);

 useEffect(() => {
  const handleKeyPress = (e) => {
    let newX = characterPosition.x;
    let newY = characterPosition.y;

    switch (e.key) {
      case "ArrowUp":
        newY -= 10; 
        break;
      case "ArrowDown":
        newY += 10; 
        break;
      case "ArrowLeft":
        newX -= 10; 
        break;
      case "ArrowRight":
        newX += 10; 
        break;
      case " ":
        
        monsters.forEach(monster => {
          const dx = monster.position.x - characterPosition.x;
          const dy = monster.position.y - characterPosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 500) {
            setProjectiles(prev => [...prev, {
              id: uniqueId(),
              x: characterPosition.x,
              y: characterPosition.y,
              targetId: monster.id,
            }]);
          }
        });
        break;
      default:
        return; 
    }

   
    newX = Math.max(0, Math.min(newX, 800 - 32)); 
    newY = Math.max(0, Math.min(newY, 600 - 32)); 
    setCharacterPosition({ x: newX, y: newY });
  };

  window.addEventListener("keydown", handleKeyPress);
  return () => window.removeEventListener("keydown", handleKeyPress);
}, [characterPosition, monsters]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectiles(prev => prev.map(proj => ({
        ...proj,
        x: proj.x + 5, 
      })).filter(proj => {
        const monster = monsters.find(m => m.id === proj.targetId);
        if (!monster) return false; 
        const dx = monster.position.x - proj.x;
        const dy = monster.position.y - proj.y;
        if (Math.sqrt(dx * dx + dy * dy) < 10) {
          handleAttack(proj.targetId, 2); 
          return false; 
        }
        return proj.x < 800; 
      }));
    }, 100);

    return () => clearInterval(interval);
  }, [projectiles, monsters]);

  const handleAttack = (monsterId, damage = 50) => {
    setMonsters(monsters.map(monster =>
      monster.id === monsterId ? { ...monster, health: monster.health - damage } : monster
    ));
  };

  const [showInventory, setShowInventory] = useState(false);
  const [showCharacterStatus, setShowCharacterStatus] = useState(false);

  const handleInventoryButtonClick = () => {
    setShowInventory(!showInventory);
  };

  const handleCharacterStatusButtonClick = () => {
    setShowCharacterStatus(!showCharacterStatus);
  };
  const uniqueId = () => `${new Date().getTime()}-${Math.random()}`;

  return (
    <div className={styles.gameAreaContainer}>
    <div className={styles.gameArea}>

      
      <PlayerCharacter  position={characterPosition}/>
      {monsters.map((monster) => (
        <Monster key={monster.id} monster={monster} onAttack={() => handleAttack(monster.id)} />
      ))}
      <button className={styles.inventoryButton} onClick={handleInventoryButtonClick}>
        Inventory
      </button>
      <button className={styles.characterStatusButton} onClick={handleCharacterStatusButtonClick}> {/* Add custom styling as needed */}
        Character Status
      </button>
    {projectiles.map((proj, index) => (
          <div key={proj.id} style={{
            position: 'absolute',
            left: `${proj.x}px`,
            top: `${proj.y}px`,
            width: '5px',
            height: '5px',
            backgroundColor: 'brown',
          }}></div>
        ))}
    </div>
      {showInventory && <Inventory isOpen={showInventory} onClose={handleInventoryButtonClick} />}
    {showCharacterStatus && <CharacterStatus isOpen={showCharacterStatus} onClose={handleCharacterStatusButtonClick} />}
    </div>
  );
};

export default Game;
