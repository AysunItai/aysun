import {
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_WALL,
  PLACEMENT_TYPE_FLOUR,
  PLACEMENT_TYPE_CELEBRATION,
  PLACEMENT_TYPE_LOCK,
  PLACEMENT_TYPE_KEY,
  PLACEMENT_TYPE_WATER,
  PLACEMENT_TYPE_WATER_PICKUP,
  PLACEMENT_TYPE_GROUND_ENEMY,
  PLACEMENT_TYPE_FLYING_ENEMY,
  PLACEMENT_TYPE_ROAMING_ENEMY,
  PLACEMENT_TYPE_CONVEYOR,
  PLACEMENT_TYPE_ICE,
  PLACEMENT_TYPE_ICE_PICKUP,
  PLACEMENT_TYPE_FIRE,
  PLACEMENT_TYPE_FIRE_PICKUP,
  PLACEMENT_TYPE_SWITCH_DOOR,
  PLACEMENT_TYPE_SWITCH,
  PLACEMENT_TYPE_TELEPORT,
  PLACEMENT_TYPE_THIEF,
  PLACEMENT_TYPE_CIABATTA,
  PLACEMENT_TYPE_TREE,
  PLACEMENT_TYPE_BAT_ENEMY,
  PLACEMENT_TYPE_GOBLIN_ENEMY,

} from "../helpers/consts";
import { HeroPlacement } from "../game-objects/HeroPlacement";
import { GoalPlacement } from "../game-objects/GoalPlacement";
import { WallPlacement } from "../game-objects/WallPlacement";
import { FlourPlacement } from "../game-objects/FlourPlacement";
import { CelebrationPlacement } from "../game-objects/CelebrationPlacement";
import { LockPlacement } from "../game-objects/LockPlacement";
import { KeyPlacement } from "../game-objects/KeyPlacement";
import { WaterPlacement } from "../game-objects/WaterPlacement";
import { WaterPickupPlacement } from "../game-objects/WaterPickupPlacement";
import { GroundEnemyPlacement } from "../game-objects/GroundEnemyPlacement";
import { FlyingEnemyPlacement } from "../game-objects/FlyingEnemyPlacement";
import { RoamingEnemyPlacement } from "../game-objects/RoamingEnemyPlacement";
import { ConveyorPlacement } from "../game-objects/ConveyorPlacement";
import { IcePlacement } from "../game-objects/IcePlacement";
import { IcePickupPlacement } from "../game-objects/IcePickupPlacement";
import { FirePlacement } from "../game-objects/FirePlacement";
import { FirePickupPlacement } from "../game-objects/FirePickupPlacement";
import { SwitchableDoorPlacement } from "../game-objects/SwitchableDoorPlacement";
import { DoorSwitchPlacement } from "../game-objects/DoorSwitchPlacement";
import { TeleportPlacement } from "../game-objects/TeleportPlacement";
import { ThiefPlacement } from "../game-objects/ThiefPlacement";
import { CiabattaPlacement } from "../game-objects/CiabattaPlacement";
//import  {BatPlacement} from "../game-objects/BatPlacement";
import { BatEnemyPlacement } from "../game-objects/BatEnemyPlacement";
import { GoblinEnemyPlacement } from "../game-objects/GoblinEnemyPlacement";
import { TreePlacement } from "../game-objects/TreePlacement";


const placementTypeClassMap = {
  [PLACEMENT_TYPE_HERO]: HeroPlacement,
  [PLACEMENT_TYPE_GOAL]: GoalPlacement,
  [PLACEMENT_TYPE_WALL]: WallPlacement,
  [PLACEMENT_TYPE_FLOUR]: FlourPlacement,
  [PLACEMENT_TYPE_CELEBRATION]: CelebrationPlacement,
  [PLACEMENT_TYPE_LOCK]: LockPlacement,
  [PLACEMENT_TYPE_KEY]: KeyPlacement,
  [PLACEMENT_TYPE_WATER]: WaterPlacement,
  [PLACEMENT_TYPE_WATER_PICKUP]: WaterPickupPlacement,
  [PLACEMENT_TYPE_GROUND_ENEMY]: GroundEnemyPlacement,
  [PLACEMENT_TYPE_FLYING_ENEMY]: FlyingEnemyPlacement,
  [PLACEMENT_TYPE_ROAMING_ENEMY]: RoamingEnemyPlacement,
  [PLACEMENT_TYPE_CONVEYOR]: ConveyorPlacement,
  [PLACEMENT_TYPE_ICE]: IcePlacement,
  [PLACEMENT_TYPE_ICE_PICKUP]: IcePickupPlacement,
  [PLACEMENT_TYPE_FIRE]: FirePlacement,
  [PLACEMENT_TYPE_FIRE_PICKUP]: FirePickupPlacement,
  [PLACEMENT_TYPE_SWITCH_DOOR]: SwitchableDoorPlacement,
  [PLACEMENT_TYPE_SWITCH]: DoorSwitchPlacement,
  [PLACEMENT_TYPE_TELEPORT]: TeleportPlacement,
  [PLACEMENT_TYPE_THIEF]: ThiefPlacement,
  [PLACEMENT_TYPE_CIABATTA]: CiabattaPlacement,
  //[PLACEMENT_TYPE_BAT]: BatPlacement,
  [PLACEMENT_TYPE_BAT_ENEMY]: BatEnemyPlacement,
  [PLACEMENT_TYPE_GOBLIN_ENEMY]: GoblinEnemyPlacement,
  [PLACEMENT_TYPE_TREE]: TreePlacement,
};

// class PlacementFactory {
//   createPlacement(config, level) {
//     const Placement = placementTypeClassMap[config.type];
//     if (!Placement) {
//       console.warn("NO TYPE FOUND", config.type);
//       return null;
//     }

//     // Check if Placement is a React component function or a class
//     if (Placement.prototype && Placement.prototype.isReactComponent) {
//       // Class component
//       const instance = new Placement(config, level);
//       instance.id = Math.floor(Math.random() * 9999999) + 1;
//       return instance;
//     } else {
//       // Functional component or React element
//       // Handle functional components differently, as you cannot instantiate them
//       return <Placement config={config} level={level} />;
//     }
//   }
// }




class PlacementFactory {
  createPlacement(config, level) {
    const placementClass = placementTypeClassMap[config.type];
    if (!placementClass) {
      console.warn("NO TYPE FOUND", config.type);
    }
    // Generate a new instance with random ID
    const instance = new placementClass(config, level);
    instance.id = Math.floor(Math.random() * 9999999) + 1;
    return instance;
  }
}

export const placementFactory = new PlacementFactory();
