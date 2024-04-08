// BatsContext.js
import React, { createContext, useContext, useState } from 'react';

const BatsContext = createContext();

export const useBats = () => useContext(BatsContext);

export const BatsProvider = ({ children , initialBats }) => {
  const [bats, setBats] = useState(initialBats || []);

  const updateBatHealth = (batId, healthChange) => {
    setBats(bats =>
      bats.map(bat =>
        bat.id === batId ? { ...bat, hp: bat.hp + healthChange } : bat
      )
    );
  };

  return (
    <BatsContext.Provider value={{ bats, updateBatHealth }}>
      {children}
    </BatsContext.Provider>
  );
};
