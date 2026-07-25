'use client'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import type { Project } from '@/types'

const projects: Project[] = [
    {
        id: '1',
        title: "My cv portfolio",
        description: "Building my portfolio with my cd",
        image: '/placeholder-product.jpg',
        technologies: ['Html', 'CSS', 'Js'],
        category: 'Basics',
        githubUrl: 'https://github.com/Harweh/myPortfolio',
        liveUrl: 'https://github.com/Harweh/myPortfolio',
        featured: 'true',
    },
    {
        id: '1',
        title: "My cv portfolio",
        description: "Building my portfolio with my cd",
        image: '/placeholder-product.jpg',
        technologies: ['Html', 'CSS', 'Js'],
        category: 'Basics',
        githubUrl: 'https://github.com/Harweh/myPortfolio',
        liveUrl: 'https://github.com/Harweh/myPortfolio',
        featured: 'true',
    },
    {
        id: '1',
        title: "My cv portfolio",
        description: "Building my portfolio with my cd",
        image: '/placeholder-product.jpg',
        technologies: ['Html', 'CSS', 'Js'],
        category: 'Basics',
        githubUrl: 'https://github.com/Harweh/myPortfolio',
        liveUrl: 'https://github.com/Harweh/myPortfolio',
        featured: 'true',
    },
    {
        id: '1',
        title: "My cv portfolio",
        description: "Building my portfolio with my cd",
        image: '/placeholder-product.jpg',
        technologies: ['Html', 'CSS', 'Js'],
        category: 'Basics',
        githubUrl: 'https://github.com/Harweh/myPortfolio',
        liveUrl: 'https://github.com/Harweh/myPortfolio',
        featured: 'true',
    }
]



export default function Projectpage() {
    return (
        <div className='max-h-screen bg-gradient-to-br from-gray-900 via-gray-900/20 to-grey-900 relative overflow-hidden pt-32 md:pt-55 lg:pt-115'>
            <div className="relative z-10 flex item-center justify-center min-h-screen px-8 pt-4 md:pt-16 lg:pt-20 py-8">
                <div className="max-w-5xl w-full text-center space-y-2 md:space-y-4 lg:space-y-6">

                </div>
            </div>
        </div>
    )
}
