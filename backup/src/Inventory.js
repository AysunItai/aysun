import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './css/Inventory.module.css';
import sword from './img/StarterSword.png';
import staff from './img/StarterStaff.png';
import dagger from './img/StarterDagger.png';
import Thief from './img/Thief.jpg';
import Fighter from './img/Fighter.jpg';
import MagicUser from './img/MagicUser.jpg';
import helmet from './img/helmet.png';
import feet from './img/feet.png';
import hands from './img/hands.png';
import legs from './img/legs.png';
import arms from './img/arms.png';
import ring from './img/ring.png';
import { ItemTypes } from './constants';
import { useCharacterContext } from './store/CharacterContext';

const EquipmentSlot = ({ slot, onRemoveItem }) => {
  const [, drag] = useDrag(() => ({
    type: slot.type,
    item: { id: slot.name, type: slot.type, image: slot.item.image },
    end: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        onRemoveItem(slot.name); // Remove the item from the slot when it is dropped
      }
    },
  }));

  return (
    <div ref={drag}>
      {slot.item && <img src={slot.item.image} alt={slot.item.name} />}
    </div>
  );
};

const GeneralDropArea = ({ onItemDropped, droppedItems }) => {
  const [, drop] = useDrop({
    accept: Object.values(ItemTypes),
    drop: (item, monitor) => {
      onItemDropped(item);
    },
  });

  return (
    <div ref={drop} className={styles.generalDropAreaWrapper}>
      <h2 className={styles.equipmentTitle}>Backpack</h2>
      <div className={styles.generalDropArea}>
        {droppedItems.map((item, index) => (
          <img key={index} src={item.image} alt={item.name} style={{ width: '50px', height: '50px', margin: '5px' }} />
        ))}
      </div>
    </div>
  );
};

const Inventory = ({ isOpen, onClose }) => {
  const { state: character } = useCharacterContext();
  const [droppedItems, setDroppedItems] = useState([]);
  const [equipmentSlots, setEquipmentSlots] = useState([
    { name: 'helmet', item: { name: 'helmet', image: helmet }, type: 'helmet' },
    { name: 'feet', item: { name: 'feet', image: feet }, type: 'feet' },
    { name: 'hands', item: { name: 'hands', image: hands }, type: 'hands' },
    { name: 'legs', item: { name: 'legs', image: legs }, type: 'legs' },
    { name: 'arms', item: { name: 'arms', image: arms }, type: 'arms' },
    { name: 'ring', item: { name: 'ring', image: ring }, type: 'ring' },
  ]);

  const handleItemDropped = (item) => {
    setDroppedItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItemFromSlot = (slotName) => {
    setEquipmentSlots((slots) =>
      slots.map((slot) => {
        if (slot.name === slotName) {
          return { ...slot, item: null }; // Remove the item from the slot
        }
        return slot;
      })
    );
  };

  const getCharacterOwnImage = (selectedClass) => {
    switch (selectedClass) {
      case 'Fighter':
        return Fighter;
      case 'Magic User':
        return MagicUser;
      case 'Thief':
        return Thief;
      default:
        return null;
    }
  };

  const getWeaponImage = (selectedClass) => {
    switch (selectedClass) {
      case 'Fighter':
        return sword;
      case 'Magic User':
        return staff;
      case 'Thief':
        return dagger;
      default:
        return null;
    }
  };
  const characterOwnImage = getCharacterOwnImage(character.selectedClass);
  const commonWeapon = getWeaponImage(character.selectedClass);

  if (!isOpen) {
    return null;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.modalOverlay} onClick={onClose}>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
        <div className={styles.inventoryWrapper} onClick={(e) => e.stopPropagation()}>
          <div className={styles.equipmentSection}>
            <h2 className={styles.equipmentTitle}>Equipments</h2>
            <div className={styles.equipmentGrid}>
              {equipmentSlots.map((slot) => (
                <EquipmentSlot key={slot.name} slot={slot} onRemoveItem={handleRemoveItemFromSlot} />
              ))}
            </div>
            <div className={styles.commonWeaponSlot}>
              <span>Common Weapon</span>
              <img src={commonWeapon} alt="Common Weapon" />
            </div>
          </div>
          <GeneralDropArea onItemDropped={handleItemDropped} droppedItems={droppedItems} />
          <div className={styles.characterAndWeaponWrapper}>
            <img src={characterOwnImage} alt={character.selectedClass} />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Inventory;
