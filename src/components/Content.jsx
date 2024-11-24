import { useState } from "react";
import { IoMdDocument } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

import PDFViewer from "./PDFViewer";
import YouTubeViewer from "./YouTubeViewer";

import ideas from "../assets/1ideas.jpg";
import sketching from "../assets/1sketching.jpg";
import storyboarding from "../assets/2storyboard.jpg";
import maqueta from "../assets/3maqueta.jpg";
import prototipo5 from "../assets/5prototipo.png";
import prototipo6 from "../assets/6prototipo.png";
import Window from "./Window";

// Datos de las secciones
const sections = [
  {
    number: 1,
    id: "creacion-idea",
    title: "Viabilidad y Creación de la Idea",
    imgSrc: ideas,
    description: "Se generó la idea inicial de un juego de supervivencia en una isla tras un accidente de avión, donde el jugador debe sobrevivir hasta ser rescatado o encontrar una salida. Se definieron los desafíos que enfrentarían los jugadores en la isla, como la búsqueda de recursos para sobrevivir y la exploración del entorno.",
    pdfLink: "/assets/creacion-idea.pdf",
    videoLink: "https://www.youtube.com/watch?v=_wNAw4cHoIA",
  },
  {
    number: 2,
    id: "sketching",
    title: "Sketching",
    imgSrc: sketching,
    description: "Se crearon bocetos para visualizar las mecánicas del juego en la isla, incluyendo la recolección de recursos y la construcción de refugios. Se exploraron diferentes diseños para las interfaces del jugador y los elementos de supervivencia.",
    pdfLink: "/assets/sketching.pdf",
    videoLink: "https://www.youtube.com/embed/kR7P4ruR6nw",
  },
  {
    number: 3,
    id: "storyboarding",
    title: "Storyboarding",
    imgSrc: storyboarding,
    description: "Se desarrollaron storyboards que narraban la historia del superviviente en la isla y sus interacciones clave para sobrevivir. Se definieron los escenarios de juego y los flujos de decisiones que los jugadores podrían tomar para buscar ayuda.",
    pdfLink: "/assets/storyboarding.pdf",
    videoLink: "https://www.youtube.com/embed/kR7P4ruR6nw",
  },
  {
    number: 4,
    id: "prototipo-papel",
    title: "Prototipo de Papel",
    imgSrc: maqueta,
    description: "Se desarrolló un prototipo jugable y se realizó una evaluación con usuarios que ayudó a recoger retroalimentación sobre la experiencia de supervivencia. Los usuarios probaron las mecánicas del juego y dieron opiniones sobre la narrativa y el contexto de la historia en la isla.",
  
    pdfLink: "/assets/prototipo-papel.pdf",
    videoLink: "https://www.youtube.com/watch?v=uHV0Eu4S6Ts",
  },
  {
    number: 5,
    id: "primer-prototipo",
    title: "Primer Prototipo",
    imgSrc: prototipo5,
    description: "El primer prototipo se centró en la supervivencia en la isla, pero la retroalimentación de los usuarios reveló que necesitaban una razón clara para estar ahí. Esto llevó a modificar la idea hacia la historia de un astronauta en un planeta desconocido, con el objetivo de reparar su nave para poder irse.",
    pdfLink: "/assets/primer-prototipo.pdf",
    videoLink: "https://www.youtube.com/watch?v=eyl-XC-L07w",
  },
  {
    number: 6,
    id: "segundo-prototipo",
    title: "Segundo Prototipo",
    imgSrc: prototipo6,
    description: "Se desarrolló un segundo prototipo basado en la nueva narrativa del astronauta, enfatizando la necesidad de reparar la nave para escapar. Se evaluó nuevamente con usuarios para asegurar que las mecánicas de juego y la historia fueran comprensibles y atractivas, refinando así el diseño hasta la versión final.",
    pdfLink: "/assets/segundo-prototipo.pdf",
    videoLink: "https://www.youtube.com/embed/kR7P4ruR6nw",
  },
];


export default function Content() {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [fileContent, setFileContent] = useState(null);
  const [contentType, setContentType] = useState("");

  // Función para abrir la ventana
  const handleOpenWindow = (file, type) => {
    setFileContent(file);
    setContentType(type);
    setIsWindowOpen(true);
  };

  // Función para cerrar la ventana
  const handleCloseWindow = () => {
    setIsWindowOpen(false);
  };

  return (
    <div className="content-container px-8 flex-1 bg-emerald-300">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center border border-none rounded-2xl shadow md:flex-row md:max-w-[60rem] bg-slate-900 py-4 my-10 h-80"
        >
          <img
            className="object-cover w-full pl-4 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={section.imgSrc}
            alt={section.title}
          />
          <div className="flex flex-col justify-between p-16 leading-normal">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-300 font-sourgummy">
              {section.number} . {section.title}
            </h5>
            <p className="mb-3 font-normal text-gray-200">
              {section.description}
            </p>
            <div className="flex space-x-4">
              {/* Botón para abrir Video */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleOpenWindow(section.videoLink, "video")}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-400 rounded-lg hover:bg-violet-500"
              >
                Video
                <FaPlay className="mx-2" />
              </motion.button>

              {/* Botón para abrir PDF */}
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleOpenWindow(section.pdfLink, "pdf")}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800"
              >
                Documento
                <IoMdDocument className="mx-2" />
              </motion.button> */}
            </div>
          </div>
        </motion.div>
      ))}

      {/* {isWindowOpen && (
        <Window section="Ver Contenido" onClose={handleCloseWindow}>
          {contentType === "pdf" && (
            <PDFViewer file={fileContent} name={pdfTitle} version={pdfDate} />
          )}
          {contentType === "video" && <YouTubeViewer videoUrl={fileContent} />}
        </Window>
      )} */}
    </div>
  );
}
