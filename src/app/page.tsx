import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionDivider colorFrom="#ff000033" colorTo="#6633ee33" />
      <About />
      <SectionDivider flip colorFrom="#6633ee33" colorTo="#00ccff33" />
      <Projects />
      <SectionDivider colorFrom="#00ccff22" colorTo="#ff000022" />
      <Contact />
      <Footer />
    </main>
  );
}
