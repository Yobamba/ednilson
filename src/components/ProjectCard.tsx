'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl
}: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className="w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">
          <a 
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            {title}
          </a>
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}