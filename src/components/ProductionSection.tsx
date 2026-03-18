"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Globe, Cpu } from 'lucide-react'

const ProductionSection = () => {
  return (
    <section id="about" className="bg-brand-white section-padding overflow-hidden">
      <div className="max-width-container">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-40 items-center">
          
          {/* Media Stage: Cinematic Monolith */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative w-full lg:h-[700px] h-[500px] rounded-[4rem] overflow-hidden shadow-2xl group border-[12px] border-white interactive"
          >
             <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-transform duration-[2000ms] group-hover:scale-105"
            >
              <source src="https://video.wixstatic.com/video/60bb7a_3f0a9151da434ad4b035e2d4e13d58c6/1080p/mp4/file.mp4" type="video/mp4" />
            </video>
            {/* Sophisticated Overlay */}
            <div className="absolute inset-0 bg-brand-orange/5 mix-blend-multiply opacity-60 transition-opacity duration-1000" />
            <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
               <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/60 mb-2">Live Factory Insight</div>
               <div className="text-xl font-bold text-white uppercase tracking-tighter">State-of-the-Art <span className="text-brand-orange">Precision.</span></div>
            </div>
          </motion.div>

          {/* Content Narrative: Professional Depth */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
             <span className="text-tagline">Industrial Excellence</span>
             <h2 className="mb-10 !leading-[0.9]">Mastering the <br /> <span className="text-brand-orange">Craft of Scale.</span></h2>
             
             <p className="text-2xl text-brand-gray-dark/50 mb-16 leading-tight font-medium tracking-tight">
               Our production facilities represent the pinnacle of modern food manufacturing, integrating <span className="text-brand-black italic">robotic precision</span> with stringent global safety protocols.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group/feat">
                   <div className="w-14 h-14 bg-brand-gray-light rounded-2xl flex items-center justify-center text-brand-black mb-6 transition-all duration-500 group-hover/feat:bg-brand-orange group-hover/feat:text-white">
                      <ShieldCheck size={28} />
                   </div>
                   <h4 className="text-lg font-black mb-3 uppercase tracking-tighter">ISO 9001 Gold</h4>
                   <p className="text-sm text-brand-gray-dark/40 font-medium leading-relaxed">Global standards in safety and process integrity.</p>
                </div>
                <div className="group/feat">
                   <div className="w-14 h-14 bg-brand-gray-light rounded-2xl flex items-center justify-center text-brand-black mb-6 transition-all duration-500 group-hover/feat:bg-brand-orange group-hover/feat:text-white">
                      <Cpu size={28} />
                   </div>
                   <h4 className="text-lg font-black mb-3 uppercase tracking-tighter">Robotic Tech</h4>
                   <p className="text-sm text-brand-gray-dark/40 font-medium leading-relaxed">Advanced automation for perfect texture preservation.</p>
                </div>
             </div>

             {/* Team Badge: Refined UI */}
             <div className="mt-16 p-8 bg-brand-gray-light rounded-[2.5rem] border border-brand-gray-mid flex items-center gap-8 group/team interactive">
                <div className="flex -space-x-4">
                   {[1, 2, 3].map((i) => (
                     <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-gray-light overflow-hidden bg-brand-gray-mid transition-transform group-hover/team:translate-x-1">
                        <div className="w-full h-full bg-brand-gray-dark/10" />
                     </div>
                   ))}
                </div>
                <div>
                   <div className="text-xs font-bold text-brand-black uppercase tracking-widest mb-1">Expert Quality Team</div>
                   <div className="text-[9px] uppercase font-black text-brand-orange tracking-[0.4em]">Every Detail Mastered</div>
                </div>
                <div className="ml-auto w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-black/20 group-hover/team:text-brand-orange transition-colors">
                   <Globe size={18} />
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProductionSection
