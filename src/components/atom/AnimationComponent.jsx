import React from "react";
import { motion } from "framer-motion";

export const AnimationComponent = ({
  children,
  variants,
  initial = "hidden",
  whileInView = "visible",
  viewport = { amount: 0.5, once: false },
  className = "",
  transition,
  ...props
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      viewport={viewport}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
