import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import React from 'react';

const ServiceSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <span className="absolute w-40 h-40 bg-gray-700 opacity-60 rounded-full top-1/3 -left-20 z-0"></span>
      <span className="absolute w-[800px] h-[800px] bg-gray-700 opacity-60 rounded-full -left-[400px] -bottom-[300px] z-0"></span>
      <div className="container mx-auto relative z-1">
        <div className="flex justify-center">
          <div className="text-center max-w-lg">
            <span className="text-white font-semibold relative inline-block animate-fadeInUp text-xl">
              50% discount on early purchase
            </span>
            <h2 className="text-white mt-3 mb-4 text-6xl font-bold animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Our Service Area
            </h2>
            <p className="text-gray-300 font-medium leading-tight animate-fadeInUp text-lg" style={{ animationDelay: '0.3s' }}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, by injected humour.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            imgSrc="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/icon-1-1.svg"
            title="Web Development"
            description="There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into majority have suffered alteration"
          />
          <ServiceCard
            imgSrc="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/icon-2.svg"
            title="Digital Marketing"
            description="There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into majority have suffered alteration"
          />
          <ServiceCard
            imgSrc="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/icon-4.svg"
            title="Technology Solution"
            description="There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into majority have suffered alteration"
          />
          <ServiceCard
            imgSrc="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/icon-3.svg"
            title="Content Strategy"
            description="There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into majority have suffered alteration"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <div className="flex gap-4 bg-white p-10 rounded-3xl shadow-lg animate-fadeInUp">
      <span className="flex-shrink-0">
        <img src={imgSrc} alt="icon" className="h-28 w-24" loading='lazy'/>
      </span>
      <div>
        <h6 className="mb-4 font-semibold text-3xl">{title}</h6>
        <p className="mb-8 font-medium text-gray-600 text-xl">{description}</p>
        <Link to="" className="text-blue-600 font-semibold hover:underline">
          Get Started <span className="ml-2"><i className="fas fa-arrow-right"></i></span>
        </Link>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceSection;
