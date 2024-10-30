import { Swiper, SwiperSlide } from "swiper/react";
import { SectionWrapper } from "../hoc";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
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
        slidesPerView={1.2}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={false} // Navegación personalizada
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
                className="block w-full h-full"
              >
                <img
                  src={`https://img.youtube.com/vi/${
                    video.link.split("v=")[1]
                  }/hqdefault.jpg`}
                  alt="slide_image"
                  className="h-[50vh] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
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

      {/* Custom navigation buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="p-3 rounded-full bg-white bg-opacity-75 hover:bg-opacity-100 transition-transform transform hover:scale-105 shadow-md focus:outline-none"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="p-3 rounded-full bg-white bg-opacity-75 hover:bg-opacity-100 transition-transform transform hover:scale-105 shadow-md focus:outline-none"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="slider-controler flex justify-center w-full px-4 mt-4 py-4">
        <div className="swiper-pagination" />
      </div>

      <style>{`
        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          display: none !important;
        }
        .swiper-pagination-bullet {
          background: rgb(29, 24, 54);
          opacity: 0.8;
        }

        .swiper-pagination-bullet-active {
          background: rgb(255, 255, 255);
          transform: scale(1.2);
        }
      `}</style>
    </motion.div>
  );
};

const WrappedSlides = SectionWrapper(Slides, "videos");
export default WrappedSlides;
