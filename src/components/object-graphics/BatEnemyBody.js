import Sprite from "./ElevatedSprite";
import styles from "./BatEnemyBody.module.css";
import { useState } from "react";


export default function BatEnemyBody({ frameCoord, yTranslate, hp, onAttack,inventory,gold,bat,level}) {
 
 const [showGoldDrop, setShowGoldDrop] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
  
   if(hp>0){
   
    onAttack();
   }else{
    console.log("bat enemy attacked")
     inventory.inventoryMap.set("BAT_GOLD",gold);
     console.log(inventory)
     
     
     setShowGoldDrop(true);
     setTimeout(() => setShowGoldDrop(false), 1000);
     setTimeout(() => level.deletePlacement(bat), 1000);

   }
    
  };
 
  return (
  <div className={styles.batEnemy} onClick={handleClick}>
    <div
      className={styles.batEnemyBody}
      style={{
        transform: `translateY(${yTranslate}px)`,
      }}
    >
      <p>{hp}</p>
      <Sprite frameCoord={frameCoord} size={32} />
      {showGoldDrop && <div className={styles.goldDrop}>💰</div>} 
    </div>
  </div>
);
}
