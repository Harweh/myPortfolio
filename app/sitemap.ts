import type { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'

// TODO: replace with your real production domain
const BASE_URL = 'https://myportfolio-harwehs.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = ['', '/about', '/projects', '/blog', '/contact', '/privacy'].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
    }))

    const blogRoutes = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(),
    }))

    return [...staticRoutes, ...blogRoutes]
}