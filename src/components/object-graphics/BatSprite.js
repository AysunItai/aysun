import React, { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { CELL_SIZE } from '../../helpers/consts';
import  batSpriteSheetImage from './32bats.png';

function BatSprite({ frameCoord, size = 16 }) {
  // Use the bat sprite sheet specifically
  //const batSpriteSheetImage = useRecoilValue(batSpriteSheetImageAtom);

  const canvasRef = useRef();

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext('2d');

    // Clear out anything in the canvas tag
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    // Ensure the sprite sheet has been loaded
    if (batSpriteSheetImage) {
      const image = new Image();
      console.log(image)
      image.src = batSpriteSheetImage;
      image.onload = () => {
        // Draw a graphic to the canvas tag
        const tileSheetX = Number(frameCoord.split('x')[0]);
        const tileSheetY = Number(frameCoord.split('x')[1]);

        ctx.drawImage(
          image, // Image to pull from
          tileSheetX * CELL_SIZE, // Left X corner of frame
          tileSheetY * CELL_SIZE, // Top Y corner of frame
          size, // How much to crop from the sprite sheet (X)
          size, // How much to crop from the sprite sheet (Y)
          0, // Where to place this on canvas tag X (0)
          0, // Where to place this on canvas tag Y (0)
          size, // How large to scale it (X)
          size // How large to scale it (Y)
        );
      };
    }
  }, [batSpriteSheetImage, frameCoord, size]);

  return <canvas width={size} height={size} ref={canvasRef} />;
}

const MemoizedBatSprite = React.memo(BatSprite);
export default MemoizedBatSprite;
