import React from "react";
import { IoMdDocument } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion"; // Importamos framer-motion

import ideas from "../assets/1ideas.jpg";
import sketching from "../assets/1sketching.jpg";
import storyboarding from "../assets/2storyboard.jpg";
import maqueta from "../assets/3maqueta.jpg";
import prototipo5 from "../assets/5prototipo.png";
import prototipo6 from "../assets/6prototipo.png";

const sections = [
  {
    id: "creacion-idea",
    title: "Creación de la Idea",
    imgSrc: ideas,
    description: "Se generó la idea inicial de un juego de supervivencia en una isla tras un accidente de avión, donde el jugador debe sobrevivir hasta ser rescatado o encontrar una salida. Se definieron los desafíos que enfrentarían los jugadores en la isla, como la búsqueda de recursos para sobrevivir y la exploración del entorno."
  },
  {
    id: "sketching",
    title: "Sketching",
    imgSrc: sketching,
    description: `El sketching es una de las etapas más divertidas y creativas del diseño. Aquí, las ideas de la fase anterior se plasman en papel de manera rápida y libre,
    sin preocuparse demasiado por los detalles. Los bocetos sirven como una herramienta visual para explorar y definir más claramente las ideas.`,
  },
  {
    id: "storyboarding",
    title: "Storyboarding",
    imgSrc: storyboarding,
    description: `El storyboarding es una técnica utilizada para planificar visualmente cómo funcionará el producto. A través de un conjunto de imágenes secuenciales,
    se puede mostrar la interacción del usuario con el diseño en diferentes escenarios, y cómo el flujo de tareas se desarrolla de principio a fin.`,
  },
  {
    id: "prototipo-papel",
    title: "Prototipo de Papel",
    imgSrc: maqueta,
    description: `El prototipo de papel es una representación física de la interfaz del producto que se utiliza para obtener una retroalimentación temprana de los usuarios sin necesidad de programar o construir un prototipo digital.`,
  },
  {
    id: "primer-prototipo",
    title: "Primer Prototipo",
    imgSrc: prototipo5,
    description: `El primer prototipo es la versión inicial digital del producto. En esta fase, el diseño ya se ha formalizado y el prototipo sirve para explorar cómo interactúa el usuario con la interfaz en un entorno digital real.`,
  },
  {
    id: "segundo-prototipo",
    title: "Segundo Prototipo",
    imgSrc: prototipo6,
    description: `El segundo prototipo es una versión mejorada y más pulida del primer prototipo. En esta fase, se incorporan mejoras basadas en la retroalimentación obtenida del primer prototipo.`,
  },
];

export default function Content() {
  return (
    <div className="content-container p-8 flex-1 bg-white">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, x: -100 }} // Comienza con opacidad 0 y desplazamiento hacia la izquierda
          animate={{ opacity: 1, x: 0 }} // Finaliza con opacidad 1 y sin desplazamiento
          exit={{ opacity: 0, x: 100 }} // Si el componente sale, se desplaza hacia la derecha
					// Duración de la animación a cada uno aumenta 0.1 de delay
          transition={{ duration: 0.6}}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-[60rem] dark:border-gray-700 dark:bg-gray-800 py-4 my-10"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={section.imgSrc}
            alt={section.title}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {section.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {section.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus:ring-blue-800"
              >
                Video
                <FaPlay className="mx-2" />
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Documento
                <IoMdDocument className="mx-2" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
