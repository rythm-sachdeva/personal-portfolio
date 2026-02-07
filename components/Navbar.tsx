import React from 'react'

const Navbar = () => {
  return (
    <nav className="sticky  top-0 z-50 w-full glass">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* <!-- Logo --> */}
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <span className="material-symbols-outlined font-bold text-[28px]">{"<Rythm>"}</span>
              <span className="material-symbols-outlined text-white text-[28px]">{"</Sachdeva>"}</span>
            </div>
          </div>

          <div className="fixed top-4 left-1/2 -translate-x-1/2 md:flex bg-white/[0.03] rounded-full backdrop-blur-md border border-white/5 px-5 py-3 items-center gap-8">
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#about">About</a>
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Work</a>
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Contact</a>
          </div> 
          <div className="flex items-center gap-4">
            
            <button className="hidden sm:flex items-center justify-center h-10 px-5 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(19,55,236,0.3)]">
              Contact Me
            </button>
            <button className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar