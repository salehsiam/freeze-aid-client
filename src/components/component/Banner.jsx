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
    <div className=" w-11/12  mx-auto mb-2 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative p-6">
          <div className="flex flex-col md:flex-row lg:px-5 items-center">
            <div className="md:w-3/5">
              <div className="absolute inset-0 rounded-xl  md:bg-gradient-to-r from-transparent to-blue-100 "></div>
              <img
                src={bannerImg}
                alt="Happy Child"
                className="rounded-lg w-full md:h-80 lg:h-[479px]"
              />
            </div>

            <div className="md:w-2/5 z-10 px-4">
              <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-800">
                Donate Clothes and Share Warmth
              </h2>
              <p className="mt-4 text-gray-600">
                Help bring warmth to vulnerable communities in Bangladesh this
                winter by donating winter clothing. Your kindness can provide
                comfort to those braving the cold. Together, we can make a
                difference—one warm gesture at a time.
              </p>
              <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg">
                Donate Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative p-6">
          <div className="flex flex-col-reverse md:flex-row lg:px-5 items-center">
            <div className="absolute rounded-xl inset-0 md:bg-gradient-to-r from-blue-100 to-transparent "></div>
            <div className="md:w-2/5 px-4 z-10">
              <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-800">
                Donate Clothes and Share Warmth
              </h2>
              <p className="mt-4 text-gray-600">
                Help bring warmth to vulnerable communities in Bangladesh this
                winter by donating winter clothing. Your kindness can provide
                comfort to those braving the cold. Together, we can make a
                difference—one warm gesture at a time.
              </p>
              <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg ">
                Donate Now
              </button>
            </div>

            <div className="md:w-3/5">
              <img
                src={bannerImg2}
                alt="Happy Child"
                className="rounded-lg w-full md:h-80 lg:h-[479px]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative p-6">
          <div className="flex flex-col md:flex-row lg:px-5 items-center">
            <div className="absolute rounded-xl inset-0 md:bg-gradient-to-r from-transparent to-blue-100 "></div>
            <div className="md:w-3/5">
              <img
                src={bannerImg3}
                alt="Happy Child"
                className="rounded-lg w-full md:h-80 lg:h-[479px]"
              />
            </div>

            <div className="md:w-2/5 z-10 px-4">
              <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-800">
                Donate Clothes and Share Warmth
              </h2>
              <p className="mt-4 text-gray-600">
                Help bring warmth to vulnerable communities in Bangladesh this
                winter by donating winter clothing. Your kindness can provide
                comfort to those braving the cold. Together, we can make a
                difference—one warm gesture at a time.
              </p>
              <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg ">
                Donate Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative p-6">
          <div className="flex flex-col-reverse md:flex-row lg:px-5 items-center">
            <div className="absolute rounded-xl inset-0 md:bg-gradient-to-r from-blue-100 to-transparent "></div>
            <div className="md:w-2/5 z-10 px-4">
              <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-800">
                Donate Clothes and Share Warmth
              </h2>
              <p className="mt-4 text-gray-600">
                Help bring warmth to vulnerable communities in Bangladesh this
                winter by donating winter clothing. Your kindness can provide
                comfort to those braving the cold. Together, we can make a
                difference—one warm gesture at a time.
              </p>
              <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg ">
                Donate Now
              </button>
            </div>

            <div className="md:w-3/5">
              <img
                src={bannerImg4}
                alt="Happy Child"
                className="rounded-lg w-full md:h-80 lg:h-[479px]"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
