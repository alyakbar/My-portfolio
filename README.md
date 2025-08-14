# My Portfolio Website

A modern, responsive portfolio built with Next.js and Tailwind CSS to showcase your skills, projects, certificates, and provide a way for visitors to contact you directly.

## Features

- **Home & Hero Section:** Eye-catching introduction with your name, tagline, and profile image.
- **About Me:** Brief bio and background.
- **Skills:** Visual display of your technical and soft skills.
- **Projects:** Interactive cards for your key projects, with descriptions and links.
- **Certificates:** Gallery of your professional certificates, with PDF viewing support.
- **Contact Form:** Secure form for visitors to send you messages, delivered to your email via Resend.
- **Social Links:** Quick access to your GitHub, LinkedIn, Kaggle, and email.
- **Responsive Design:** Works beautifully on desktop and mobile.
- **Dark/Light Theme Toggle:** User-friendly theme switching.

## Tech Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS** (with custom config)
- **Radix UI** (for accessible UI components)
- **Framer Motion** (animations)
- **Resend** (email delivery for contact form)
- **React Hook Form + Zod** (form validation)

## Getting Started

1. **Clone the repository:**
   ```powershell
   git clone <your-repo-url>
   cd My-portfolio
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

3. **Run the development server:**
   ```powershell
   npm run dev
   ```
   Open [http://localhost:9002](http://localhost:9002) in your browser.

## Contact Form Setup
- The contact form sends submissions to your email using Resend.
- For production, verify your domain with Resend for custom sender addresses.

## Customization
- Update your profile, skills, and project info in the `src/components` folder.
- Add or replace certificate PDFs in the `public/` folder.
- Adjust theme, layout, and colors in `tailwind.config.ts` and UI components.

## Folder Structure
- `src/app/` — Main app pages and API routes
- `src/components/` — Reusable UI and feature components
- `public/` — Static assets (images, PDFs)
- `docs/` — Project documentation

## License
This project is for personal use and portfolio demonstration. You may adapt it for your own portfolio.

---

**Built and maintained by Alyakbar Sheikh.**
