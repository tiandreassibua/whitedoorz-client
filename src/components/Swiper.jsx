// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Scrollbar } from "swiper/modules";

const SwiperComp = ({ properties }) => {
  return (
    <>
      <Swiper
        modules={[Scrollbar]}
        className="w-full h-[600px]"
        // className="mySwiper"
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComp;
