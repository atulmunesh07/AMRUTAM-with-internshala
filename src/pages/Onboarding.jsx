import React from 'react'
import Footer from '../Components/Footer'
import Connect from '../Components/Connect'
import { useNavigate } from 'react-router-dom'
import Smallnav from '../Components/Smallnav'
import Commantes from '../Components/Commantes'

function Onboarding() {

  const naviget = useNavigate()

  

  const staps = [
    {
      Step: "Step 1 : Get Your referral code",
      details: "Contact us to receive your unique referral code"
    },
    {
      Step: "Step 2:Register on Amrutam",
      details: "Sign up on the Amrutam Doctors app or website to join our specialist network"
    },
    {
      Step: "Step 3 : Complete KYC",
      details: "Fill in your details and upload the required documents for verification"
    },
    {
      Step: "Step 4 : Start consulting ",
      details: "Once verified, begin offering consultations and helping patients"
    }
  ]



  return (
    <div>
      <section className=" backdrop-blur-2xl relative flex flex-col items-center bg-black/70 text-white/70 pb-16 pt-8 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-3.svg')] bg-center bg-cover font-['Poppins']">
        <div className='mt-20'>
          <h1 className='font-bold text-3xl tracking-wider text-green-700'>Join Our Circle Of Care</h1>
          <p className='tracking-wider'>Becoming a part of <span className='text-green-700 tracking-wider font-bold'>Amrutam</span> is simple</p>

        </div>
        <div className='flex flex-col md:flex-row items-center justify-between gap-10 mt-10 px-4 md:px-16 lg:px-24 xl:px-32'>
          <div>
            {staps.map((items) => (
              <div key={items} className='flex flex-col items-start justify-center w-full border mt-10 p-2 hover:rounded-xl'>
                <h2 className='text-xl font-bold text-white'>{items.Step}</h2>
                <p className='text-sm text-gray-300 mt-2'>{items.details}</p>
              </div>

            ))}


          </div>
          <div className='border rounded-2xl  backdrop-blur-2xl p-5 mt-5 relative   '>

            <div className=' rounded-2xl  p-2'>
              <h1 className='text-green-500 '>Become An  Amurtam Doctor</h1>
              <img
                onClick={() => { naviget("/faq") }}
                src="screensh.png" alt="" className='h-89 rounded-2xl cursor-pointer' />
            </div>

          </div>
        </div>


        <div>
          <Smallnav></Smallnav>
          <Commantes></Commantes>

        </div>


      </section>
      <Footer></Footer>

    </div>
  )
}

export default Onboarding
