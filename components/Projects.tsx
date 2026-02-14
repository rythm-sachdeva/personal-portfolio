import React from 'react'
import { ProjectButtons } from '@/globals/project-buttons'
import Card from './Card'

const Projects = () => {
  return (
    <section className="relative w-full py-24 px-10 bg-surface-dark/30" id="projects">
        {/* Header */}
        <div className='flex justify-between mb-10 items-end'>
        <div className=''>
        <p className='text-white text-3xl font-semibold '>Selected Works</p>
        <div className='text-gray-600 pt-1'>
        <p>A collection of projects showcasing expertise in</p>
        <p>design, development and problem solving</p>
        </div>
        </div>

        <div className='flex flex-wrap gap-2'>
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
           {[1,2,3,4,5,6].map((v)=><Card key={v}/>)  }
        </div>
    </section>
  )
}

export default Projects