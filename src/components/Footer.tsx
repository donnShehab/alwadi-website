"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'Breaded Collection', href: '#products' },
    { name: 'Burger & Kuftah', href: '#products' },
    { name: 'Marinated Cuts', href: '#products' },
    { name: 'Bakery & Kubbe', href: '#products' }
  ],
  company: [
    { name: 'About Alwadi', href: '#about' },
    { name: 'Our Heritage', href: '#about' },
    { name: 'Quality Assurance', href: '#about' },
    { name: 'Careers', href: '#' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' }
  ]
}

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-gray-light pt-24 pb-12 border-t border-brand-gray-mid">
      <div className="max-width-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="relative w-10 h-10">
                <Image src="/images/logo_official_web.png" alt="Alwadi Food" fill className="object-contain" />
              </div>
              <span className="text-2xl font-extrabold uppercase tracking-tighter text-brand-black">Alwadi</span>
            </Link>
            <p className="text-gray-500 font-medium mb-10 leading-relaxed text-sm">
              Providing families with premium frozen heritage since 1978. Committed to quality, tradition, and culinary excellence.
            </p>
            <div className="flex gap-4">
               {[Instagram, Facebook, Twitter].map((Icon, i) => (
                 <motion.button
                   key={i}
                   whileHover={{ y: -4, color: '#F58220' }}
                   className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm transition-all"
                 >
                   <Icon size={18} />
                 </motion.button>
               ))}
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <h4 className="text-xs font-bold text-brand-black uppercase tracking-[0.2em] mb-8">Collections</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-medium text-gray-500 hover:text-brand-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-brand-black uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-medium text-gray-500 hover:text-brand-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-brand-black uppercase tracking-[0.2em] mb-8">Contact Us</h4>
            <div className="flex flex-col gap-6">
               <div className="flex items-start gap-4">
                  <Mail size={18} className="text-brand-orange mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-sm font-bold text-brand-black">info@alwadifood.com</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <Phone size={18} className="text-brand-orange mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-sm font-bold text-brand-black">+962 6 489 1254</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-brand-orange mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Address</p>
                    <p className="text-sm font-bold text-brand-black">Industrial Area 4, Amman, Jordan</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-brand-gray-mid flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
             © 2026 Al Wadi Food Company. All rights reserved.
           </p>
           <div className="flex gap-8">
              {footerLinks.legal.map(link => (
                <Link key={link.name} href={link.href} className="text-[10px] font-bold text-gray-400 hover:text-brand-black uppercase tracking-widest transition-colors">
                   {link.name}
                </Link>
              ))}
           </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
