import React, { useState } from 'react';
import { AnimationComponent } from './AnimationComponent'; // Asegúrate de importar el AnimationComponent

import p1 from '../../assets/Papelotes_parte1/Papelote1_part1.png'
import p2 from '../../assets/Papelotes_parte1/Papelote1_part2.png'
import p3 from '../../assets/Papelotes_parte1/Papelote1_part3.png'
import p4 from '../../assets/Papelotes_parte1/Papelote1_part4.png'

import p5 from '../../assets/Papelotes_parte2/Papelote2_part1.png'
import p6 from '../../assets/Papelotes_parte2/Papelote2_part2.png'
import p7 from '../../assets/Papelotes_parte2/Papelote2_part3.png'
import p8 from '../../assets/Papelotes_parte2/Papelote2_part4.png'

import p9 from '../../assets/Papelotes_parte3/Papelote3_part1.png'
import p10 from '../../assets/Papelotes_parte3/Papelote3_part2.png'
import p11 from '../../assets/Papelotes_parte3/Papelote3_part3.png'
import p12 from '../../assets/Papelotes_parte3/Papelote3_part4.png'


export const Gallery = () => {

  const [isZoomed, setIsZoomed] = useState(null); // Para controlar qué imagen está maximizada

  const handleZoom = (id) => {
    setIsZoomed(isZoomed === id ? null : id); // Alternar el zoom de la imagen
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
  ]

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
      {photos.map((photo) => (
        <AnimationComponent
          key={photo.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2 * photo.id, duration: 0.6 } },
          }}
        >
          <div
            className={`relative overflow-hidden rounded-lg shadow-lg group ${
              isZoomed === photo.id ? 'scale-110 z-10' : 'scale-100'
            } transition-transform duration-300`}
            onClick={() => handleZoom(photo.id)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </AnimationComponent>
      ))}
    </div>
  );
}