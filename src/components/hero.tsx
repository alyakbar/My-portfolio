"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Particles } from './particles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0, rotateY: -60 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    rotateY: 0,
    transition: { 
      type: 'spring', 
      stiffness: 80,
      damping: 10,
      delay: 0.5 
    } 
  }
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen w-full items-center overflow-hidden" style={{ perspective: '1000px' }}>
      <Particles />
      <div className="absolute inset-0 -z-10 bg-background" />
       <div 
        className="absolute inset-0 -z-10" 
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)/0.1) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem'
        }}
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-background via-background to-secondary/30" />


      <motion.div
        className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 text-center md:grid-cols-2 md:text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center md:items-start" style={{ transformStyle: "preserve-3d" }}>
          <motion.h1
            className="font-headline text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl"
            variants={itemVariants}
            whileHover={{ y: -10, rotateX: 15, scale: 1.05, color: 'hsl(var(--primary))' }}
            style={{ cursor: 'pointer' }}
          >
            Alyakbar 
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl font-headline text-xl text-primary md:text-2xl"
            variants={itemVariants}
            whileHover={{ y: -10, rotateX: 15, scale: 1.05 }}
            style={{ cursor: 'pointer' }}
          >
            💻 Computer Science Graduate | Web & Blockchain Developer | AI & Machine Learning Enthusiast

          </motion.p>
          <motion.p
            className="mt-6 max-w-xl text-lg text-muted-foreground"
            variants={itemVariants}
            whileHover={{ y: -10, rotateX: 15, scale: 1.05 }}
            style={{ cursor: 'pointer' }}
          >
           I design and build impactful digital solutions — from responsive Next.js web apps to blockchain-based platforms — blending creativity, technology, and innovation.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            variants={itemVariants}
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  style={{
                    backgroundColor: 'hsl(var(--accent-brown))',
                    color: '#fff',
                    borderRadius: '0.375rem',
                    padding: '0.5rem 2rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'hsl(25, 76%, 24%)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'hsl(var(--accent-brown))')}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link href="https://github.com/alyakbar" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
          </motion.div>
        </div>
        <motion.div 
          className="relative hidden h-auto w-full max-w-md justify-self-center md:block"
          variants={imageVariants}
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{ rotateY: 10, scale: 1.05 }}
        >
          <Image 
            src="/hero.jpg"
            alt="Hero image"
            width={500}
            height={500}
            className="rounded-full object-cover shadow-2xl"
            priority
            data-ai-hint="abstract developer"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
