import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';

function AboutUs() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5 lg:mx-56">
        <div className="w-full lg:w-1/2 relative m-5">
          <img
            loading='lazy'
            decoding="async"
            src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/ab-1-2.jpg"
            alt="bulb"
            className="w-full h-auto rounded-lg"
          />
          <div className="bg-white p-6 md:p-10 absolute z-1 bottom-6 md:bottom-10 left-6 md:left-10 rounded-lg max-w-xs md:max-w-72">
            <h6 className="text-blue-600 m-0 font-bold text-lg md:text-2xl leading-6 md:leading-8">
              We are since 2002! Over 200 Awards
            </h6>
          </div>
        </div>
        <div className="w-full lg:w-[48%] px-4 lg:px-0">
          <span className="text-blue-600 font-semibold text-xl md:text-2xl block relative mb-4 lg:mb-6">
            50% discount on early purchase
          </span>
          <h2 className="text-black text-4xl md:text-5xl lg:text-7xl mb-6 lg:mb-12 mt-4 lg:mt-6 font-bold">
            We create digital Ideas that are
            <span className="bg-purple-50 text-blue-600 px-2 text-4xl md:text-5xl lg:text-6xl">bigger</span>
          </h2>

          <p className="mb-6 md:mb-10 text-base md:text-lg text-gray-600">
            Leo in taciti conubia, arcu dapibus convallis commodo. Bibendum tristique lacus aenean quisque ut
            <span className="text-blue-600 font-semibold">primis torquent dis eget</span>
          </p>

          <div className="flex items-center gap-4 md:gap-6 shadow-lg p-4 rounded-md">
            <img
            loading='lazy'
              src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/ab-2-1.jpg"
              alt=""
              className="max-w-xs md:max-w-28 h-auto border-none shadow-none rounded-md overflow-clip"
            />
            <p className="mb-0 text-base md:text-lg text-gray-600">
              Leo in taciti conubia, arcu dapibus convallis commodo sour Bibendum tristique lacus aenean quisque ut
              primis torquent dis eget awesome company feedbacks
            </p>
          </div>

          <div className="flex items-center gap-4 md:gap-6 flex-wrap mt-10 lg:mt-20">
            <Link
              to="#"
              className="text-white shadow-none bg-blue-700 py-4 px-8 md:py-5 md:px-12 text-base md:text-xl font-bold relative inline-block rounded-xl overflow-hidden"
            >
              More About Us
            </Link>
            <Link
              to="#"
              className="text-blue-600 shadow-none bg-blue-50 border border-white py-4 px-8 md:py-5 md:px-12 text-base md:text-xl font-bold relative inline-block rounded-xl overflow-hidden"
            >
              Get Started <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
