import type {Metadata} from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'CodeFolioFlow | Aspiring Software Engineer',
  description: 'A modern, responsive portfolio for an aspiring software engineer, built with Next.js and Framer Motion.',
  openGraph: {
    title: 'CodeFolioFlow | Aspiring Software Engineer',
    description: 'A modern, responsive portfolio for an aspiring software engineer, built with Next.js and Framer Motion.',
    url: 'https://your-domain.com',
    siteName: 'CodeFolioFlow',
    images: [
      {
        url: 'https://placehold.co/1200x630.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "bg-background text-foreground")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
