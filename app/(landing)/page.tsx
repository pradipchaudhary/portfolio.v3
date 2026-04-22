import About from "@/components/sections/about/About";
import Certifications from "@/components/sections/certifications/Certifications";
import Experience from "@/components/sections/experiences/Experiences";
import Projects from "@/components/sections/projects/Projects";
import QuoteRotator from "@/components/sections/quote/Quote";
import Skills from "@/components/sections/skills/Skills";

export default function Home() {
  return (
    <>
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <QuoteRotator />
    </>
  );
}
