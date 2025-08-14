import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Certificates } from "@/components/certificates";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
