import styles from "./TopHud.module.css";
import FlourCount from "./FlourCount";
import ClockCount from "./ClockCount";
import InventoryList from "./InventoryList";
import EditorDropdown from "./EditorDropdown";
import Inventory from "../../Inventory";
import CharacterStatus from "../../CharacterStatus";
import { useState } from "react";
export default function TopHud({ level }) {
  const [showInventory, setShowInventory] = useState(false);
  const [showCharacterStatus, setShowCharacterStatus] = useState(false);
  const handleInventoryButtonClick = () => {
    setShowInventory(!showInventory);
  };
  const handleCharacterStatusButtonClick = () => {
  setShowCharacterStatus(!showCharacterStatus);
};
  return (
    <div className={styles.topHud}>
      <div className={styles.topHudLeft}>
        <FlourCount level={level} />
        <ClockCount level={level} />
        <InventoryList level={level} />
      </div>
      <div className={styles.topHudRight}>
        <EditorDropdown level={level} />
        <button className={styles.inventoryButton} onClick={handleInventoryButtonClick}>
        Inventory
      </button>
      <button className={styles.characterStatusButton} onClick={handleCharacterStatusButtonClick}> {/* Add custom styling as needed */}
        Character Status
      </button>
      </div>
       {showInventory && <Inventory isOpen={showInventory} onClose={handleInventoryButtonClick} />}
    {showCharacterStatus && <CharacterStatus isOpen={showCharacterStatus} onClose={handleCharacterStatusButtonClick} />}
    </div>
  );
}
