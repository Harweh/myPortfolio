import type { BlogPost } from '@/types';

export const posts: BlogPost[] = [


    {
    slug: 'building-my-portfolio',
    title: 'Building My Portfolio: Bugs, Typos, and Everything In Between',
    excerpt: 'What actually happens when you build a portfolio site — the broken deploys, the silent Tailwind typos, and the small wins along the way.',
    date: 'Jul 2026',
    readTime: '4 min read',
    tags: ['Next.js', 'Web Dev', 'Journey'],
    content: `Building this portfolio taught me more than I expected, not about about writing new code, but about how much can go wrong quietly, without a single error message to warn you.

I started with the basics: Next.js, TypeScript, Tailwind CSS. Clean stack, clear plan. Home page, About, Projects, Blog, Contact. Simple enough on paper.

Then I actually started testing things.

The contact form looked done, but every single submission failed, a one-character logic bug in my validation meant it was rejecting every real message while pretending to work. My fade-in animations weren't running at all, because the CSS that powered them had gotten commented out somewhere along the way, and nothing told me they were missing. Buttons, gradients, hover states all quietly broken by small typos in class names. Tailwind doesn't throw errors for a class that doesn't exist. It just... does nothing. Which means broken styling looks identical to code that compiles clean.

That was the real lesson: in frontend work, "no errors" doesn't mean "working." I had to actually click through every page, hover every button, and submit every form to find what was silently failing.

Deployment brought its own round of surprises. A build that succeeded but served a 404 on every single page turned out to be one misconfigured setting in my hosting dashboard, unrelated to any of my code. An environment variable that worked locally but didn't exist on the live server. A file path with a space in it that worked in my browser but broke the moment I wasn't careful about it.

None of these were hard problems. Each one, individually, took minutes to fix once I knew what it was. The actual skill wasn't in the fixing, it was in the checking. Reading the exact error message instead of guessing. Testing the live site, not just what I saw in my editor. Verifying that a "fix" actually got saved, committed, and deployed before assuming it worked.

If you're building your own site right now: test everything by clicking it, not just by reading the code. The bugs that don't throw errors are the ones that'll sit there quietly for weeks.

This site is still a work in progress, more projects going up soon, and hopefully fewer typos.`,
},
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find((post) => post.slug === slug);
}