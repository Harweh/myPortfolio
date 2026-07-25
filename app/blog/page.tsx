'use client'

import BlogCard from '@/components/BlogCard'
import { posts } from '@/lib/posts'

export default function BlogPage() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-900/20 to-gray-900 relative overflow-hidden pt-32 md:pt-40 lg:pt-48 pb-20'>
            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Blog</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Thoughts on building things, learning in public, and whatever I'm working on.
                    </p>
                </div>

                {posts.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No posts yet — check back soon.</p>
                )}
            </div>
        </div>
    )
}