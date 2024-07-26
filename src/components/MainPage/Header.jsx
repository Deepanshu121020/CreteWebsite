// import {Link} from 'react-router-dom'
// import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

// export default function Header() {
//     const [isSticky, setIsSticky] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
//     const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
//     const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

//     const handleScroll = () => {
//         if (window.scrollY > 50) {
//             setIsSticky(true);
//         } else {
//             setIsSticky(false);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const toggleHomeDropdown = () => {
//         setIsHomeDropdownOpen(!isHomeDropdownOpen);
//         setIsProjectsDropdownOpen(false);
//         setIsBlogDropdownOpen(false);
//     };

//     const toggleProjectsDropdown = () => {
//         setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
//         setIsHomeDropdownOpen(false);
//         setIsBlogDropdownOpen(false);
//     };

//     const toggleBlogDropdown = () => {
//         setIsBlogDropdownOpen(!isBlogDropdownOpen);
//         setIsHomeDropdownOpen(false);
//         setIsProjectsDropdownOpen(false);
//     };

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const closeMenu = () => {
//         setIsMenuOpen(false);
//     };

//     return (
//         <div className='header-section position-relative z-2'>
//             <div className="relative flex justify-center z-10">
//                 <div className="container"> 
//                     <div className='py-2 mobile-nav' >
//                         <div className="flex items-center justify-between min-h-14">
//                             <div className=" flex items-center gap-10 text-white w-1/2">
//                                 <Link to="#" className="text-lg font-semibold flex items-center">
//                                     <FontAwesomeIcon icon={faPhone} className="mr-2" />
//                                     1044123456789
//                                 </Link>
//                                 <p className="text-lg font-semibold flex items-center">
//                                     <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
//                                     27 Divil St, Berlin, Germany
//                                 </p>
//                                 <Link to="#" className="text-lg font-semibold flex items-center">
//                                     <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
//                                     info@crete.com
//                                 </Link>
//                             </div>
//                             <div className="flex items-center justify-end gap-12 text-gray-700 w-1/2">
//                                 <div className="cursor-pointer font-semibold">
//                                     <span className="text-lg">English</span>
//                                 </div>
//                                 <div className="flex items-center gap-5">
//                                     <Link to="#" className="text-gray-600">
//                                         <FontAwesomeIcon icon={faFacebookF} />
//                                     </Link>
//                                     <Link to="#">
//                                         <FontAwesomeIcon icon={faTwitter} />
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={`rounded-xl sticky top-0 z-[999999999] bg-white px-10 shadow-md header-sticky ${isSticky ? 'sticky-on' : ''}`}>
//                         <div className="flex items-center justify-between">
//                             <div className="w-1/6">
//                                 <Link to="#">
//                                     <img
//                                         className="h-auto max-w-full"
//                                         src="https://crete.themepreview.xyz/home-one/wp-content/themes/crete/assets/images/logo.svg"
//                                         alt="logo"
//                                     />
//                                 </Link>
//                             </div>
//                             <div className="w-7/12 pl-12 ">
//                                 <ul className="flex space-x-4 text-gray-700 text-xl font-semibold justify-end">
//                                     <li className="relative">
//                                         <Link
//                                             to="/"
//                                             className="block py-11 px-4 relative"
//                                             onMouseEnter={toggleHomeDropdown}
//                                             onMouseLeave={toggleHomeDropdown}
//                                         >
//                                             Home
                                            
//                                         </Link>
//                                     </li>
//                                     <li className="relative">
//                                         <Link
//                                             to="#"
//                                             className="block py-11 px-4"
//                                             onMouseEnter={toggleProjectsDropdown}
//                                             onMouseLeave={toggleProjectsDropdown}
//                                         >
//                                             Projects
//                                             <FontAwesomeIcon className='pl-2' icon="fa-solid fa-chevron-down" />
//                                             {isProjectsDropdownOpen && (
//                                                 <ul className="absolute left-0 mt-1 w-48 bg-white shadow-lg z-10 py-2 text-left top-28">
//                                                     <li>
//                                                         <Link to="#" className="block py-2 px-4">
//                                                             Submenu Item 1
//                                                         </Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link to="#" className="block py-2 px-4">
//                                                             Submenu Item 2
//                                                         </Link>
//                                                     </li>
//                                                 </ul>
//                                             )}
//                                         </Link>
//                                     </li>
//                                     <li className="relative">
//                                         <Link
//                                             to="#"
//                                             className="block py-11 px-4"
//                                             onMouseEnter={toggleBlogDropdown}
//                                             onMouseLeave={toggleBlogDropdown}
//                                         >
//                                             Blog
//                                             <FontAwesomeIcon className='pl-2' icon="fa-solid fa-chevron-down" />
//                                             {isBlogDropdownOpen && (
//                                                 <ul className="absolute left-0 mt-1 w-48 bg-white shadow-lg z-10 py-2 text-left top-28">
//                                                     <li>
//                                                         <Link to="#" className="block py-2 px-4">
//                                                             Submenu Item 1
//                                                         </Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link to="#" className="block py-2 px-4">
//                                                             Submenu Item 2
//                                                         </Link>
//                                                     </li>
//                                                 </ul>
//                                             )}
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             to="/about"
//                                             className="block py-11 px-4"
//                                         >
//                                             About
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             to="#"
//                                             className="block py-11 px-4"
//                                         >
//                                             Contact
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="w-1/4 flex justify-end">
//                                 <Link
//                                     to="#"
//                                     className="bg-blue-600 text-white py-3.5 px-9 font-bold rounded-xl overflow-hidden text-xl hidden md:block"
//                                 >
//                                     Contact Us
//                                 </Link>
//                             </div>
//                             <div className="md:hidden flex items-center">
//                                 <button onClick={toggleMenu} className="text-gray-700 text-2xl">
//                                     <FontAwesomeIcon icon="fa-solid fa-bars" />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {isMenuOpen && (
//                 <div className="fixed inset-0 bg-white z-50 md:hidden">
//                     <div className="flex justify-between items-center p-5 border-b">
//                         <Link to="#">
//                             <img
//                                 className="h-auto max-w-full"
//                                 src="https://crete.themepreview.xyz/home-one/wp-content/themes/crete/assets/images/logo.svg"
//                                 alt="logo"
//                             />
//                         </Link>
//                         <button onClick={closeMenu} className="text-gray-700 text-2xl">
//                             <FontAwesomeIcon icon="fa-solid fa-times" />
//                         </button>
//                     </div>
//                     <ul className="p-5 space-y-4">
//                         <li>
//                             <Link to="#" className="text-lg font-semibold">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="#" className="text-lg font-semibold">Projects</Link>
//                         </li>
//                         <li>
//                             <Link to="#" className="text-lg font-semibold">Blog</Link>
//                         </li>
//                         <li>
//                             <Link to="#" className="text-lg font-semibold">About</Link>
//                         </li>
//                         <li>
//                             <Link to="#" className="text-lg font-semibold">Contact</Link>
//                         </li>
//                         <li>
//                             <Link
//                                 to="#"
//                                 className="bg-blue-600 text-white py-3 px-10 font-bold rounded-xl text-center"
//                             >
//                                 Contact Us
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }



import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

export default function Header({ textColor, textColor2 }) {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="header-section position-relative z-2">
            <div className="relative flex justify-center z-10">
                <div className="container">
                    <div className="py-2 mobile-nav">
                        <div className="flex items-center justify-between min-h-14">
                            <div className={`flex items-center gap-10 text-${textColor} w-1/2`}>
                                <div className="text-lg font-semibold flex items-center">
                                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                    1044123456789
                                </div>
                                <p className="text-lg font-semibold flex items-center">
                                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                                    27 Divil St, Berlin, Germany
                                </p>
                                <div className="text-lg font-semibold flex items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                    info@crete.com
                                </div>
                            </div>
                            <div className={`flex items-center justify-end gap-12 text-${textColor2} w-1/2`}>
                                <div className="cursor-pointer font-semibold">
                                    <span className="text-lg">English</span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <span>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`rounded-xl sticky top-0 z-[9999] bg-white px-10 lg:px-44 shadow-md header-sticky ${
                            isSticky ? 'sticky-on' : ''
                        }`}
                    >
                        <div className="flex items-center justify-between z-10">
                            <div className="w-125px">
                                {/* Proper link usage for logo */}
                                <Link to="/">
                                    <img
                                        className="h-auto max-w-full"
                                        src="https://crete.themepreview.xyz/home-one/wp-content/themes/crete/assets/images/logo.svg"
                                        alt="logo"
                                    />
                                </Link>
                            </div>

                            {/* Desktop Links: Hidden on Mobile */}
                            <div className="hidden md:flex w-7/12 pl-12 justify-end">
                                <ul className="flex space-x-4 text-gray-700 text-xl font-semibold justify-end">
                                    <li className="relative">
                                        <Link to="/" className="block py-11 px-4 relative">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="relative">
                                        <Link to="/projects" className="block py-11 px-4">
                                            Projects
                                        </Link>
                                    </li>
                                    <li className="relative">
                                        <Link to="/blog" className="block py-11 px-4">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="block py-11 px-4">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="block py-11 px-4">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Desktop Contact Button */}
                            <div className="hidden md:flex w-1/4 justify-end">
                                <Link
                                    to="/contact"
                                    className="bg-blue-600 text-white py-3.5 px-9 font-bold rounded-xl overflow-hidden text-xl"
                                >
                                    Contact Us
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="md:hidden flex items-center h-[100px]">
                                <button onClick={toggleMenu} className="text-gray-700 text-2xl">
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-50 md:hidden transition-opacity duration-300 ease-in-out">
                    <div className="flex justify-between items-center p-5 border-b">
                        <Link to="/">
                            <img
                                className="h-auto max-w-full"
                                src="https://crete.themepreview.xyz/home-one/wp-content/themes/crete/assets/images/logo.svg"
                                alt="logo"
                            />
                        </Link>
                        <button onClick={closeMenu} className="text-gray-700 text-2xl">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <ul className="p-5 space-y-4">
                        <li>
                            <Link to="/" className="text-lg font-semibold" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="text-lg font-semibold" onClick={closeMenu}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="text-lg font-semibold" onClick={closeMenu}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-lg font-semibold" onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-lg font-semibold" onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="bg-blue-600 text-white py-3 px-10 font-bold rounded-xl text-center"
                                onClick={closeMenu}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

