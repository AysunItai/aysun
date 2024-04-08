import React from "react";
import { useEffect, useRef } from "react";
import { CELL_SIZE } from "../../helpers/consts";
import { useRecoilValue } from "recoil";
import { spriteSheetImageAtom } from "../../atoms/spriteSheetImageAtom";

function Sprite({ frameCoord, size = 16 }) {
  const spriteSheetImage = useRecoilValue(spriteSheetImageAtom);

  const canvasRef = useRef();
  useEffect(() => {
    /** @type {HTMLCanvasElement} */
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext("2d");

    //Clear out anything in the canvas tag
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    //Draw a graphic to the canvas tag
    const tileSheetX = Number(frameCoord.split("x")[0]);
    const tileSheetY = Number(frameCoord.split("x")[1]);

    ctx.drawImage(
      spriteSheetImage, // Image to pull from
      tileSheetX * CELL_SIZE, // Left X corner of frame
      tileSheetY * CELL_SIZE, // Top Y corner of frame
      size, //How much to crop from the sprite sheet (X)
      size, //How much to crop from the sprite sheet (Y)
      0, //Where to place this on canvas tag X (0)
      0, //Where to place this on canvas tag Y (0)
      size, //How large to scale it (X)
      size //How large to scale it (Y)
    );
  }, [spriteSheetImage, frameCoord, size]);

  return <canvas width={size} height={size} ref={canvasRef} />;
}

const MemoizedSprite = React.memo(Sprite);
export default MemoizedSprite;


// function Sprite({ frameCoord, size = 16, src }) {
//   const spriteSheetImage = useRecoilValue(spriteSheetImageAtom);
//   const canvasRef = useRef();

//   useEffect(() => {
//     const canvasEl = canvasRef.current;
//     const ctx = canvasEl.getContext("2d");
//     ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

//     // Load the specified sprite sheet image
//     const image = new Image();
//     image.src = src || spriteSheetImage; // Fallback to the Recoil atom value if src is not provided
//     image.onload = () => {
//       const tileSheetX = Number(frameCoord.split("x")[0]);
//       const tileSheetY = Number(frameCoord.split("x")[1]);
//       ctx.drawImage(image, tileSheetX * CELL_SIZE, tileSheetY * CELL_SIZE, size, size, 0, 0, size, size);
//     };
//   }, [spriteSheetImage, frameCoord, size, src]); // Include src in the dependency array

//   return <canvas width={size} height={size} ref={canvasRef} />;
// }


// const MemoizedSprite = React.memo(Sprite);
// export default MemoizedSprite;

