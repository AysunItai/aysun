import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { THEME_TILES_MAP } from "../helpers/consts";

export class TreePlacement extends Placement {
  

  renderComponent() {
    //const wallTileCoord = THEME_TILES_MAP[this.level.theme].WALL;
    return (
    <>
    <Sprite frameCoord={"36x2"} size={13} />;
    
    </>
    )
  }
}
