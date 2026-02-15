/* eslint-disable react/no-unescaped-entities */
import { Code2, Zap, Lightbulb, Heart, ZapIcon, ArrowBigRightDashIcon, Code2Icon, ChartBar, ChartBarIncreasing, TrendingUp, Server, Activity, Figma } from 'lucide-react';
import Image from 'next/image';
import Me from '@/app/about/dv.avif'
import Link from 'next/link';
import { SiAudi, SiAuthy, SiBrevo, SiChatbot, SiClaude, SiCloudinary, SiCss3, SiExpress, SiFigma, SiFusionauth, SiGithub, SiGithubcopilot, SiGitlab, SiGoogleauthenticator, SiHtml5, SiJavascript, SiMicroeditor, SiMongodb, SiMongoose, SiNextdotjs, SiNodedotjs, SiPostman, SiReact, SiResend, SiTailwindcss, SiTypescript, SiVercel, SiVsco } from 'react-icons/si';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { VscCode, VscVscode } from 'react-icons/vsc';




export default function About() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        {/* Hero Section */}
            <section className="pt-26 md:pt-32 lg:pt-32 pb-10 px-2 md:px-4 lg:px-4">
                <div className="max-w-7xl mx-auto">

                    <div className="space-y-2 md:space-y-6 lg:space-y-6  ">
                        <h2 className="text-xl md:text-4xl lg:text-4xl flex flex-col justify-center items-center font-bold text-white">
                                Hi, I'm  <span className="bg-gradient-to-l from-green-400 to-black bg-clip-text text-transparent mt- md:mt-2 lg:mt-2">Emmanuel Oluwatobi Awe</span>
                        </h2>
                        <p className="text-sm md:text-1xl lg:text-xl text-gray-400 max-w-full px-2 md:px-6 lg:px-8 mx-auto">
                            I'm a <span className=" text-green-500">Full Stack Developer</span> with a passion for creating beautiful, 
                            functional web applications. With expertise in the MERN stack and MENN stack. My core Strength lies in frontend development,
                            where i build responsive, user-friendly interface, I bring ideas to life through clean code and intuitive design... On the backend, I have a solid working Knowledge of building APIs, handling authentication,
                            database management, and server-side logic.
                        </p>    
                            
                            <div className="flex flex-wrap  justify-center gap-2 md:gap-5 lg:gap-5 pt-2 animate-fade-in-up animation-delay-400">
                                <div className="p-2 px- md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center  bg-gray-900/50 border-b  border-gray-500/50 rounded-4xl">
                                    <div className=" text-lg md:text-xl lg:text-xl text-yellow-500">
                                        <SiJavascript/>
                                    </div>
                                        <p className='text-sm md:text-lg lg:text-lg mt-1 text-gray-500'>JavaScript</p>
                                </div>

                                <div className="p-2  px- md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center  bg-gray-900/50 border-b  border-gray-500/50 rounded-4xl">
                                    <div className=" text-lg md:text-xl lg:text-xl text-blue-500">
                                        <SiTailwindcss/>
                                    </div>
                                        <p className='text-sm md:text-xl lg:text-xl mt-1 text-gray-500'>Tailwind</p>
                                </div>

                                <div className="p-2 px- md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center  bg-gray-900/50 border-b  border-gray-500/50 rounded-4xl">
                                    <div className="text-lg md:text-xl lg:text-xl text-blue-500">
                                        <SiReact/>
                                    </div>
                                        <p className='text-sm md:text-xl lg:text-xl mt-1 text-gray-500 '>React</p>
                                </div>                        

                                <div className="p-2 px- md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center  bg-gray-900/50 border-b  border-gray-500/50 rounded-4xl">
                                    <div className="text-lg md:text-xl lg:text-xl">
                                        <SiNextdotjs/>
                                    </div>
                                        <p className="text-sm md:text-xl lg:text-xl mt-1 text-gray-500">Next.js</p>
                                </div>

                                <div className="p-1.5 px- md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center  bg-gray-900/50 border-b  border-gray-500/50 rounded-4xl">
                                    <div className="text-lg md:text-xl lg:text-xl text-green-500">
                                        <SiNodedotjs/>
                                    </div>
                                        <p className='text-sm md:text-xl lg:text-xl mt-1 text-gray-500'>Node.js</p>
                                </div>

                                <div className="p-2 px- md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center  bg-gray-900/50 border-b border-gray-500/50 rounded-4xl">
                                    <div className="text-lg md:text-xl lg:text-xl text-green-500">
                                        <SiMongodb/>
                                    </div>
                                        <p className='text-sm md:text-xl lg:text-xl mt-1 text-gray-500'>Express</p>
                                </div>
                            </div>

                                <div className="flex flex-wrap justify-center pt-3 animate-fade-in-up animation-delay-400">            
                                    <Link
                                        href="/contact"
                                        className='group px-1.5 md:px-3 lg:px-3 py- md:py-2 lg:py-2 bg-white/5 backdrop-blur-lg border-2 border-white/10 text-white font-semibold rounded-xl hover:border-white/20  transition-all'>
                                        <span className="relative z-10 mt-2 flex items-center">Connect with me</span>
                                            {/* shinning effect */}
                                        <div className="w-5 h-2 md:h-2 group-hover:translate-x-1 transition-transform"></div>
                                    </Link>
                                </div>
                    </div>

                </div>
            </section>

        {/* Bio Section */}
            <section className="w-full min-auto py- md:py-12 lg:py-4 ">
                    <h1 className="py-6 md:py-8 text-4xl md:text-5xl lg:text-7xl flex items-center justify-center  font-bold text-white">
                        About Me
                    </h1>
                <div className="max-w-[92vw] md:max-w-[80vw] m-auto py- md:py- lg:py-2 px- md:px-6 lg:px-6">
                    <div className="grid md:grid-cols-2 gap-1 md:gap-12 lg:gap-12 items-center">
                            {/* Image Side */}
                            <div className="relative">
                                <div className="w-full  aspect-square bg-gradient-to-br from-black-500 to-green-500 rounded-2xl ">

                                    <Image className='w-full  aspect-square ' 
                                    src="/dv.avif"
                                    alt ="this is an image"
                                    width = {300}
                                    height={100}
                                    quality={0}/>

                                </div>

                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-0"></div>
                            </div>

                            {/* Text Side */}
                            <div className=" max-w-[1500px] m-auto text-center space-y-2 md:space-y-6 lg:spacen-y-6">
                                    
                                    <p className="text-sm md:text-1xl lg:text-xl text-gray-400 max-w-3xl mx-auto">
                                    Hello, I'm Emmanuel, a passionate web developer with a degree in Computere Science. I transform visionary ideas into functional applications and working software. Whether it's crafting 
                                    sleek front-end interfaces, developing robust back-end systems, or integrating APIs and databases.
                                    if it interacts with users or fuels a sserver, I've likely built and developed it with precision and flair.
                                    </p>

                                    {/* Quick Stats */}
                                    <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-8 pt-2 md:pt-4 lg:pt-4 pb- md:pd-2 lg:pb-2">
                                        <div className="text-center">
                                        <div className="text-3xl font-bold text-white">3+</div>
                                        <div className="text-gray-400 text-sm">Years Experience</div>
                                        </div>
                                        <div className="text-center">
                                        <div className="text-3xl font-bold text-white">2+</div>
                                        <div className="text-gray-400 text-sm">Projects Done</div>
                                        </div>
                                        <div className="text-center">
                                        <div className="text-3xl font-bold text-white">100%</div>
                                        <div className="text-gray-400 text-sm">Client Satisfaction</div>
                                        </div>
                                    </div>

                            </div>

                    </div>
                </div>        
                
            </section>

            <section className="py-4 md:py-10 lg:py-10 from-gray-900 via-white-900/10 to-gray-900">
                <div className="w-full pb- md:pb-6 lg;pb-6 mx-auto">
                    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 m- md:m-6 lg:m-6 px-4 md:px-6 lg:px-6 ">

                        <div className="w-full p-4 md:p-6 lg:p-6 py-2 bg-white/3 font-bold  border border-white/5 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 transition-all group"> 
                                    <div className="w-10 h-10 bg-gradient-to-br rounded-lg flex items-center justify-center mb- md:mb-4 lg:mb-4 group-hover:scale-110 transition-transform">
                                        <p>
                                            <Code2Icon className='text-blue-500 size-6 md:size-8 lg:size-8'/>
                                        </p>
                                    </div>
                                        <span className="">Frontend</span>             
                                            <h3 className=" py-2 text-sm md:text-lg lg:text-lg">
                                                Accessible, responsive UIs with clean components and smooth interactions..
                                            </h3>                                          
                        </div>

                        <div className="w-full p-4 md:p-6 lg:p-6 px- py-2 bg-white/3  font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 border-2 border-white/5 transition-all group"> 
                            <div className="w-10 h-10 bg-gradient-to-br rounded-lg flex items-center justify-center mb- md:mb-4 lg:mb-4 group-hover:scale-110 transition-transform">
                                <p>
                                    <Server className='text-yellow-500 size-5 md:size-8 lg:size-8'/>
                                </p>
                            </div>
                            <span className="">Backend</span>             
                            <h3 className=" py-2 text-sm md:text-lg lg:text-lg">
                                REST APIs, auth, DB design, caching, and production-ready deployments.
                            </h3>                                          
                        </div>

                        <div className="w-full p-4 md:p-6 lg:p-6 px- py-2 bg-white/3 font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 border-2 border-white/5 transition-all group"> 
                            <div className="w-10 h-10 bg-gradient-to-br rounded-lg flex items-center justify-center mb- md:mb-4 lg:mb-4 group-hover:scale-110 transition-transform">
                                <p>
                                    <TrendingUp className='text-green-500 size-6 md:size-8 lg:size-8'/>
                                </p>
                            </div>
                            <span className="">Performance</span>             
                            <h3 className=" py-2  text-sm md:text-lg lg:text-lg ">
                                Ship fast. Measure. Optimize. Keep it stable under real traffic.
                            </h3>
                        </div>

                    </div>
                </div>
            </section>

        {/* Skills I Do Section */}
            <section className="py-6 from-gray-900 via-white-900/20 to-gray-900  ">
                <div className="w-full p- m-auto ">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-2">
                        Skils
                    </h2>

                        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 m- md:m-6 lg:m-6 px-4 md:px-6 lg:px-6">

                            {/* Card 1 */}
                            <div className="p-4 md:p-6 lg:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                                {/* <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Code2 className="text-white" size={24} />
                                </div> */}
                                <h3 className="text-xl font-extrabold text-white mb-">Frontend</h3>
                                    <div className="flex flex-wrap gap- md:gap-2 lg:gap-2 pt-2 md:pt-4 lg:pt-4 animate-fade-in-up animation-delay-400">

                                        <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                            <div className="text-xl text-blue-500">
                                                <SiHtml5/>
                                            </div>
                                                <p className='text-sm md:text-lg lg:text-lg mt-1 text-white-500 '>Html5</p>
                                        </div>

                                        <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                            <div className="text-xl text-blue-500">
                                                <SiCss3/>
                                            </div>
                                                <p className='text-sm md:text-lg lg:text-lg mt-1 text-white-500 '>CSS</p>
                                        </div>

                                        <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center ">
                                            <div className="text-xl text-yellow-500">
                                                <SiJavascript/>
                                            </div>
                                                <p className='text-sm md:text-lg lg:text-lg mt-1 text-white'>JavaScript</p>
                                        </div>

                                        <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center ">
                                            <div className="text-xl text-blue-500">
                                                <SiTypescript/>
                                            </div>
                                                <p className='text-sm md:text-lg lg:text-lg mt-1 text-white-500 '>TypeScript</p>
                                        </div> 

                                        <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                            <div className=" text-3xl text-blue-500">
                                                <SiTailwindcss/>
                                            </div>
                                                <p className='text-sm md:text-lg lg:text-lg mt-1 text-white-500'>Tailwind</p>
                                        </div>

                                        <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                            <div className="text-xl text-blue-500">
                                                <SiReact/>
                                            </div>
                                                <p className='text-sm md:text-lg lg:text-lg mt-1 text-white-500 '>React</p>
                                        </div>                        

                                        <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center  ">
                                            <div className="text-xl">
                                                <SiNextdotjs/>
                                            </div>
                                                <p className="text-sm md:text-lg lg:text-lg mt-1 text-white-500">Next.js(App Router)</p>
                                        </div>

                                        <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                            <div className="text-xl text-red-500">
                                                <SiFigma/>
                                            </div>
                                                <p className='text-sm md:text-lg lg:text-lg mt-1 text-white '>Figma</p>
                                        </div>

                                    </div>
                            </div>

                            {/* Card 2 */}
                            <div className="p-4 md:p-6 lg:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                                {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Zap className="text-white" size={24} />
                                </div> */}
                                <h3 className="text-xl font-extrabold text-white mb- md:mb-2 lg:mb-2">Backend / API</h3>
                                    <div className="flex flex-wrap gap- md:gap-2 lg:gap-2 pt-2 md:pt-4 lg:pt-4 animate-fade-in-up animation-delay-400">

                                        <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                            <div className="text-xl text-green-500">
                                                <SiNodedotjs/>
                                            </div>
                                                <p className='text-sm md:text-lg lg:text-lg mt-1 text-white-500 '>Node.js</p>
                                        </div>                      

                                        <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                            <div className="text-xl">
                                                <SiNextdotjs/>
                                            </div>
                                                <p className="text-sm md:text-lg lg:text-lg mt-1 text-white">Next.js API Routes</p>
                                        </div>

                                        <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                            <div className="text-3xl text-gray-500">
                                                <SiExpress/>
                                            </div>
                                                <p className='text-sm md:text-lg lg:text-lg mt-1 text-white'>Express</p>
                                        </div>

                                        <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                            <div className="text-xl text-green-500">
                                                <SiMongodb/>
                                            </div>
                                                <p className='text-sm md:text-lg lg:text-lg mt-1 text-white '>MongoDB</p>
                                        </div>

                                        <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                            <div className="text-sm md:text-xl lg:text-xl text-green-500">
                                                <SiAuthy/>
                                            </div>
                                                <p className='text-sm md:text-lg lg:text-lg mt-1 text-white '>OAUTH</p>
                                        </div>

                                    </div>
                            </div>

                            {/* Card 3 */}
                            <div className="p-4 md:p-6 lg:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                                {/* <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Lightbulb className="text-white" size={24} />
                                </div> */}
                                <h3 className="text-xl font-extrabold text-white mb- md:mb-2 lg:mb-2">Tools & Inegration</h3>
                                <div className=" flex flex-wrap gap- md:gap-2 lg:gap-2 pt-2 md:pt-4 lg:pt-4 animate-fade-in-up animation-delay-400">

                                    <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                        <div className=" text-lg text-white">
                                            <SiGithub/>
                                        </div>
                                            <p className='text-sm md:text-lg lg:text-lg mt-1 text-white'>Git & Github</p>
                                    </div>

                                    <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                        <div className=" text-lg text-amber-700">
                                            <SiGitlab/>
                                        </div>
                                            <p className='text-sm md:text-lg lg:text-lg mt-1 text-white'>GitLab</p>
                                    </div>

                                    <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                        <div className="text-sm md:text-lg lg:text-lg text-blue-500">
                                            <VscVscode/>
                                        </div>
                                            <p className='text-lg mt-1 text-white'>VS Code</p>
                                    </div>

                                    <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                        <div className="text-sm md:text-lg lg:text-lg text-blue-500">
                                            <SiCloudinary/>
                                        </div>
                                            <p className='text-lg mt-1 text-white'>Cloudinary</p>
                                    </div>

                                    <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                        <div className="text-sm md:text-lg lg:text-lg text-black">
                                            <SiVercel/>
                                        </div>
                                            <p className='text-sm md:text-lg lg:text-lg mt-1 text-white'>Vercel</p>
                                    </div>

                                    <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                        <div className=" text-lg text-amber-700">
                                            <SiPostman/>
                                        </div>
                                            <p className='text-sm md:text-lg lg:text-lg mt-1 text-white'>Postman</p>
                                    </div>

                                    <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                        <div className="text-sm md:text-lg lg:text-lg text-white">
                                            <SiBrevo/>
                                        </div>
                                            <p className='text-lg mt-1 text-white'>Brevo(Email Automation)</p>
                                    </div>

                                    <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                        <div className=" text-lg text-white">
                                            <Figma size={12}/>
                                        </div>
                                            <p className='text-sm md:text-lg lg:text-lg mt-1 text-white'>Figma</p>
                                    </div>


                                    <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                        <div className=" text-lg text-red-500">
                                            <SiResend/>
                                        </div>
                                            <p className='text-sm md:text-lg lg:text-lg mt-1 text-white'>Resend(Email API)</p>
                                    </div>

                                    <div className="p-2 px-2 md:px-4 lg:px-4 gap-1 md:gap-2 lg:gap-2 flex justify-center items-center">
                                        <div className=" text-lg text-amber-700">
                                            <SiClaude/>
                                        </div>
                                            <p className='text-sm md:text-lg lg:text-lg mt-1 text-white'>Claude/AI Tools</p>
                                    </div>

                                </div>
                            </div>

                            {/* Card 4 */}
                            {/* <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Heart className="text-white" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Problem Solving</h3>
                                <div className="flex flex-wrap justify-center gap-5 pt-2 animate-fade-in-up animation-delay-400">
                                <div className="p-2 px-4 gap-2 flex justify-center items-center  bg-gray-900/50 border-1  border-gray-500/50 rounded-4xl">
                                    <div className=" text-lg text-yellow-500">
                                        <SiJavascript/>
                                    </div>
                                        <p className='text-xl mt-1 text-gray-500'>JavaScript</p>
                                </div>

                                <div className="p-2  px-4 gap-2 flex justify-center items-center  bg-gray-900/50 border-1  border-gray-500/50 rounded-4xl">
                                    <div className=" text-lg text-blue-500">
                                        <SiTailwindcss/>
                                    </div>
                                        <p className='text-xl mt-1 text-gray-500'>Tailwind</p>
                                </div>

                                <div className="p-2 px-4 gap-2 flex justify-center items-center  bg-gray-900/50 border-1  border-gray-500/50 rounded-4xl">
                                    <div className="text-xl text-blue-500">
                                        <SiReact/>
                                    </div>
                                        <p className='text-xl mt-1 text-gray-500 '>React</p>
                                </div>                        

                                <div className="p-2 px-4 gap-2 flex justify-center items-center  bg-gray-900/50 border-1  border-gray-500/50 rounded-4xl">
                                    <div className="text-xl">
                                        <SiNextdotjs/>
                                    </div>
                                        <p className="text-xl mt-1 text-gray-500">Next.js</p>
                                </div>

                                <div className="p-1.5 px-2 gap-2 flex justify-center items-center  bg-gray-900/50 border-1  border-gray-500/50 rounded-4xl">
                                    <div className="text-xl text-green-500">
                                        <SiNodedotjs/>
                                    </div>
                                        <p className='text-xl mt-1 text-gray-500'>Node.js</p>
                                </div>

                                <div className="p-2 px-4 gap-2 flex justify-center items-center  bg-gray-900/50 border-1 border-gray-500/50 rounded-4xl">
                                    <div className="text-xl text-gray-500">
                                        <SiExpress/>
                                    </div>
                                        <p className='text-xl mt-1 text-gray-500'>Express</p>
                                </div>
                                </div>
                            </div> */}
                            
                        </div>

                </div>
            </section>
        </div>
    );
}
