// goblinsContext.js
import React, { createContext, useContext, useState } from 'react';

const GoblinsContext = createContext();

export const useGoblins = () => useContext(GoblinsContext);

export const GoblinsProvider = ({ children , initialGoblins }) => {
  const [goblins, setgoblins] = useState(initialGoblins || []);

  const updateGoblinHealth = (goblinId, healthChange) => {
    setGoblins(goblins =>
      goblins.map(goblin =>
        goblin.id === goblinId ? { ...goblin, hp: goblin.hp + healthChange } : goblin
      )
    );
  };

  return (
    <GoblinsContext.Provider value={{ goblins, updateGoblinHealth }}>
      {children}
    </GoblinsContext.Provider>
  );
};
