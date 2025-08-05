import React from 'react'
import { CgCrown } from "react-icons/cg";

function Featured() {


    return (
        <div>
            <section className=" backdrop-blur-2xl relative flex flex-col items-center bg-black/70 text-white/70 pb-16 pt-8 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-3.svg')] bg-center bg-cover ]">
                <h1 className='text-2xl font-bold text-green-500'>Featured</h1>
                <p>Recognized and celebrated by leading publications - <span className='font-bold text-green-600'> Amrutam</span> in the spotlight</p>

                <div className='flex flex-row items-center justify-center mt-8 gap-10 cursor-pointer'>
                    <div><h1 className='text1 text-2xl'>THE TIME OF INDIA</h1></div>
                    <div><h1 className='font-bold text-4xl text-red-600'>YOURSTORY</h1></div>
                    <div><p className='font-bold text-2xl items-center justify-center'><span className='text-pink-600'>Living</span> <span className='text-black'>etc</span></p></div>
                    <div><img src="fashion.png" alt="" className='h-15 w-auto' /></div>
                    <div><img src="traveller.png" alt=""  className='h-20 w-auto text-white' /></div>
                    <div> <img src="Gq.png" alt=""  className='h-20 w-auto'/>
                    </div>
                    <div><img src="life.png" alt="" className='h-20 w-auto text-white bg-white' /></div>





                </div>

            </section>

        </div>
    )
}

export default Featured
