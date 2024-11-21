import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";
import Window from "./Window";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EtapasProject } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import PDFViewer from "./PDFViewer";
import YouTubeViewer from "./YouTubeViewer";

const NeedFindingCard = ({
  logo,
  title,
  desc,
  linkVideo,
  date,
  image,
  onOpenWindow, // Añadimos la función para abrir la ventana desde el padre
  filePDF, // Recibimos el archivo PDF como prop
}) => {
  return (
    <Tilt
      className="w-full max-w-4xl mx-auto"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.05}
    >
      <motion.div
        className="bg-gray-900 text-white rounded-lg shadow-lg flex flex-row p-6 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Left Section */}
        <div className="flex flex-col justify-between flex-1">
          {/* Title Section */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h1 className="text-xl font-bold">{title}</h1>
          </div>

          {/* Description */}
          <div className="mt-4">
            <p className="text-sm text-justify">{desc}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            {/* Button to open PDF */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onOpenWindow(filePDF, title, date, "pdf")}
              className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              Documento
            </motion.button>
            {/* Button to open Video */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onOpenWindow(linkVideo, title, date, "video")}
              className="bg-orange-400 hover:bg-orange-300 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              Video
            </motion.button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col">
          {/* Image */}
          <motion.div
            className="overflow-hidden h-[300px] w-[200px] rounded-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt="project_image"
              className="object-cover h-full w-full"
            />
          </motion.div>

          {/* Date */}
          <p className="text-xs text-gray-400 mt-4 text-right">{date}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Works = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [fileContent, setFileContent] = useState(null); // Estado para manejar el archivo PDF
  const [contentType, setContentType] = useState("");
  const [pdfTitle, setPdfTitle] = useState(""); // Estado para el título del PDF
  const [pdfDate, setPdfDate] = useState(""); // Estado para la fecha del PDF

  // Función para abrir la ventana y asignar el archivo PDF, título y fecha
  const handleOpenWindow = (file, title, date, type) => {
    setFileContent(file);
    setPdfTitle(title);
    setPdfDate(date);
    setContentType(type);
    setIsWindowOpen(true);
  };

  // Función para cerrar la ventana
  const handleCloseWindow = () => {
    setIsWindowOpen(false);
  };

  return (
    <>
      {isWindowOpen && (
        <Window section="Ver Contenido" onClose={handleCloseWindow}>
          {contentType === "pdf" && (
            <PDFViewer file={fileContent} name={pdfTitle} version={pdfDate} />
          )}
          {contentType === "video" && <YouTubeViewer videoUrl={fileContent} />}
        </Window>
      )}
      <div className="w-full h-full flex justify-center items-center bg-transparent">
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 100px)", // Modificado para usar el mismo alto que el PDFViewer
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {EtapasProject.map((project) => (
              <NeedFindingCard
                key={project.id}
                logo={project.logo}
                title={project.title}
                desc={project.desc}
                linkVideo={project.linkVideo}
                date={project.date}
                image={project.image}
                onOpenWindow={handleOpenWindow} // Pasamos la función para abrir la ventana
                filePDF={project.linkPDF} // Pasamos la URL del PDF
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
