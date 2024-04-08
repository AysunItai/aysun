import { useEffect } from "react";
import { SPRITE_SHEET_SRC } from "./helpers/consts";
import RenderLevel from "./components/level-layout/RenderLevel";
import Game from "./Game";  
import { useRecoilState } from "recoil";
import { spriteSheetImageAtom } from "./atoms/spriteSheetImageAtom";
import soundsManager from "./classes/Sounds";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import CharacterCreation from "./CharacterCreation";
import ChooseClass from "./ChooseClass";
import { CharacterProvider } from "./store/CharacterContext";
import { BatsProvider } from './store/BatsContext';
soundsManager.init();

function App() {
  const [spriteSheetImage, setSpriteSheetImage] =
    useRecoilState(spriteSheetImageAtom);

  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    image.onload = () => {
      setSpriteSheetImage(image);
    };
  }, [setSpriteSheetImage]);

  if (!spriteSheetImage) {
    return null;
  }

  return (
    <BatsProvider>
     <CharacterProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/game" element={<RenderLevel />} />
        <Route path="/character-creation" element={<CharacterCreation />} />
        <Route path="/choose-class" element={<ChooseClass />} />
        
      </Routes>
    </Router>
    </CharacterProvider>
    </BatsProvider>
  );
}

export default App;
