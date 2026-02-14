import React from 'react'

const Card = () => {
    return (
        <div className="group relative aspect-4/3 overflow-hidden rounded-xl bg-[#1c1f2e] cursor-pointer shadow-lg shadow-black/20">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage:"url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2AzJAAlVG186aJGHjHTvMMpIfxerkR0Olx4k040x550v7ETnas2030cZrsTzpz6Q1PJywWBA4GOUXYpbncxkK2JYhRJJ7FgOAERakPi4TQ8jnDna7p7XFc_PBJlHl7V_pcIjz-DIqHl3PNr6xBSZULD5FSvZM_VbL-L-ikcABQrHre6T7A6Mzx1plWI3XPWK5gzjNmaJnyzyX78DpOcPulfrT1ROl2B3aNOOEsTHZHy3yp1m22sPp0ONnciLYCyHFgYdoJl1_GJkF')"}}></div>
            <div className="glass-overlay absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6 text-center">
                <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold text-white">Fintech Analytics</h3>
                    <p className="mt-2 text-sm font-medium text-gray-300">Vue.js • D3.js • Tailwind</p>
                </div>
                <button className="translate-y-4 mt-2 flex items-center gap-2 rounded-lg bg-primary/90 px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-primary group-hover:translate-y-0">
                    View Case Study
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
            </div>
        </div>
    )
}

export default Card