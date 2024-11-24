import React from "react";

export const YouTubeViewer = ({ videoUrl }) => {
  let embedUrl;

  // Verifica si el enlace es una lista de reproducción o un video individual
  if (videoUrl.includes("playlist?list=")) {
    // Formato para listas de reproducción
    const listId = new URLSearchParams(new URL(videoUrl).search).get("list");
    embedUrl = `https://www.youtube.com/embed/videoseries?list=${listId}`;
  } else if (videoUrl.includes("watch?v=")) {
    // Formato para videos individuales
    embedUrl = videoUrl.replace("watch?v=", "embed/");
  } else {
    // Formato por defecto (deja el URL tal cual si no es reconocido)
    embedUrl = videoUrl;
  }

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
          src={embedUrl} // Usa la URL adecuada según el tipo
          style={{ border: 0 }}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Content"
        ></iframe>
      </div>
    </div>
  );
};