"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useLenis } from 'lenis/react'
import { Menu, X, ShoppingBag, Search } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useLenis((lenis) => {
    setScrolled(lenis.scroll > 50)
  })

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '#products' },
    { name: 'Journal', href: '#journal' },
    { name: 'Factory', href: '#factory' },
    { name: 'Contact', href: '#footer' },
  ]

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-700 ${
          scrolled 
            ? 'bg-brand-white/80 backdrop-blur-xl py-6 border-b border-brand-gray-mid' 
            : 'bg-transparent py-10'
        }`}
      >
        <div className="max-width-container flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-5 group">
            <div className="relative w-12 h-12 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
               <Image 
                src="/images/logo_official_web.png" 
                alt="Alwadi Food" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black uppercase tracking-tighter leading-none">
                Alwadi
              </span>
              <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-brand-orange">
                Food Legacy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: High-End Tracking */}
          <div className="hidden lg:flex items-center gap-16">
            <div className="flex items-center gap-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-black/40 hover:text-brand-orange transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-orange transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-6 pl-8 border-l border-brand-gray-mid">
                <button className="text-brand-black/40 hover:text-brand-orange transition-colors">
                  <Search size={18} />
                </button>
                <button className="relative p-2 text-brand-black/40 hover:text-brand-orange transition-all">
                  <ShoppingBag size={18} />
                  <span className="absolute top-0 right-0 w-4 h-4 bg-brand-orange text-white text-[8px] flex items-center justify-center rounded-full font-black">0</span>
                </button>
            </div>
          </div>

          {/* Mobile UI */}
          <div className="flex lg:hidden items-center gap-6">
            <button className="p-2 text-brand-black/40">
              <ShoppingBag size={20} />
            </button>
            <button 
              className="p-2 text-brand-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Luxury Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-brand-white/95 backdrop-blur-2xl p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-20">
                 <div className="text-2xl font-black uppercase tracking-tighter">Menu</div>
                 <button 
                  className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-5xl font-black text-brand-black hover:text-brand-orange transition-colors uppercase tracking-tight"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-brand-gray-mid">
               <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-6">Connect with Heritage</div>
               <div className="flex gap-10 text-xs font-black uppercase text-brand-black">
                  <span>Instagram</span>
                  <span>Facebook</span>
                  <span>LinkedIn</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
