import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'
import React from 'react';

const ExpertsSection = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <div className="w-full lg:w-1/2 xl:w-2/5">
            <div className="exp-content">
              <span className="cr-subtitle font-semibold relative text-lg text-primary  d-inline-block animate__animated animate__fadeInUp">
                50% discount on early purchase
              </span>
              <h2 className="mt-6 mb-6 animate__animated animate__fadeInUp text-[60px] leading-[64px] font-bold" style={{ animationDelay: "0.2s" }}>
                Work With Our Full Time   
                <span className="text-primary bg-light-primary px-2">Experts </span>
              </h2>
              <p className="mb-12 animate__animated animate__fadeInUp text-lg leading-7" style={{ animationDelay: "0.3s" }}>
                Leo in taciti conubia, arcu dapibus convallis commodo. Bibendum tristique lacus aenean quisque ut{" "}
                <span className="text-primary">primis torquent dis eget</span>
              </p>
              <div className="cta-box bg-white rounded-lg shadow-lg p-10 max-w-[600px] animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
                <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                  <span className="icon-wrapper bg-light-primary rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10">
                    <FontAwesomeIcon icon={faCheck}/>
                  </span>
                  <div>
                    <h6 className="mb-5 font-bold text-3xl ">The best agency solution 2023</h6>
                    <p className="mb-0 text-lg">These tools will allow you to handle tasks such as hanging shelves and assembling furniture.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-10 flex-wrap">
                <Link to="#" className="text-white shadow-none bg-blue-700 py-5 px-12 text-xl font-bold relative inline-block rounded-xl overflow-hidden ">Learn More</Link>
                <Link to="#" className="text-blue-700 shadow-none bg-white py-5 px-12 text-xl font-bold relative inline-block rounded-xl overflow-hidden ">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="exp-right relative">
              <img
                decoding="async"
                loading='lazy'
                src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/team-meeting-2.png"
                alt="not found"
                className="img-fluid"
              />
              <div className="exp-year-box absolute bg-primary rounded-full text-white text-center p-4">
                <h3 className="text-white text-4xl">
                  <span className="counter">25</span>+
                </h3>
                <h6 className="mb-0 text-white text-lg">Years of Experience</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
