"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import type { GitHubRepo } from '@/lib/types';
import Link from 'next/link';

interface ProjectCardProps {
  repo: GitHubRepo;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  }),
};

export function ProjectCard({ repo, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ y: -10, scale: 1.03, rotateX: 5, boxShadow: '0px 20px 30px -10px rgba(0,0,0,0.3)' }}
      transition={{ duration: 0.2, type: 'spring', stiffness: 200 }}
      className="h-full"
    >
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:border-primary/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-2xl">
            <Github className="h-6 w-6" />
            {repo.name}
          </CardTitle>
          <CardDescription className="line-clamp-3 h-[60px]">
            {repo.description || 'No description provided.'}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {repo.language && <Badge variant="secondary" className="bg-accent/50 text-accent-foreground">{repo.language}</Badge>}
            <span className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400" /> {repo.stargazers_count}</span>
            <span className="flex items-center gap-1"><GitFork className="h-4 w-4 text-green-500" /> {repo.forks_count}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button asChild variant="secondary" size="sm">
            <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Source
            </Link>
          </Button>
          {repo.homepage && (
            <Button asChild size="sm">
              <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
