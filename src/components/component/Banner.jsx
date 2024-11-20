import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import bannerImg from "./../../assets/20944629.jpg";
import bannerImg2 from "./../../assets/Volunteers hand putting heart in glass donation jar.jpg";
import bannerImg3 from "./../../assets/4851046.jpg";
import bannerImg4 from "./../../assets/Generous tiny people collecting hearts in jar.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./swiper-style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center">
            {/* Left Section: Images */}
            <div className="w-3/5">
              <img
                src={bannerImg}
                alt="Happy Child"
                className="rounded-lg w-full"
              />
            </div>

            {/* Right Section: Content */}
            <div className="w-2/5">
              <h2 className="text-5xl font-bold text-gray-800">
                Donate Clothes and Share Warmth
              </h2>
              <p className="mt-4 text-gray-600">
                Help bring warmth to vulnerable communities in Bangladesh this
                winter by donating winter clothing. Your kindness can provide
                comfort to those braving the cold. Together, we can make a
                difference—one warm gesture at a time.
              </p>
              <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600">
                Donate Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center">
            {/* Left Section: Images */}
            <div className="w-2/5">
              <h2 className="text-5xl font-bold text-gray-800">
                Donate Clothes and Share Warmth
              </h2>
              <p className="mt-4 text-gray-600">
                Help bring warmth to vulnerable communities in Bangladesh this
                winter by donating winter clothing. Your kindness can provide
                comfort to those braving the cold. Together, we can make a
                difference—one warm gesture at a time.
              </p>
              <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600">
                Donate Now
              </button>
            </div>

            {/* Right Section: Content */}
            <div className="w-3/5">
              <img
                src={bannerImg2}
                alt="Happy Child"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center">
            {/* Left Section: Images */}
            <div className="w-3/5">
              <img
                src={bannerImg3}
                alt="Happy Child"
                className="rounded-lg w-full"
              />
            </div>

            {/* Right Section: Content */}
            <div className="w-2/5">
              <h2 className="text-5xl font-bold text-gray-800">
                Donate Clothes and Share Warmth
              </h2>
              <p className="mt-4 text-gray-600">
                Help bring warmth to vulnerable communities in Bangladesh this
                winter by donating winter clothing. Your kindness can provide
                comfort to those braving the cold. Together, we can make a
                difference—one warm gesture at a time.
              </p>
              <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600">
                Donate Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center">
            {/* Left Section: Images */}
            <div className="w-2/5">
              <h2 className="text-5xl font-bold text-gray-800">
                Donate Clothes and Share Warmth
              </h2>
              <p className="mt-4 text-gray-600">
                Help bring warmth to vulnerable communities in Bangladesh this
                winter by donating winter clothing. Your kindness can provide
                comfort to those braving the cold. Together, we can make a
                difference—one warm gesture at a time.
              </p>
              <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600">
                Donate Now
              </button>
            </div>

            {/* Right Section: Content */}
            <div className="w-3/5">
              <img
                src={bannerImg4}
                alt="Happy Child"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
