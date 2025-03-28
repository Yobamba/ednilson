'use client';

import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import SocialLinks from '@/components/SocialLinks';
import FadeIn from '@/components/FadeIn';

const projects = [
  
  
  {
    title: 'TIME ALLOCATOR',
    description: 'AI Powered tool that helps you allocate your time efficiently.',
    imageUrl: '/images/time-allocator.png',
    projectUrl: 'https://time-allocator.vercel.app/'
  },
  {
    title: 'TO DO MANAGER',
    description: 'To-Do List Manager is the ultimate task management solution designed for users seeking simplicity and efficiency.',
    imageUrl: '/images/Task Manager.png',
    projectUrl: 'https://to-do-list-manager-nu.vercel.app/'
  },
  {
    title: 'NOTE CAPTURE',
    description: 'A full-stack note-taking application.',
    imageUrl: '/images/notes_api_ss.png',
    projectUrl: 'https://note-capture.onrender.com/api-docs/#/'
  }
 
  // Add more projects here
];

export default function Home() {
  return (
    <main>
      <Header />
      
      <section className="max-w-6xl mx-auto px-4 py-16">
      <FadeIn duration={150}><h2 className="text-3xl font-bold mb-8 text-center">Projects</h2></FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <FadeIn key={project.title} duration={150}>
              <ProjectCard
                {...project}
              />
            </FadeIn>
          ))}
        </div>
      </section>
      <FadeIn duration={150}><SocialLinks /></FadeIn>
    </main>
  );
}