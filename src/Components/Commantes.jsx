import React from 'react'
import Card2 from '../aother/Card2'

function Commantes() {
  return (
    <div className='items-center justify-center flex flex-col'>
        <div className='mt-10'>
            <h1 className='items-center font-bold text-2xl text-green-600 justify-center flex'>What other Ayurvedic Doctors are Saying</h1>
            <p className='flex items-center justify-center font-bold'>Trusted by experts - Hear what Ayurvedic doctor say about Amrutam </p>
        </div>
        <div className=' gap-5 items-center grid grid-cols-1 md:grid-cols-3'>
            <Card2 h={57} w={100}></Card2>
            <Card2 h={60} w={100}></Card2>
            <Card2 h={57} w={100}></Card2>


        </div>
      
    </div>
  )
}

export default Commantes
