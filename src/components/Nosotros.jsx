import React from "react";
import { Photo } from "./Photo";
import { AnimationComponent } from "./atom/AnimationComponent";
import braulio from "../assets/shinji.png";
import sergio from "../assets/sergio.png";
import nelzon from "../assets/nelzon.png";

export const Nosotros = () => {
  const integrantes = [
    { id: 1, nombre: "Sergio Mogollon", descripcion: "Estudiante de Ciencia de la Computación", photo: sergio },
    { id: 2, nombre: "Braulio Maldonado", descripcion: "Estudiante de Ciencia de la Computación", photo: braulio },
    { id: 3, nombre: "Nelzon Apaza", descripcion: "Estudiante de Ciencia de la Computación", photo: nelzon },
  ];

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-8 sm:px-28 text-center">
        {/* Títulos */}
        <AnimationComponent
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <h1 className="text-white text-4xl font-bold mb-4">Nosotros</h1>
        </AnimationComponent>
        <AnimationComponent
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: "easeOut" } },
          }}
        >
          <p className="text-white text-lg mb-12">
            Somos estudiantes de Ciencia de la Computación<span className="text-accent">.</span>
          </p>
        </AnimationComponent>

        {/* Contenedor de Integrantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrantes.map(({ id, nombre, descripcion, photo }, i) => {
            const featureItem = {
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, delay: i * 0.1 },
              },
            };

            return (
              <AnimationComponent
                key={id}
                variants={featureItem}
                className="flex flex-col items-center bg-[#111111] rounded-lg py-4 shadow-lg"
                // whileHover={{
                //   scale: 1.1, // Escala al pasar el ratón
                // }}
                // transition={{ type: "spring", duration: 0.5 }}
              >
                {/* Foto del integrante */}
                <Photo photo={photo} width={150} height={150} />
                {/* Nombre */}
                <h2 className="text-white text-2xl font-semibold mt-4">{nombre}</h2>
                {/* Descripción */}
                <p className="text-white text-md mt-2 text-center">{descripcion}</p>
              </AnimationComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
};
