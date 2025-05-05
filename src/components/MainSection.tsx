import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Apresentation from "./Apresentation";
import Contact from "./Contact";

export default function MainSection() {
    return (
        <main className="pt-20 bg-background dark:bg-gray-900 transition-colors">
            <Apresentation />
            <About />
            <Experience />
            <Skills />
            <Contact />
        </main>
    )
}