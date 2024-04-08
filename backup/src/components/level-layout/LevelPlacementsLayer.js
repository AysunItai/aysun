import React from 'react';
import MonsterContainer from './MonsterContainer';
import { PLACEMENT_TYPE_BAT } from '../../helpers/consts';

export default function LevelPlacementsLayer({ level }) {
  return level.placements
    .filter(placement => !placement.hasBeenCollected)
    .map(placement => {
      const [x, y] = placement.displayXY();
      const style = {
        position: "absolute",
        transform: `translate3d(${x}px, ${y}px, 0)`,
        zIndex: placement.zIndex(),
      };

      // Render MonsterContainer directly for bats
      if (placement.type === PLACEMENT_TYPE_BAT) {
        return (
          <MonsterContainer 
            key={placement.id} 
            bat={placement} 
            style={style}
          />
        );
      }

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
