import React, { createContext, useReducer, useContext } from 'react';

const CharacterContext = createContext();

const calculateHealth = (endurance, strength) => (endurance + strength) / 2;
const calculateStamina = (endurance) => endurance;
const calculateMana = (magic) => magic;

const expNeededPerLevel = {
    2: 100,
    3: 200,
    4: 400,
    5: 800,
    6: 1600,
    7: 3200,
    8: 6400,
    9: 12800,
    10: 25600
};

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
        case 'UPDATE_EXP':
            const newState = { ...state, exp: state.exp + action.value }; // Update character's exp
            // Check for level up
            if (newState.level < 10 && newState.exp >= expNeededPerLevel[newState.level + 1]) {
                console.log("Leveled up");
                newState.level++; // Increment the level
                // Other level up logic can be added here
            }
            return newState;
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
    health: 0, // Initialized based on default stats
    stamina: 0,
    mana: 0,
    exp: 0,
    level: 1, // Initialize character's level
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
