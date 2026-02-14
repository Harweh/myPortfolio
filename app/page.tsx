/* eslint-disable react/no-unescaped-entities */
import { ArrowRight, Sparkles, Code, Zap, X, Mail } from 'lucide-react';
import Link from "next/link";
// import { BsWhatsapp } from 'react-icons/bs';
// import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';
// import { SlSocialTwitter } from 'react-icons/sl';


export default function Home() {
    return (
        <div className="max-h-screen bg-gradient-to-br from-gray-900 via-gray-900/20 to-grey-900 relative overflow-hidden pt-32 md:pt-55 lg:pt-115">

            {/* Main Content */}
            <div className="relative z-10 flex item-center justify-center min-h-screen px-16 pt-8  md:pt-16 lg:pt-20 py-8 ">
                <div className="max-w-5xl w-full text-center space-y-6 ">

                    {/* welcome Badge */}
                    <div className="inline-flex items-center justify-center gap-3 px-2 md:px-4 lg:px-6 py-2 md:py-4 lg:py-4 
                            bg-white/5 backdrop-blur-lg border border-white/10 rounded-full text-sm md:text-xl lg:text-xl text-gray-300 mb-8 animate-fade-in">
                        <Sparkles className="w-4 md:w-6 lg:w-8 h-4 text-green-400" />
                        <span>Welcome to my portfolio</span>
                    </div>
                    
                    {/* main heading */}
                    <h1 className="text-xl md:text-6xl lg:text-6xl font-bold animate-fade-in-up">
                        <span className="block bg-gradient-to-r from-white-400 to-green-400 to-black-400 bg-clip-text text-transparent md:mb-2 lg:mb-4">Hello, I'm</span>
                        <span className="block text-gray-500">Emmanuel Oluwatobi Awe.</span>
                    </h1>

                    {/* subtitle */}
                    <p className="text-sm md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-faded-in-up animation-delay-200">
                        <span className=" bg-gradient-to-r from-green-400 to-black-400 to-green-400 bg-clip-text text-transparent"> Full-stack developer </span> 
                        crafting beautiful, functional web applications with
                        modern technologies and creative solutions.

                    </p>

                    {/* feature tags */}
                    <div className="flex flex-wrap flex-col-3 md:flex-col-3 lg:flex-col-3 justify-center text-sm md:text-base lg:text-base gap-2 md:gap-4 lg:gap-5 md:pt-4 lg:pt-4 animate-fade-in-up animation-delay-400">

                        <div className="dlex items-center gap-2 px-2 md:px-4 lg:px-4 py-1 md:py-2 lg:py-2 bg-purple-500/10 border-pink-500/20 rounded-lg">
                            <Code className="w-5 h-5 text-blue-400" />
                            <span className="text-gray-300">Clean Code</span>
                        </div>
                        <div className="dlex items-center gap-2 px-2 md:px-4 lg:px-4 py-1 md:py-2 lg:py-2 bg-purple-500/10 border-pink-500/20 rounded-lg">
                            <Zap className="w-5 h-5 text-yellow-400"/>
                            <span className="text-gray-300 ">Fast Performance</span>
                        </div>
                        <div className="dlex items-center gap-2 px-2 md:px-6 lg:px-4 py-1 md:py-2 lg:py-2 bg-purple-500/10 border-pink-500/20 rounded-lg">
                            <Sparkles className="w-5 h-5 text-green-400"/>
                            <span className="yext-gray-300">Modern Design</span>
                        </div>

                    </div>

                    <div className="">
                        <div className="flex items-center justify-center pt-2 md:pt-6 lg:pt-6 space-x-4 gap-2 md:gap-4 lg:gap-6">
                            <a href="https://github.com/Harweh"
                                target="_blank"
                                rel="noonpener noreferrer"
                                className="text-white hover:text-black transition-colors"
                            >
                                <SiGithub className='size-5 md:size-10 lg:size-10' />
                            </a>

                            <a href="https://www.linkedin.com/in/emmanuel-awe-831236273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank"
                                rel="noonpener noreferrer"
                                className="text-blue-500 hover:text-gray-500 transition-colors"
                                >
                                    <SiLinkedin size={20} className='size-5 md:size-10 lg:size-10' />
                            </a>

                            <a href="https://mail.google.com/mail/u/1/#inboxm"
                                target="_blank"
                                rel="noonpener noreferrer"
                                className="text-g hover:text-gray-500 transition-colors"
                                >
                                    <Mail size={20} className='size-5 md:size-10 lg:size-10' />
                            </a>

                            <a href="https://wa.me/2347050411114"
                                target="_blank"
                                rel="noonpener noreferrer"
                                className="text-green-500 hover:text-gray-500 transition-colors"
                                >
                                    <SiWhatsapp size={20} className='size-5 md:size-10 lg:size-10' />
                            </a>
                        
                            <a href="https://x.com/Emmy_Dev22"
                                target="_blank"
                                rel="noonpener noreferrer"
                                className="text-g hover:text-gray-500 transition-colors"
                                >
                                    <X size={20} className='size-5 md:size-10 lg:size-10' />
                            </a>
                        </div> 
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row md:flex-col-2 lg:flex-col-2 gap-2 md:gap-4 lg:gap-4 justify-center items-center pt-2 md:pt-6 lg:pt-6 animte-fade-on-up animation-delay-600">
                        {/* primary button */}
                        <Link href="/projects"
                            className="relative px-3 md:px-6 lg:px-8 py-2.5 md:py-4 lg:py-4 bg-gradient-to-r from-black-500 to-green-500 te-black-500 text-white font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                                <span className="relative z-10 flex items-center gap-2">
                                    View My Work
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 "></div>
                        </Link>

                        {/* secondary link */}
                        <Link href="/contact" 
                            className="group px-1 md:px-6 lg:px-8 py-2.5 md:py-4 lg:py-4 bg-white/5 backdrop-blur-lg border-2 border-white/10 text-white font-semibold rounded-xl hover:border-white/20 transition-all">
                            <span className="relative z-10 flex items-center gap-2">
                                Connect with me
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </span>
                        </Link>
                    </div>

                    {/* media links */}           

                    {/* scroll indicator */}
                    <div className="pt-10 animate-fade-in animation-delay-800">
                        <div className="inline-flex flex-col items-center gap-2 text-gray-500 animate-bounce">
                            <span className="text-sm">Scroll to exploroe</span>
                            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
                                <div className="w-1 h-3 bg-gray-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
