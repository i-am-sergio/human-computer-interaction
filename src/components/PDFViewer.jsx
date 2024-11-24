import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

// Ruta al worker
const workerUrl =
  "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

const PDFViewer = ({ file, name, version }) => {
  return (
    <Worker workerUrl={workerUrl}>
      <div className="flex justify-center items-center bg-transparent">
        <div className="relative w-full h-full max-w-8xl bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Encabezado del visor */}
          <div className="flex items-center justify-between bg-tertiary p-4 text-white rounded-t-2xl px-10">
            <h2 className="text-lg font-semibold">{name}</h2>
            <span className="text-sm">Version: {version}</span>
          </div>

          {/* Componente del visor */}
          <div
            style={{
              height: "calc(100vh - 180px)",
              border: "1px solid rgba(0, 0, 0, 0.3)",
            }}
          >
            <Viewer fileUrl={file} />
          </div>
        </div>
      </div>
    </Worker>
  );
};

export default PDFViewer;
