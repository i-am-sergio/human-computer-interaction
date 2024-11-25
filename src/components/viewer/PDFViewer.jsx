import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { FaPlus, FaMinus } from "react-icons/fa";

// Ruta al worker
const workerUrl = "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

export const PDFViewer = ({ file }) => {
  // Instancia del plugin de zoom
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton } = zoomPluginInstance;

  return (
    <Worker workerUrl={workerUrl}>
      <div className="relative w-full h-full bg-transparent rounded-xl">
        {/* Botones de zoom flotantes */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10 rounded-xl">
          <ZoomInButton>
            {(props) => (
              <button
                onClick={props.onClick}
                className="flex items-center justify-center w-12 h-12 bg-[#f0f0f0] rounded-full shadow hover:bg-[#e0e0e0] transition"
                aria-label="Zoom In"
              >
                <FaPlus />
              </button>
            )}
          </ZoomInButton>
          <ZoomOutButton>
            {(props) => (
              <button
                onClick={props.onClick}
                className="flex items-center justify-center w-12 h-12 bg-[#f0f0f0] rounded-full shadow hover:bg-[#e0e0e0] transition"
                aria-label="Zoom Out"
              >
                <FaMinus />
              </button>
            )}
          </ZoomOutButton>
        </div>

        {/* Visor PDF */}
        <div className="w-full h-full">
          <Viewer fileUrl={file} plugins={[zoomPluginInstance]} />
        </div>
      </div>
    </Worker>
  );
};
