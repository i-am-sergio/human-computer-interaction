import { motion } from 'framer-motion';

export const AnimatedButton = ({ children, onClick, href }) => {
  return (
    <motion.a
      href={href} // Navega a la sección especificada por el #id
      whileHover={{
        scale: 1.075,
        backgroundColor: "#111111", // Fondo oscuro al hacer hover
        color: "#0aff9d", // Color de texto verde
        borderColor: "#0aff9d", // Borde verde
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        backgroundColor: { duration: 0.3 },
        borderColor: { duration: 0.3 },
      }}
      className="uppercase flex items-center gap-2 border-2 border-transparent text-[#111111] bg-[#0aff9d] px-6 py-3 rounded-md shadow-md hover:shadow-lg cursor-pointer"
      onClick={onClick} // También permite manejar clics personalizados
    >
      {children}
    </motion.a>
  );
};
