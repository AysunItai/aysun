import {RoamingEnemyPlacement} from "./RoamingEnemyPlacement";
import { PLACEMENT_TYPE_GOBLIN } from "../helpers/consts";
import { TILES } from "../helpers/tiles";
import GoblinBody from "../components/object-graphics/GoblinBody";
import { Collision } from "../classes/Collision";


export class GoblinPlacement extends RoamingEnemyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.tickBetweenMovesInterval = 20;
    this.ticksUntilNextMove = this.tickBetweenMovesInterval;
    this.turnsAroundAtWater = false;
    this.interactsWithGround = false;
    this.hp = 3;
    this.gold=5;
   // this.hero = this.level.heroRef;
    this.type = PLACEMENT_TYPE_GOBLIN;
   

  }

  heroYes(){
    console.log(this.checkForOverlapWithHero())
    return this.checkForOverlapWithHero();
  }
  stopMoving(){
    const hero = this.level.heroRef;

    //console.log(hero)
    const distance = Math.sqrt((hero.x - this.x) ** 2 + (hero.y - this.y) ** 2)*32;
    if(distance<50){
      this.tickBetweenMovesInterval=10000;
    }
    
  }
 tick() {
    this.tickMovingPixelProgress();
    this.tickAttemptAiMove();
    this.stopMoving();
  }
  takesDamage() {
    
    this.hp -= 1;

    if (this.hp < 0) {
      this.hasBeenCollected=true;
     
     
    }
  }
     
   
    getFrame() {
    // Dead skin
    if (this.hp <= 0) {
      return TILES.GOBLIN_ENEMY_DEAD;
     
    }else{
      return TILES.GOBLIN_ENEMY;
    }
  }

  renderComponent() {
   
    return <GoblinBody frameCoord={this.getFrame()}  />;
  }
  
}
