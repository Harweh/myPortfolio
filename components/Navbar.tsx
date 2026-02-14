'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        {name: 'Home', href: '/'},
        {name: 'About', href: '/about'},
        {name: 'Projects', href: '/projects'},
        {name: 'Blog', href: '/blog'},
        {name: 'Contact', href: '/contact'},
    ]

    return (
        <nav className={`fixed top-0 w-full  md:w-full lg:w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-lg shadow-purple-500/10' : 'bg-transparent'
        }`}>
            <div className="w-full relative mx-auto px-2 lg:px-8">
                <div className="flex items-center justify-between h-15 md:h-20 lg:h-20">

                        {/* logo */}
                        <Link href="/" className='group flex md:px-2 lg:px-2 items-center space-y- md:space-y-2 lg:space-y-1'>
                            <div className="relative">
                                <div className="w-22 md:w-27 lg:w-27 h-8 md:h-12 lg:h-12 pb-2 bg-gradient-to-br from-black-700 to-green-700 rounded-xl flex 
                                    items-center justify-center transfomr group-hover:scale-110 transition-transform duration-300">
                                    <span className='text-white font-bold texts-sm sm:text-sm md:text-xl lg:text-xl pt-3.5'>EMMY.Dv</span>
                                </div>
                                {/* glow effect */}
                                <div className="absolute inset-0 bg-graadient-to-br from-purple-500 to-pink-500 rounded-xl
                                    blur-md opacity-50 ground-hover:opacity-75 ta=ransition-opacitty -z-0"></div>
                            </div>
                            <span className="text-xl font-bold text-white hidden sm:block"></span>
                        </Link>

                    {/* Desktop nav */}
                    <div className=" max-w-7xl hidden md:flex items-center space-x-6">
                        {navLinks.map((link, index) => (
                            <Link
                                key={`${link.name}-${index}`}
                                href={link.href}
                                className='relative px-4 py-2 text-gray-300 hover:text-white transition-colors group'>
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r  from-black-500 to-green-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Cta button - desktop */}
                    {/* <div className="relative md:flex items-center">
                        <Link
                            href="/contact"
                            className='relative px-6 py-2.5 bg-gradient-to-r  from-green-500 to-black text-white front-semibold rounded-xl overflow-hidden group hover:from-pink-400'>
                                <span className="relative w-12 h-12 z-10">Get in Touch</span>
                                shinning effect
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent translate-x-[-100%] group-hover:translate-x-[-100%] transition duration-700">
            
                                </div>
                        </Link>
                    </div> */}
                


                    {/* mobile menu button */}

                        <div className="md:hidden relative flex items-center gap-5 ">
                        <Link
                            href="/contact"
                            className='relative px-4 py-2 bg-gradient-to-r from-green-500 to-black text-white front-semibold rounded-xl overflow-hidden group hover:from-pink-400'>
                                <span className="relative  z-10">Get in Touch</span>
                                {/* shinning effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent translate-x-[-100%] group-hover:translate-x-[-100%] transition duration-700">
            
                                </div>
                        </Link>

                        <button onClick={() => setIsOpen(!isOpen)} 
                            className='md:hidden relative w-10 h-10 text-gray-300 hover:text-white transition-colors focus:outline-none'
                            aria-label='Toggle menu'>
                                {isOpen ? <X size={22} /> : <Menu size={22}/>}
                        </button>
                    </div>
                    
                        {/* <button onClick={() => setIsOpen(!isOpen)} 
                            className='md:hidden relative w-10 h-10 text-gray-300 hover:text-white transition-colors focus:outline-none'
                            aria-label='Toggle menu'>
                                {isOpen ? <X size={24} /> : <Menu size={24}/>}
                        </button> */}
                </div>
            </div>

            {/* mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="px-4 pt-2 pb-6 space-y-2 bg-gray-900/95 backddrop-blur-lg borger-t border-gray-800">
                                {navLinks.map((link) => (
                                    <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={()=> setIsOpen(false)}
                                    className='block px-4 py-3 text-gray-300 hover:bg-gray-800/50 rounded-lg transition-all'>
                                        {link.name}
                                    </Link>
                                ))}
            {/* mobile */}
                        <Link href="/contact"
                        onClick={() => setIsOpen(false)}
                        className='block px-4 py-3 bg-gradient-to-r from-green-500 to-black text-white text-center font-semibold rounded-lg mt-12 '>
                            Get in Touch
                        </Link>
                </div>
            </div>
        </nav>
    );
}

