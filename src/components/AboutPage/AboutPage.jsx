import React from 'react'
import BreadcrumbSection from './BreadCrumbSection';
import BrandSection from './BrandSection'
import FooterSlider from './FooterSlider'
import Header from '../MainPage/Header'
import FooterSection from '../MainPage/FooterSection'
import ServiceSection from '../MainPage/ServiceSection'
import AboutUs2 from './AboutUs2'

function AboutPage() {
  return (
    
    <>
    <Header textColor={"white"} textColor2={"white"}/>
    <BreadcrumbSection/>
    <FooterSlider/>  
    <AboutUs2/>
    <ServiceSection />  
    <BrandSection/>
    <FooterSection/> 
    </>
  )
}

export default AboutPage
