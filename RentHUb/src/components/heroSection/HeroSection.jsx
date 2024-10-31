import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper"; // Import Navigation directly from "swiper"
import "swiper/css";
import "swiper/css/navigation";

// Initialize the SwiperCore modules
SwiperCore.use([Navigation]);

export default function Homeslider() {
  return (
    <Swiper
      className="relative group"
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide",
      }}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <div className="image relative">
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
            alt="logo"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image relative">
          <img
            src="https://rentit4me.com/assets/blog/6675417d70c7e.jpeg"
            alt="logo2"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image relative">
          <img
            src="http://www.nicerent.com/images/visual_furnitureRental.png"
            alt="logo3"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image relative">
          <img src="https://www.theharent.com/images/slider2.jpg" alt="logo4" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
