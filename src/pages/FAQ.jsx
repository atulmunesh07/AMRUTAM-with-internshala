import React from 'react'
import Footer from '../Components/Footer'
import { IoAddSharp } from "react-icons/io5";
import { RiTreeFill } from "react-icons/ri";
import Cards from '../aother/Cards';
import { IoIosCall } from "react-icons/io";
import { IoIosWallet } from "react-icons/io";
import { CiDollar } from "react-icons/ci";
import Connect from '../Components/Connect';

function FAQ() {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "What is Amrutam?",
            answer: "To use this component, you need to import it in your project and use it in your JSX code. Here's an example of how to use it:",

        },
        {
            question: "How does Amrutam help me grow as a practitioner?",
            answer: "Yes, there are many other components available in this library. You can find them in the 'Components' section of the website.",

        },
        {
            question: "How do i become a part of Amrutam Doctor?",
            answer: "Yes, all components are responsive and can be used on different screen sizes.",
        },
        {
            question: "What is Amrutam Global as a platform?",
            answer: "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website.",
        },
        {
            question: "What documents do I need to provide ? ",
            answer: "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website.",
        },
        {
            question: "Is there a free to join Amrutam ?",
            answer: "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website.",
        },
    ];
    return (
        <div>
            <section className=" backdrop-blur-2xl relative flex flex-col items-center bg-black/70 text-white/70 pb-16 pt-8 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-3.svg')] bg-center bg-cover font-['Poppins']">
                <div>
                    <h1 className='text-2xl  md:text-3xl text-center font-semibold  mt-25 bg-gradient-to-r text-green-500'>
                        Frequently Asked Questions
                    </h1>
                    <p className='text-slate-300 md:text-base line-clamp-3 max-md:px-2 text-center max-w-2xl mt-3'>
                        Find quick answers to common questions to help you navigate the app and its features easily
                    </p>
                </div>


                <div className='mt-4 md:mt-10 items-center justify-center'>

                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0">
                        {/* ==============image=================== */}
                        <img
                            className="max-w-sm w-full rounded-xl h-auto"
                            src="Doctor4.png"
                            alt=""
                        />
                        {/* ========================image */}

                        {/* ======================Text ============================================= */}
                        <div>
                            {faqs.map((faq, index) => (
                                <div className="border-b border-slate-200 py-4 cursor-pointer" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-base font-medium">
                                            {faq.question}
                                        </h3>
                                        <IoAddSharp className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 text-amber-50 ease-in-out`}>

                                        </IoAddSharp>
                                    </div>
                                    <p className={`text-sm text-white transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}


                        </div>
                        {/* ===================end text================================= */}
                    </div>
                    <div className='flex items-center justify-center mt-6'>
                        <button className='py-4 px-7 transition duration-500 bg-green-700   hover:bg-green-500 text-xl font-bold rounded-2xl'>See More</button>
                    </div>
                </div>

                {/* ==========app=============== */}

                <div className='backdrop-blur-2xl mt-8 w-full h-auto   border rounded-2xl relative flex flex-col items-center bg-gray-500/90 text-white/70 pb-16 pt-8 bg-[url(image.png)] bg-center bg-cover ]'>
                    <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0  '>
                        {/* ==========text part==== */}
                        <div className=''>
                            <p className='text-green-500 font-bold text-5xl '>Get Started Today- <br />
                                Download the App Now !
                            </p>
                            <p className='text-white'>simplify consultations, manage patients, and <br />
                                grow your practice - all in one place
                            </p>
                            <div className='grid grid-rows-1 md:grid-cols-2 gap-4'>

                                <Cards icons={<RiTreeFill className='h-10 w-auto text-green-600 ' />} title={"Build Trust and Community with Forum"}></Cards>
                                <Cards icons={<IoIosCall className='h-10 w-auto text-green-600' />} title={'Attract Patients with 5-minute Free call'} ></Cards>
                                <Cards icons={<IoIosWallet className='h-10 w-auto text-green-600' />} title={'Instant Access to Your Earning with wallet '} ></Cards>
                                <Cards icons={<CiDollar className='h-10 w-auto text-green-600' />} title={'Earn More with Pay Per Conversation'}></Cards>
                                
                            </div>
                            <div className='mt-2 flex'>
                                <img src="google.png" alt="" className='h-15 px-6 rounded-sm w-auto bg-black' />
                                <img src="apple.png" alt="" className='h-15 w-auto gap-2'  />
                            </div>


                        </div>
                        {/* ====end text ======== */}
                        <div>
                            <img src="Doctor5.png" alt="" className='h-100 max-h-100' />
                            
                        </div>
                    </div>

                </div>
                {/* ================end app====== */}
                


            </section>
            <Connect></Connect>
            <Footer></Footer>


        </div>
    )
}

export default FAQ
