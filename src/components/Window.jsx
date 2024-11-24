import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export const Window = ({ section, onClose, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-70 flex justify-center items-center z-[1000]">
      {/* Usamos framer-motion para la animación de la ventana */}
      <motion.div
        className="dark:bg-[#111111] rounded-xl shadow-lg w-[98%] sm:w-[96%] md:w-[96%] lg:w-[96%] xl:w-[98%] h-[98%] sm:h-[96%] md:h-[96%] lg:h-[96%] flex flex-col"
        initial={{ scale: 0.5, opacity: 0, y: -50, backgroundColor: "#232323" }} // Inicia con un color de fondo animable
        animate={{ scale: 1, opacity: 1, y: 0, backgroundColor: "#111111" }} // Cambia a un color animable
        exit={{ scale: 0.5, opacity: 0, y: 50, backgroundColor: "#232323" }} // Vuelve al color inicial al salir
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Header de la ventana */}
        <div className="flex justify-between items-center bg-[#232323] text-gray-100 px-6 py-2 rounded-t-xl">
          <span className="text-lg font-sourgummy">{section}</span>
          <button
            className="bg-[#fff] text-black py-2 px-3 rounded-xl hover:bg-transparent hover:text-[#0aff9d] border-2 border-transparent hover:scale-105 hover:border-[#0aff9d] transition-all"
            onClick={onClose}
          >
            <IoMdClose />
          </button>
        </div>

        {/* Contenido de la ventana */}
        <div className="flex-grow overflow-auto h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

