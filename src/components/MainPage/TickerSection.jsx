import React from 'react';

const TickerSection = () => {
  return (
    <div
      className="ticker-section position-relative overflow-hidden z-1"
      style={{ backgroundImage: 'url(https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/ticker-bg-1.png)' }}
    >
      <div className="ur-ticker-box overflow-hidden">
        <div className="ur-ticker-wrapper bg-blue-600">
          <div className="ur-ticker inline-block whitespace-nowrap py-7 text-white uppercase animate-ticker">
            <span className="mr-10">
              <i aria-hidden="true" className="fas fa-star"></i> What We Do
            </span>
            <span className="mr-10">
              <i aria-hidden="true" className="fas fa-star"></i> WE LOVE TO WORK WITH
            </span>
            <span className="mr-10">
              <i aria-hidden="true" className="fas fa-star"></i> WE LOVE WHAT WE DO
            </span>
            <span className="mr-10">
              <i aria-hidden="true" className="fas fa-star"></i> WE DO AGENCY
            </span>
            <span className="mr-10">
              <i aria-hidden="true" className="fas fa-star"></i> WE DO AGENCY SOLUTION
            </span>
            <span className="mr-10">
              <i aria-hidden="true" className="fas fa-star"></i> WHAT WE LOVE TO WORK WITH
            </span>
            {/* Duplicate the content for seamless looping */}
            <span className="mr-10">
              <i aria-hidden="true" className="fas fa-star"></i> What We Do
            </span>
            <span className="mr-10">
              <i aria-hidden="true" className="fas fa-star"></i> WE LOVE TO WORK WITH
            </span>
            <span className="mr-10">
              <i aria-hidden="true" className="fas fa-star"></i> WE LOVE WHAT WE DO
            </span>
            <span className="mr-10">
              <i aria-hidden="true" className="fas fa-star"></i> WE DO AGENCY
            </span>
            <span className="mr-10">
              <i aria-hidden="true" className="fas fa-star"></i> WE DO AGENCY SOLUTION
            </span>
            <span className="mr-10">
              <i aria-hidden="true" className="fas fa-star"></i> WHAT WE LOVE TO WORK WITH
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerSection;
