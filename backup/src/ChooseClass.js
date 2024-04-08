import React from 'react';
import FighterImage from './img/Fighter.jpg'
import MagicUserImage from './img/MagicUser.jpg';
import ThiefImage from './img/Thief.jpg';
import { useNavigate } from 'react-router-dom';
import styles from './css/ChooseClass.module.css'; 
import { useCharacterContext } from './store/CharacterContext'; 

const ChooseClass = () => {
  const navigate = useNavigate();
  const { dispatch } = useCharacterContext();

  const selectCharacter = (characterClass) => {
    // Dispatch an action to set the class
    dispatch({ type: 'SET_CLASS', payload: characterClass });
    navigate('/character-creation');
  };

  return (
    <div className={styles.container}>
      <h1>Choose Your Character</h1>
      <div className={styles.chooseClass}>
        <div className={styles.classOption} onClick={() => selectCharacter('Fighter')}>
          <img src={FighterImage} alt="Fighter" />
          <p>Fighter</p>
        </div>
        <div className={styles.classOption} onClick={() => selectCharacter('Magic User')}>
          <img src={MagicUserImage} alt="Magic User" />
          <p>Magic User</p>
        </div>
        <div className={styles.classOption} onClick={() => selectCharacter('Thief')}>
          <img src={ThiefImage} alt="Thief" />
          <p>Thief</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseClass;
