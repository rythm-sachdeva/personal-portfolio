import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import PageTransition from "@/components/PageTransition";
export default function Home() {
  return (
  <PageTransition>
    <div className="flex flex-col gap-16">
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  </PageTransition>  
  
  );
}
