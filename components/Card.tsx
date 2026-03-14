'use client'

import { CardContent } from '@/globals/Card-Content'
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Card = ({content}:{content:CardContent}) => {
 const router = useRouter();
    return (
        <div className="group relative aspect-4/3 overflow-hidden rounded-xl bg-[#1c1f2e] cursor-pointer shadow-lg shadow-black/20">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm" style={{backgroundImage:`url('${content.imageUrl}')`}}></div>
            <div className="glass-overlay absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6 text-center">
                <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold text-white">{content.cardTitle}</h3>
                    <p className="mt-2 text-sm font-medium text-gray-300">
                    {
                        content.tags.slice(0,3).map((val,index)=>{
                            return (
                              index==2? `${val}`  : `${val} • `
                            )
                        })
                    }
                    </p>
                </div>
                <button onClick={()=>{
                    router.push(`/work/${content.id}`)
                }} className="group translate-y-4 mt-2 flex items-center gap-2 rounded-lg bg-primary/90 px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-primary group-hover:translate-y-0 cursor-pointer">
                    View Case Study
                    <FaArrowRight/>
                </button>
            </div>
        </div>
    )
}

export default Card