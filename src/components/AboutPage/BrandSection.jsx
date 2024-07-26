import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from 'react-slick'; // Import react-slick for the slider
import 'slick-carousel/slick/slick.css'; // Import slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function BrandSection() {
    // Slick slider settings
    const settings = {
        dots: false, // Hide dots for pagination
        infinite: true, // Infinite scrolling
        speed: 500, // Animation speed in milliseconds
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll on arrow click
        autoplay: true, // Enable auto-scrolling
        autoplaySpeed: 3000, // Speed for autoplay
        arrows: false, // Hide default arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Dummy data for brand logos
    const brandLogos = [
        { src: 'https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/4.svg', alt: 'Brand 1' },
        { src: 'https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/3.svg', alt: 'Brand 2' },
        { src: 'https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/2.svg', alt: 'Brand 3' },
        { src: 'https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/1.svg', alt: 'Brand 4' },
        { src: 'https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/5.svg', alt: 'Brand 5' }
    ];

    // Handle slider arrow clicks
    const sliderRef = React.useRef(null);

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="py-16 flex justify-center">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="p-8 sm:p-12 md:p-16 lg:p-24 bg-white shadow-2xl rounded-xl md:rounded-2xl">
                    <div className="flex flex-col md:flex-row">
                        {/* Text Section */}
                        <div className="w-full px-2 sm:px-4">
                            <span className="text-blue-600 font-semibold relative inline-block border-b-2 border-blue-600">
                                50% discount on early purchase
                            </span>
                            <h2 className="mt-4 text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3.375rem] leading-snug md:leading-normal lg:leading-[4rem]">
                                Unique{' '}
                                <span className="text-blue-600 bg-blue-100">Brands Work</span>
                            </h2>
                        </div>

                        {/* Arrows Section */}
                        <div className="flex md:flex-row justify-center md:w-1/2 px-4 md:px-0 items-start md:items-end">
                            <button
                                className="p-2 bg-blue-100 h-[60px] w-[60px] mr-5  text-blue-600 hover:bg-blue-600 hover:text-white rounded-full focus:outline-none transition-colors duration-300 "
                                onClick={handlePrev}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button
                                className="p-2 bg-blue-100 h-[60px] w-[60px] text-blue-600 hover:bg-blue-600 hover:text-white rounded-full focus:outline-none transition-colors duration-300"
                                onClick={handleNext}
                            >
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>

                    {/* Slider Section */}
                    <div className="mt-12">
                        <Slider {...settings} ref={sliderRef} className="slick-slider">
                            {brandLogos.map((brand, index) => (
                                <div key={index} className='w-[200px] block'>
                                    <div className="w-[300px] h-auto inline-block border-[1px] border-[#EEEEEE] text-center py-8 px-10 rounded-2xl">
                                        <img
                                            src={brand.src}
                                            alt={brand.alt}
                                            className="w-32 h-auto md:w-40 lg:w-48"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandSection;
