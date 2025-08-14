"use client"

import { motion } from 'framer-motion';
import { SectionWrapper } from './section-wrapper';
import { SectionHeader } from './section-header';
import { Card, CardContent } from './ui/card';
import { GitBranch, Code, Database, Server, ShieldCheck } from 'lucide-react';

const skillsData = {
  languages: {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Arduino'],
  },
  frameworks: {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: 'Frameworks & Concepts',
    skills: ['React', 'Next.js', 'Node.js', 'Big Data', 'IoT', 'Blockchain/Web3'],
  },
  networking: {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Networking & Security',
    skills: ['Network Security', 'Routing & Switching', 'CyberOps', 'Wireless Essentials', 'MITRE ATT&CK'],
  },
  tools: {
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'Oracle Cloud (OCI)', 'Huawei Cloud', 'Cisco Packet Tracer'],
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 50, scale: 0.9, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export function Skills() {
  return (
    <SectionWrapper id="skills" style={{ perspective: '2000px' }}>
      <SectionHeader 
        title="My Tech Stack"
        description="A showcase of the programming languages, frameworks, and tools I'm proficient in."
      />
      <motion.div 
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {Object.values(skillsData).map((category) => (
          <motion.div 
            key={category.title} 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10, rotateX: 10, boxShadow: '0px 20px 30px -10px rgba(0,0,0,0.3)' }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {category.icon}
                </div>
                <h3 className="font-headline text-xl font-semibold">{category.title}</h3>
                <ul className="mt-4 flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
