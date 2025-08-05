import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const Doctor = ['Doctor1.png', 'Doctor2.png', 'Doctor3.png', 'Doctor4.png']


  return (
    <section className=" backdrop-blur-2xl relative flex flex-col items-center bg-black/70 text-white/70 pb-16 pt-8 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-3.svg')] bg-center bg-cover font-['Poppins']">



      {/* Top CTA */}
      <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-2 text-sm mt-24">
        <p>Namaste , <span className='font-bold'>Welcome</span> to <span className='text-green-500 font-bold'>Amrutam</span></p>
        <Link to={"#"} className="flex items-center gap-1 font-medium">
          , Read more
          <FaArrowCircleRight />
        </Link>
      </div>

      {/* Hero Heading */}
      <h1 className="text-4xl md:text-6xl text-center font-semibold  mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text">
        Join Amrutam - <span className='text-green-500'>Grow Your Practice</span>
      </h1>
      <p className="text-slate-300 md:text-base line-clamp-3 max-md:px-2 text-center max-w-2xl mt-3">
        Connect with more patients ,set your own schedule, and grow your practice with Amrutam. Our platform is designed to help you manage your practice efficiently while providing the best care to your patients.
      </p>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-2 mt-8 text-sm items-center justify-center">
        <div className='items-center justify-center'>
        <button className="py-4 px-19 rounded-2xl font-bold text-white bg-green-500 items-center justify-center">
          Join Now..
        </button>
        </div>

        <div className='flex items-center justify-center gap-2   px-4 py-2'>
          <p className='items-center justify-center '><span className='font-bold text-green-500 text-2xl items-center justify-center'>500+</span> <br /> Average Active <br /> User</p>
          <p className=' h-20 border border-green-700 w-0'></p>
          <p><span className='font-bold text-green-500 text-2xl'>40+</span> <br /> Average daily free <br /> calls</p>
        </div>

      </div>

      <div aria-label="Photos of leaders" className="mt-12 flex max-md:overflow-x-auto grid-flow-col gap-6 items-center justify-center max-w-4xl w-full pb-">
        {Doctor.map((src, i) => (
          <img key={i} src={src} alt={`Leader ${i + 1}`} className="w-46  h-50 grid grid-cols-3 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" />
        ))}
      </div>
    </section>
  );
}
