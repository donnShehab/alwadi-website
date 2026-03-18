"use client"
import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Product } from '@/data/products'
import { X, Timer, Flame, Check, UtensilsCrossed } from 'lucide-react'

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-black/40 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-brand-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] lg:max-h-[85vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-black shadow-lg hover:bg-brand-orange hover:text-white transition-all interactive"
            >
              <X size={24} />
            </button>

            {/* Visual Side */}
            <div className="w-full md:w-1/2 bg-brand-gray-light p-12 flex items-center justify-center relative">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.2 }}
                 className="relative w-full aspect-square"
               >
                 <Image
                   src={product.image}
                   alt={product.name}
                   fill
                   className="object-contain"
                 />
               </motion.div>
               
               {/* Aesthetic Brand Mark */}
               <div className="absolute bottom-8 left-8 text-[10px] font-black uppercase tracking-[0.5em] text-brand-black/10 select-none">
                  Alwadi Heritage Quality
               </div>
            </div>

            {/* Information Side */}
            <div className="w-full md:w-1/2 p-8 sm:p-12 overflow-y-auto custom-scrollbar">
               <div className="mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-orange mb-3 block">{product.category} Collection</span>
                  <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-brand-black mb-6 !leading-none">
                    {product.name}
                  </h2>
                  <p className="text-lg text-brand-gray-dark/50 font-medium leading-relaxed">
                    {product.description}
                  </p>
               </div>

               {/* Discovery Grid: Pure Facts */}
               <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="p-6 bg-brand-gray-light rounded-[2rem] border border-brand-gray-mid">
                     <div className="flex items-center gap-3 text-brand-orange mb-3">
                        <Timer size={18} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Ritual</span>
                     </div>
                     <div className="text-xl font-bold text-brand-black">{product.cookingTime}</div>
                     <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">Prep Time</div>
                  </div>
                  <div className="p-6 bg-brand-gray-light rounded-[2rem] border border-brand-gray-mid">
                     <div className="flex items-center gap-3 text-brand-green mb-3">
                        <Flame size={18} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Energy</span>
                     </div>
                     <div className="text-xl font-bold text-brand-black">{product.calories ? product.calories.split(' ')[0] : '280'} <span className="text-xs opacity-30">kcal</span></div>
                     <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">Per 100g</div>
                  </div>
               </div>

               {/* Artisanal Ingredients */}
               <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                     <UtensilsCrossed size={16} className="text-brand-orange" />
                     <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-black">Artisanal Ingredients</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                     {product.ingredients?.map((ing, i) => (
                       <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-brand-gray-mid/50 text-xs font-medium text-brand-gray-dark">
                          <Check size={12} className="text-brand-green" /> {ing}
                       </div>
                     ))}
                  </div>
               </div>

               {/* Action Footer */}
               <div className="mt-8 pt-8 border-t border-brand-gray-mid flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                  <div className="flex flex-col">
                     <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2 leading-none">Market Listing</span>
                     <div className="flex items-baseline gap-2">
                        <span className="text-[11px] font-black text-brand-black/20 uppercase tracking-widest">{product.price.split(' ')[0]}</span>
                        <div className="text-4xl font-black text-brand-black text-serif italic leading-none">{product.price.split(' ')[1]}</div>
                     </div>
                  </div>
                  <button className="btn-luxury !py-4 !px-10 w-full sm:w-auto text-center justify-center">
                     Add To Selection
                  </button>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProductModal
