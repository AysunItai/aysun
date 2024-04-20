import { RoamingEnemyPlacement } from "./RoamingEnemyPlacement";
import { PLACEMENT_TYPE_GOBLIN_THIEF, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, DIRECTION_DOWN } from "../helpers/consts";
import { TILES } from "../helpers/tiles";
import GoblinEnemyBody from "../components/object-graphics/GoblinEnemyBody";

export class GoblinThiefPlacement extends RoamingEnemyPlacement {
    constructor(properties, level) {
        super(properties, level);
        this.tickBetweenMovesInterval = 20;
        this.ticksUntilNextMove = this.tickBetweenMovesInterval;
        this.turnsAroundAtWater = true;
        this.interactsWithGround = true;
        this.hp = 20;
        this.gold = 5;
        this.exp = 5;
        this.currentFrameRight = 1; // Initialize current frame for right-facing direction
        this.currentFrameLeft = 1; // Initialize current frame for left-facing direction
        this.currentFrameUp = 1; // Initialize current frame for up direction
        this.currentFrameDown = 1; // Initialize current frame for down direction
        // Bind methods
        this.onClick = this.onClick.bind(this);
    }

    takesDamage(damage) {
        this.hp -= damage;
        if (this.hp <= 0) {
            // Handle death logic here if needed
        }
    }

    onClick() {
        // Inflict damage on click
        const damage = 5;
        this.takesDamage(damage);
        console.log(
            `Goblin ${this.id} took damage of ${damage}, remaining HP: ${this.hp}`
        );
    }

    updateAnimationFrames() {
        

        if (this.spriteFacingDirection === DIRECTION_RIGHT) {
            this.currentFrameRight = (this.currentFrameRight % 3) + 1;
        } else if (this.spriteFacingDirection === DIRECTION_LEFT) {
            this.currentFrameLeft = (this.currentFrameLeft % 3) + 1;
        } else if (this.spriteFacingDirection === DIRECTION_UP) {
            this.currentFrameUp = (this.currentFrameUp % 3) + 1;
        } else if (this.spriteFacingDirection === DIRECTION_DOWN) {
            this.currentFrameDown = (this.currentFrameDown % 3) + 1;
        }
    }

    tickAttemptAiMove() {
        // Check if HP is greater than 0 before allowing movement
        if (this.hp > 0) {
            this.checkForOverlapWithHero();

            if (this.ticksUntilNextMove > 0) {
                this.ticksUntilNextMove -= 1;
                return;
            }
            this.internalMoveRequested(this.movingPixelDirection);
            this.updateAnimationFrames(); // Update animation frames after movement
        }
    }
    updateFacingDirection() {
        switch (this.movingPixelDirection) {
            case DIRECTION_LEFT:
                this.spriteFacingDirection = DIRECTION_LEFT;
                break;
            case DIRECTION_RIGHT:
                this.spriteFacingDirection = DIRECTION_RIGHT;
                break;
            case DIRECTION_UP:
                this.spriteFacingDirection = DIRECTION_UP;
                break;
            case DIRECTION_DOWN:
                this.spriteFacingDirection = DIRECTION_DOWN;
                break;
            default:
                console.error(
                    'Invalid direction for movingPixelDirection: ',
                    this.movingPixelDirection
                );
                break;
        }
    }

    renderComponent() {
        let frameCoord;
        if (this.hp <= 0) {
            // If HP is zero or less, display the death sprite
            frameCoord = TILES.GOBLIN_ENEMY_DEAD;
        } else if (this.spriteFacingDirection === DIRECTION_LEFT) {
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
        } else if (this.spriteFacingDirection === DIRECTION_RIGHT) {
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
        } else if (this.spriteFacingDirection === DIRECTION_UP) {
            switch (this.currentFrameUp) {
                case 1:
                    frameCoord = TILES.GOBLIN_MOVE_UP_1;
                    break;
                case 2:
                    frameCoord = TILES.GOBLIN_MOVE_UP_2;
                    break;
                case 3:
                    frameCoord = TILES.GOBLIN_MOVE_UP_3;
                    break;
                default:
                    break;
            }
        } else if (this.spriteFacingDirection === DIRECTION_DOWN) {
            switch (this.currentFrameDown) {
                case 1:
                    frameCoord = TILES.GOBLIN_MOVE_DOWN_1;
                    break;
                case 2:
                    frameCoord = TILES.GOBLIN_MOVE_DOWN_2;
                    break;
                case 3:
                    frameCoord = TILES.GOBLIN_MOVE_DOWN_3;
                    break;
                default:
                    break;
            }
        }

        return (
            <GoblinEnemyBody
                frameCoord={frameCoord}
                showShadow={true}
                hp={this.hp}
                onClick={this.onClick}
            />
        );
    }
}
