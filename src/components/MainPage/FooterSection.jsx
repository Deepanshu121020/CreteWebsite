// import { faFacebookF, faLinkedin, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {Link} from 'react-router-dom';

// function FooterSection() {
//   return (
//     <footer className="bg-[#101727] relative z-[1] overflow-hidden pt-24 pb-3 px-5 ">
//         <div className="block">
//             <div className="container mx-auto relative z-[1]">
//                 <div className="flex ">
//                     <div className="md:w-1/4 flex-shrink-0 flex-grow-0 mr-2 pr-2">
//                         <section className="text-white ">
//                             <div className="mb-10 text-white">
//                                 <img src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/logo-white-1.png" alt="logo" className="max-w-full h-auto border-none "/>
//                                 <p className="my-8 text-white text-[19px]">Tempus nula rhoncus euismod curae masa cras justo quisque semper usto molestie primis porttitor</p>
//                                 <div className="">
//                                     <Link to="#" className="inline-flex w-11 h-11 bg-[#242b3d] rounded-full items-center justify-center mr-[10px] ">
//                                     <FontAwesomeIcon icon={faFacebookF} />
//                                     </Link>
//                                     <Link to="#" className="inline-flex w-11 h-11 bg-[#242b3d] rounded-full items-center justify-center mr-[10px] ">
//                                     <FontAwesomeIcon icon={faTwitter} />
//                                     </Link>
//                                     <Link to="#" className="inline-flex w-11 h-11 bg-[#242b3d] rounded-full items-center justify-center mr-[10px] ">
//                                     <FontAwesomeIcon icon={faLinkedin} />
//                                     </Link>
//                                     <Link to="#" className="inline-flex w-11 h-11 bg-[#242b3d] rounded-full items-center justify-center mr-[10px] ">
//                                     <FontAwesomeIcon icon={faSkype} />
//                                     </Link>
//                                 </div>
//                             </div>
//                         </section>
//                     </div>

//                     <div className="md:w-1/6 flex-shrink-0 flex-grow-0 mx-2 px-2">
//                     <section className='text-white '>
//                         <h2 className='text-[#9097A9] text-[24px] font-semibold pb-5 relative mb-8 leading-[34px]'> Company </h2>
//                         <div className='text-white'>
//                             <ul className='m-0 p-0 list-none'>
//                                 <li className='text-white mb-4'>
//                                     <Link to='#' className='font-medium text-xl'>Help Center</Link>
//                                 </li>
//                                 <li className='text-white mb-2'>
//                                     <Link to='#' className='font-medium text-xl'>Terms</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </section>
//                     </div>
//                     <div className="md:w-1/4 flex-shrink-0 flex-grow-0 ">
//                     <section className='text-white '>
//                         <h2 className='text-[#9097A9] text-[24px] font-semibold pb-5 relative mb-8 leading-[34px]'> Working Time </h2>
//                         <div className='text-white'>
                            
//                                 <p className='text-white mb-3 m-0 p-0 font-medium text-xl'>
//                                      Mon – Fri: 9:00 AM – 5:00 PM
//                                 </p>
//                                 <p className='text-white mb-3 m-0 p-0 font-medium text-xl'>
//                                 Saturday: 10:00 AM – 6:00 PM
//                                 </p>
//                                 <p className='text-white mb-3 m-0 p-0 font-medium text-xl'>
//                                 Sunday Closed
//                                 </p>
                            
//                         </div>
//                     </section>
//                     </div>
//                     <div className="md:w-1/3 flex-shrink-0 flex-grow-0 ">
//                     <section className='text-white '>
//                         <h2 className='text-[#9097A9] text-[24px] font-semibold pb-5 relative mb-8 leading-[34px]'> Sign Up for Newsletter </h2>
//                         <div className='text-white'>
                            
//                         </div>
//                     </section>
//                     </div>

//                 </div>
//             </div>
//         </div>

//     </footer>
      
//   )
// }

// export default FooterSection


import { faFacebookF, faLinkedin, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';

function FooterSection() {
  return (
    <footer className="bg-[#101727] relative z-[1] overflow-hidden pt-24 pb-3 px-5">
      <div className="container mx-auto relative z-[1]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 flex-shrink-0 flex-grow-0 mb-8 md:mb-0">
            <section className="text-white">
              <div className="mb-10">
                <img
                  src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/logo-white-1.png"
                  alt="logo"
                  className="max-w-full h-auto border-none"
                />
                <p className="my-8 text-white text-base md:text-[19px]">
                  Tempus nula rhoncus euismod curae masa cras justo quisque semper usto molestie primis porttitor
                </p>
                <div className="flex gap-2">
                  <Link to="#" className="inline-flex w-11 h-11 bg-[#242b3d] rounded-full items-center justify-center">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link to="#" className="inline-flex w-11 h-11 bg-[#242b3d] rounded-full items-center justify-center">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  <Link to="#" className="inline-flex w-11 h-11 bg-[#242b3d] rounded-full items-center justify-center">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  <Link to="#" className="inline-flex w-11 h-11 bg-[#242b3d] rounded-full items-center justify-center">
                    <FontAwesomeIcon icon={faSkype} />
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <div className="md:w-1/6 flex-shrink-0 flex-grow-0 mb-8 md:mb-0 md:ml-28">
            <section className="text-white">
              <h2 className="text-[#9097A9] text-xl md:text-[24px] font-semibold pb-5 relative mb-8 leading-[34px]">Company</h2>
              <ul className="m-0 p-0 list-none">
                <li className="text-white mb-4">
                  <Link to="#" className="font-medium text-base md:text-xl">Help Center</Link>
                </li>
                <li className="text-white mb-2">
                  <Link to="#" className="font-medium text-base md:text-xl">Terms</Link>
                </li>
              </ul>
            </section>
          </div>

          <div className="md:w-1/4 flex-shrink-0 flex-grow-0 mb-8 md:mb-0">
            <section className="text-white">
              <h2 className="text-[#9097A9] text-xl md:text-[24px] font-semibold pb-5 relative mb-8 leading-[34px]">Working Time</h2>
              <div className="text-white">
                <p className="text-base md:text-xl mb-3">Mon – Fri: 9:00 AM – 5:00 PM</p>
                <p className="text-base md:text-xl mb-3">Saturday: 10:00 AM – 6:00 PM</p>
                <p className="text-base md:text-xl mb-3">Sunday Closed</p>
              </div>
            </section>
          </div>

          <div className="md:w-1/3 flex-shrink-0 flex-grow-0">
            <section className="text-white">
              <h2 className="text-[#9097A9] text-xl md:text-[24px] font-semibold pb-5 relative mb-8 leading-[34px]">Sign Up for Newsletter</h2>
              <div className="text-white">
                {/* Newsletter Signup Form or Content */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
