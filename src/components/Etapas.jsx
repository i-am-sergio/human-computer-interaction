import { useState } from "react";
import { AnimationComponent } from "./atom/AnimationComponent";
import { Window } from "./Window";
import { PDFViewer } from "./viewer/PDFViewer";
import { YouTubeViewer } from "./viewer/YouTubeViewer";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { Gallery } from "./atom/Gallery";

export const Etapas = ({ dataEtapas }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [fileContent, setFileContent] = useState(null);
  const [contentType, setContentType] = useState("");
  const [pdfTitle, setPdfTitle] = useState(""); // Título del PDF
  const [pdfVersion, setPdfVersion] = useState(""); // Versión del PDF

  // Función para abrir la ventana
  const handleOpenWindow = (file, type, title = "", version = "") => {
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
            >
              <div className="bg-[#232323] rounded-xl min-h-36 py-4 px-2">
                <h2 className="text-2xl text-white">
                  <span>
                    {etapa.id}
                    <span className="text-4xl text-accent">.</span>{" "}
                  </span>
                  {etapa.title}
                </h2>
                <p className="text-gray-300">{etapa.content}</p>

                <div className="flex flex-row gap-4 px-10 justify-center">
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
                      className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0aff9d] rounded-lg hover:bg-[#32de99]"
                    >
                      PDF
                      <FaPlay className="mx-2" />
                    </motion.button>
                  )}
                  {etapa.videoLink && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleOpenWindow(etapa.videoLink, "video")}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ff5959] rounded-lg hover:bg-[#ab3131]"
                    >
                      Video
                      <FaPlay className="mx-2" />
                    </motion.button>
                  )}
                  {
                    etapa.slideLink && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleOpenWindow(etapa.slideLink, "pdf", etapa.slideTitle, etapa.slideVersion)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black/80 bg-[#ffd153] rounded-lg hover:bg-[#eec34c]"
                      >
                        Diapositivas
                        <FaPlay className="mx-2" />
                      </motion.button>
                    )
                  }
                  {
                    etapa.galeryLink && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleOpenWindow(etapa.galeryLink, "galery")}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#9b58ff] rounded-lg hover:bg-[#8c4fe7]"
                      >
                        Galeria
                        <FaPlay className="mx-2" />
                      </motion.button>
                    )
                  }
                </div>
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
                      <h3
                        className="text-2xl text-white text-center font-bold pt-4"
                      >Storyboard</h3>
                      <div>
                        <Gallery />
                      </div>
                    </div>
                  )}
                </Window>
              )}
            </AnimationComponent>
          </div>
        ))}
      </div>
    </div>
  );
};
