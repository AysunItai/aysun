import React, { useState } from 'react';

function TradeDialog({ onClose, playerInventory, goblinInventory, onTrade }) {
  // State to manage selected items for trading
  const [selectedPlayerItems, setSelectedPlayerItems] = useState([]);
  const [selectedGoblinItems, setSelectedGoblinItems] = useState([]);

  // Handle selecting items from player inventory for trade
  const selectPlayerItem = (item) => {
    setSelectedPlayerItems([...selectedPlayerItems, item]);
  };

  // Handle selecting items from goblin inventory for trade
  const selectGoblinItem = (item) => {
    setSelectedGoblinItems([...selectedGoblinItems, item]);
  };

  // Execute the trade
  const executeTrade = () => {
    onTrade(selectedPlayerItems, selectedGoblinItems);
    onClose(); 
  };

  return (
    <div className="trade-dialog">
      <h2>Trade with Goblin</h2>
      <div className="inventories">
        <div className="player-inventory">
          <h3>Your Items</h3>
          {/* {playerInventory.map((item) => (
            <div key={item.id} onClick={() => selectPlayerItem(item)}>
              {item.name}
            </div>
          ))} */}
        </div>
        <div className="goblin-inventory">
          <h3>Goblin's Items</h3>
          {/* {goblinInventory.map((item) => (
            <div key={item.id} onClick={() => selectGoblinItem(item)}>
              {item.name}
            </div>
          ))} */}
        </div>
      </div>
      <div className="actions">
        <button onClick={executeTrade}>Trade</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default TradeDialog;
