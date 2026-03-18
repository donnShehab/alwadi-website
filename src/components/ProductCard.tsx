"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Product } from '@/data/products'
import { Plus, ArrowRight, Timer, ShieldCheck } from 'lucide-react'

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Safe price parsing for the new UI format
  const priceParts = product.price.split(' ');
  const currency = priceParts[0] || 'JD';
  const amount = priceParts[1] || product.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-brand-white rounded-[3.5rem] p-8 hover-lift transition-all duration-700 flex flex-col h-full interactive border border-brand-gray-mid/30"
    >
      {/* Product Image Stage: High-End breathable container */}
      <div className="relative aspect-square w-full bg-brand-gray-light/50 rounded-[2.5rem] overflow-hidden mb-10 group">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-14 transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Status Elements: Minimalist Integration */}
        <div className="absolute top-8 left-8 z-10 flex flex-col gap-2.5">
           {product.highlight && (
             <div className="bg-brand-orange text-white text-[8px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full shadow-lg w-fit">
                {product.highlight}
             </div>
           )}
           <div className="bg-white/95 backdrop-blur-md text-brand-green text-[8px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full w-fit flex items-center gap-2 border border-brand-green/20">
              <ShieldCheck size={11} strokeWidth={3} /> Safety Gold
           </div>
        </div>

        {/* Quick Add Visual: Sophisticated indicator */}
        <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/5 transition-colors duration-700 flex items-center justify-center">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-2xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
              <Plus size={32} strokeWidth={2.5} />
           </div>
        </div>
      </div>

      {/* Product Narrative: Clean Editorial Hierarchy */}
      <div className="flex flex-col flex-1">
         <div className="mb-6">
            <span className="text-[9px] uppercase font-bold text-gray-400 tracking-[0.5em] mb-3 block">{product.category}</span>
            <h4 className="text-2xl font-black uppercase tracking-tighter text-brand-black group-hover:text-brand-orange transition-colors duration-500 !leading-[1.1]">
              {product.name}
            </h4>
         </div>
         
         <p className="text-sm text-brand-gray-dark/50 font-medium mb-12 line-clamp-2 leading-relaxed tracking-tight">
            {product.description}
         </p>

         {/* Essential Meta: Pure & Functional */}
         <div className="flex items-center gap-5 mb-12">
            <div className="flex items-center gap-2 text-brand-black/30">
               <Timer size={14} />
               <span className="text-[10px] font-black uppercase tracking-[0.2em]">{product.cookingTime}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-brand-gray-mid" />
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange/80">
               {product.nutrition && product.nutrition[0]}
            </div>
         </div>

         {/* Signature Price Section */}
         <div className="mt-auto flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">Heritage Selection</span>
              <div className="flex items-end gap-1.5">
                 <span className="text-[11px] font-black text-brand-black/20 uppercase tracking-widest mb-1.5">{currency}</span>
                 <span className="text-[42px] font-black text-brand-black text-serif italic tracking-tighter group-hover:text-brand-orange transition-colors duration-500 leading-none">{amount}</span>
              </div>
            </div>
            <button className="w-12 h-12 rounded-full border border-brand-gray-mid/40 flex items-center justify-center text-brand-black/20 group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:text-white transition-all duration-700">
               <ArrowRight size={18} />
            </button>
         </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
