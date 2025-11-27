import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const projectImages = [
  "/images/dorchester.jpg",
  "/images/dorchester2.jpg",
  "/images/dorchester3.jpg",
];

const ImageSlider = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg border border-gray-700 shadow-xl bg-black/40">

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {projectImages.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt="project slide"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default ImageSlider;
