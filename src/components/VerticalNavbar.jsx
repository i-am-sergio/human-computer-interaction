import React, { useState, useEffect } from 'react';
import './VerticalNavbar.css'; // Asegúrate de crear este archivo CSS para los estilos
import Etapa from './Etapa';

const VerticalNavbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectionsContent = [
    { title: 'Viabilidad', text: <Etapa /> }, // Componente Etapa en la primera sección
    { title: 'Needfinding', text: 'Contenido de la sección 2' },
    { title: 'Storyboard', text: 'Contenido de la sección 3' },
    { title: 'Prototipo en Papel', text: 'Contenido de la sección 4' },
    { title: 'Primer Prototipo', text: 'Contenido de la sección 5' },
    { title: 'Segundo Prototipo', text: 'Contenido de la sección 6' },

  ];

  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          {sectionsContent.map((section, index) => (
            <li key={index} className={activeSection === index ? 'active' : ''}>
              <a href={`#section${index + 1}`}>{section.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="content">
        {sectionsContent.map((section, index) => (
          <div key={index} id={`section${index + 1} gap-4`} className="section">
            <Etapa key={index} title={section.title} text={section.text} />
            {/* //   <h2>{section.title}</h2>
          //   <div>{section.text}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalNavbar;
