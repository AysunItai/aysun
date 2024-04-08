import React from 'react';
import { useCharacterContext } from './store/CharacterContext';
import styles from './css/CharacterStatus.module.css'; // Assuming you have the same directory structure

const CharacterStatus = ({ isOpen, onClose }) => {
  const { state: character } = useCharacterContext();

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <button className={styles.closeButton} onClick={onClose}>Close</button>
      <div className={styles.characterStatusWrapper} onClick={e => e.stopPropagation()}>
        <h2 className={styles.statusTitle}>Character Status</h2>
        <div className={styles.statusSection}>
          <p>Class: {character.selectedClass}</p>
          <p>Strength: {character.strength}</p>
          <p>Endurance: {character.endurance}</p>
          <p>Agility: {character.agility}</p>
          <p>Magic: {character.magic}</p>
          <p>Health: {character.health} (Placeholder)</p>
          <p>Stamina: {character.stamina} (Placeholder)</p>
          <p>Mana: {character.mana} (Placeholder)</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterStatus;
