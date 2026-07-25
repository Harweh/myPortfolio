    import Link from 'next/link';
    import Image from 'next/image';
    import { Github, ExternalLink } from 'lucide-react';
    import type { Project } from '@/types';

    export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group p-4 md:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all flex flex-col">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-gray-800">
            <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>

        <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
            {project.featured && (
            <span className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                Featured
            </span>
            )}
        </div>

        <p className="text-gray-400 text-sm md:text-base mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
            <span
                key={tech}
                className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
            >
                {tech}
            </span>
            ))}
        </div>

        <div className="flex items-center gap-4 pt-2 border-t border-white/10">
            {project.githubUrl && (
            <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
            >
                <Github size={16} />
                Code
            </Link>
            )}
            <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
            >
            <ExternalLink size={16} />
            Live
            </Link>
        </div>

        </div>



    );
    }