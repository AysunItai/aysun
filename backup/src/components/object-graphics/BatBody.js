import React from 'react';
import BatSprite from './BatSprite';

import { useRecoilValue } from 'recoil';
import { batSpriteSheetImageAtom } from '../../atoms/batSpriteSheetImageAtom ';

export default function BatBody({ frameCoord, yTranslate }) {
   const batSpriteSheetImage = useRecoilValue(batSpriteSheetImageAtom);
   console.log('batSpriteSheetImage:', batSpriteSheetImage)
  return (
    <div style={{ transform: `translateY(${yTranslate}px)` }}>
      <BatSprite frameCoord={frameCoord} size={48} src={batSpriteSheetImage} /> {/* or src={batSpriteSheetImage} */}
    </div>
  );
}
