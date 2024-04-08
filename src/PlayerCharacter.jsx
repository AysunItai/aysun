// PlayerCharacter.jsx
import React from 'react';
import { useCharacterContext } from './store/CharacterContext'; 
import fighter from './img/Fighter.jpg';
import magicUser from './img/MagicUser.jpg';
import thief from './img/Thief.jpg';

// Object mapping class names to their image paths
const characterImages = {
  Fighter: fighter, 
  'Magic User':magicUser, 
  Thief: thief, 
};

const PlayerCharacter = ({position}) => {
  const { state: character } = useCharacterContext();
   const style = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    
  };

  const characterImage = characterImages[character.selectedClass] || '/img/default.jpg'; // Fallback image

  return (
    <div style={style}>
      {character.selectedClass && (
        <>
          
          <img src={characterImage} alt={character.selectedClass} />
        </>
      )}
    </div>
  );
};

export default PlayerCharacter;
