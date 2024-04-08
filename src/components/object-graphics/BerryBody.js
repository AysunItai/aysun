import Sprite from "./ElevatedSprite";
import styles from "./BatEnemyBody.module.css";
import { useState } from "react";


export default function BerryBody({ frameCoord, isCollected, hp, inventory, berry}) {
  const [newhp, setnewHp] = useState(hp);
 
   const handleClick = (event) => {
    console.log("Berry clicked")
    event.stopPropagation();
    if (hp > 0) {
      const newHp = hp - 1;
      setnewHp(newHp);
      if (newHp <= 0) {
        isCollected(newhp); 
        inventory.inventoryMap.set("BERRY",berry);
        console.log("Berry collected",inventory)
      }
    }
  };
 
  return (
  <div className={styles.batEnemy} onClick={handleClick}>
    <div
      className={styles.batEnemyBody}
      style={{
       
      }}
    >
     
      <Sprite frameCoord={frameCoord} size={36} />
     
    </div>
  </div>
);
}
