import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import imgSergio from "../assets/1.jpeg";
import imgBraulio from "../assets/2.jpeg";
import imgNelzon from "../assets/3.jpeg";

// Array de miembros del equipo con las imágenes importadas
const teamMembers = [
  {
    title: "Sergio Daniel Mogollon Cáceres",
    role: "Investigador en Ciencia de la Computación",
    icon: imgSergio, // Imagen de Sergio
  },
  {
    title: "Braulio Nayap Maldonado Casilla",
    role: "Desarrollador de Software y Experto en IHC",
    icon: imgBraulio, // Imagen de Braulio
  },
  {
    title: "Nelzon Jorge Apaza Apaza",
    role: "Estudiante en Ciencia de la Computación y Diseñador UX",
    icon: imgNelzon, // Imagen de Nelzon
  },
];

const ServiceCard = ({ index, title, role, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {/* Estilos para la imagen */}
        <img
          src={icon}
          alt={title}
          className="w-32 h-32 object-contain rounded-full hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <p className="text-white text-[16px] text-center">{role}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Nosotros</p>
        <h2 className={styles.sectionHeadText}>Nuestro Equipo de Trabajo</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Somos un equipo de estudiantes de Ciencias de la Computación apasionados
        por la Interacción Humano-Computador (IHC). A lo largo de este curso,
        hemos desarrollado proyectos que exploran cómo las personas interactúan
        con la tecnología, enfocándonos en mejorar la experiencia de usuario,
        usabilidad y accesibilidad.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-16 max-w-screen-lg mx-auto">
        {teamMembers.map((member, index) => (
          <ServiceCard key={member.title} index={index} {...member} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
