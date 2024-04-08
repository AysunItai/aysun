import React from "react";
import Sprite from "./Sprite";
import { TILES } from "../../helpers/tiles";
import styles from "./GoblinEnemyBody.module.css";

export default function GoblinEnemyBody({ frameCoord, yTranslate, onAttack, showShadow, hp }) {
  const handleClick = (event) => {
    event.stopPropagation();
    if (onAttack) {
      onAttack(); // Call the onAttack function provided as prop
    }
  };

  const healthPercentage = (hp / 20) * 100; // Assuming max HP is 20

  return (
    <div className={styles.goblin} onClick={handleClick}>
      <div className={styles.healthBar} style={{ width: `${healthPercentage}%` }}></div>
      <div>{showShadow && <Sprite frameCoord={TILES.SHADOW} />}</div>
      <div
        className={styles.goblinBody}
        style={{
          transform: `translateY(${yTranslate}px)`,
        }}
      >
        <Sprite frameCoord={frameCoord} size={32} />
      </div>
    </div>
  );
}
