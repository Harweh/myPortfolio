/* eslint-disable react/no-unescaped-entities */
// 'use client'

// import React from 'react'
// import { useState } from 'react'
// import Link from 'next/link'
// import type { Project } from '@/types'

// const projects: Project[] = [
//     {
//         id: '1',
//         title: "My cv portfolio",
//         description: "Building my portfolio with my cd",
//         image: '/placeholder-product.jpg',
//         technologies: ['Html', 'CSS', 'Js'],
//         category: 'Basics',
//         githubUrl: 'https://github.com/Harweh/myPortfolio',
//         liveUrl: 'https://github.com/Harweh/myPortfolio',
//         featured: 'true',
//     },
//     {
//         id: '1',
//         title: "My cv portfolio",
//         description: "Building my portfolio with my cd",
//         image: '/placeholder-product.jpg',
//         technologies: ['Html', 'CSS', 'Js'],
//         category: 'Basics',
//         githubUrl: 'https://github.com/Harweh/myPortfolio',
//         liveUrl: 'https://github.com/Harweh/myPortfolio',
//         featured: 'true',
//     },
//     {
//         id: '1',
//         title: "My cv portfolio",
//         description: "Building my portfolio with my cd",
//         image: '/placeholder-product.jpg',
//         technologies: ['Html', 'CSS', 'Js'],
//         category: 'Basics',
//         githubUrl: 'https://github.com/Harweh/myPortfolio',
//         liveUrl: 'https://github.com/Harweh/myPortfolio',
//         featured: 'true',
//     },
//     {
//         id: '1',
//         title: "My cv portfolio",
//         description: "Building my portfolio with my cd",
//         image: '/placeholder-product.jpg',
//         technologies: ['Html', 'CSS', 'Js'],
//         category: 'Basics',
//         githubUrl: 'https://github.com/Harweh/myPortfolio',
//         liveUrl: 'https://github.com/Harweh/myPortfolio',
//         featured: 'true',
//     }
// ]



// export default function Projectpage() {
//     return (
//         <div className='max-h-screen bg-gradient-to-br from-gray-900 via-gray-900/20 to-grey-900 relative overflow-hidden pt-32 md:pt-55 lg:pt-115'>
//             <div className="relative z-10 flex item-center justify-center min-h-screen px-8 pt-4 md:pt-16 lg:pt-20 py-8">
//                 <div className="max-w-5xl w-full text-center space-y-2 md:space-y-4 lg:space-y-6">

//                 </div>
//             </div>
//         </div>
//     )
// }


'use client'

import ProjectCard from '@/components/Projectcard'
import type { Project } from '@/types'

const projects: Project[] = [
    {
        id: '1',
        title: "My Portfolio",
        description: "My personal portfolio site built with Next.js, TypeScript and Tailwind CSS.",
        image: '/images/Screenshot.png',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        category: 'frontend',
        githubUrl: 'https://github.com/Harweh/myPortfolio',
        liveUrl: 'https://github.com/Harweh/myPortfolio',
        featured: true,
    },

    {
        id: '2',
        title: "Fragrance Shop",
        description: "Artisan fragrances, curated and custom-blended. Lagos.",
        image: '/images/Artisanal laboratory.png',
        technologies: ['Next.js', 'Javacript', 'Tailwind CSS'],
        category: 'fullstack',
        githubUrl: 'https://github.com/Harweh/scent-frontend.git',
        // liveUrl: 'https://scent-frontend-fcmb-silk.vercel.app/',
        liveUrl: 'https://scent-frontend-theta.vercel.app/',
        featured: true,
    },
]

export default function ProjectsPage() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-900/20 to-gray-900 relative overflow-hidden pt-32 md:pt-40 lg:pt-48 pb-20'>
            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">My Projects</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of things I've built.
                    </p>
                </div>

                {projects.length > 0 ? (
                    // <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="flex flex-col gap-5">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No projects yet — check back soon.</p>
                )}
            </div>
        </div>
    )
}