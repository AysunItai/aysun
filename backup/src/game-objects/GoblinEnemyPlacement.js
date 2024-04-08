import { RoamingEnemyPlacement } from "./RoamingEnemyPlacement";
import { DIRECTION_LEFT, DIRECTION_RIGHT } from "../helpers/consts";
import { TILES } from "../helpers/tiles";
import GoblinEnemyBody from "../components/object-graphics/GoblinEnemyBody";
import CharacterStatus from "../CharacterStatus";


export class GoblinEnemyPlacement  extends RoamingEnemyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.tickBetweenMovesInterval = 20;
    this.ticksUntilNextMove = this.tickBetweenMovesInterval;
    this.turnsAroundAtWater = true;
    this.interactsWithGround = true;
    this.hp = 20;
    this.hero = this.level.heroRef;
    this.currentFrameRight = 1; // Initialize current frame for right-facing direction
    this.currentFrameLeft = 1; // Initialize current frame for left-facing direction

    // Bind methods if necessary
    // this.onClick = this.onClick.bind(this); // Not needed anymore if using an arrow function
  }

  takesDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      // Handle death logic here if needed
    }
  }

  onClick = () => {
    const hero = this.level.heroRef;
    const distance = Math.sqrt((hero.x - this.x) ** 2 + (hero.y - this.y) ** 2) * 32;
    if (distance <= 150) {
      // Calculate damage based on hero's strength
      const damage = this.hero.strength; // Access hero's strength from this.hero
      this.takesDamage(damage);
      console.log(`Bat ${this.id} took damage of ${damage}, remaining HP: ${this.hp}`);
    }
  }

  updateAnimationFrames() {
    if (this.spriteFacingDirection === DIRECTION_RIGHT) {
      // Increment current frame for right-facing direction
      switch (this.currentFrameRight) {
        case 1:
          this.currentFrameRight = 2;
          break;
        case 2:
          this.currentFrameRight = 3;
          break;
        case 3:
          this.currentFrameRight = 1;
          break;
        default:
          break;
      }
    } else {
      // Increment current frame for left-facing direction
      switch (this.currentFrameLeft) {
        case 1:
          this.currentFrameLeft = 2;
          break;
        case 2:
          this.currentFrameLeft = 3;
          break;
        case 3:
          this.currentFrameLeft = 1;
          break;
        default:
          break;
      }
    }
  }

  tickAttemptAiMove() {
    this.checkForOverlapWithHero();

    if (this.ticksUntilNextMove > 0) {
      this.ticksUntilNextMove -= 1;
      return;
    }
    this.internalMoveRequested(this.movingPixelDirection);
    this.updateAnimationFrames(); // Update animation frames after movement
  }

  renderComponent() {
    // Determine frameCoord based on the current frame and direction
    let frameCoord;
    if (this.spriteFacingDirection === DIRECTION_LEFT) {
      switch (this.currentFrameLeft) {
        case 1:
          frameCoord = TILES.GOBLIN_MOVE_LEFT_1;
          break;
        case 2:
          frameCoord = TILES.GOBLIN_MOVE_LEFT_2;
          break;
        case 3:
          frameCoord = TILES.GOBLIN_MOVE_LEFT_3;
          break;
        default:
          break;
      }
    } else {
      switch (this.currentFrameRight) {
        case 1:
          frameCoord = TILES.GOBLIN_MOVE_RIGHT_1;
          break;
        case 2:
          frameCoord = TILES.GOBLIN_MOVE_RIGHT_2;
          break;
        case 3:
          frameCoord = TILES.GOBLIN_MOVE_RIGHT_3;
          break;
        default:
          break;
      }
    }

    return <GoblinEnemyBody frameCoord={frameCoord} showShadow={true} hp={this.hp} onAttack={this.onClick.bind(this)} />;
  }
}

