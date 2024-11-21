import React from "react";

const YouTubeViewer = ({ videoUrl }) => {
  // Verifica que el videoUrl es el adecuado, el que incluye el formato de incrustado
  const embedUrl = videoUrl.replace("watch?v=", "embed/");

  return (
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
        <iframe
          width="100%" // Se ajusta al contenedor
          height="100%" // Se ajusta al contenedor
          src={embedUrl} // Usa la URL de incrustado
          style={{ border: 0 }}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeViewer;
