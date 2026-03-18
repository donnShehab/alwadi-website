"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, Linkedin, ArrowUp, Globe, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-brand-white border-t border-brand-gray-mid pt-32 pb-20 overflow-hidden relative">
      {/* Monumental Watermark */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] text-[25vw] font-black tracking-tighter leading-none text-brand-black">
         ALWADI
      </div>

      <div className="max-width-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 lg:gap-32 mb-32">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
             <div className="flex items-center gap-4 mb-10 group">
                <div className="w-12 h-12 relative transition-transform duration-700 group-hover:rotate-12">
                  <Image src="/images/logo_official_web.png" alt="Logo" fill className="object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black uppercase tracking-tighter leading-none">Alwadi</span>
                  <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-brand-orange">Food Legacy</span>
                </div>
             </div>
             <p className="text-lg text-brand-gray-dark/50 font-medium leading-tight mb-10">
               Nourishing families with artisanal excellence and <span className="text-brand-black italic">world-class</span> quality since 1978.
             </p>
             <div className="flex gap-8">
                <Link href="#" className="text-brand-black/40 hover:text-brand-orange transition-colors"><Instagram size={20} /></Link>
                <Link href="#" className="text-brand-black/40 hover:text-brand-orange transition-colors"><Facebook size={20} /></Link>
                <Link href="#" className="text-brand-black/40 hover:text-brand-orange transition-colors"><Linkedin size={20} /></Link>
             </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-16">
             <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-10">Collections</h4>
                <div className="flex flex-col gap-6">
                   <Link href="#breaded" className="text-xs font-bold uppercase tracking-[0.1em] text-brand-black/40 hover:text-brand-orange transition-colors">The Breaded Series</Link>
                   <Link href="#burgers" className="text-xs font-bold uppercase tracking-[0.1em] text-brand-black/40 hover:text-brand-orange transition-colors">Gourmet Burgers</Link>
                   <Link href="#bakery" className="text-xs font-bold uppercase tracking-[0.1em] text-brand-black/40 hover:text-brand-orange transition-colors">Bakery & Heritage</Link>
                   <Link href="#marinated" className="text-xs font-bold uppercase tracking-[0.1em] text-brand-black/40 hover:text-brand-orange transition-colors">Marinated Cuts</Link>
                </div>
             </div>
             <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-10">Heritage</h4>
                <div className="flex flex-col gap-6">
                   <Link href="#about" className="text-xs font-bold uppercase tracking-[0.1em] text-brand-black/40 hover:text-brand-orange transition-colors">Our Factory</Link>
                   <Link href="#" className="text-xs font-bold uppercase tracking-[0.1em] text-brand-black/40 hover:text-brand-orange transition-colors">Quality Standards</Link>
                   <Link href="#" className="text-xs font-bold uppercase tracking-[0.1em] text-brand-black/40 hover:text-brand-orange transition-colors">Our History</Link>
                   <Link href="#" className="text-xs font-bold uppercase tracking-[0.1em] text-brand-black/40 hover:text-brand-orange transition-colors">Contact Us</Link>
                </div>
             </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1">
             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-10">Global Presence</h4>
             <div className="space-y-8">
                <div className="flex items-start gap-4">
                   <div className="mt-1 text-brand-orange"><Globe size={18} /></div>
                   <p className="text-sm font-bold text-brand-black uppercase tracking-tighter leading-tight">
                     Sahab Industrial City <br />
                     <span className="text-brand-gray-dark/50 italic text-serif normal-case">Amman, Jordan</span>
                   </p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="text-brand-orange"><Mail size={18} /></div>
                   <p className="text-sm font-bold text-brand-black uppercase tracking-tighter">info@alwadifood.com</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="text-brand-orange"><Phone size={18} /></div>
                   <p className="text-sm font-bold text-brand-black uppercase tracking-tighter">+962 6 4023777</p>
                </div>
             </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-16 border-t border-brand-gray-mid flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              © 2026 ALWADI FOOD. ALL HERITAGE RESERVED.
           </div>
           
           <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand-black/40 hover:text-brand-orange transition-all interactive"
           >
              Back to Excellence 
              <div className="w-12 h-12 rounded-full bg-brand-gray-light flex items-center justify-center transition-all group-hover:bg-brand-orange group-hover:text-white">
                <ArrowUp size={20} />
              </div>
           </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
