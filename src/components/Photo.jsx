import React from "react";
import { motion } from "framer-motion";

export const Photo = ({ photo, width = 298, height = 298 }) => {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ width, height }}
    >
      {/* Foto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
        className="relative z-10"
        style={{ width: width * 0.9, height: height * 0.9 }} // La foto ocupa el 90% del contenedor
      >
        <img
          src={photo}
          alt="Foto"
          className="object-cover w-full h-full rounded-full"
        />
      </motion.div>

      {/* Círculo animado */}
      <motion.div
        className="absolute z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
      >
        <motion.svg
          style={{ width, height }}
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#0aff9d"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "15 120 25 25", rotate: 0 }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
