import { useState } from "react";
import { AnimationComponent } from "./atom/AnimationComponent";
import { Window } from "./Window";
import { PDFViewer } from "./viewer/PDFViewer";
import { YouTubeViewer } from "./viewer/YouTubeViewer";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { Gallery } from "./atom/Gallery";
import { IoMdDocument } from "react-icons/io";
import { LuPresentation } from "react-icons/lu";
import { FaImage } from "react-icons/fa6";

export const Etapas = ({ dataEtapas }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [fileContent, setFileContent] = useState(null);
  const [contentType, setContentType] = useState("");
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [pdfTitle, setPdfTitle] = useState(""); // Título del PDF
  const [pdfVersion, setPdfVersion] = useState(""); // Versión del PDF

  // Función para abrir la ventana
  const handleOpenWindow = (file, type, title = "", version = "") => {
    if (type === "galery") {
      setImages(file);
      setTitle(title);
    }
    setFileContent(file);
    setContentType(type);
    if (type === "pdf") {
      setPdfTitle(title);
      setPdfVersion(version);
    }
    setIsWindowOpen(true);
  };

  // Función para cerrar la ventana
  const handleCloseWindow = () => {
    setIsWindowOpen(false);
  };

  return (
    <div className="flex h-[100%]">
      <div className="w-full bg-transparent h-[100%] rounded-lg overflow-auto scrollbar-thin scrollbar-thumb-[#0aff9d] scrollbar-track-transparent scrollbar-thumb-rounded-lg">
        {dataEtapas?.map((etapa) => (
          <div
            key={etapa.id}
            className="bg-[#111111] flex flex-col gap-4 pr-6 py-4 pl-4"
          >
            <AnimationComponent
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.15, duration: 0.3 },
                },
              }}
              initial="hidden"
              animate="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <div className="bg-[#232323] rounded-xl min-h-48 py-4 px-4 flex flex-col sm:flex-row items-start gap-6">
                {/* Sección de texto */}
                <div className="flex flex-col justify-between px-4 sm:px-6 lg:px-12 w-full lg:w-4/5">
                  <h2 className="text-2xl text-white font-extrabold text-center sm:text-left">
                    <span>
                      {etapa.id}
                      <span className="text-4xl text-accent">.</span>{" "}
                    </span>
                    {etapa.title}
                  </h2>
                  <div className="flex flex-col gap-4 mt-4">
                    <p className="text-gray-300 text-center sm:text-left">
                      {etapa.content}
                    </p>
                    {/* Botones */}
                    <div className="flex flex-wrap justify-center gap-4 px-6">
                      {etapa.pdfLink && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            handleOpenWindow(
                              etapa.pdfLink,
                              "pdf",
                              etapa.pdfTitle,
                              etapa.pdfVersion
                            )
                          }
                          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#36a2d4] rounded-lg hover:bg-[#2981aa]"
                        >
                          <IoMdDocument className="mr-2" />
                          Documento
                          {/* <FaPlay className="ml-2" /> */}
                        </motion.button>
                      )}
                      {etapa.videoLink && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            handleOpenWindow(etapa.videoLink, "video")
                          }
                          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#ff5959] rounded-lg hover:bg-[#ab3131]"
                        >
                          <FaPlay className="mr-2" />
                          Video
                        </motion.button>
                      )}
                      {etapa.slideLink && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            handleOpenWindow(
                              etapa.slideLink,
                              "pdf",
                              etapa.slideTitle,
                              etapa.slideVersion
                            )
                          }
                          className="flex items-center px-4 py-2 text-sm font-medium text-black bg-[#ffd153] rounded-lg hover:bg-[#eec34c]"
                        >
                          <LuPresentation className="mr-2" />
                          Diapositivas
                        </motion.button>
                      )}
                      {etapa.gallery && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            handleOpenWindow(
                              etapa.gallery,
                              "galery",
                              etapa.title
                            )
                          }
                          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#9b58ff] rounded-lg hover:bg-[#8c4fe7]"
                        >
                          <FaImage className="mr-2" />
                          Viñetas
                        </motion.button>
                      )}
                      {etapa.explainLink && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            handleOpenWindow(etapa.explainLink, "video")
                          }
                          className="flex items-center px-4 py-2 text-sm font-medium text-black bg-[#0aff9d] rounded-lg hover:bg-[#3be29f]"
                        >
                          <FaPlay className="mr-2" />
                          Explicación
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
                {/* Sección de imagen */}
                <div className="flex items-center justify-center w-full h-48 sm:w-72 lg:w-1/5 bg-transparent rounded-2xl overflow-hidden">
                  <img
                    src={etapa.image}
                    alt={etapa.title}
                    className="w-72 h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {isWindowOpen && (
                  <Window section="Ver Contenido" onClose={handleCloseWindow}>
                    {contentType === "pdf" && (
                      <PDFViewer
                        file={fileContent}
                        name={pdfTitle}
                        version={pdfVersion}
                      />
                    )}
                    {contentType === "video" && (
                      <YouTubeViewer videoUrl={fileContent} />
                    )}
                    {contentType === "galery" && (
                      <div>
                        <h3 className="text-2xl text-white text-center font-bold pt-4">
                          {title}
                        </h3>
                        <div>
                          <Gallery photos={images} />
                        </div>
                      </div>
                    )}
                  </Window>
                )}
              </div>
            </AnimationComponent>
          </div>
        ))}
      </div>
    </div>
  );
};
