import './Window.css';
import Works from "./Works";
import { motion } from 'motion/react';
import { IoMdClose } from "react-icons/io";

function Window({ section, onClose, children }) {
  return (
    <div className="window-overlay">
      {/* Usamos framer-motion para la animación de la ventana */}
      <motion.div
        className="window flex flex-col py-2 min-w-[96%] min-h-[96%]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="window-header">
          <span className='window-title'>{section}</span>
          <button className='close-button' onClick={onClose}><IoMdClose /></button>
        </div>
        <div className="window-content">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default Window;
