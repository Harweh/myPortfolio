// export interface Project{
//     id: string;
//     title: string;
//     description: string;
//     longDescription?: string;
//     image: string;
//     technologies: string[];
//     category: 'frontend' | 'backeend' | 'mobile';
//     githubUrl?: string;
//     liveUrl: string;
//     featured: boolean;
// }

// export interface BlogPost{
//     slug: string;
//     title: string;
//     excerpt: string;
//     date: string;
//     readTime: string;
//     tags: string[];
//     coverImage?: string;
// }


// export interface Project{
//     id: string;
//     title: string;
//     description: string;
//     longDescription?: string;
//     image: string;
//     technologies: string[];
//     category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
//     githubUrl?: string;
//     liveUrl: string;
//     featured: boolean;
// }

// export interface BlogPost{
//     slug: string;
//     title: string;
//     excerpt: string;
//     date: string;
//     readTime: string;
//     tags: string[];
//     coverImage?: string;
// }


export interface Project{
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    technologies: string[];
    category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
    githubUrl?: string;
    liveUrl: string;
    featured: boolean;
}

export interface BlogPost{
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    coverImage?: string;
    content?: string;
}