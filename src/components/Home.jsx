import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { styles } from "../styles";
import Window from "./Window";
import "./Home.css";

import Works from "./Works";
import Nosotros from "./Nosotros"; // Importa el componente Nosotros
import Videojuego from "./Videojuego"; // Importa el componente Videojuego

function Home() {
  const [activeWindow, setActiveWindow] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null); // Para gestionar qué componente mostrar

  const handleOpenWindow = (section) => {
    setActiveWindow(section);
    switch (section) {
      case "Nosotros":
        setActiveComponent(<Nosotros />);
        break;
      case "Videojuego":
        setActiveComponent(<Videojuego />);
        break;
      case "Proyecto Final":
        setActiveComponent(<Works />);
        break;
      default:
        setActiveComponent(<Works />);
        break;
    }
  };

  const handleCloseWindow = () => {
    setActiveWindow(null);
    setActiveComponent(null); // Resetear el componente cuando se cierra la ventana
  };

  const sections = ["Nosotros", "Videojuego", "Proyecto Final"];

  return (
    <div className="home relative">
      {/* Título central (Círculo) */}
      <h1
        className={`
          ${styles.heroHeadText} 
          motion-title 
          absolute 
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          bg-[#282c34]
          w-64 h-64 
          flex flex-col items-center justify-center 
          rounded-full border-4 border-[#282c34]
          text-center
          p-4
          z-10
        `}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#915EFF] text-2xl leading-tight motion-title"
        >
          Interacción
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white text-2xl leading-tight motion-title"
        >
          Humano
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-2xl leading-tight motion-title"
        >
          Computador
        </motion.div>
      </h1>

      {/* Botones de sección */}
      <div className="sections grid grid-rows-2 grid-cols-2 gap-4 mx-auto z-0">
        {/* Primera fila: sección que ocupa todo el ancho */}
        <motion.button
          key={sections[0]}
          className="motion-subtitle bg-slate-400 text-black px-48 py-8 text-2xl col-span-2"
          onClick={() => handleOpenWindow(sections[0])}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#8da0c1",
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          {sections[0]}
        </motion.button>

        {/* Segunda fila: dos secciones lado a lado */}
        {sections.slice(1).map((section, index) => (
          <motion.button
            key={section}
            className="motion-subtitle bg-slate-400 text-black px-48 py-32 text-xl"
            onClick={() => handleOpenWindow(section)}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#8da0c1",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {section}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeWindow && (
          <Window section={activeWindow} onClose={handleCloseWindow}>
            {/* Aquí pasamos el componente correspondiente como children */}
            {activeComponent}
          </Window>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
