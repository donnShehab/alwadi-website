"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Globe } from 'lucide-react'

const ProductionSection = () => {
  return (
    <section id="about" className="bg-brand-gray-light section-padding overflow-hidden">
      <div className="max-width-container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Video Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative lg:h-[600px] h-[400px] rounded-[3rem] overflow-hidden shadow-2xl group border border-brand-gray-mid"
          >
             <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            >
              <source src="https://video.wixstatic.com/video/60bb7a_3f0a9151da434ad4b035e2d4e13d58c6/1080p/mp4/file.mp4" type="video/mp4" />
            </video>
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-brand-black/10 opacity-60 group-hover:opacity-40 transition-opacity duration-1000" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
             <span className="text-tagline">Since 1978</span>
             <h2 className="mb-10 text-brand-black">Inside Our Production <br /> <span className="text-brand-orange">& Factory.</span></h2>
             
             <p className="text-xl text-brand-gray-dark/70 mb-12 leading-relaxed">
               At Al-Wadi Food, our production facilities represent the pinnacle of modern food manufacturing. Our state-of-the-art factory integrates advanced technologies with stringent quality control measures, ensuring every product adheres to global standards for safety and excellence.
             </p>

             <div className="grid md:grid-cols-2 gap-10">
                <div className="group/item">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-orange mb-6 shadow-sm group-hover/item:bg-brand-orange group-hover/item:text-white transition-all">
                      <ShieldCheck size={28} />
                   </div>
                   <h4 className="text-lg font-extrabold mb-3 uppercase tracking-tight">Quality Control</h4>
                   <p className="text-sm text-gray-500 font-medium">Every batch is tested to meet international ISO 9001 and HACCP standards.</p>
                </div>
                <div className="group/item">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-orange mb-6 shadow-sm group-hover/item:bg-brand-orange group-hover/item:text-white transition-all">
                      <Zap size={28} />
                   </div>
                   <h4 className="text-lg font-extrabold mb-3 uppercase tracking-tight">Advanced Tech</h4>
                   <p className="text-sm text-gray-500 font-medium">Utilizing the latest processing technology for texture and nutrient preservation.</p>
                </div>
             </div>

             <div className="mt-12 flex items-center gap-6 p-6 bg-white rounded-3xl border border-brand-gray-mid">
                <div className="flex -space-x-3">
                   {[...Array(3)].map((_, i) => (
                     <div key={i} className="w-10 h-10 rounded-full border-4 border-white overflow-hidden bg-brand-gray-light">
                        <Image src={`/images/team_${i+1}.jpg`} alt="Team member" fill className="object-cover" />
                     </div>
                   ))}
                </div>
                <div>
                   <div className="text-sm font-bold text-brand-black">Dedicated Team of Experts</div>
                   <div className="text-[10px] uppercase font-bold text-brand-orange tracking-widest">Mastering Tradition</div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProductionSection
