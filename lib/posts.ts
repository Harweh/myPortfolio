import type { BlogPost } from '@/types';

export const posts: BlogPost[] = [
    {
        slug: 'hello-world',
        title: 'Hello World — Starting This Blog',
        excerpt: 'A quick intro post to kick things off. Swap this out with your first real article.',
        date: 'Feb 2026',
        readTime: '2 min read',
        tags: ['Intro'],
        content: `This is your first blog post. Edit the "content" field in lib/posts.ts to replace this with your real writing.

You can add as many paragraphs as you like here — each blank line starts a new paragraph when rendered.`,
    },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find((post) => post.slug === slug);
}