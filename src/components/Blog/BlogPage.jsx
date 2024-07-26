import React from 'react'
import HeroSection from './HeroSection'
import Header from '../MainPage/Header'
import Blogs from './Blogs'
import FooterSection from '../MainPage/FooterSection'
import FooterSlider from '../AboutPage/FooterSlider'

function BlogPage() {
  return (
    <>
    <Header textColor="white" textColor2="white"/>
    <HeroSection heading={"Blog"} heading2={"Blog"} bgColor={"black"}/>
    <Blogs/>
    <FooterSlider/>
    <FooterSection/>

    </>
  )
}

export default BlogPage
