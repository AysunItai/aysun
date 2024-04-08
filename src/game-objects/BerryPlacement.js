import { Placement } from "./Placement";
import { TILES } from "../helpers/tiles";
import BerryBody from "../components/object-graphics/BerryBody";

export class BerryPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
     this.hp = 1;
     this.berry=10;
   
  }
 isCollected(hp){
     this.hp--;
  }
  
getFrame() {
  
    if (this.hp <= 0) {
      return TILES.BUSH_WITHOUT_BERRY;
     
    }else{
      return TILES.BUSH_WITH_BERRY;
    }
  }
  renderComponent() {
    //const wallTileCoord = THEME_TILES_MAP[this.level.theme].WALL;
    return (
    <>
    <BerryBody frameCoord={this.getFrame()}  hp={this.hp} isCollected={this.isCollected.bind(this)} berry={this.berry} inventory={this.level.inventory}/>;
    
    </>
    )
  }
}
