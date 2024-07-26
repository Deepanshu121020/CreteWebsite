// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom'

// export default function HeroSection() {
//     return (<>
//         <div className=" bg-cover header-bg md:-mt-52 sm:pt-5">
//             <div className="relative z-1 overflow-hidden md:pt-96 md:pb-56 bg-no-repeat  z-1">
//                     <div className="items-center flex md:mx-40 sm:mx-1">
//                         <div className="md:w-1/2 md:px-3 sm:flex sm:px-0">
//                             <div className="hero-content-l">
//                                 <span className="relative text-white inline-block">
//                                     50% discount on early purchase
//                                 </span>
//                                 <h1 className="flex-2 mt-1 mb-8 font-semibold text-7xl text-white font-sans ">Creating the best digital solution</h1>
//                                 <p className="mb-14 font-medium text-lg leading-7 text-white">Malesuada curabitur nascetur viverra sem pulvinar feugiat curae, posuere risus consequat velit bibendum at integer</p>
//                                 <div className="flex items-center flex-start gap-6 flex-wrap">
//                                     <Link to="#" className="text-purple-700 shadow-none bg-white py-3.5 px-9 text-lg font-bold relative inline-block rounded-xl overflow-hidden ">Learn More</Link>
//                                     <Link to="#" className="text-white shadow-none bg-none border border-white py-3.5 px-9 text-lg font-bold relative inline-block rounded-xl overflow-hidden ">Get Started <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <img className="md:right-80 md:bottom-0 md:absolute md:h-auto  border-none shadow-none" src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/hero-sm.png" alt="ima"/>
//             </div>
//             </div>
//             </>
//     )
// }


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';

export default function HeroSection() {
  return (
    <>
      <div className="bg-cover header-bg md:-mt-52 sm:pt-5">
        <div className="relative z-1 overflow-hidden md:pt-96 md:pb-56 bg-no-repeat z-1">
          <div className="items-center flex flex-col md:flex-row md:mx-40 sm:mx-4 px-4 sm:px-6 lg:px-8">
            <div className="md:w-1/2 md:px-3 sm:flex sm:px-0 p-2">
              <div className="hero-content-l text-center md:text-left">
                <span className="relative text-white inline-block mb-4">
                  50% discount on early purchase
                </span>
                <h1 className="mt-1 mb-8 font-semibold text-4xl md:text-5xl lg:text-7xl text-white font-sans">
                  Creating the best digital solution
                </h1>
                <p className="mb-14 font-medium text-base md:text-lg leading-7 text-white">
                  Malesuada curabitur nascetur viverra sem pulvinar feugiat curae, posuere risus consequat velit bibendum at integer
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 flex-wrap">
                  <Link
                    to="#"
                    className="text-purple-700 shadow-none bg-white py-3.5 px-9 text-lg font-bold relative inline-block rounded-xl overflow-hidden"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="#"
                    className="text-white shadow-none bg-none border border-white py-3.5 px-9 text-lg font-bold relative inline-block rounded-xl overflow-hidden"
                  >
                    Get Started <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <img
                loading='lazy'
                className="md:right-80 md:bottom-0 md:absolute md:h-auto border-none shadow-none max-w-full"
                src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/hero-sm.png"
                alt="ima"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
