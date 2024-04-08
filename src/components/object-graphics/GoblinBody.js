import React, { useState } from 'react';
import Sprite from "./Sprite";
import styles from "./Goblin.module.css";
import TradeDialog from './TradeDialog'; // Assuming you have this component

export default function GoblinBody({ frameCoord }) {
  // State to control the visibility of the trade dialog
  const [isTradeDialogOpen, setTradeDialogOpen] = useState(false);

  // Function to toggle the trade dialog visibility
  const toggleTradeDialog = (event) => {
   
    event.stopPropagation();
    setTradeDialogOpen(!isTradeDialogOpen);
    console.log("Trade dialog toggled");
  };

  return (
    <div className={styles.goblin} onClick={toggleTradeDialog}>
      <div className={styles.goblinBody}>
        <Sprite frameCoord={frameCoord} size={32} />
      </div>
      {/* Assuming TradeDialog is a modal or similar component */}
      {isTradeDialogOpen && <TradeDialog onClose={toggleTradeDialog} />}
    </div>
  );
}
