"use client"

import { motion } from 'framer-motion';
import { SectionWrapper } from './section-wrapper';
import { SectionHeader } from './section-header';
import { ContactForm } from './contact-form';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const KaggleIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
        <title>Kaggle</title>
        <path d="M13.75 0L7.5 12.5L13.75 24H18.75L12.5 12.5L18.75 0H13.75Z" fill="currentColor"/>
    </svg>
);

const socialLinks = [
  { icon: <Github />, href: "https://github.com/alyakbar", name: "GitHub" },
  { icon: <Linkedin />, href: "https://www.linkedin.com/in/alyakbar-ahmed-1abb1a218/", name: "LinkedIn" },
  { icon: <KaggleIcon />, href: "https://www.kaggle.com/alyakbar", name: "Kaggle" },
  { icon: <Mail />, href: "mailto:alyakbar275@gmail.com", name: "Email" },
]

export function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-secondary" style={{ perspective: '2000px' }}>
      <SectionHeader 
        title="Get In Touch"
        description="Have a project in mind or just want to say hi? Feel free to reach out."
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <h3 className="font-headline text-2xl font-semibold">Let's Collaborate</h3>
          <p className="mt-2 text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Let's connect and make something great together.
          </p>
          <div className="mt-8 flex gap-4">
            {socialLinks.map((link, i) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1, y: -5, rotateZ: (i % 2 === 0 ? -5 : 5) }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Button asChild variant="outline" size="icon" className="h-12 w-12 rounded-full">
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6 md:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
