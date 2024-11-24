import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const Window = ({ section, onClose, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-[1000]">
      {/* Usamos framer-motion para la animación de la ventana */}
      <motion.div
        className="dark:bg-slate-900 rounded-xl shadow-lg w-[98%] h-[98%] flex flex-col"
        initial={{ scale: 0.5, opacity: 0, y: -50 }} // Inicio con un tamaño pequeño y desplazada
        animate={{ scale: 1, opacity: 1, y: 0 }} // Escala normal y sin desplazamiento
        exit={{ scale: 0.5, opacity: 0, y: 50 }} // Al cerrar, minimiza y se desplaza hacia abajo
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Header de la ventana */}
        <div className="flex justify-between items-center bg-slate-600 text-white p-2 rounded-t-xl">
          <span className="text-lg font-sourgummy">{section}</span>
          <button
            className="bg-[#fff] text-black py-2 px-4 rounded-lg hover:bg-[#c53030] transition-all"
            onClick={onClose}
          >
            <IoMdClose />
          </button>
        </div>

        {/* Contenido de la ventana */}
        <div className="flex-grow p-5 h-full">{children}</div>
      </motion.div>
    </div>
  );
};

export default Window;
