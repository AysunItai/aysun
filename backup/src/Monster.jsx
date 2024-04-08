// Monster.jsx

import React from 'react';
import styles from './css/Monster.module.css'; 

const Monster = ({ monster, onAttack }) => {
  const CELL_SIZE = 32; // Define this based on your game's grid size
  
  console.log(monster)
    const style = {
    position: 'absolute',
    left: `${monster.position.x*CELL_SIZE}px`,
    top: `${monster.position.y*CELL_SIZE}px`,
    zIndex: 3,
    
  };
  return (
    <div style={style} className={styles.monster} onClick={onAttack}>
      <div className={`${styles.batSprite} ${styles[`bat${monster.id}`]}`}></div>
      <p style={{color:`red`}}>Health:<span>{Number(monster.health)}</span> </p>
    </div>
  );
};

export default Monster;
