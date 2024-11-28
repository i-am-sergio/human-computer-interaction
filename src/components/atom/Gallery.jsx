import React, { useState } from "react";
import { AnimationComponent } from "./AnimationComponent"; // Asegúrate de importar el AnimationComponent
import { FaTimes } from "react-icons/fa"; // Para el icono de cierre
import { motion } from "framer-motion"; // Importa motion de framer-motion

export const Gallery = ({ photos }) => {
  const [zoomedId, setZoomedId] = useState(null); // Controla qué imagen está ampliada

  const handleZoom = (id) => {
    setZoomedId(id); // Amplía la imagen seleccionada
  };

  const handleClose = (e) => {
    e.stopPropagation(); // Evita que el evento se propague al contenedor padre
    setZoomedId(null); // Cierra la imagen ampliada
  };

  return (
    <div className="relative">
      {/* Fondo oscuro que se activa cuando hay una imagen con zoom */}
      {zoomedId && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-85"
          onClick={handleClose} // Cierra la imagen si se hace clic en el fondo oscuro
          style={{ zIndex: 40 }}
        ></div>
      )}
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo) => (
          <AnimationComponent
            key={photo.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.1 * photo.id, duration: 0.6 },
              },
            }}
          >
            <div
              className="relative overflow-hidden rounded-lg shadow-lg group transition-transform duration-300 cursor-pointer"
              onClick={() => handleZoom(photo.id)}
              style={
                zoomedId === photo.id
                  ? {
                      position: "fixed",
                      top: "50%",
                      left: "50%",
                      transformOrigin: "center",
                      transform: "translate(-50%, -50%) scale(2)",
                      zIndex: 50,
                    }
                  : {}
              }
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full h-64 object-cover transition-transform duration-300 ${
                  zoomedId ? "" : "group-hover:scale-105" // Desactiva el zoom al hacer hover si la imagen está en zoom
                }`}
              />
              {/* Ajusta el div para que se ponga encima de la imagen de manera flotante a lado izq superior */}
              <div
                className="absolute text-center top-1 left-1 bg-black bg-opacity-60 text-white w-8 h-8 rounded-full
                flex justify-center items-center text-xs font-bold"
              >
                {photo.id}
              </div>
              {zoomedId === photo.id && (
                <motion.button
                  onClick={handleClose}
                  className="absolute top-1 right-1 bg-black bg-opacity-60 text-white w-8 h-8 rounded-full p-2 flex justify-center items-center"
                  style={{ zIndex: 60 }}
                  whileHover={{ scale: 1.2 }} // Animación de aumento al pasar el mouse
                  whileTap={{ scale: 0.9 }} // Animación al hacer click
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes size={15} />
                </motion.button>
              )}
            </div>
          </AnimationComponent>
        ))}
      </div>
    </div>
  );
};
