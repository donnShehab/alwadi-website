"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/[0.03] -skew-x-12 transform translate-x-20 z-0" />
      
      <div className="max-width-container grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-tagline !mb-0">Since 1978</span>
            <div className="w-12 h-px bg-brand-gray-mid" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-brand-orange text-brand-orange" />
              ))}
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-2">Premium Quality</span>
          </div>

          <h1 className="mb-8 font-black">
            Premium <span className="text-brand-orange">Tradition</span> Meets Modern Excellence.
          </h1>
          
          <p className="text-xl text-brand-gray-dark/70 max-w-xl mb-12 leading-relaxed font-medium">
            From humble beginnings to a world-class manufacturing facility, Alwadi continues to redefine the standard of frozen meats and bakery products for your family.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="#products" className="btn-primary">
              Explore Our Products <ArrowRight size={20} />
            </Link>
            <button className="px-8 py-4 text-brand-black font-bold uppercase tracking-widest text-[11px] border border-brand-gray-mid rounded-full hover:bg-brand-gray-light transition-all">
              Our Heritage
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-12 border-t border-brand-gray-mid pt-12 w-full max-w-lg">
             <div>
               <div className="text-3xl font-black text-brand-black">45+</div>
               <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Years of Trust</div>
             </div>
             <div>
               <div className="text-3xl font-black text-brand-black">200+</div>
               <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Global Outlets</div>
             </div>
             <div>
               <div className="text-3xl font-black text-brand-black">ISO</div>
               <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Certified Safety</div>
             </div>
          </div>
        </motion.div>

        {/* Video / Product Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative aspect-video w-full rounded-[3rem] overflow-hidden shadow-2xl border border-brand-gray-mid"
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/hero_burger_cinematic.png"
          >
            <source src="https://video.wixstatic.com/video/60bb7a_3f0a9151da434ad4b035e2d4e13d58c6/1080p/mp4/file.mp4" type="video/mp4" />
          </video>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay pointer-events-none" />

          {/* Floating Ingredient Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[10%] bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-white/20 flex items-center gap-4 z-20"
          >
             <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange font-black">
                100%
             </div>
             <div>
                <div className="text-xs font-black uppercase tracking-tighter">Pure Poultry</div>
                <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Natural Goodness</div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Internal Link helper if not imported
const Link = ({ children, href, className }: any) => <a href={href} className={className}>{children}</a>

export default Hero
