import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import AboutUs from './AboutUs'
import ServiceSection from './ServiceSection'
import TickerSection from './TickerSection'
import ExpertsSection from './ExpertsSection'
import ContactSection from './ContactSection'
import FooterSection from './FooterSection'

function MainPage() {
  return (
    <>
    <Header textColor='white'/>
    <HeroSection/>
    <AboutUs/>
    <ServiceSection/>
    <TickerSection/>
    <ExpertsSection/>
    <ContactSection/>
    <FooterSection/>
    </>
  )
}

export default MainPage