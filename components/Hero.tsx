import React from 'react'
import { GlowLink } from './GlowLink'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import AboutMe from './AboutMe'

const Hero = () => {
    return (
        <section className='relative w-full flex items-center min-h-[calc(100vh-80px)] overflow-hidden pb-20'>
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="layout-container flex flex-col w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="flex flex-col max-w-4xl gap-8">
                    <div className="flex flex-col gap-6 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-primary text-xs font-semibold uppercase tracking-wider">Available for work</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-display font-black leading-[1.1] tracking-tight text-white">
                            Building digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">experiences</span> that matter.
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
                            I'm a Full Stack Developer specializing in building exceptional digital products. I transform complex problems into beautiful, intuitive interfaces.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-white font-bold tracking-wide transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(19,55,236,0.4)] hover:-translate-y-0.5">
                            View Projects
                        </button>
                       <GlowLink
					href='https://github.com/rythm-sachdeva'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				<GlowLink
					href='https://www.linkedin.com/in/rythm-sachdeva'
					color='rgb(0, 160, 220, 0.6)'
					icon={<FaLinkedinIn color='rgb(0, 160, 220)' />}
					aria-label='linkedin'
				/>
				<GlowLink
					href='mailto:rythmsachdeva049@gmail.com'
					icon={<IoMailOutline color='rgb(18, 122, 209)' />}
					color=' rgb(18, 122, 209,0.7)'
					aria-label='mail'
				/>
                    </div>
                    <div className="flex items-center gap-8 pt-8 text-gray-500 border-t border-white/5 mt-4">
                        <div>
                            <span className="block text-2xl font-bold text-white">5+</span>
                            <span className="text-sm">Years Exp.</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-white">50+</span>
                            <span className="text-sm">Projects</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-white">20+</span>
                            <span className="text-sm">Clients</span>
                        </div>
                    </div>
                </div>
            </div>
        
        


        </section>
    )
}

export default Hero