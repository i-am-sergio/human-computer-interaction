import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";
import { AnimatedButton } from './Button';
import { FaExpandAlt } from 'react-icons/fa';
import { FeatureItem } from './atom/FeatureItem';
import { AnimationComponent } from './atom/AnimationComponent';
import { Etapas } from './Etapas';
import { Window } from './Window';

const dataFeatures = [
  {
    id: 1,
    title: "Contexto y Motivacion",
    logo: <FaLightbulb className='text-accent w-6 h-6' />,
    content:
      "Los métodos de Aprendizaje de Idiomas Asistido por Dispositivos Móviles (MALL) ofrecen una experiencia educativa única que permite a los estudiantes aprender de manera flexible, adaptándose a su disponibilidad de tiempo y ubicación.",
  },
  {
    id: 2,
    title: "Problema",
    logo: <FaLightbulb className='text-accent w-6 h-6' />,
    content:
      "El diseño actual de interfaces de usuario para aplicaciones de aprendizaje de vocabulario en inglés limita la interacción del usuario y la comprensión contextual de las palabras, lo que reduce la motivación y la retención del conocimiento.",
  },
  {
    id: 3,
    title: "Objetivo del Proyecto",
    logo: <FaLightbulb className='text-accent w-6 h-6' />,
    content:
      "Rediseñar la experiencia de aprendizaje del vocabulario en inglés, con el fin de aumentar la motivación para el aprendizaje, reducir la carga cognitiva de los usuarios y facilitar la comprensión contextual de las palabras.",
  },
];

export const dataProject = [
  {
    id: 1,
    title: 'Viabilidad',
    content: 'Es la evaluación de la factibilidad de un proyecto, con el fin de determinar si es viable o no, y si es viable, cuál es la mejor manera de llevar',
    videoLink: "https://www.youtube.com/watch?v=_wNAw4cHoIA",
    pdfLink: "/human-computer-interaction/Proyecto_IHC_Etapa1.pdf",
  },
  {
    id: 2,
    title: 'Needfinding',
    content: 'Es el proceso de identificar y definir las necesidades de los usuarios, con el fin de desarrollar soluciones que satisfagan sus necesidades y expectativas.',
    videoLink: "https://www.youtube.com/watch?v=_wNAw4cHoIA",
    pdfLink: "/human-computer-interaction/Proyecto_IHC_Etapa1.pdf",
  },
  {
    id: 3,
    title: 'Storyboard',
    content: 'Es una técnica de representación gráfica de una historia o narración, que se utiliza para representar la secuencia de eventos de una historia.',
    videoLink: "https://www.youtube.com/watch?v=_wNAw4cHoIA",
    pdfLink: "/human-computer-interaction/Proyecto_IHC_Etapa1.pdf",
    galeryLink: true,
  },
  {
    id: 4,
    title: 'Prototipado Basado en Papel',
    content: 'Es el proceso de creación de un prototipo, que es una representación visual de un producto o sistema, que se utiliza para probar y validar la solución propuesta.',
    videoLink: "https://www.youtube.com/watch?v=_wNAw4cHoIA",
    pdfLink: "/human-computer-interaction/Proyecto_IHC_Etapa1.pdf",
  },
  // {
  //   id: 5,
  //   title: 'Prototipado de Mediana Fidelidad',
  //   content: 'Es el proceso de creación de un prototipo de alta fidelidad, que es una representación visual y funcional de un producto o sistema, que se utiliza para probar y validar la solución propuesta.'
  // }
];

export const Project = () => {
  const [activeWindow, setActiveWindow] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);

  useEffect(() => {
    if (activeWindow) {
      // Desactivar el scroll del body cuando la ventana esté abierta
      document.body.style.overflow = 'hidden';
    } else {
      // Restaurar el scroll del body cuando la ventana esté cerrada
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Asegura que el scroll se restaure al desmontarse el componente
    };
  }, [activeWindow]);

  const handleOpenWindow = (section) => {
    setActiveWindow(section);
    setActiveComponent(
      <Etapas dataEtapas={dataProject} />
    );
  };

  const handleCloseWindow = () => {
    setActiveWindow(null);
    setActiveComponent(null);
  };

  return (
    <div className='container mx-auto px-8 sm:px-24 pt-4 text-center'>
      <AnimationComponent
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        }}
      >
        <motion.h1 className="text-4xl font-bold mb-4">Proyecto</motion.h1>
      </AnimationComponent>
      <AnimationComponent
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: "easeOut" } },
        }}
      >
        <motion.p className="text-gray-200 text-lg mb-12">
          Realidad Aumentada<span className='text-accent'>.</span>
        </motion.p>
      </AnimationComponent>
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
        {dataFeatures.map((feature, index) => (
          <FeatureItem key={feature.id} feature={feature} i={index} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-4 sm:my-12 px-20">
        <AnimationComponent
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: "easeOut" } },
          }}
        >
          <AnimatedButton onClick={() => handleOpenWindow('Proyecto Final')}>
            <span className="text-sm px-8 sm:px-10 text-center">Proceso</span>
            <FaExpandAlt className="text-xl" />
          </AnimatedButton>
        </AnimationComponent>
      </div>

      <AnimatePresence>
        {activeWindow && (
          <Window section={"Proyecto"} onClose={handleCloseWindow}>
            {activeComponent}
          </Window>
        )}
      </AnimatePresence>
    </div>
  );
};
