"use client"

import { motion } from 'framer-motion';
import { ExternalLink, Award, FileText } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

interface Certificate {
  title: string;
  organization: string;
  date: string;
  verifyUrl: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  }),
};

export function CertificateCard({ certificate, index }: CertificateCardProps) {
  const handleView = () => {
    window.open(certificate.verifyUrl, '_blank');
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className="h-full"
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{ y: -10, rotateX: 10, scale: 1.03, boxShadow: '0px 20px 30px -10px rgba(0,0,0,0.3)' }}
    >
      <Card className="group flex h-full transform flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer" onClick={handleView}>
        <CardHeader className="p-0">
          <div className="w-full h-40 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center relative overflow-hidden">
            {/* Certificate Design Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 left-2 w-8 h-8 border-2 border-blue-400 rotate-45"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-2 border-blue-400 rotate-45"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-2 border-blue-400 rotate-45"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-2 border-blue-400 rotate-45"></div>
            </div>
            
            {/* Main Certificate Content */}
            <div className="flex flex-col items-center justify-center text-center z-10">
              <Award className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
              <div className="text-xs font-semibold text-blue-800 dark:text-blue-300 mb-1">
                CERTIFICATE
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400 max-w-32 leading-tight">
                {certificate.title}
              </div>
            </div>
            
            {/* PDF Indicator */}
            <div className="absolute bottom-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              PDF
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors duration-300">
            {certificate.title}
          </CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">{certificate.organization}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 pt-0">
          <p className="text-xs text-muted-foreground">{certificate.date}</p>
          <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:text-primary group-hover:rotate-45" />
        </CardFooter>
      </Card>
    </motion.div>
  );
}



