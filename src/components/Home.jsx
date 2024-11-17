import { useState } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import Window from './Window';
import './Home.css';

function Home() {
  const [activeWindow, setActiveWindow] = useState(null);

  const handleOpenWindow = (section) => {
    setActiveWindow(section);
  };

  const handleCloseWindow = () => {
    setActiveWindow(null);
  };

  const sections = ['Videojuego', 'Proyecto Final', 'Entregables Semanales'];

  return (
    <div className="home">
      {/* <h1>Interacción Humano-Computador</h1> */}

      <h1 className={`${styles.heroHeadText} text-white px-16 mx-32 motion-title`}>
        Interaccion{" "}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#915EFF]"
        >
          Humano Computador
        </motion.span>
      </h1>

      <div className="sections my-12">
        {sections.map((section) => (
          <button key={section} className='motion-subtitle bg-slate-400 text-black px-16 py-8 text-2xl w-[280px]' onClick={() => handleOpenWindow(section)}>
            {section}
          </button>
        ))}
      </div>
      {activeWindow && (
        <Window section={activeWindow} onClose={handleCloseWindow} />
      )}
    </div>
  );
}

export default Home;
