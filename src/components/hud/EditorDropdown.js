import {
  PLACEMENT_TYPE_WALL,
  PLACEMENT_TYPE_FIRE,
  PLACEMENT_TYPE_ICE,
  PLACEMENT_TYPE_WATER,
  PLACEMENT_TYPE_SWITCH,
  PLACEMENT_TYPE_SWITCH_DOOR,
  PLACEMENT_TYPE_BAT_ENEMY,
  PLACEMENT_TYPE_GOBLIN_THIEF,
  PLACEMENT_TYPE_BERRY,
} from "../../helpers/consts";
import styles from "./EditorDropdown.module.css";

export default function EditorDropdown({ level }) {
  if (!level.enableEditing) {
    return null;
  }

  return (
    <div className={styles.dropdownContainer}>
      <select
        value={level.editModePlacementType}
        onChange={(event) => {
          level.setEditModePlacementType(event.target.value);
        }}
      >
        <option value={PLACEMENT_TYPE_WALL}>Wall</option>
        <option value={PLACEMENT_TYPE_FIRE}>Fire</option>
        <option value={PLACEMENT_TYPE_ICE}>Ice Tile</option>
        <option value={PLACEMENT_TYPE_WATER}>Water</option>
        <option value={PLACEMENT_TYPE_SWITCH}>Purple Switch</option>
        <option value={PLACEMENT_TYPE_GOBLIN_THIEF}>Goblin Enemy</option>
        <option value={PLACEMENT_TYPE_BAT_ENEMY}>Bat Enemy</option>
        <option value={PLACEMENT_TYPE_BERRY}>Berry Bush</option>
   


      </select>
      <button
        onClick={() => {
          level.copyPlacementsToClipboard();
        }}
      >
        Export
      </button>
    </div>
  );
}
