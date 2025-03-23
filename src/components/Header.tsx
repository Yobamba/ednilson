'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-screen flex flex-col items-center justify-center"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/coding.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'brightness(0.7)'
        }}
      />
      
  

      <div className="z-10 text-center">
      <FadeIn duration={150}>
        <Image
          src="/images/profile-pic.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        </FadeIn>

        <FadeIn duration={150}>
        <h1 className="text-4xl font-bold text-white mb-2">
          Ednilson Bambo
        </h1>
        </FadeIn>

        <FadeIn duration={150}>
        <h2 className="text-2xl text-gray-200 mb-6">
          Web Developer
        </h2>
        </FadeIn>

        <FadeIn duration={150}>
        <a 
          href="/Ednilson_CV. (2).pdf"
          download
          className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition"
        >
          Download CV
        </a>
        </FadeIn>
      </div>
    </motion.header>
  );
}