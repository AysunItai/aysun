import Sprite from "./Sprite";
import styles from "./BatEnemyBody.module.css";
import { useState } from "react";
import { TILES } from "../../helpers/tiles"; // Import the TILES constant

export default function BatEnemyBody({ frameCoord, yTranslate, hp, onAttack }) {
  const [showGoldDrop, setShowGoldDrop] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    onAttack();
    setShowGoldDrop(true);
    setTimeout(() => setShowGoldDrop(false), 1000); 
  };

  // Calculate the width of the health bar based on the current HP
  const healthBarWidth = `${(hp / 3) * 100}%`;

  return (
    <div className={styles.batEnemy} onClick={handleClick}>
      <div className={styles.batEnemyBody} style={{ transform: `translateY(${yTranslate}px)` }}>
        {/* Render the health bar */}
        <div className={styles.healthBarContainer}>
          <div className={styles.healthBar} style={{ width: healthBarWidth }}></div>
        </div>
        {/* Display HP */}
        <p>{hp}</p>
        {/* Render the sprite */}
        <Sprite frameCoord={frameCoord} size={36} />
        {/* Render the gold drop */}
        {showGoldDrop && <div className={styles.goldDrop}>💰</div>}
      </div>
    </div>
  );
}
