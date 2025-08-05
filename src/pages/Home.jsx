import React from 'react'
import HeroSection from '../Components/HeroSection'
import Featured from '../Components/Featured'
import Footer from '../Components/Footer'
import About from '../Components/About'

function Home() {
  return (
    <div className="h-64 sm:h-80 md:h-[500px] bg-cover bg-center" style={{backgroundImage: "url('image.png')"}}>
      <HeroSection></HeroSection>
      <Featured></Featured>
      <About></About>
      <Footer></Footer>
    </div>
  )
}

export default Home
