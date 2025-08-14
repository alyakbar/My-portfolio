"use client"

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionWrapper } from './section-wrapper';
import { SectionHeader } from './section-header';
import { Card, CardContent } from './ui/card';
import { useRef } from 'react';

const motionProps = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, type: 'spring', stiffness: 100 },
};

export function About() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-1%', '1%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['1%', '-1%']);

  return (
    <SectionWrapper ref={targetRef} id="about" className="bg-secondary" style={{ perspective: '2000px' }}>
      <SectionHeader 
        title="About Me"
        description="A little bit about my journey and passions."
      />
      <motion.div style={{ y }} className="mx-auto max-w-5xl mt-8">
        <motion.div {...motionProps} >
          <Card className="transform-style-3d">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
                <motion.div 
                  style={{ y: imageY }}
                  className="md:col-span-1"
                  whileHover={{ scale: 1.05, rotateY: 10, z: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="relative mx-auto h-64 w-64 md:h-full md:w-full aspect-square rounded-full md:rounded-lg">
                    <Image
                      src="/aboutme2.jpg"
                      alt="Profile Picture"
                      fill
                      className="object-cover shadow-lg rounded-full md:rounded-lg"
                      data-ai-hint="professional headshot"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  style={{ y: textY }}
                  className="md:col-span-2 pb-8"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hi, I’m Alyakbar Ahmed Sheikh, a <strong>passionate and driven</strong> <strong>Computer Science graduate</strong> with hands-on experience in <strong>web development, blockchain, AI, and data analytics</strong>. I enjoy building innovative solutions that solve real-world problems, blending creativity with technical expertise.
                  </p>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                   I’m skilled in <strong>HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Node.js, PHP, and MySQL,</strong> with additional experience in <strong> blockchain dApp development</strong> on Celo. I have also explored <strong>machine learning, cloud computing, and cybersecurity</strong>, constantly pushing myself to learn and grow.

                  </p>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                   I hold multiple <strong>industry-recognized certifications</strong> from Huawei, Cisco, Oracle, and other tech organizations, covering areas like <strong>networking, cloud computing, security, data analysis, IoT, and blockchain.</strong> 
                  </p>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                   Beyond coding, I’m an active community contributor — from leading the <strong>University Muslim Union</strong> to participating in <strong>hackathons</strong> and <strong>developer meetups</strong> — always striving to make an impact.
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
