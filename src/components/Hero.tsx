"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Star, ShieldCheck } from 'lucide-react'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-brand-white overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-32">
      {/* Narrative Background Element - Responsive visibility */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-brand-gray-light/20 lg:bg-brand-gray-light/30 -skew-x-3 lg:-skew-x-6 transform translate-x-10 lg:translate-x-20 z-0" />
      
      <div className="max-width-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center lg:items-start xl:items-center">
          
          {/* Content side: Monumental Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-10"
            >
              <span className="text-tagline !mb-0">Artisanal Heritage Since 1978</span>
              <div className="w-12 sm:w-16 h-px bg-brand-gray-mid" />
            </motion.div>

            <h1 className="mb-8 sm:mb-10 !leading-[0.85]">
              The Art of <br />
              <span className="text-brand-orange">Premium</span> <br />
              <span className="text-serif lowercase opacity-90">Tradition.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-brand-gray-dark/60 max-w-xl mx-auto lg:mx-0 mb-12 sm:mb-16 leading-tight font-medium tracking-tight">
              Forging a world-class legacy of culinary excellence, crafted for families who value <span className="text-brand-black italic">nothing less than perfection.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center lg:justify-start">
              <Link href="#products" className="btn-luxury w-full sm:w-auto text-center justify-center">
                Explore Collection <ArrowRight size={18} />
              </Link>
              <button className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-black/40 hover:text-brand-black transition-all border-b border-transparent hover:border-brand-black/20 pb-1">
                Our Facilities
              </button>
            </div>

            {/* Stats: Luxury Grid - Simplified for small screens */}
            <div className="mt-20 sm:mt-24 grid grid-cols-3 gap-6 sm:gap-16 border-t border-brand-gray-mid pt-12 sm:pt-16">
               <div className="space-y-1 sm:space-y-2">
                 <div className="text-2xl sm:text-4xl font-black text-brand-black">45<span className="text-brand-orange">+</span></div>
                 <div className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Years</div>
               </div>
               <div className="space-y-1 sm:space-y-2">
                 <div className="text-2xl sm:text-4xl font-black text-brand-black">ISO</div>
                 <div className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Certified</div>
               </div>
               <div className="space-y-1 sm:space-y-2">
                 <div className="text-2xl sm:text-4xl font-black text-brand-black">200<span className="text-brand-orange">+</span></div>
                 <div className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Outlets</div>
               </div>
            </div>
          </motion.div>

          {/* Media side: Cinematic Reveal */}
          <motion.div 
            style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? y : 0 }}
            className="flex-1 relative w-full lg:w-auto"
          >
            <div className="relative aspect-[4/5] w-full max-w-[500px] lg:max-w-[550px] mx-auto rounded-[3rem] sm:rounded-[4rem] overflow-hidden shadow-2xl group border-[8px] sm:border-[12px] border-white interactive">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
              >
                <source src="https://video.wixstatic.com/video/60bb7a_3f0a9151da434ad4b035e2d4e13d58c6/1080p/mp4/file.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay" />
              
              {/* Floating Quality Badge - Scaled for mobile */}
              <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 bg-white/95 backdrop-blur-xl p-5 lg:p-8 rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl border border-white/20">
                 <div className="flex items-center gap-3 lg:gap-4 mb-2 lg:mb-3">
                   <ShieldCheck size={16} className="text-brand-green" />
                   <span className="text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">Verified Quality</span>
                 </div>
                 <div className="text-lg lg:text-2xl font-black text-brand-black">HACCP <span className="text-brand-orange">GOLD</span></div>
              </div>
            </div>

            {/* Accent Elements - Hidden on mobile for clarity */}
            <div className="hidden sm:block absolute -top-10 -left-10 w-32 h-32 border-l-2 border-t-2 border-brand-orange/10 rounded-tl-[4rem] pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-10 -right-10 w-48 h-48 border-r-2 border-b-2 border-brand-orange/10 rounded-br-[5rem] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

const Link = ({ children, href, className }: any) => <a href={href} className={className}>{children}</a>

export default Hero
