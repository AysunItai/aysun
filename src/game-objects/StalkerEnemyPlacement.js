import { RoamingEnemyPlacement } from "./RoamingEnemyPlacement";


export class StalkerEnemyPlacement extends RoamingEnemyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.tickBetweenMovesInterval = 20;
    this.ticksUntilNextMove = this.tickBetweenMovesInterval;
    this.turnsAroundAtWater = true;
    this.interactsWithGround = true;
    this.hp = 20;
    this.gold = 5;
    this.exp = 5;
    this.followingHero = false;
   
   
  }

  takesDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      // Handle death logic here if needed
    }
  }

 

  

  

  
}
 
  

