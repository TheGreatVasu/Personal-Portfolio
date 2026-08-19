import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Company } from "@/components/Company";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Manifesto } from "@/components/Manifesto";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Company />
        <Experience />
        <Projects />
        <Process />
        <Manifesto />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
