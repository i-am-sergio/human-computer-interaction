import React, { useState } from "react";

export const YouTubeViewer = ({ videoUrl }) => {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar si el video está cargando
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

  // Función que se llama cuando el iframe se ha cargado
  const handleLoad = () => {
    setIsLoading(false); // El video ha cargado, ocultamos el logo de carga
  };

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
        {isLoading && (
          <div className="absolute flex justify-center items-center w-full h-full bg-transparent py-2 pt-2 bg-opacity-75">
            {/* Aquí puedes colocar cualquier spinner o logo de carga */}
            <svg
              className="animate-spin h-16 w-16 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                className="opacity-25"
              ></circle>
              <path
                fill="currentColor"
                d="M4 12a8 8 0 0116 0"
                className="opacity-75"
              ></path>
            </svg>
          </div>
        )}
        <iframe
          width="100%" // Se ajusta al contenedor
          height="100%" // Se ajusta al contenedor
          src={embedUrl} // Usa la URL adecuada según el tipo
          loading="lazy" 
          style={{ border: 0 }}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Content"
          onLoad={handleLoad} // Llama a handleLoad cuando se carga el iframe
        ></iframe>
      </div>
    </div>
  );
};
