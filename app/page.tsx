import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Hero/>
      <AboutMe/>
      <Projects/>
    </main>  );
}
