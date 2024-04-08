import {FlyingEnemyPlacement} from "./FlyingEnemyPlacement";
import { DIRECTION_LEFT, PLACEMENT_TYPE_BAT_ENEMY,PLACEMENT_TYPE_CELEBRATION, } from "../helpers/consts";
import { TILES } from "../helpers/tiles";
import BatEnemyBody from "../components/object-graphics/BatEnemyBody";
import soundsManager, { SFX } from "../classes/Sounds";

export class BatEnemyPlacement extends FlyingEnemyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.tickBetweenMovesInterval = 20;
    this.ticksUntilNextMove = this.tickBetweenMovesInterval;
    this.turnsAroundAtWater = false;
    this.interactsWithGround = false;
    this.hp = 20;
    this.gold=5;
   // this.hero = this.level.heroRef;
    this.type = PLACEMENT_TYPE_BAT_ENEMY;
   

  }

  heroYes(){
    console.log(this.checkForOverlapWithHero())
    return this.checkForOverlapWithHero();
  }

  takesDamage() {
    
    this.hp -= 1;

    if (this.hp < 0) {
      this.hasBeenCollected=true;
     
     
    }
  }
     onClick() {
        
        const hero = this.level.heroRef;
        const inventory = this.level.inventory;
        const placements=this.level.placements;
       
        
        
        const distance = Math.sqrt((hero.x - this.x) ** 2 + (hero.y - this.y) ** 2)*32;
            
            if (distance <= 150) {
            this.takesDamage(1);
           
        }

       
    }
     addsItemToInventoryOnCollide() {
    return PLACEMENT_TYPE_BAT_ENEMY;
  }
   
    getFrame() {
    // Dead skin
    if (this.hp <= 0) {
      return TILES.BAT_ENEMY_DEAD;
     
    }else{
      return TILES.BAT_ENEMY;
    }
  }

  renderComponent() {
   
    return <BatEnemyBody frameCoord={this.getFrame()}  showShadow={true} hp={this.hp} inventory={this.level.inventory} onAttack={this.onClick.bind(this)} gold={this.gold} placements={this.level.placements} level={this.level} bat={this}/>;
  }
  
}
