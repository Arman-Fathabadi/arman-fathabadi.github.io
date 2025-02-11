'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsContent() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A modern portfolio website built with Next.js and Tailwind CSS",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/yourusername/personal-portfolio",
      liveDemo: "https://your-portfolio-url.com"
    },
    {
      title: "Project 2",
      description: "Description of your second project",
      techStack: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/project2",
      liveDemo: "https://project2-demo.com"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-24">
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            My Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}