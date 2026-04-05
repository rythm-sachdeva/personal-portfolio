"use client"
import { useNav } from '@/store/NavBarStore'
import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"


const Navbar = () => {
  const { navigation } = useNav();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="sticky top-0 z-50 w-full glass">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* <!-- Logo --> */}
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <span className="material-symbols-outlined font-bold text-[15px] md:text-[28px]">{"<Rythm>"}</span>
              <span className="material-symbols-outlined text-white text-[15px] md:text-[28px]">{"</Sachdeva>"}</span>
            </div>
          </div>

          <div className="hidden fixed top-4 left-1/2 -translate-x-1/2 md:flex bg-white/[0.03] rounded-full backdrop-blur-md border border-white/5 px-5 py-3 items-center gap-8">
            {
              Array.from(navigation).map((value, idx) => (
                <a key={idx} className={`text-sm font-medium ${value[1] ? 'text-primary' : 'text-gray-300'}  hover:text-primary transition-colors`} href="#">{value[0]}</a>
              ))
            }
          </div>
          <div className="flex items-center gap-4">

            <button className="hidden sm:flex items-center justify-center h-10 px-5 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(19,55,236,0.3)]">
              Contact Me
            </button>
            <span className='bg-white/[0.03] backdrop-blur-md rounded-2xl border  border-white/5'>
              <button onClick={() => {
                setIsOpen((state) => {
                  return !state
                })
              }} className="md:hidden p-2 text-xl rounded-lg text-gray-300 hover:text-white">
                <FiMenu />
              </button>
            </span>
          </div>


          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute top-16 left-0 w-full bg-black/[0.9] rounded-lg backdrop-blur-lg border border-white/5 p-4 flex flex-col items-center gap-4 md:hidden"
                initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              >
                {Array.from(navigation).map((value, idx) => (
                  <motion.a
                    key={idx}
                    className={`text-sm font-medium ${value[1] ? "text-primary" : "text-gray-300"} hover:text-primary transition-colors`}
                    href="#"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15, delay: idx * 0.05 }}
                  >
                    {value[0]}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}

export default Navbar