import React from 'react';
import Slider from "react-slick";
import { FaFacebook, FaLinkedin, FaSkype, FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';

function FooterSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <div className="bg-[#13114C] py-8 overflow-hidden">
      <div className="container mx-auto">
        <Slider {...settings} className="text-white">
          <div className="flex items-center justify-center">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-6xl mx-4 hover:text-blue-500 transition-colors duration-300" />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-6xl mx-4 hover:text-blue-500 transition-colors duration-300" />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link to="https://skype.com" target="_blank" rel="noopener noreferrer">
              <FaSkype className="text-6xl mx-4 hover:text-blue-500 transition-colors duration-300" />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link to="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-6xl mx-4 hover:text-blue-500 transition-colors duration-300" />
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default FooterSlider;
