"use client"
import { ProjectButtons } from '@/globals/project-buttons'
import Card from './Card'
import { cardContent } from '@/globals/Card-Content'
import {motion} from "framer-motion";

const Projects = () => {
  return (
    <motion.section className="relative w-full py-24 px-10 bg-surface-dark/30" id="work">
        {/* Header */}
        <div className='flex flex-col md:flex-row md:justify-between mb-10 items-end'>
        <div className=''>
        <p className='text-white text-3xl font-semibold '>Selected Works</p>
        <div className='text-gray-600 pb-3 pt-1 md:w-1/2'>
        <p>A collection of projects showcasing expertise in
        design, development and problem solving</p>
        </div>
        </div>

        <div className='md:flex hidden flex-wrap gap-2'>
         {
            ProjectButtons.map((v)=>(
                <button className='rounded-full bg-[#282b39] px-5 h-10  text-sm font-medium text-white transition-all hover:bg-blue-600'>
                    {v}
                </button>
            ))
         }
        </div>
        </div>

        {/* main section */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
           {cardContent.map((v)=><Card key={v.primaryTitle} content={v}/>)  }
        </div>
        <div className='md:hidden pt-10 flex flex-wrap gap-2'>
          {
            ProjectButtons.map((v)=>(
                <button className='rounded-full bg-[#282b39] px-5 h-10  text-sm font-medium text-white transition-all hover:bg-blue-600'>
                    {v}
                </button>
            ))
         }

        </div>
    </motion.section>
  )
}

export default Projects