"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { recipes } from '@/data/recipes'
import { ArrowRight, Clock, ChefHat } from 'lucide-react'

const HeritageJournal = () => {
  return (
    <section id="journal" className="bg-brand-white section-padding overflow-hidden">
      <div className="max-width-container">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
           <div className="max-w-xl interactive">
              <span className="text-tagline">Culinary Inspiration</span>
              <h2 className="!leading-none">The Heritage <br /> <span className="text-brand-orange">Journal.</span></h2>
           </div>
           <p className="text-xl text-brand-gray-dark/50 font-medium max-w-sm leading-tight pb-2">
              Discover curated recipes that elevate our premium products into a <span className="text-brand-black italic">gourmet lifestyle.</span>
           </p>
        </div>

        {/* Recipe Grid: High-Impact Monoliths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-24">
           {recipes.map((recipe, i) => (
             <motion.div
               key={recipe.id}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
               className="group flex flex-col items-start interactive"
             >
                {/* Visual Stage */}
                <div className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden mb-10 shadow-2xl border-[10px] border-white bg-brand-gray-light">
                   <Image 
                    src={recipe.image} 
                    alt={recipe.title} 
                    fill 
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                   />
                   <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors" />
                   
                   {/* Tag Overlay */}
                   <div className="absolute top-8 left-8 flex flex-col gap-3">
                      {recipe.tags.map((tag, idx) => (
                         <span key={idx} className="bg-white/95 backdrop-blur-md text-brand-black text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg border border-brand-gray-mid/30">
                            {tag}
                         </span>
                      ))}
                   </div>
                </div>

                {/* Content Side */}
                <div className="space-y-6">
                   <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-brand-orange">
                         <Clock size={14} />
                         <span className="text-[10px] font-black uppercase tracking-widest">{recipe.time}</span>
                      </div>
                      <div className="w-px h-6 bg-brand-gray-mid" />
                      <div className="flex items-center gap-2 text-brand-black/30">
                         <ChefHat size={14} />
                         <span className="text-[10px] font-black uppercase tracking-widest">{recipe.difficulty}</span>
                      </div>
                   </div>
                   
                   <h3 className="text-3xl leading-tight group-hover:text-brand-orange transition-colors duration-500">{recipe.title}</h3>
                   <p className="text-lg text-brand-gray-dark/50 font-medium leading-relaxed line-clamp-2">
                     {recipe.description}
                   </p>
                   
                   <button className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] group/btn">
                      Read Story 
                      <div className="w-10 h-10 rounded-full border border-brand-gray-mid flex items-center justify-center group-hover/btn:bg-brand-orange group-hover/btn:border-brand-orange group-hover/btn:text-white transition-all duration-500">
                        <ArrowRight size={16} />
                      </div>
                   </button>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Action Anchor: Subtle Explore All */}
        <div className="mt-32 pt-16 border-t border-brand-gray-mid/20 flex items-center justify-between">
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">Exclusive Selection</span>
            </div>
            <button className="text-[10px] font-black text-brand-black hover:text-brand-orange uppercase mx-auto tracking-[0.4em] transition-all border-b border-transparent hover:border-brand-orange/30 pb-2">
               Full Heritage Repository
            </button>
        </div>
      </div>
    </section>
  )
}

export default HeritageJournal
