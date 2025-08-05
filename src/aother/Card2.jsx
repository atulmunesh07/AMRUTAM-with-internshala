import React from 'react'
import { FaRegStar } from "react-icons/fa";

function Card2({h,w}) {
  return (
    <div>
        <div className={`border rounded w-${w} h-${h} items-center justify-center p-3 mt-5 hover:bg-gray-400/70 duration-700 hover:border-none cursor-pointer`}>
            <div className='flex gap-5'>
                <img src="Doctor2.png" alt=""  className='h-10 rounded-[50%]'/>
                <div>
                    <p><span className='text-green-500'>Dr.Rajesh Iyer</span> , Ayurveduc Practitioner</p>
                    <FaRegStar />
                </div>
            </div>
            <div>
                <p className='items-center justify-center flex text-lg mt-5'>
                    'Amrutam beautifully bridegs the age between traditional Ayurveduc and modrn wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle'
                </p>
            </div>

        </div>
      
    </div>
  )
}

export default Card2
