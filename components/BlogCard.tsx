    import Link from 'next/link';
    import Image from 'next/image';
    import { Calendar, Clock } from 'lucide-react';
    import type { BlogPost } from '@/types';

    export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Link
        href={`/blog/${post.slug}`}
        className="group block p-4 md:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
        >
        {post.coverImage && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-gray-800">
            <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            </div>
        )}

        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
            {post.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base mb-4">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
            <span
                key={tag}
                className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
            >
                {tag}
            </span>
            ))}
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-500 pt-2 border-t border-white/10">
            <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {post.date}
            </span>
            <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime}
            </span>
        </div>
        </Link>
    );
    }