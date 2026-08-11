import "./index.css";

import imgCimaEsq from "./assets/cimaEsquerdo.png";
import imgCimaDir from "./assets/cimaDireito.png";
import imgBaixoEsq from "./assets/baixoEsquerdo.png";
import imgBaixoDir from "./assets/baixoDireito.png";
import imgLateralEsq from "./assets/lateralEsquerdo.png";
import imgLateralDir from "./assets/lateralDireito.png";

import Header from "./components/Header.jsx";
import LinkCard from "./components/LinkCard.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6b0202] to-black flex justify-center overflow-hidden">
      <div className="relative w-full max-w-md min-h-screen flex flex-col items-center">
        <img
          src={imgCimaEsq}
          alt="Canto"
          className="absolute top-0 left-0 w-16 pointer-events-none"
        />
        <img
          src={imgCimaDir}
          alt="Canto"
          className="absolute top-0 right-0 w-16 pointer-events-none"
        />

        <img
          src={imgLateralEsq}
          alt="Lateral"
          className="absolute top-1/2 -translate-y-1/2 left-0 w-4 pointer-events-none"
        />
        <img
          src={imgLateralDir}
          alt="Lateral"
          className="absolute top-1/2 -translate-y-1/2 right-0 w-4 pointer-events-none"
        />

        <img
          src={imgBaixoEsq}
          alt="Canto"
          className="absolute bottom-0 left-0 w-16 pointer-events-none"
        />
        <img
          src={imgBaixoDir}
          alt="Canto"
          className="absolute bottom-0 right-0 w-16 pointer-events-none"
        />

        <div className="relative z-10 w-full flex flex-col items-center pt-8 px-8 pb-16">
          <Header />
          <LinkCard />
        </div>
      </div>
    </div>
  );
}
export default App;
