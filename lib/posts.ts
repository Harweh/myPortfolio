import type { BlogPost } from '@/types';

export const posts: BlogPost[] = [


    {
    slug: 'building-my-portfolio',
    title: 'Building My Portfolio: Bugs, Typos, and Everything In Between',
    excerpt: 'What actually happens when you build a portfolio site the broken deploys, the silent Tailwind typos, and the small wins along the way.',
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

{
            slug: 'how-i-structured-this-project',
            title: 'How I Structured This Project',
            excerpt: 'The stack and folder decisions behind this site — Next.js App Router, Tailwind, and why I split things the way I did.',
            date: 'Jul 24 2026',
            readTime: '3 min read',
            tags: ['Next.js', 'Architecture'],
            content: `I built this site on Next.js with the App Router, TypeScript, and Tailwind CSS. Here's the reasoning behind the main decisions.
    
    App Router over Pages Router: it's where Next.js is headed, and having each route as its own folder with a page.tsx inside keeps things easy to navigate — /app/projects/page.tsx, /app/blog/page.tsx, /app/blog/[slug]/page.tsx for individual posts.
    
    Reusable components live in /components — a Navbar and Footer shared across every page, plus ProjectCard and BlogCard so I'm not repeating the same card markup on every listing page. Shared data — like blog posts — lives in /lib as plain TypeScript files (lib/posts.ts) rather than a database, since a portfolio's content doesn't change often enough to need one.
    
    Types live in one place: /types/index.ts defines what a Project and a BlogPost actually look like, so both the data files and the components agree on the shape without duplicating definitions.
    
    For the contact form, I used a Next.js API route (/app/api/contact/route.ts) talking to Resend for email delivery, instead of a third-party form service — more control, and it's still just a few lines of code.
    
    Nothing here is exotic. The goal was a structure simple enough that future-me, coming back in six months to add a project, knows exactly where to look.`,
},

{
        slug: 'fragrance-shop-deep-dive',
        title: 'Project Deep-Dive: Fragrance Shop',
        excerpt: 'Inside my Artisan Fragrance e-commerce build — the problem it solves, the stack, and the one challenge that took the longest to get right.',
        date: 'Jul 2026',
        readTime: '4 min read',
        tags: ['Projects', 'Next.js', 'E-commerce'],
        content: `Fragrance Shop is a storefront for curated and custom-blended fragrances based in Lagos — built with Next.js, JavaScript, and Tailwind CSS on the frontend.
    
    The problem: small, artisan fragrance sellers usually rely on Instagram DMs and WhatsApp to sell — which works, but caps how many customers they can serve at once and makes it hard to browse a full catalog. The goal was a real storefront: browse products, see details, and reach out or check out without the back-and-forth.
    
    The stack was chosen for speed of shipping — Next.js for routing and rendering, Tailwind for fast, consistent styling without hand-writing CSS files for every component.
    
    The hardest part wasn't the UI — it was getting product data, images, and cart/interest state to stay consistent across pages without over-engineering a full backend for what started as a lean MVP. I leaned on keeping state as simple as possible early on, and only added complexity where the product genuinely needed it, rather than building every feature a "real" e-commerce site might eventually want.
    
    If I were extending this further, the next additions would be real payment integration and an admin view for the shop owner to update inventory without touching code directly.
    
    Live: scent-frontend-fcmb-silk.vercel.app`,
},
{
        slug: 'what-id-do-differently',
        title: "What I'd Do Differently",
        excerpt: 'An honest retrospective — the shortcuts I took, the things I\'d change, and what I\'m carrying forward into the next project.',
        date: 'Jul 2026',
        readTime: '3 min read',
        tags: ['Reflection', 'Growth'],
        content: `Looking back at my earlier projects, a few patterns keep showing up that I want to name honestly, mostly so I don't repeat them.
    
    I moved fast and skipped testing things end-to-end. Code that looked right in the editor often wasn't actually right in the browser — broken class names, unhandled edge cases, forms that silently failed. Reading code isn't the same as running it.
    
    I duplicated markup instead of extracting components early. Card layouts, buttons, and sections got copy-pasted across pages before I built the shared component — meaning one small style change had to be repeated in five places instead of one.
    
    I didn't separate content from code enough. Blog posts and project data living directly inside page files works for a small site, but it means every content update is also a code change. Pulling that into its own data file (or eventually a CMS) makes updating content a much lighter task.
    
    I under-used environment variables and over-relied on things working "on my machine." A local .env file doesn't automatically exist on a hosting platform — that's an easy trap to fall into more than once.
    
    None of this is dramatic. It's the ordinary accumulation of small habits that either save time later or cost it. The goal now isn't perfection on the first try — it's noticing patterns like these sooner each time.`,
},
{
        slug: 'server-vs-client-components',
        title: 'Understanding Server vs Client Components in Next.js',
        excerpt: 'A plain-language breakdown of the distinction that trips up almost everyone new to the App Router.',
        date: 'Jul 2026',
        readTime: '4 min read',
        tags: ['Next.js', 'Learning'],
        content: `When I started using the App Router, the Server vs Client Component split was the single most confusing part — so here's the explanation I wish I'd had from day one.
    
    By default, every component in the App Router is a Server Component. It renders on the server, ships zero JavaScript to the browser for that component, and can directly do things like read files or query a database. Great for static content — headers, footers, text-heavy sections.
    
    The moment a component needs interactivity — a button click, a form input, useState, useEffect, an onClick handler — it needs to become a Client Component. You mark that by adding 'use client' at the very top of the file. That tells Next.js "ship this component's JavaScript to the browser so it can actually run there."
    
    The mistake I made early on: assuming 'use client' had to go on the whole page just because one button needed a click handler. Often it's better to keep the page itself a Server Component and pull just the interactive piece — the button, the form — into its own small Client Component. That way you still get the fast, JS-light server rendering for everything else on the page.
    
    Rule of thumb I use now: default to Server Component. Only reach for 'use client' when the compiler actually tells you to, or when you need state, effects, or browser-only APIs.`,
},
{
        slug: 'the-bug-that-took-forever',
        title: 'The Bug That Took Forever (And What Finally Fixed It)',
        excerpt: 'A contact form that silently rejected every real submission — and the one-character fix hiding behind it.',
        date: 'Jul 2026',
        readTime: '3 min read',
        tags: ['Debugging', 'Next.js'],
        content: `My contact form looked completely finished. Form fields, validation, loading state, success screen — all built, all styled. Then I actually tried sending a message, and every single one failed with "Message must be less than 1000 characters" — even a two-word message.

    The validation code looked reasonable at a glance:
    
    if (data.message.trim()) {
    return 'Message must be less than 1000 characters';
    }
    
    Read it slowly. That condition checks "is this message non-empty" — not "is this message too long." So it rejected every real message and let empty ones through, which is the exact opposite of what it was supposed to do.
    
    The fix was one comparison:
    
    if (data.message.trim().length > 1000) {
    return 'Message must be less than 1000 characters';
    }
    
    The lesson wasn't really about the bug itself — it was about how confidently wrong code can look correct on a quick read. The variable names, the error message, the surrounding structure all suggested it was doing the right thing. Only actually running it — submitting a real message and watching it fail — surfaced the problem.
    
    Since then, my rule is simple: for anything user-facing, test the actual behavior, not just whether the code compiles or reads sensibly.`,
},
{
        slug: 'tailwind-vs-plain-css',
        title: 'Tailwind vs Plain CSS: What I Actually Noticed',
        excerpt: 'Comparing the two after using both — where Tailwind genuinely sped things up, and where it introduced its own kind of bug.',
        date: 'Jul 2026',
        readTime: '3 min read',
        tags: ['Tailwind', 'CSS', 'Comparison'],
        content: `After building with both plain CSS and Tailwind, here's what actually held up in practice, not just in theory.
    
    Where Tailwind won: speed of iteration. Styling directly in the markup meant no switching files, no naming classes ("is this .card or .card-container?"), and no dead CSS piling up in a stylesheet nobody remembers to clean. Responsive design in particular felt much faster — sm:, md:, lg: prefixes right next to the base style, instead of separate media query blocks far away in a CSS file.
    
    Where plain CSS won: error visibility. A typo in a real CSS class name — a selector that doesn't match anything — is easy to spot because nothing about the syntax looks "valid" if you're checking carefully, and tools can catch unused selectors. A typo in a Tailwind class name (dlex instead of flex, black-500 instead of a real shade) compiles with zero errors and zero warnings — it just silently doesn't apply. I ran into this more than once and didn't notice until I was staring directly at the rendered page.
    
    My conclusion isn't "one is better" — it's that Tailwind trades stylesheet overhead for a different kind of risk: silent failures instead of loud ones. Worth knowing going in, so you build the habit of actually checking the rendered result instead of trusting that clean-looking code means correct-looking output.`,
},
{
        slug: 'why-i-got-into-web-development',
        title: 'Why I Got Into Web Development',
        excerpt: 'The short version of how I ended up here, and what keeps me building.',
        date: 'Jul 2026',
        readTime: '2 min read',
        tags: ['Personal', 'Career'],
        content: `[This one's genuinely yours to tell — I don't know your actual story, and I don't want to invent one for you. Here's a simple structure to fill in:]
    
    Start with what first pulled you in — was it building something small that worked for the first time, wanting to make something specific that didn't exist yet, or a class/course/person that got you started?
    
    Then: what kept you going past the early frustrating parts, since almost everyone hits a point where it feels too hard.
    
    Then: what you enjoy about it now that's different from what you expected at the start.
    
    End with where you're headed — freelance work, a specific kind of project you want to build, a skill you're chasing next.
    
    Keep it short and specific rather than generic — real details (the actual first thing you built, the actual moment something clicked) make this kind of post far more interesting than broad statements about "passion for code."`,
},
{
            slug: 'freelancing-in-lagos',
            title: 'Freelancing in Lagos: What It\'s Actually Like',
            excerpt: 'Finding clients, working remotely, and the realities of freelance dev work from Lagos.',
            date: 'Jul 2026',
            readTime: '3 min read',
            tags: ['Freelancing', 'Lagos', 'Career'],
            content: `Another one worth writing in your own voice with your actual experience — here's a shape to build it around:
    
    How you find clients — referrals, platforms like Upwork, local networks, social media, or a mix. Be specific about what's actually worked versus what hasn't.
    
    What working remotely for international or local clients looks like day to day — time zones if relevant, communication tools, how you handle payment (a genuinely useful detail for other Nigerian freelancers reading this).
    
    The good parts — flexibility, choosing projects, control over your schedule.
    
    The harder parts, honestly — inconsistent income, chasing invoices, the isolation of working alone, power/internet reliability if that's part of your reality.
    
    Close with practical advice for someone starting out freelancing from Lagos specifically — this is the kind of post that ranks well and genuinely helps people, because there's not a lot of honest, specific writing on this exact topic.`,
},
{
            slug: 'tailwind-mistakes-that-fail-silently',
            title: 'Common Tailwind Mistakes That Fail Silently',
            excerpt: 'A field guide to the Tailwind typos that compile clean but never actually apply — collected from real bugs I shipped.',
            date: 'Jul 2026',
            readTime: '4 min read',
            tags: ['Tailwind', 'Debugging', 'Tutorial'],
            content: `Tailwind never throws an error for a class name it doesn't recognize — it just silently doesn't apply it. That single fact caused most of the bugs in my own projects, so here's what to actually watch for.
    
    Misspelled utility names. flex typed as dlex, text-gray-300 typed as yext-gray-300. The class sits right there in your markup, looks plausible, and does absolutely nothing. The fix is slow, careful reading — or letting an editor plugin/linter for Tailwind flag unrecognized classes for you.
    
    Color shades that don't exist. Tailwind's default palette only goes so far — from-black-500 or to-white-400 aren't real, because black and white don't have a numbered shade scale by default. Only real palette colors (gray, slate, zinc, emerald, and so on) have the 50–950 shade range.
    
    Malformed opacity syntax. Something like bg-white/ or border-red-500/ with a trailing slash and no number after it is invalid and gets dropped — it needs to be bg-white/10 or similar.
    
    Concatenated or malformed classes. mb-2mb-1 or px8 (missing the hyphen) look like typos because they are — but nothing in the build process catches them.
    
    Custom classes that were never defined, or got commented out. If you write animate-fade-in expecting a keyframe animation, and the CSS defining that class is missing or disabled somewhere in your stylesheet, the class name applies with zero visible effect.
    
    The single best habit against all of this: don't trust that clean code equals correct output. Click through your actual rendered site — hover every button, resize every breakpoint, and watch for anything that just doesn't look like it's supposed to.`,
},

];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find((post) => post.slug === slug);
}