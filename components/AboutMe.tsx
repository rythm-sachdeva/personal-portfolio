import React from 'react'
import { MdVerified } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";
import { GlowLink } from './GlowLink';
import { FaReact, FaRust, FaNode, FaJava, FaPython, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiCplusplus, SiNestjs, SiDjango, SiReact, SiExpo } from 'react-icons/si';

const AboutMe = () => {
  return (
    <section className="relative w-full py-24 bg-surface-dark/30" id="about">
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

<div className="mb-16">
<h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
<span className="w-12 h-1 bg-primary rounded-full"></span>
                    About Me
                </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5 flex justify-center lg:justify-start relative group">

<div className="absolute inset-0 bg-gradient-to-tr from-primary to-cyan-400 rounded-[2rem] -rotate-3 blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
<div className="relative w-full aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-[#1a1d2d]" >

<div className="w-full h-full bg-cover bg-center" style={{backgroundImage:"url(/rythm.jpg)"}} data-alt="Portrait of a developer looking focused in a minimalist studio setting">
</div>

<div className="absolute bottom-6 right-6 glass px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
<span className="material-symbols-outlined text-primary text-xl"><MdVerified/></span>
<span className="text-white text-sm font-semibold">Open to Work</span>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-8">
<div className="space-y-6 text-gray-300 text-lg leading-relaxed">
<p>
                            Hello! My name is Rythm, Building scalable SaaS products and high-performance systems is what I do best. ​As a Software Engineer with enterprise experience, I don't just write code I architect solutions that handle scale, complexity, and real-world data. Whether you need a cross-platform mobile app, a heavy-lifting backend in Rust, or an AI-driven data pipeline, I deliver production-grade software.
                        </p>
<p>
                             I move seamlessly between high-level frameworks (React Native, Django) and low-level systems (Rust, C++, Java). This means I can build your user interface and optimize your server performance down to the microsecond.
                        </p>
<p>
                            I build with code and design with heart. I believe in elegant solutions that are efficient and scalable.
                        </p>
</div>

<div className="mt-4">
<h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary"><IoTerminal/></span>
                            Technical Skills
                        </h3>
<div className="flex flex-wrap gap-2">

<GlowLink
  icon={<FaReact color='rgb(97, 218, 251)' />}
  color='rgb(97, 218, 251, 0.7)'
  aria-label='React'
/>

<GlowLink
  icon={<SiNextdotjs color='rgb(255, 255, 255)' />}
  color='rgb(255, 255, 255, 0.7)'
  aria-label='Next.js'
/>

<GlowLink
  icon={<FaRust color='rgb(206, 145, 120)' />}
  color='rgb(206, 145, 120, 0.7)'
  aria-label='Rust'
/>

<GlowLink
  icon={<FaNode color='rgb(104, 160, 99)' />}
  color='rgb(104, 160, 99, 0.7)'
  aria-label='Node.js'
/>

<GlowLink
  icon={<FaJava color='rgb(237, 106, 67)' />}
  color='rgb(237, 106, 67, 0.7)'
  aria-label='Java'
/>

<GlowLink
  icon={<SiCplusplus color='rgb(0, 89, 157)' />}
  color='rgb(0, 89, 157, 0.7)'
  aria-label='C++'
/>

<GlowLink
  icon={<SiNestjs color='rgb(224, 35, 79)' />}
  color='rgb(224, 35, 79, 0.7)'
  aria-label='NestJS'
/>

<GlowLink
  icon={<SiDjango color='rgb(12, 75, 51)' />}
  color='rgb(12, 75, 51, 0.7)'
  aria-label='Django'
/>

<GlowLink
  icon={<FaPython color='rgb(55, 118, 171)' />}
  color='rgb(55, 118, 171, 0.7)'
  aria-label='Python'
/>

<GlowLink
  icon={<FaDocker color='rgb(32, 139, 234)' />}
  color='rgb(32, 139, 234, 0.7)'
  aria-label='Docker'
/>

<GlowLink
  icon={<FaGitAlt color='rgb(240, 80, 51)' />}
  color='rgb(240, 80, 51, 0.7)'
  aria-label='Git'
/>


</div>
</div>
</div>
</div>
</div>
</section>
  )
}

export default AboutMe