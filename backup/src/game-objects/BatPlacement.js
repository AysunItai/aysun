import Monster from "../Monster"; 
import { PLACEMENT_TYPE_BAT } from "../helpers/consts"; 

class BatPlacement {
    constructor(properties, level) {
        this.type = PLACEMENT_TYPE_BAT; 
        this.level = level;
        this.id = properties.id;
        this.x = properties.x;
        this.y = properties.y;
        this.hp = properties.hp || 3; 
    }

    displayXY() {
        return [this.x, this.y];
    }

    zIndex() {
        return 1; 
    }

    onClick() {
        
        const hero = this.level.heroRef;
        console.log(hero)
        console.log(this)
        const distance = Math.sqrt((hero.x - this.x) ** 2 + (hero.y - this.y) ** 2)*32;

       
        if (distance <= 150) {
            this.takesDamage(1);
            console.log(`Bat ${this.id} took damage, remaining HP: ${this.hp}`);
        }
    }
    setHealthUpdateCallback(callback) {
        this.healthUpdateCallback = callback;
    }
    takesDamage(amount) {
        this.hp -= amount;
        if (this.hp <= 0) {
            this.die();
        } else {
          console.log(`Bat ${this.id} took damage, remaining HP: ${this.hp}`);
            
            if (this.healthUpdateCallback) {
                this.healthUpdateCallback(this.hp);
            }
        }
    }

    die() {
        this.level.deletePlacement(this);
    }

    renderComponent() {
        
        return (
            <Monster
                key={this.id} 
                monster={{
                    id: this.id,
                    position: { x: this.x, y: this.y },
                    health: this.hp,
                }}
                onAttack={this.onClick.bind(this)} 
            />
        );
    }
}

export default BatPlacement;