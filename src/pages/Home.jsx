import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Window from '../components/Window';
import "./Home.css"

import imgSergio from "../assets/1.jpeg";
import imgBraulio from "../assets/2.jpeg";
import imgNelzon from "../assets/Nelzon.jpg";

import Works from '../components/Works';
import Nosotros from '../components/Nosotros';  // Importa el componente Nosotros
import Videojuego from '../components/Videojuego';  // Importa el componente Videojuego
import Navbar from '../components/Navbar';
import Content from '../components/Content';


const Home = () => {

  const [activeWindow, setActiveWindow] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);  // Para gestionar qué componente mostrar

  const handleOpenWindow = (section) => {
    setActiveWindow(section);
    switch (section) {
      case 'Videojuego':
        setActiveComponent(
          <div className="flex h-[96%] gap-8">
            {/* Navbar en el lado izquierdo con 20% de ancho */}
            <div className="w-1/5 bg-transparent">
              <Navbar />
            </div>

            {/* Contenido en el lado derecho con el 80% restante */}
            <div className="w-4/5 bg-white h-[96%] rounded-lg overflow-auto">
              <Content />
            </div>
          </div>
        );
        break;
      case 'Proyecto Final':
        setActiveComponent(<Works />);
        break;
      case 'Nosotros':
        setActiveComponent(<Nosotros />);
        break;
      default:
        setActiveComponent(<Works />);
        break;
    }
  };

  const handleCloseWindow = () => {
    setActiveWindow(null);
    setActiveComponent(null);  // Resetear el componente cuando se cierra la ventana
  };

  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center rounded-lg p-6 dark:bg-slate-900"
    >
      <div className="grid h-full w-full grid-cols-3 grid-rows-6 gap-4">
        {/* Primer div: aparece desde arriba */}
        <motion.div
          className="col-span-2 row-span-3 rounded-3xl bg-orange-400 flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >

          <h1
            className="main-title text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-900 font-bold text-2xl word"
            >
              Interacción
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white font-bold text-2xl word"
            >
              Humano
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white font-bold text-2xl word"
            >
              Computador
            </motion.div>
          </h1>

        </motion.div>

        {/* Segundo div: aparece desde la derecha */}
        <motion.div
          className="row-span-4 rounded-3xl bg-orange-400 flex flex-col items-center justify-center gap-4 p-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.1 }}
        >
          {/* Título principal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-900 text-4xl font-bold text-center font-sourgummy"
          >
            Nosotros
          </motion.div>

          {/* Lista de tarjetas */}
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            {/* Card: Sergio Mogollón */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-orange-200 text-slate-900 text-lg font-medium px-4 py-4 rounded-xl shadow-md w-full max-w-[90%] sm:max-w-[90%] flex items-center justify-between"
            >
              <div>
                <div className="font-bold">Sergio Mogollón</div>
                <div className="text-sm text-gray-600">Estudiante de Ciencia de la Computación</div>
              </div>
              <img
                src={imgSergio}
                alt="Sergio Mogollón"
                className="w-12 h-12 rounded-full"
              />
            </motion.div>

            {/* Card: Braulio Maldonado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-orange-200 text-slate-900 text-lg font-medium px-4 py-4 rounded-xl shadow-md w-full max-w-[90%] sm:max-w-[90%] flex items-center justify-between"
            >
              <div>
                <div className="font-bold">Braulio Maldonado</div>
                <div className="text-sm text-gray-600">Estudiante de Ciencia de la Computación</div>
              </div>
              <img
                src={imgBraulio}
                alt="Braulio Maldonado"
                className="w-12 h-12 rounded-full"
              />
            </motion.div>

            {/* Card: Nelzon Apaza */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-orange-200 text-slate-900 text-lg font-medium px-4 py-4 rounded-xl shadow-md w-full max-w-[90%] sm:max-w-[90%] flex items-center justify-between"
            >
              <div>
                <div className="font-bold">Nelzon Apaza</div>
                <div className="text-sm text-gray-600">Estudiante de Ciencia de la Computación</div>
              </div>
              <img
                src={imgNelzon}
                alt="Nelzon Apaza"
                className="w-12 h-12 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>



        {/* Tercer div: aparece desde abajo */}
        <motion.div
          className="row-span-3 rounded-3xl bg-orange-400 flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          onClick={() => handleOpenWindow('Videojuego')}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-900 text-4xl font-bold text-center font-sourgummy"
          >
            VideoJuego
          </motion.div>
        </motion.div>

        {/* Cuarto div: aparece desde abajo */}
        <motion.div
          className="row-span-3 rounded-3xl bg-orange-400 flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          onClick={() => handleOpenWindow('Proyecto Final')}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-900 text-4xl font-bold text-center font-sourgummy"
          >
            Proyecto Final
          </motion.div>
        </motion.div>

        {/* Quinto div: aparece desde la derecha */}
        <motion.div
          className="row-span-2 rounded-3xl bg-orange-400"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
        ></motion.div>

        <AnimatePresence>
          {activeWindow && (
            <Window section={activeWindow} onClose={handleCloseWindow}>
              {/* Aquí pasamos el componente correspondiente como children */}
              {activeComponent}
            </Window>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}

export default Home
