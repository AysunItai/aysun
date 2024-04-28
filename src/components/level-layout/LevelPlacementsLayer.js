import React, { useContext, useEffect } from 'react';
import { useCharacterContext } from '../../store/CharacterContext';


export default function LevelPlacementsLayer({ level }) {
  const { state: characterState } = useCharacterContext();
   useEffect(() => {
    if (level.placements.length > 0 ) {
      level.placements[0].updateCharacterProperties(characterState);
    }
   
  }, [characterState, level.placements]);

  
  return level.placements
    .filter(placement => !placement.hasBeenCollected)
    .map(placement => {
      const [x, y] = placement.displayXY();
      const style = {
        position: "absolute",
        transform: `translate3d(${x}px, ${y}px, 0)`,
        zIndex: placement.zIndex(),
      };

     

      // For other types of placements, continue rendering as before
      return (
        <div
          key={placement.id}
          style={style}
          onClick={() => {
            if (!level.enableEditing || !placement.canBeDeleted()) {
              return;
            }
            level.deletePlacement(placement);
          }}
        >
          {placement.renderComponent()}
        </div>
      );
    });
}
