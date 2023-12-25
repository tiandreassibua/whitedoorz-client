import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Scrollbar } from "swiper/modules";

const SwiperComp = ({ properties }) => {
    return (
        <>
            <Swiper
                modules={[Scrollbar]}
                className="w-full h-[500px]"
                // className="mySwiper"
            >
                {properties.map((property) => (
                    <SwiperSlide key={property.id} className="relative">
                        <img
                            src={property.image}
                            alt={property.name}
                            className="w-full h-full object-cover opacity-5"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SwiperComp;
