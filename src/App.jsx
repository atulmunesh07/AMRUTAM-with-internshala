import React from 'react'
import Home from './pages/Home'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Onboarding from './pages/Onboarding'
import FAQ from './pages/FAQ'
import Testimonials from './pages/Testimonials'



function App() {
  return (
    <div>
      <NavBar></NavBar>
     
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/onboarding' element={<Onboarding></Onboarding>} />
        <Route path='/faq' element={<FAQ></FAQ>}></Route>
        <Route path='/testimonials' element={<Testimonials></Testimonials>}></Route>
        


      </Routes>

    </div>
  )
}

export default App
