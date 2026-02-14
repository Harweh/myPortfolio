import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";


import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900/90 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-12 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {/* brand section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-2">
                            <div className="w-9 md:w-12 lg:w-12 h-8 md:h-10 lg:h-10 bg-gradient-to-br from-black-500 to-green-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm md:text-lg lg:text-lg pt-0.5">E.D</span>
                            </div>
                            <span className="text-sm md:text-xl lg:text-xl font-bold text-white pt-0.5 md:pt-0 lg:pt-0">EMMY.Dev</span>
                        </div>
                        <p className="text-gray-400 mb-2 md:mb-4 lg:mb-4 max-w-md">
                            Building modern web application with cutting-edge technologies. 
                            Lets create somrthing amazing together!
                        </p>

                        {/* social LINKS */}
                        <div className="flex space-x-2 md:space-x-4 lg:space-x-4 gap-2 md:gap-4 lg:gap-4">
                            <a href="https://"
                            target="_blank"
                            rel="noonpener noreferrer"
                            className="text-white hover:text-black transition-colors"
                            >
                                <Github size={15} />
                            </a>

                            <a href="https://"
                            target="_blank"
                            rel="noonpener noreferrer"
                            className="text-white hover:text-black transition-colors"
                            >
                                <Linkedin size={15} />
                            </a>

                            <a href="https://twitter.com/"
                            target="_blank"
                            rel="noonpener noreferrer"
                            className="text-white hover:text-black transition-colors"
                            >
                                <Twitter size={15} />
                            </a>
                        
                            <a href="https://mail.com/"
                            target="_blank"
                            rel="noonpener noreferrer"
                            className="text-g hover:text-black transition-colors"
                            >
                                <Mail size={15} />
                            </a>
                        </div>
                    </div>

                    {/* quick links */}
                    <div className="">
                        <h3 className="text-white font-semibold mb- md:mb-4 lg:mb-4">
                            <ul className="space-y-1">
                                <li>
                                    <Link href="/about" className="text-gray-400 hover:text-black transition-colors">About</Link>
                                </li>
                                <li>
                                    <Link href="/project" className="text-gray-400 hover:text-black transition-colors">Project</Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-gray-400 hover:text-black transition-colors">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-400 hover:text-black transition-colors">Contact</Link>
                                </li>
                            </ul>
                        </h3>
                    </div>

                    {/* contact info */}
                    <div>
                        <h3 className="text-white font-bold mb-2 md:mb-4 lg:mb-4">Get in Touch</h3>
                        <ul className="space-y-1 md:space-y-2 lg:space-y-2 text-gray-400">
                                <li>e.awetobi@gmail.com</li>
                                <li>+234-810-560-2133</li>
                                <li>Lagos, Nigeria.</li>
                            </ul>
                    </div>

                </div>

                {/* Button bar */}
                <div className="mt-6 md:mt-12 lg:mt-12 pt-4 md:pt-8 lg:pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            &copy;2026 Awe Emmanuel Oluwatobi. All Rrights Reserved.
                        </p>
                        <div className="flex space-x-6 mt-2 md:mt-0 ">
                            <Link href="/privacy" 
                            className="text-gray-400 hover:text-white text-sm transition-colors">
                                Privaacy Policy
                            </Link>
                            <Link href="/terms" 
                            className="text-gray-400 hover:text-white text-sm transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer