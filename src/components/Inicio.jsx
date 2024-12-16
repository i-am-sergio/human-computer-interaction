import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa6";
import { AnimatedButton } from "./Button";
import { AnimationComponent } from "./atom/AnimationComponent";
import robot from "../assets/robot.gif";

export const Inicio = () => {
  return (
    <div className="h-full w-full sm:w-3/4 ">
      <div className="container mx-auto h-full pt-32 sm:pt-20 md:pt-32 lg:pt-24">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left px-4 sm:px-8 w-full">
            {/* <Reveal width="32%">
            </Reveal> */}
            <AnimationComponent
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5, duration: 0.8 },
                },
              }}
            >
              <span className="text-lg sm:text-xl block">
                Ciencia de la Computación
              </span>
            </AnimationComponent>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-6 leading-tight">
              {/* <Reveal width="85%">
              </Reveal> */}
              <AnimationComponent
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                }}
              >
                <span>
                  Interacción Humano <br />
                </span>
              </AnimationComponent>
              <AnimationComponent
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.2, duration: 0.6 },
                  },
                }}
              >
                <span className="text-accent">Computador.</span>
              </AnimationComponent>
            </h1>
            {/* <Reveal width="52%">
            </Reveal> */}
            <AnimationComponent
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.6 },
                },
              }}
            >
              <p className="text-sm sm:text-base lg:text-lg max-w-[500px] text-white/80">
                Diseño Centrado en el Usuario • Interfaces Naturales
              </p>
            </AnimationComponent>
            {/* Btn */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 mt-9 px-20 sm:px-0">
              {/* <Reveal width="26%">
              </Reveal> */}
              {/* <Reveal width="26%">
              </Reveal> */}
              <AnimatedButton href={"#proyecto"}>
                <span>Ver Proyecto</span>
                <FaArrowDown className="text-xl" />
              </AnimatedButton>
              <AnimatedButton href={"#videojuego"}>
                <span>Ver Videojuego</span>
                <FaArrowDown className="text-xl" />
              </AnimatedButton>
            </div>
          </div>

          {/* Photo */}
          <div className="mt-8 xl:mt-0 w-full xl:w-1/2 flex justify-center overflow-hidden">
            <img
              src={robot}
              alt="robot"
              className="max-w-full h-auto rounded-lg shadow-lg"
              style={{ clipPath: "inset(0 0 10% 0)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
