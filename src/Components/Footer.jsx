import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    const linkSections = [
        {
            title: "Information",
            links: ["About Us", "Terms and Conditions", "Privacy Policy", "Privacy Policy Mobile App", "Shipping  and Return Policy", "International Delivery", "For Business , Hotels and Resorts"]
        },

        {
            title: "Follow Us",
            links: [<FaFacebookSquare className='h-8 w-auto hover:bg-green-500' />, <FaTwitter className='h-8 w-auto hover:bg-green-500' />, <CiLinkedin className='h-8 w-auto hover:bg-green-500' />, <FaYoutube className='h-8 w-auto hover:bg-green-500' />, <FaInstagramSquare className='h-8 w-auto hover:bg-green-500' />]
        }
    ];

    return (
        <div>
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 shadow shadow-amber-50 mt-2">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                    <div className='text-white'>
                        <h1 className='font-bold  text-green-500 text-4xl text-gap-2 mt-4'>AMRUTAM</h1>
                        <p className='font-bold text-2xl text-green-300 mt-2'>Get in touch</p>
                        <p>support@amrutam.global</p>
                        <p>Amrutam Pharmaceuticals Pvt Ltd</p>
                        <p>chitragupt ganj, Nai Sadak, Lashkar, <br /> Gwalior- 474001</p>
                        <p>+91 9713171999</p>
                    </div>
                    <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                        {linkSections.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-2xl text-green-400 md:mb-5 mb-2">{section.title}</h3>
                                <ul className="text-sm space-y-1 ">
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <div className='display flex items-center gap-2'>
                                                <Link href="#" className="flex">{link}</Link>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                    Copyright 2025 © <a href="#">munesh</a> All Right Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer
