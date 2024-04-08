import React, { createContext, useReducer, useContext } from 'react';

const CharacterContext = createContext();

const calculateHealth = (endurance, strength) => (endurance + strength) / 2;
const calculateStamina = (endurance) => endurance;
const calculateMana = (magic) => magic;

const characterReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CLASS':
            return { ...state, selectedClass: action.payload };
        case 'UPDATE_STAT':
            const updatedStats = { ...state, [action.stat]: state[action.stat] + action.value };
            // Recalculate health, stamina, and mana based on updated stats
            return {
                ...updatedStats,
                health: calculateHealth(updatedStats.endurance, updatedStats.strength),
                stamina: calculateStamina(updatedStats.endurance),
                mana: calculateMana(updatedStats.magic)
            };
        case 'UPDATE_POINTS':
            return { ...state, points: state.points + action.value };
        default:
            return state;
    }
};

const initialState = {
    selectedClass: '',
    strength: 0,
    endurance: 0,
    agility: 0,
    magic: 0,
    health: 0, 
    stamina: 0,
    mana: 0,
    points: 100
};

export const CharacterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(characterReducer, initialState);

    return (
        <CharacterContext.Provider value={{ state, dispatch }}>
            {children}
        </CharacterContext.Provider>
    );
}


export const useCharacterContext = () => useContext(CharacterContext);
