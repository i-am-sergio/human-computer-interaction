import React, { useState } from 'react';
import PDFViewer from "./PDFViewer";
import { motion } from "framer-motion";
import Window from './Window';  // Asegúrate de importar el componente Window

const samplePDF = '/human-computer-interaction/Proyecto_IHC_Etapa1.pdf';

const Videojuego = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);  // Estado para controlar la visibilidad de la ventana

  // Función para abrir la ventana
  const handleOpenWindow = () => {
    setIsWindowOpen(true);
  };

  // Función para cerrar la ventana
  const handleCloseWindow = () => {
    setIsWindowOpen(false);
  };

  return (
    <div>
      {/* Botón para abrir la ventana */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleOpenWindow}
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
      >
        Ver Documento
      </motion.button>

      {/* Condición para renderizar la ventana con el PDFViewer */}
      {isWindowOpen && (
        <Window section="Ver Documento" onClose={handleCloseWindow}>
          <PDFViewer file={samplePDF} /> {/* Mostramos el PDFViewer dentro de la ventana */}
        </Window>
      )}
    </div>
  );
};

export default Videojuego;
