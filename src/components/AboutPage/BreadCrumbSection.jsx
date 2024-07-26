import React from 'react';
import {Link} from 'react-router-dom'

const BreadcrumbSection = () => {
  return (
    <div className="bg-[url(https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/breadcrumb.jpg)] relative overflow-hidden z-1 pt-[390px] pb-[190px] mt-[-200px] bg-no-repeat bg-cover">
      <span className="absolute w-[600px] h-[600px] bg-black bg-opacity-40 rounded-full left-[-160px] top-[-340px]"></span>
      <span className="absolute w-[500px] h-[500px] bg-black bg-opacity-20 rounded-full left-[-312px] top-[60px]"></span>
      <span className="absolute w-[1030px] h-[1030px] bg-[#5044EB] mix-blend-multiply rounded-full right-[-400px] top-[-400px]"></span>
      <div className="container max-w-[1304px] z-1 mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="relative z-1 text-center">
              <h1 className="text-white mb-3 text-[calc(1.575rem+3.9vw)] font-bold leading-tight ">About Company</h1>
              <ul className="flex items-center gap-5 justify-center text-white">
                <li>
                  <Link to="https://crete.themepreview.xyz/home-two" title="Home" rel="bookmark" className="text-white">Home</Link>
                </li>
                /
                <li className="text-white">
                  <span className="active">About Company</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbSection;