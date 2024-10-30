import { Swiper, SwiperSlide } from "swiper/react";
import { SectionWrapper } from "../hoc";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination } from "swiper";
import { useRef } from "react";
import { videos } from "../constants";
import { playVideo } from "../assets"; // Asegúrate de que playVideo sea la ruta del icono

import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const Slides = () => {
  const swiperRef = useRef(null);

  return (
    <motion.div
      variants={fadeIn("left", "spring")}
      className="flex flex-col items-center justify-center relative"
    >
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.2} // Cambia a 1.2 para mostrar 20% de cada lado
        spaceBetween={30} // Espacio entre slides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={false} // Usaremos navegación personalizada
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container w-full h-full"
      >
        {videos.map((video) => (
          <SwiperSlide
            key={video.link.split("v=")[1]}
            className="flex justify-center items-center relative group"
          >
            <div className="relative bg-[#1D1836] px-4 py-6 rounded-2xl overflow-hidden shadow-lg">
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full" // Mantén esto para que el enlace ocupe todo el área
              >
                <img
                  src={`https://img.youtube.com/vi/${
                    video.link.split("v=")[1]
                  }/hqdefault.jpg`}
                  alt="slide_image"
                  className="h-[50vh] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Contenedor para el efecto de oscurecimiento y el icono de play */}
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src={playVideo} alt="Play" className="h-32 w-32" />
                </div>
              </a>
              <div className="flex flex-col items-center text-center mt-4">
                <div className="text-white text-[24px] font-bold">
                  {video.title}
                </div>
                <div className="text-secondary text-[16px] font-semibold">
                  {video.fase}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-controler flex justify-center w-full px-4 mt-4 py-4">
        <div className="swiper-pagination" />
      </div>

      <style>{`
        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          display: none !important;
        }
        .swiper-pagination-bullet {
          background: rgb(29, 24, 54); /* Color de fondo de las balas */
          opacity: 0.8; /* Cambiar la opacidad para un efecto más sutil */
        }

        .swiper-pagination-bullet-active {
          background: rgb(255, 255, 255); /* Color de fondo de la bala activa */
          transform: scale(1.2); /* Agrandar la bala activa para destacarla */
        }
      `}</style>
    </motion.div>
  );
};

const WrappedSlides = SectionWrapper(Slides, "videos");
export default WrappedSlides;
