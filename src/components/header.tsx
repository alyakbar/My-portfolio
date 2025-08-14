"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.querySelector(item.href.substring(1)) ? document.getElementById(item.href.substring(1)) : null).filter(Boolean);
      const scrollPosition = window.scrollY + 100;
      
      let currentSection = 'home';
      for (const section of sections) {
        if(section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          currentSection = section.id;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent border-b border-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link href="#home" className="flex items-center gap-2 font-headline text-2xl font-bold">
          <Code2 className="h-8 w-8 text-primary" />
          <span>Aly.Tech</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map(item => (
            <Link key={item.name} href={item.href} passHref>
              <Button variant="ghost" className={cn(
                'font-medium transition-colors',
                activeSection === item.href.substring(1) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              )}>
                {item.name}
              </Button>
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
        </div>
      </div>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-sm"
        >
          <nav className="flex flex-col items-center gap-4 py-4">
            {navItems.map(item => (
              <Link key={item.name} href={item.href} passHref>
                <Button variant="ghost" onClick={() => setIsOpen(false)} className="w-full text-lg">
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
