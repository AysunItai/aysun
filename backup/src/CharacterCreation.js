import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCharacterContext } from './store/CharacterContext'; // Adjust the path as necessary
import styles from './css/CharacterCreation.module.css';

const CharacterCreation = () => {
    const { state, dispatch } = useCharacterContext();
    const navigate = useNavigate();

    const updateStat = (stat, value) => {
        if ((state.points - value >= 0) && (state.points - value <= 100)) {
            dispatch({ type: 'UPDATE_STAT', stat, value });
            dispatch({ type: 'UPDATE_POINTS', value: -value }); 
        }
    };

    const confirmStats = () => {
       
        console.log({
            ...state,
           
        });
        navigate('/game'); 
    };

    return (
        <div className={styles.characterCreation}>
            <h1>Character Creation</h1>
            <p>Selected Character: {state.selectedClass}</p>
            <p>Available Points: {state.points}</p>
            <div className={styles.statsContainer}>
                {['strength', 'endurance', 'agility', 'magic'].map((stat) => (
                    <div key={stat} className={styles.stat}>
                        <label>{`${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${state[stat]}`}</label>
                        <button onClick={() => updateStat(stat, 5)}>+</button>
                        <button onClick={() => updateStat(stat, -5)}>-</button>
                    </div>
                ))}
            </div>
            <div className={styles.calculatedStats}>
                <p>Health: {state.health}</p>
                <p>Stamina: {state.stamina}</p>
                <p>Mana: {state.mana}</p>
            </div>
            <button onClick={confirmStats}>Confirm</button>
        </div>
    );
};

export default CharacterCreation;
