import React, { useState } from 'react';
import { AnimationComponent } from './AnimationComponent'; // Asegúrate de importar el AnimationComponent
import { FaTimes } from 'react-icons/fa'; // Para el icono de cierre

import p1 from '../../assets/Papelotes_parte1/Papelote1_part1.png';
import p2 from '../../assets/Papelotes_parte1/Papelote1_part2.png';
import p3 from '../../assets/Papelotes_parte1/Papelote1_part3.png';
import p4 from '../../assets/Papelotes_parte1/Papelote1_part4.png';

import p5 from '../../assets/Papelotes_parte2/Papelote2_part1.png';
import p6 from '../../assets/Papelotes_parte2/Papelote2_part2.png';
import p7 from '../../assets/Papelotes_parte2/Papelote2_part3.png';
import p8 from '../../assets/Papelotes_parte2/Papelote2_part4.png';

import p9 from '../../assets/Papelotes_parte3/Papelote3_part1.png';
import p10 from '../../assets/Papelotes_parte3/Papelote3_part2.png';
import p11 from '../../assets/Papelotes_parte3/Papelote3_part3.png';
import p12 from '../../assets/Papelotes_parte3/Papelote3_part4.png';

export const Gallery = () => {
  const [zoomedId, setZoomedId] = useState(null); // Controla qué imagen está ampliada

  const handleZoom = (id) => {
    setZoomedId(id); // Amplía la imagen seleccionada
  };

  const handleClose = (e) => {
    e.stopPropagation(); // Evita que el evento se propague al contenedor padre
    setZoomedId(null); // Cierra la imagen ampliada
  };

  const photos = [
    { id: 1, src: p1, alt: 'Papelote 1 Parte 1' },
    { id: 2, src: p2, alt: 'Papelote 1 Parte 2' },
    { id: 3, src: p3, alt: 'Papelote 1 Parte 3' },
    { id: 4, src: p4, alt: 'Papelote 1 Parte 4' },
    { id: 5, src: p5, alt: 'Papelote 2 Parte 1' },
    { id: 6, src: p6, alt: 'Papelote 2 Parte 2' },
    { id: 7, src: p7, alt: 'Papelote 2 Parte 3' },
    { id: 8, src: p8, alt: 'Papelote 2 Parte 4' },
    { id: 9, src: p9, alt: 'Papelote 3 Parte 1' },
    { id: 10, src: p10, alt: 'Papelote 3 Parte 2' },
    { id: 11, src: p11, alt: 'Papelote 3 Parte 3' },
    { id: 12, src: p12, alt: 'Papelote 3 Parte 4' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
      {photos.map((photo) => (
        <AnimationComponent
          key={photo.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.1 * photo.id, duration: 0.6 } },
          }}
        >
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group transition-transform duration-300 cursor-pointer"
            onClick={() => handleZoom(photo.id)}
            style={
              zoomedId === photo.id
                ? {
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transformOrigin: 'center',
                    transform: 'translate(-50%, -50%) scale(1.8)',
                    zIndex: 50,
                  }
                : {}
            }
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Ajusta el div para que se ponga encima de la imagen de manera flotante a lado izq superior */}
            <div
            // alinea verticalmente tambien
              className='absolute text-center top-1 left-1 bg-black bg-opacity-60 text-white w-8 h-8 rounded-full
              flex justify-center items-center text-xs font-bold
              ' // Ajusta el color de fondo y el tamaño del texto
            >
              {photo.id}
            </div>
            {zoomedId === photo.id && (
              <button
                onClick={handleClose}
                className="absolute top-1 right-1 bg-black bg-opacity-60 text-white w-8 h-8 rounded-full p-2 flex justify-center items-center"
                style={{ zIndex: 60 }}
              >
                <FaTimes size={15} />
              </button>
            )}
          </div>
        </AnimationComponent>
      ))}
    </div>
  );
};
