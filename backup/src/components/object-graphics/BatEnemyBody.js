import React, { useState } from "react";
import Sprite from "./Sprite";
import styles from "./BatEnemyBody.module.css";
import { TILES } from "../../helpers/tiles";

export default function BatEnemyBody({ frameCoord, yTranslate, hp, onAttack }) {
    const [showGoldDrop, setShowGoldDrop] = useState(false);

    const handleClick = (event) => {
        event.stopPropagation();
        onAttack();
        setShowGoldDrop(true);
        setTimeout(() => setShowGoldDrop(false), 1000);
    };

    return (
        <div className={styles.batEnemy} onClick={handleClick}>
            <div
                className={styles.batEnemyBody}
                style={{
                    transform: `translateY(${yTranslate}px)`,
                }}
            >
                <p className={styles.hpNumber}>{hp}</p>
                <Sprite frameCoord={frameCoord} size={36} />
                {showGoldDrop && <div className={styles.goldDrop}>💰</div>}
            </div>
        </div>
    );
}
