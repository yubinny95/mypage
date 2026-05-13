import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
      <footer className="footer">© 2026 민유빈. All rights reserved.</footer>
    </>
  );
}
