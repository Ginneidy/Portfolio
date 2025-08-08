import { About } from "app/components/home/About";
import { Certifications } from "app/components/home/Certifications";
import { Experience } from "app/components/home/Experience";
import { Hero } from "app/components/home/Hero";
import { Projects } from "app/components/home/Projects";
import { Services } from "app/components/home/ServicesOverview";
import { Skills } from "app/components/home/Skills";

export default function Home() {

    return (
        <main>
            <Hero />
            <Services />
            <Experience />
            <About />
            <Skills />
            <Projects />
            <Certifications />
        </main>
    );
}