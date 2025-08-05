import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { TiThMenuOutline } from "react-icons/ti";

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const PathID = [
        { labelID: 'About Us', path: '/' ,scrollToTop:true },
        { labelID: 'Onboarding', path: '/onboarding' ,scrollToTop:true},
        { labelID: 'FAQ', path: '/faq' ,scrollToTop:true},
        { labelID: 'Testimonials', path: '/testimonials',scrollToTop:true }
    ];


    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                !e.target.closest('#mobileMenu') &&
                !e.target.closest('#menuToggle')
            ) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);
    return (
        <div>
            {/* Navbar */}
            <nav className="fixed top-9 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-sm flex items-center border mx-4 max-md:w-[95%] max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-white text-sm transition-all">

                <a href="/">
                    {/* Logo */}
                    <h1 className='font-bold text-green-500 text-gap-2'>AMRUTAM</h1>
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-6 ml-7">
                    {PathID.map((items) => (
                        <Link key={items.labelID} to={items.path} className="relative overflow-hidden h-6 group">
                            <span className="block group-hover:-translate-y-full transition-transform duration-300">{items.labelID}</span>
                            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
                                {items.labelID}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA Buttons */}
                

                {/* Mobile Menu Button */}
                <button id="menuToggle" className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <TiThMenuOutline />
                </button>

                {/* Mobile Menu */}
                <div
                    id="mobileMenu"
                    className={`${isMobileMenuOpen ? 'flex' : 'hidden'} absolute top-0 left-0 bg-black/70 backdrop-blur-lg  w-full h-screen flex-col items-center justify-center gap-4 z-50`}
                >
                    {PathID.map((item) => (
                        <Link key={item.labelID} to={item.path} className="hover:text-indigo-600" onClick={() => setIsMobileMenuOpen(false)}>
                            {item.labelID}
                        </Link>
                    ))}
                    
                    
                </div>
            </nav>

            



        </div>
    )
}

export default NavBar
