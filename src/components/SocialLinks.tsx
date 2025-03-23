'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Yobamba',
    icon: 'https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ednilsonbambo/',
    icon: 'https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg'
  }
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center py-6">
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="p-2"
        >
          <Image
            src={link.icon}
            alt={link.name}
            width={24}
            height={24}
          />
        </motion.a>
      ))}
    </div>
  );
}