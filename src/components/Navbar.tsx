"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import { Menu, X, ShoppingBag } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useLenis((lenis) => {
    setScrolled(lenis.scroll > 50)
  })

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'OUR PRODUCTS', href: '#products' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled 
            ? 'bg-white py-4 shadow-md' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-width-container flex justify-between items-center">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-110">
               <Image 
                src="/images/logo_official_web.png" 
                alt="Alwadi Food" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-none transition-colors ${scrolled ? 'text-brand-black' : 'text-brand-black'}`}>
                Alwadi
              </span>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-orange">
                Food
              </span>
            </div>
          </Link>

          {/* Clean Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-[11px] font-bold tracking-[0.2em] text-brand-black/70 hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <button className="p-3 bg-brand-gray-light rounded-full text-brand-black hover:bg-brand-orange hover:text-white transition-all relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-red text-white text-[9px] flex items-center justify-center rounded-full font-bold">0</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            className="lg:hidden p-3 text-brand-black hover:text-brand-orange transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Simplified Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[2000] bg-white p-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative">
                    <Image src="/images/logo_official_web.png" alt="Logo" fill className="object-contain" />
                  </div>
                  <span className="text-brand-black font-bold uppercase tracking-widest text-xs">Menu</span>
               </div>
               <button 
                className="p-3 bg-brand-gray-light rounded-full text-brand-black hover:bg-brand-red hover:text-white transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-8 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-extrabold text-brand-black hover:text-brand-orange transition-colors uppercase tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-brand-gray-mid">
               <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">Stay Connected</p>
               <div className="flex gap-6">
                  <span className="text-xs font-bold text-brand-black">Instagram</span>
                  <span className="text-xs font-bold text-brand-black">Facebook</span>
                  <span className="text-xs font-bold text-brand-black">Twitter</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
