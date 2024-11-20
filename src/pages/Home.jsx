import React from 'react'
import { motion } from 'framer-motion'
import "./Home.css"

import imgSergio from "../assets/1.jpeg";
import imgBraulio from "../assets/2.jpeg";
import imgNelzon from "../assets/Nelzon.jpg";
import { img } from 'framer-motion/client';

const Home = () => {
  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center rounded-lg p-6 dark:bg-slate-900"
    >
      <div className="grid h-full w-full grid-cols-3 grid-rows-6 gap-4">
        {/* Primer div: aparece desde arriba */}
        <motion.div
          className="col-span-2 row-span-3 rounded-3xl bg-orange-400 flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >

          <h1
            className="main-title text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-900 font-bold text-2xl word"
            >
              Interacción
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white font-bold text-2xl word"
            >
              Humano
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white font-bold text-2xl word"
            >
              Computador
            </motion.div>
          </h1>

        </motion.div>

        {/* Segundo div: aparece desde la derecha */}
<motion.div
  className="row-span-4 rounded-3xl bg-orange-400 flex flex-col items-center justify-center gap-4 p-4"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.0, delay: 0.1 }}
>
  {/* Título principal */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="text-slate-900 text-3xl font-bold text-center font-sourgummy"
  >
    Nosotros
  </motion.div>

  {/* Lista de tarjetas */}
  <div className="flex flex-col items-center justify-center gap-3 w-full">
    {/* Card: Sergio Mogollón */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-orange-200 text-slate-900 text-lg font-medium px-4 py-4 rounded-xl shadow-md w-full max-w-[90%] sm:max-w-[80%] flex items-center justify-between"
    >
      <div>
        <div className="font-bold">Sergio Mogollón</div>
        <div className="text-sm text-gray-600">Estudiante de Ciencia de la Computación</div>
      </div>
      <img
        src={imgSergio}
        alt="Sergio Mogollón"
        className="w-12 h-12 rounded-full"
      />
    </motion.div>

    {/* Card: Braulio Maldonado */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="bg-orange-200 text-slate-900 text-lg font-medium px-4 py-4 rounded-xl shadow-md w-full max-w-[90%] sm:max-w-[80%] flex items-center justify-between"
    >
      <div>
        <div className="font-bold">Braulio Maldonado</div>
        <div className="text-sm text-gray-600">Estudiante de Ciencia de la Computación</div>
      </div>
      <img
        src={imgBraulio}
        alt="Braulio Maldonado"
        className="w-12 h-12 rounded-full"
      />
    </motion.div>

    {/* Card: Nelzon Apaza */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="bg-orange-200 text-slate-900 text-lg font-medium px-4 py-4 rounded-xl shadow-md w-full max-w-[90%] sm:max-w-[80%] flex items-center justify-between"
    >
      <div>
        <div className="font-bold">Nelzon Apaza</div>
        <div className="text-sm text-gray-600">Estudiante de Ciencia de la Computación</div>
      </div>
      <img
        src={imgNelzon}
        alt="Nelzon Apaza"
        className="w-12 h-12 rounded-full"
      />
    </motion.div>
  </div>
</motion.div>



        {/* Tercer div: aparece desde abajo */}
        <motion.div
          className="row-span-3 rounded-3xl bg-orange-400 flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-900 text-4xl font-bold text-center font-sourgummy"
          >
            VideoJuego
          </motion.div>
        </motion.div>

        {/* Cuarto div: aparece desde abajo */}
        <motion.div
          className="row-span-3 rounded-3xl bg-orange-400 flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-900 text-4xl font-bold text-center font-sourgummy"
          >
            Proyecto Final
          </motion.div>
        </motion.div>

        {/* Quinto div: aparece desde la derecha */}
        <motion.div
          className="row-span-2 rounded-3xl bg-orange-400"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
        ></motion.div>
      </div>
    </div>
  )
}

export default Home
