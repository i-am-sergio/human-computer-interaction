import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  reactjs,
  threejs,
  github,
  youtube,
  video,
  c,
  aframe,
  colab,
  maya,
  python,
  unity,
  vagrant,
  vuforia,
  githubblack,
  boga,
  projects_videface,
  rentacar4less,
  rocket,
  person,
  book,
} from "../assets";

import cristianAvalo from "../assets/cristianavalo.webp";
import carlosOsorio from "../assets/carlososorio.webp";
import valentinaLoaiza from "../assets/valentinaloaiza.webp";

import ideas from "../assets/1ideas.jpg";
import sketching from "../assets/1sketching.jpg";
import storyboarding from "../assets/2storyboard.jpg";
import maqueta from "../assets/3maqueta.jpg";
import prototipo5 from "../assets/5prototipo.png";
import prototipo6 from "../assets/6prototipo.png";

export const navLinks = [
  {
    id: "#about",
    title: "Nosotros",
  },
  // {
  //   id: "#metodologia",
  //   title: "Metodologia",
  // },
  {
    id: "#proyectos",
    title: "Proyectos",
  },
  {
    id: "#entregables",
    title: "Entregables",
  },
];

export const linkTreeNavLinks = [
  {
    id: "/",
    title: "Portfolio",
  },
  {
    id: "",
    title: "Connect",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Multimedia Developer",
    icon: web,
  },
  {
    title: "FullStack/DevOps Engineer",
    icon: mobile,
  },
  {
    title: "A.I. and Cloud Developer",
    icon: backend,
  },
  {
    title: "Video game Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Vagrant",
    icon: vagrant,
  },
  {
    name: "Vuforia",
    icon: vuforia,
  },
  {
    name: "A-frame",
    icon: aframe,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "GitHub",
    icon: githubblack,
  },
  {
    name: "Colab",
    icon: colab,
  },
  {
    name: "Maya",
    icon: maya,
  },
];

const experiences = [
  {
    title: "1. Creación de la Idea",
    company_name: "Generación de conceptos innovadores",
    icon: youtube,
    iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
    iconLink: "https://www.youtube.com/@braulionayapmaldonadocasil8379",
    date: "Fecha: Durante el semestre",
    points: [
      "Se generó la idea inicial de un juego de supervivencia en una isla tras un accidente de avión, donde el jugador debe sobrevivir hasta ser rescatado o encontrar una salida.",
      "Se definieron los desafíos que enfrentarían los jugadores en la isla, como la búsqueda de recursos para sobrevivir y la exploración del entorno.",
    ],
    image: ideas,
  },
  {
    title: "2. Sketching",
    company_name: "Bocetos iniciales",
    icon: youtube,
    iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
    iconLink: "https://www.youtube.com/@braulionayapmaldonadocasil8379",
    date: "Fecha: Durante el semestre",
    points: [
      "Se crearon bocetos para visualizar las mecánicas del juego en la isla, incluyendo la recolección de recursos y la construcción de refugios.",
      "Se exploraron diferentes diseños para las interfaces del jugador y los elementos de supervivencia.",
    ],
    image: sketching,
  },
  {
    title: "3. Storyboarding",
    company_name: "Ilustración de interacciones",
    icon: youtube,
    iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
    iconLink: "https://www.youtube.com/@braulionayapmaldonadocasil8379",
    date: "Fecha: Durante el semestre",
    points: [
      "Se desarrollaron storyboards que narraban la historia del superviviente en la isla y sus interacciones clave para sobrevivir.",
      "Se definieron los escenarios de juego y los flujos de decisiones que los jugadores podrían tomar para buscar ayuda.",
    ],
    image: storyboarding,
  },
  {
    title: "4. Prototipado / Maqueta y Evaluación con Usuarios",
    company_name: "Desarrollo de prototipos",
    icon: youtube,
    iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
    iconLink: "https://www.youtube.com/@braulionayapmaldonadocasil8379",
    date: "Fecha: Durante el semestre",
    points: [
      "Se desarrolló un prototipo jugable y se realizó una evaluación con usuarios que ayudó a recoger retroalimentación sobre la experiencia de supervivencia.",
      "Los usuarios probaron las mecánicas del juego y dieron opiniones sobre la narrativa y el contexto de la historia en la isla.",
    ],
    image: maqueta,
  },
  {
    title: "5. Primer Prototipo + Evaluación con Usuarios",
    company_name: "Iteración sobre el prototipo",
    icon: youtube,
    iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
    iconLink: "https://www.youtube.com/@braulionayapmaldonadocasil8379",
    date: "Fecha: Durante el semestre",
    points: [
      "El primer prototipo se centró en la supervivencia en la isla, pero la retroalimentación de los usuarios reveló que necesitaban una razón clara para estar ahí.",
      "Esto llevó a modificar la idea hacia la historia de un astronauta en un planeta desconocido, con el objetivo de reparar su nave para poder irse.",
    ],
    image: prototipo5,
  },
  {
    title: "6. Segundo Prototipo + Evaluación con Usuarios",
    company_name: "Refinamiento del diseño",
    icon: youtube,
    iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
    iconLink: "https://www.youtube.com/@braulionayapmaldonadocasil8379",
    date: "Fecha: Durante el semestre",
    points: [
      "Se desarrolló un segundo prototipo basado en la nueva narrativa del astronauta, enfatizando la necesidad de reparar la nave para escapar.",
      "Se evaluó nuevamente con usuarios para asegurar que las mecánicas de juego y la historia fueran comprensibles y atractivas, refinando así el diseño hasta la versión final.",
    ],
    image: prototipo6,
  },
];

const videos = [
  {
    title: "Sesión de comentarios de IsLand: Prueba de usuario 1",
    fase: "Versión del Prototipo: v0.1",
    link: "https://www.youtube.com/watch?v=kR7P4ruR6nw",
  },
  {
    title:
      "Sesión de comentarios de IsLand: Prueba de usuario 2 - Parte 1: Gameplay",
    fase: "Versión del Prototipo: v0.5",
    link: "https://www.youtube.com/watch?v=eyl-XC-L07w",
  },
  {
    title:
      "Sesión de comentarios de IsLand: Prueba de usuario 2 - Parte 2: Cuestionario",
    fase: "Versión del Prototipo: v0.5",
    link: "https://www.youtube.com/watch?v=vo-N-Kfw87s",
  },
  {
    title:
      "Sesión de comentarios de IsLand: Prueba de usuario 3 - Parte 1: Gameplay",

    fase: "Versión del Prototipo: v0.5",
    link: "https://www.youtube.com/watch?v=uHV0Eu4S6Ts",
  },
  {
    title:
      "Sesión de comentarios de IsLand: Prueba de usuario 3 - Parte 2: Cuestionario",

    fase: "Versión del Prototipo: v0.5",
    link: "https://www.youtube.com/watch?v=VIzVwqz6WGE",
  },
  {
    title:
      "Sesión de comentarios de IsLand: Prueba de usuario 4 - Parte 1: Gameplay",

    fase: "Versión del Prototipo: v0.5",
    link: "https://www.youtube.com/watch?v=Hygw0gV7GI8",
  },
  {
    title:
      "Sesión de comentarios de IsLand: Prueba de usuario 4 - Parte 2: Cuestionario",

    fase: "Versión del Prototipo: v0.5",
    link: "https://www.youtube.com/watch?v=Il9DvQ14n1Q",
  },
  {
    title:
      "Sesión de comentarios de IsLand: Prueba de usuario 5 - Parte 1: Gameplay",

    fase: "Versión del Prototipo: v0.5",
    link: "https://www.youtube.com/watch?v=kXf-cTNnjhs",
  },
  {
    title:
      "Sesión de comentarios de IsLand: Prueba de usuario 4 - Parte 2: Cuestionario",

    fase: "Versión del Prototipo: v0.5",
    link: "https://www.youtube.com/watch?v=g9ff8PaBVLE",
  },
];

// const experiences = [
//     {
//         title: "LinkScribe | A.I. & Web Dev",
//         company_name: "Docker, Vagrant, Kaggle, Edge Impulse, ML Flow, API Rest, JS, Python, React, CSS, HTML, MUI",
//         icon: github,
//         iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
//         iconLink: "https://github.com/xlgabriel/linkscribe",
//         date: "August 2023 - December 2023",
//         points: [
//             "Effortlessly create, organize, and categorize web links using NLP (Natural Language Processing). Copy and paste links to extract content information, categorize, and search with custom keywords.",
//             "Model trained from scratch and used in the backend, connected by API.",
//         ],
//     },
//     {
//         title: "AcademIA | Scrum Master",
//         company_name:
//             "Scrum, Jira, Miro, Taiga, Slack, Notion, KPIs, User Stories, Metrics, Daily Scrum, Sprints, soft skills",
//         icon: github,
//         iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
//         iconLink: "https://github.com/xlgabriel/academia",
//         date: "February 2023 - June 2023",
//         points: [
//             "LMS-type open-source collaborative project where the user (teacher, student) can access their academic courses, upload and review multimedia content.",
//             "It also has Hangouts-style chat, with a plus of AItype virtual assistant integrated inside the system.",
//         ],
//     },
//     {
//         title: "Lecturando | A.I. & Game Dev",
//         company_name: "Unity, GitHub, GitLab, Miro, Scrum, Doc & Testing, Tesseract OCR, ONNX, Barracuda, Firebase, C#",
//         icon: github,
//         iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
//         iconLink: "https://gitlab.com/media-collab/dm2_lecturando",
//         date: "February 2022 - December 2022",
//         points: [
//             "Unity game focused on solving the letter inversion problem (p,q,b,d) detected in kids from schools from Cali, Colombia.",
//             "Using image recognition and database in this gamification-based videogame, we offered solutions for teachers to help solving this problem.",
//         ],
//     },
//     {
//         title: "GoPance | Front-end Dev",
//         company_name: "React, HTML, CSS, JavaScript, Bootstrap, Canva, Netlify, Firebase, Node.js, Postman.",
//         icon: github,
//         iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
//         iconLink: "https://github.com/Johannes910/gopance",
//         date: "August 2022 - December 2022",
//         points: [
//             "Web application similar to Rappi or Uber Eats, focused on Pance town in Cali, Colombia.",
//             "The purpose is to connect the different business and services located here with people around the city to impulse its economy and development.",
//         ],
//     },
//     {
//         title: "Minecraft Speech to Text",
//         company_name: "Python, CNN, Colab, Jupyter Notebook, ursina, h5py, keras, Speech recognizer, TensorFlow.",
//         icon: github,
//         iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
//         iconLink: "https://videface.app",
//         date: "August 2022 - December 2022",
//         points: [
//             "Python-based Minecraft with words recognizer (Convolutional Neural Network), with our own dataset and training.",
//             "By saying one of the five words, it changes the block to use within the game.",
//             "Great project to learn about speech recognition and A.I. from training to implementation.",
//         ],
//     },
// ];

const testimonials = [
  {
    testimonial:
      "A man with many ideas and the ability to carry them out. We are happy with the software he developed for us. He's always proposing new ways of doing things under his experience and abilities. I definitely recommend him as a person and engineer.",
    name: "Cristian Ávalo",
    designation: "General director",
    company:
      "Rent a car 4 less, located in Miami, Orlando, Fort Lauderdale and Houston.",
    image: cristianAvalo,
    linkedin: "https://www.linkedin.com/in/cristian-avalo-4less",
  },
  {
    testimonial:
      "A great student and undoubtedly a great professional in his field. He always demonstrated in class and with his grades an ability to excel in the areas that he is passionate about and master the ones he needs to master.",
    name: "Andrés Gallego",
    designation: "Multimedia engineering career director",
    company: "Universidad Autónoma de Occidente",
    image:
      "https://www.uao.edu.co/wp-content/uploads/2020/04/Andrés-Gallego-Small.jpg",
    linkedin: "https://www.linkedin.com/in/andresfox",
  },
  {
    testimonial:
      "It's a pleasure to recommend Gabriel due to his exceptional commitment and dedication. His extensive knowledge in software development and artificial intelligence combines to produce impressive projects.",
    name: "Valentina Loaiza",
    designation: "Front-end Developer, Multimedia Engineer, UX/UI Dev",
    company: "VideFace App",
    image: valentinaLoaiza,
    linkedin: "https://www.linkedin.com/in/valentina-loaiza-mejia-4587ba261/",
  },
  {
    testimonial:
      "Working with Gabriel helped me to discover a person with a lot of discipline and persistence in each task he takes on. I am still surprised by the way he approaches each problem and his multiple abilities to solve them.",
    name: "Carlos Osorio",
    designation: "NodeJS Developer at Globant, student",
    company: "Universidad Autónoma de Occidente",
    image: carlosOsorio,
    linkedin: "https://www.linkedin.com/in/carlos-ivan-osorio",
  },
];

const projects = [
  {
    upper_title:
      "Juego de Supervivencia en un mundo de islas (Realidad Virtual)",
    date: "Sep 2024 - Oct 2024",
    name: "IsLand",
    description:
      "Este semestre, nuestro equipo creó un juego en realidad virtual donde el jugador asume el rol de un astronauta que, tras un accidente, aterriza en un planeta desconocido. En este entorno hostil, debe sobrevivir recolectando recursos y herramientas para reparar su nave antes de quedarse sin oxígeno y alimento. La experiencia enfatiza la exploración y la resolución de problemas, enseñándonos la importancia del diseño de interfaces y la interacción en entornos virtuales.",
    tags: [
      {
        name: "RealidadVirtual",
        color: "text-blue-400",
      },
      {
        name: "Unity",
        color: "text-gray-300",
      },
      {
        name: "Diseño",
        color: "text-yellow-500",
      },
      {
        name: "MetaQuest2",
        color: "text-green-300",
      },
      {
        name: "PrincipiosDeGestalt",
        color: "text-orange-500",
      },
    ],
    image: projects_videface,
    source_code_link: "https://videface.app",
  },
  {
    upper_title:
      "Aplicacion para el aprendizaje del Inglés (Realidad Augmentada)",
    date: "Oct 2024 - Present",
    name: "ARLang",
    description:
      "Actualmente, estamos trabajando en un innovador proyecto de realidad aumentada diseñado para mejorar el aprendizaje del inglés. Este enfoque combina la tecnología de realidad aumentada con métodos educativos interactivos, creando una experiencia de aprendizaje inmersiva y atractiva. A través de actividades interactivas y escenarios prácticos, buscamos motivar a los estudiantes a adquirir habilidades lingüísticas de manera divertida y efectiva.",
    tags: [
      {
        name: "Augmented Reality",
        color: "text-green-500",
      },
      {
        name: "Unity",
        color: "text-green-200",
      },
      {
        name: "InteractiveLearning",
        color: "text-gray-300",
      },
      {
        name: "Android",
        color: "text-yellow-500",
      },
      {
        name: "PrincipiosDeGestalt",
        color: "text-orange-500",
      },
    ],
    image: rentacar4less,
    source_code_link: "https://www.rac4less.com/",
  },
  // {
  //     upper_title: "Getting to know the professional world",
  //     date: "June 2020 - December 2023",
  //     name: "BOGA and Electronet",
  //     description:
  //         "BOGA and Siluetas Spa: in charge of editing content focused on text and audiovisual elements on a continuous basis for the social networks. Multimedia experiences developer. Electronet: in charge of the creation of the intro to the edition of the Opener and promotion of electronic events, all with high quality audiovisual detail. ",
  //     tags: [
  //         {
  //             name: "premiere pro",
  //             color: "blue-text-gradient",
  //         },
  //         {
  //             name: "canva",
  //             color: "green-text-gradient",
  //         },
  //         {
  //             name: "pro tools",
  //             color: "pink-text-gradient",
  //         },
  //         {
  //             name: "after effects",
  //             color: "blue-text-gradient",
  //         },
  //         {
  //             name: "adobe media encoder",
  //             color: "text-yellow-400",
  //         },
  //     ],
  //     image: boga,
  //     source_code_link: "https://instagram.com/boga.peluqueria",
  // },
];

const EtapasProject = [
  {
    id: "1",
    logo: rocket,
    title: "Viabilidad del Proyecto",
    desc: "La viabilidad del proyecto se evaluó mediante un análisis que incluyó la revisión de trabajos previos y encuestas a usuarios, con el fin de validar la idea y asegurar su aceptación y factibilidad. Los resultados obtenidos de estos estudios permitieron tomar decisiones clave para garantizar la viabilidad técnica y la adecuación del proyecto al público objetivo.",
    linkVideo: "https://www.youtube.com/watch?v=8SB1GZNbnus",
    linkPDF: "/human-computer-interaction/Proyecto_IHC_Etapa1_2.pdf",
    date: "Octubre 14-18",
    image: rentacar4less,
  },
  {
    id: "2",
    logo: person,
    title: "NeedFinding",
    desc: "El proceso de needfinding se llevó a cabo mediante encuestas a usuarios y entrevistas con un experto en el área, lo que permitió identificar necesidades clave y perspectivas relevantes. Esta combinación de enfoques facilitó la definición de prioridades basadas en las expectativas y requerimientos de los usuarios, orientando el proyecto hacia soluciones efectivas y centradas en ellos.",
    linkVideo: "https://www.youtube.com/watch?v=8SB1GZNbnus",
    linkPDF: "/human-computer-interaction/Proyecto_IHC_Etapa2.pdf",
    date: "Octubre 21-31",
    image: rentacar4less,
  },
  {
    id: "3",
    logo: book,
    title: "StoryBoarding",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    linkVideo: "https://www.youtube.com/watch?v=8SB1GZNbnus",
    linkPDF: "/human-computer-interaction/Proyecto_IHC_Etapa1_2.pdf",
    date: "Noviembre 4-21",
    image: rentacar4less,
  },
  {
    id: "4",
    logo: rentacar4less,
    title: "Prototipo de Baja Fidelidad",
    desc: "Proximamente",
    linkVideo: "https://www.youtube.com/watch?v=8SB1GZNbnus",
    linkPDF: "/human-computer-interaction/Proyecto_IHC_Etapa1_2.pdf",
    date: "Noviembre",
    image: rentacar4less,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  videos,
  EtapasProject,
};
