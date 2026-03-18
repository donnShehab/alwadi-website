"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'breaded',
    title: 'The Breaded Collection',
    description: 'Golden, crispy, and perfected through decades of artisanal poultry craft.',
    image: '/images/category_breaded.png',
    number: '01',
    highlight: 'Signature Series'
  },
  {
    id: 'burgers',
    title: 'Gourmet Burgers',
    description: '100% pure cuts, flame-ready, and seasoned with our heritage spice blends.',
    image: '/images/category_burger.png',
    number: '02',
    highlight: 'Master Grill'
  },
  {
    id: 'marinated',
    title: 'Marinated Cuts',
    description: 'Hand-selected poultry, vacuum-sealed in chef-inspired secret marinades.',
    image: '/images/category_marinated.png',
    number: '03',
    highlight: 'Chef Ready'
  },
  {
    id: 'bakery',
    title: 'Bakery & Heritage',
    description: 'Authentic doughs and traditional bakery treasures, frozen in time.',
    image: '/images/category_bakery.png',
    number: '04',
    highlight: 'Classic Craft'
  }
]

const CategorySection = () => {
  return (
    <section id="products" className="bg-brand-white section-padding overflow-hidden">
      <div className="max-width-container">
        {/* Header: Monumental Intro */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
           <div className="max-w-2xl">
             <span className="text-tagline">Curated Selection</span>
             <h2 className="!leading-none">The Alwadi <br /> <span className="text-brand-orange">Collections.</span></h2>
           </div>
           <p className="text-xl text-brand-gray-dark/50 font-medium max-w-sm leading-tight pb-2">
             Explore our diverse range of premium products, each representing 45 years of <span className="text-brand-black italic">culinary mastery.</span>
           </p>
        </div>

        {/* Gallery: Staggered Monoliths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-40">
           {categories.map((cat, i) => (
             <motion.div
               key={cat.id}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
               className={`relative ${i % 2 !== 0 ? 'md:mt-40' : ''}`}
             >
                {/* Image Container with Reveal Mask */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl group border-[8px] border-white bg-brand-gray-light">
                   <Image 
                    src={cat.image} 
                    alt={cat.title} 
                    fill 
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                   />
                   <div className="absolute inset-0 bg-brand-black/5 group-hover:bg-transparent transition-colors duration-700" />
                   
                   {/* Overlay Number */}
                   <span className="absolute top-10 right-10 text-8xl font-black text-white/20 select-none group-hover:text-white/40 transition-colors">
                     {cat.number}
                   </span>
                </div>

                {/* Content Details */}
                <div className="mt-12 space-y-6 px-4 interactive">
                   <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange">{cat.highlight}</span>
                      <div className="h-px w-10 bg-brand-gray-mid" />
                   </div>
                   <h3 className="text-4xl">{cat.title}</h3>
                   <p className="text-lg text-brand-gray-dark/60 font-medium leading-relaxed max-w-sm">
                     {cat.description}
                   </p>
                   <Link href={`#${cat.id}`} className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] group">
                      View Collection 
                      <div className="w-10 h-10 rounded-full border border-brand-gray-mid flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:text-white transition-all duration-500">
                        <ArrowRight size={16} />
                      </div>
                   </Link>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
