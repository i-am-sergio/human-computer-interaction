import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isImageOpen && !event.target.closest(".bg-black")) {
        setIsImageOpen(false);
      }
    };

    const handleScroll = () => {
      if (isImageOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleScroll();

    if (isImageOpen) {
      window.addEventListener("click", handleOutsideClick);
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isImageOpen]);

  const openImage = () => {
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <motion.div
          className="flex justify-center items-center w-full h-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={experience.iconLink} target="_blank">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[100%] h-[60%] object-contain"
            />
          </a>
        </motion.div>
      }
    >
      <div onClick={openImage}>
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
        <div className="relative w-full h-[180px] mt-5">
          <div
            className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center cursor-pointer rounded-2xl z-10"
            // onClick={openImage}
          >
            <img
              src={experience.image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
      {isImageOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-75 z-50 cursor-pointer"
          onClick={closeImage}
        >
          <motion.img
            src={experience.image}
            alt="project_image"
            className="max-w-[75%] max-h-[75%]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          />
          <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={closeImage}
          >
            X
          </button>
        </motion.div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div id="timeline">
        <p className={`${styles.sectionSubText} text-center`}>
          Realidad Virtual
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Videojuego.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="https://github.com/i-am-sergio/IsLand"
          target="_blank"
          className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
        >
          <button className="bg-[#2b2363] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95 hover:bg-[#42349a]">
            Codigo fuente en GitHub
          </button>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
