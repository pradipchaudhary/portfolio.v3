import Certifications from "@/components/(root)/certifications/Certifications";
import Experience from "@/components/(root)/experiences/Experiences";
import AboutMe from "@/components/(root)/home/AboutMe";
import Skills from "@/components/(root)/skills/Skills";

export default function HomePage() {
    return (
        <div className="space-y-8 text-gray-300">
            <AboutMe />
            <Experience />
            <Skills />
            <Certifications />
        </div>
    );
}
