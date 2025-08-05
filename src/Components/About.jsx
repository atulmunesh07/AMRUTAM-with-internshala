import React, { useState } from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { BiCapsule } from "react-icons/bi";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { PiTreePalmLight } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { SiActigraph } from "react-icons/si";

function About() {
    const selecttime = [ {texts:"Free Call", price:" Rs.15/Min" },{texts: " Video ", price:"Rs.15/Min"} , {texts:"Chat" , price:"Rs.15/Min"}]
    const detail = [{text1:"Name :", name:'Geetanjali shah'},{text2:"Age :", age:34},{text3:"Gender :" , Gender:"Female"},{text4:"Height:", height:"134 cm"},{ text5:"weight:", weight:"64 kg"},{ text6:"Concern:", concern : "Immunity"}]

    const [isSelate,setIsSelete] = useState(null)



    return (
        <div className='mt-10'>
            <section className=" backdrop-blur-2xl relative flex flex-col items-center bg-black/70 text-white/70 pb-16 pt-8 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-3.svg')] bg-center bg-cover font-['Poppins']">
                <div>
                    <p className='font-bold text-2xl text-green-700 flex items-center justify-center'>Why Doctors Choose Us ?</p>
                    <p>Unlock the Benefits of Smarter Healthcare Management and Patient Care</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 border rounded-2xl p-2 items-center gap-20 mt-6 text-sm'>

                    <div className='relative'>
                        <div className='relative flex'>
                            <FiPhoneCall className='h-9 w-9 bg-green-600 py-2 rounded-2xl' />
                            <div className='mt-16 ml-25 flex gap-2 border py-2 px-2 rounded'>
                                <img src="Doctor4.png" alt="" className='h-19 rounded-sm' />
                                <div className='items-start'>
                                    <p className='font-bold'>Dr. Prerna Narang</p>
                                    <p className='flex items-center justify-center gap-2'><span><BiCapsule /></span>Gynecology +2 others</p>
                                    <p className='flex items-center  gap-2'><span><LiaGraduationCapSolid /></span>7 year Experience </p>
                                </div>
                            </div>



                        </div>
                        <div className='mt-10 mr-30  flex flex-col items-center  py-1 px-1 rounded w-auto text-sm'>
                            <p>Connecting....</p>
                            <img src="Doctor4.png" alt="" className='h-12 rounded-sm w-12' />

                            <p>You,ll receive a call shortly from</p>
                            <p className='items-center justify-center flex'>+91 7314855977.this call will be recorded for <br /> </p>
                            <p>You to review later</p>


                        </div>
                    </div>
                    <div className='w-150 text-xl'>
                        <p className='text-green-600'>Instant <span className='font-bold'> FREE</span> 5-mins Call</p>
                        <p>we understand the importance of building trust with your patients.That,s why Amrutam offers a <span className='font-bold text-green-600'>free 5-minute call</span> helping you connect instantly and foster lasting patient relationships with ease</p>
                    </div>

                </div>
{/* ==============second=================== */}
                <div className='grid grid-cols-1 '>               
                     <div className='flex gap-20 items-center '>
                    {/* ======================text=========== */}
                    <div className='w-90'>
                        <p className='font-bold text-green-600'>Forum for Meaningful Connections</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus expedita architecto itaque? Quidem veniam aspernatur, necessitatibus deleniti ullam sed ratione laudantium explicabo voluptatem nostrum! Dolor aperiam iure repudiandae hic illo.</p>

                    </div>

                    {/* ======================icon========= */}
                    <div className='relative  grid mt-6 grid-cols-1'>
                        <div>
                            <PiTreePalmLight  className='h-10  w-10 bg-green-600 rounded-[50%] ml-10'/>
                        </div>
                        {/* =============end icons======= */}
                        

                        <div className='ml-100 absolute  bg-amber-50/10 p-6 rounded '>
                            <div className='border-b flex gap-20  px-14 '>
                                <p className='text-green-600'>Question</p>
                                <p>Thoughts</p>
                            </div>
                            <div className='flex gap-12 mt-5 '>
                                <div className='flex items-center gap-2 '>
                                <img src="Doctor3.png" alt=""  className='h-12 w-12 rounded-[50%]'/>
                                <p>Priya Shing</p>
                                </div>
                                <button className='bg-green-700 px-5 py-2 rounded'>Ask Question</button>
                            </div>
                            <p className='border-b mt-2'></p>
                            <div>
                                <div className='mt-2 flex items-center gap-2'>
                                    <SiActigraph  className='border h-10 w-10 rounded-[50%] p-1'/>
                                    <div>
                                        Anonymous
                                    </div>
                                </div>
                                <p><span className=''>Question :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quaerat ab, rem fugiat nemo quia exercitationem, eligendi, ipsum deserunt dolor voluptatem placeat voluptatum cupiditate ipsam totam unde ad libero autem?</p>
                            </div>
                        </div>

                        {/* =============short profile============== */}
                        <div className='bg-amber-50/10 px-3 py-2 rounded ml-10 mt-30'>
                            <p>Form</p>
                            <div className='border px-10 gap-10 rounded items-center justify-around py-1 flex'>
                                <button className='text-green-600'>Question</button>
                                <button className='bg-black px-5 py-1 rounded-2xl '>Thoughts</button>
                            </div>
                            <div className='flex items-center mt-3'>
                                <img src="Doctor4.png" alt="" className='h-8 w-8 rounded-[50%]'/>
                                <div className='flex items-center gap-35'>
                                    <p className='ml-3'>Dr.Marium Roy</p>
                                    <CiMenuKebab />
                                </div>
                                
                            </div>
                            <div className='w-75 mt-2'>
                                    <p><span className='font-bold text-green-700'>Thought:</span> Can Anyurveda help with stress and  mental health issues</p>
                                    <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laudantium aliquid, assumenda cumque officiis sapiente repellendus modi, rem tenetur, ut illo veniam dolorum itaque aliquam fugit veritatis corrupti a. Perferendis.</p>
                                </div>
                            <div>

                            </div>
                        </div>
                        {/* =========end===== */}

                        

                    </div>
                </div>
                </div>
                {/*  ===========end second============= */}

                {/* ==================Thead=================== */}

                <div className='grid grid-cols-1 md:grid-cols-2 border rounded-2xl p-2 items-center gap-20 mt-6 text-sm'>

                    <div className='relative'>
                        <div className='relative flex'>
                            
                            <div className='mt-16 ml-25  gap-2  py-2 px-2 bg-amber-50/10 rounded '>
                                <p  className='font-bold text-xl'>Select your mode of session <span className=''></span></p>
                                <div className='flex gap-13 '>
                                    {
                                        Object.entries(selecttime).map(([key,times])=>(
                                           <button key={key}
                                           onClick={()=>setIsSelete(key)}
                                           className={`border h-15 w-20 rounded mt-2 cursor-pointer justify-center items-center ${isSelate === key ? ("bg-green-500 font-bold text-white border-none") : " "}`}
                                           >
                                            <p className='items-centers justify-center flex'>{times.texts}</p>
                                            <p>{times.price}</p>
                                           </button>
                                        ))
                                    }
                                    
                                </div>
                            </div>



                        </div>
                        <div className='mt-10 mr-30  flex flex-col items-center  py-1 px-1 rounded w-auto text-sm'>
                            <p className='font-bold'>Hi, Dr.Prerna, her are my details</p>
                            <div>
                                {detail.map((items)=>(
                                    <div>
                                       <p>{items.text1} {items.name}</p>
                                       <p>{items.text2} {items.age}</p>
                                       <p>{items.text3} {items.Gender}</p>
                                       <p>{items.text4} {items.height}</p>
                                       <p>{items.text5} {items.weight}</p>
                                       <p>{items.text6} {items.concern}</p>
                                       
                                
                                 </div>
                                ))
                                }
                            </div>


                        </div>
                    </div>
                    <div className='w-150 text-xl'>
                        <p className='text-green-600'>Instant <span className='font-bold'> FREE</span> 5-mins Call</p>
                        <p>we understand the importance of building trust with your patients.That,s why Amrutam offers a <span className='font-bold text-green-600'>free 5-minute call</span> helping you connect instantly and foster lasting patient relationships with ease</p>
                    </div>

                </div>
                

            </section>

        </div>
    )
}

export default About
