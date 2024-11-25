import './App.css';

import React from 'react';
import { Navbar } from './components/Navbar';
import { Inicio } from './components/Inicio';
import { Nosotros } from './components/Nosotros';
import { Project } from './components/Project';
import { Videogame } from './components/Videogame';

const App = () => {
  return (
    <div className="flex w-full">
      {/* Navbar */}
      <div className="w-0 lg:w-16 bg-rose-500">
        <Navbar />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 bg-[#111111] w-full">
        {/* Sección Inicio */}
        <div
          id="inicio"
          className="min-h-screen w-full bg-transparent flex items-center justify-center"
        >
          <Inicio />
        </div>

        {/* Sección Nosotros */}
        <div
          id="nosotros"
          className="min-h-screen w-full px-10 bg-[#111111] flex items-center justify-center"
        >
          <Nosotros />
        </div>

        {/* Sección Proyecto */}
        <div
          id="proyecto"
          className="min-h-screen w-full bg-[#111111] flex items-center justify-center"
        >
          <Project />
        </div>

        {/* Sección Videojuego */}
        <div
          id="videojuego"
          className="min-h-screen w-full bg-[#111111] flex items-center justify-center"
        >
          {/* <h1 className="text-white text-4xl">Videojuego</h1> */}
          <Videogame />
        </div>

        {/* Sección Redes */}
        {/* <div
          id="redes"
          className="min-h-screen bg-yellow-500 flex items-center justify-center"
        >
          <h1 className="text-white text-4xl">Contáctanos</h1>
        </div> */}
      </div>
    </div>
  );
};

export default App;
