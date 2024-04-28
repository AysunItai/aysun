import {
  LEVEL_THEMES,
  PLACEMENT_TYPE_FLOUR,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_WALL,
  // PLACEMENT_TYPE_LOCK,
  // PLACEMENT_TYPE_KEY,
  PLACEMENT_TYPE_ICE,
  PLACEMENT_TYPE_WATER,
  PLACEMENT_TYPE_FIRE,
  PLACEMENT_TYPE_CONVEYOR,
  PLACEMENT_TYPE_WATER_PICKUP,
  PLACEMENT_TYPE_ICE_PICKUP,
  // PLACEMENT_TYPE_ROAMING_ENEMY,
  // PLACEMENT_TYPE_GROUND_ENEMY,
  // PLACEMENT_TYPE_FLYING_ENEMY,
  PLACEMENT_TYPE_FIRE_PICKUP,
  PLACEMENT_TYPE_SWITCH_DOOR,
  PLACEMENT_TYPE_SWITCH,
  PLACEMENT_TYPE_TELEPORT,
  PLACEMENT_TYPE_TREE,
  //PLACEMENT_TYPE_THIEF,
  //PLACEMENT_TYPE_CIABATTA,
  //PLACEMENT_TYPE_BAT,
  PLACEMENT_TYPE_BAT_ENEMY,
  PLACEMENT_TYPE_GOBLIN,
  PLACEMENT_TYPE_GOBLIN_THIEF,
  PLACEMENT_TYPE_STALKER_ENEMY,
  PLACEMENT_TYPE_BERRY
} from "../helpers/consts";

const level = {
  theme: LEVEL_THEMES.GREEN,
  tilesWidth: 15,
  tilesHeight: 10,
  placements: [
    { x: 5, y: 5, type: PLACEMENT_TYPE_HERO },
    { x: 7, y: 4, type: PLACEMENT_TYPE_GOAL },
   //{ x: 3, y: 2, type: PLACEMENT_TYPE_BAT_ENEMY },
  // { x: 5, y: 6, type: PLACEMENT_TYPE_BAT_ENEMY },
//{ x: 3, y: 1, type: PLACEMENT_TYPE_BAT_ENEMY ,initialDirection: "UP" },


    ////{ x: 3, y: 1, type: PLACEMENT_TYPE_CIABATTA },
   // { x: 3, y: 1, type: PLACEMENT_TYPE_BAT },
   // { x: 0, y: 0, type: PLACEMENT_TYPE_BAT },
    //{ x: 3, y: 0, type: PLACEMENT_TYPE_BAT },
    { x: 1, y: 1, type: PLACEMENT_TYPE_GOBLIN },
    { x: 5, y: 1, type: PLACEMENT_TYPE_FIRE },
   // { x: 1, y: 3, type: PLACEMENT_TYPE_TREE },
    // { x: 1, y: 2, type: PLACEMENT_TYPE_TREE },
     { x: 0.7, y: 1.7, type: PLACEMENT_TYPE_BERRY },
     //{ x: 9, y: 9, type: PLACEMENT_TYPE_GOBLIN_THIEF },
    { x: 1, y: 2, type: PLACEMENT_TYPE_STALKER_ENEMY },


    { x: 3, y: 2, type: PLACEMENT_TYPE_TELEPORT },
    { x: 7, y: 6, type: PLACEMENT_TYPE_TELEPORT },

    { x: 7, y: 3, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false },
    { x: 4, y: 3, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true },
    { x: 4, y: 2, type: PLACEMENT_TYPE_SWITCH },

    { x: 8, y: 2, type: PLACEMENT_TYPE_WALL },
    { x: 8, y: 3, type: PLACEMENT_TYPE_FLOUR },

    { x: 1, y: 4, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },
    { x: 1, y: 5, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },

    { x: 3, y: 4, type: PLACEMENT_TYPE_FIRE },
    { x: 4, y: 4, type: PLACEMENT_TYPE_FIRE_PICKUP },
    { x: 5, y: 4, type: PLACEMENT_TYPE_FIRE },

    { x: 4, y: 7, type: PLACEMENT_TYPE_ICE_PICKUP },
    { x: 3, y: 6, type: PLACEMENT_TYPE_ICE, corner: "TOP_LEFT" },
    { x: 3, y: 7, type: PLACEMENT_TYPE_ICE },
    { x: 3, y: 8, type: PLACEMENT_TYPE_ICE, corner: "BOTTOM_LEFT" },
    { x: 5, y: 6, type: PLACEMENT_TYPE_ICE, corner: "TOP_RIGHT" },
    { x: 5, y: 7, type: PLACEMENT_TYPE_ICE },
    { x: 5, y: 8, type: PLACEMENT_TYPE_ICE, corner: "BOTTOM_RIGHT" },

    { x: 6, y: 8, type: PLACEMENT_TYPE_WATER_PICKUP },
    { x: 7, y: 8, type: PLACEMENT_TYPE_WATER },
  ],
};

export default level;
