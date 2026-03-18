"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Product } from '@/data/products'
import { Plus, ShoppingBag, ArrowRight } from 'lucide-react'

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-brand-white rounded-[2.5rem] p-6 border border-brand-gray-mid hover-lift transition-all duration-700 flex flex-col h-full interactive"
    >
      {/* Product Image Stage */}
      <div className="relative aspect-square w-full bg-brand-gray-light rounded-[2rem] overflow-hidden mb-8 group">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-10 transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Highlight Ribbon */}
        {product.highlight && (
          <div className="absolute top-6 left-6 z-10 bg-brand-orange text-white text-[8px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full shadow-lg">
             {product.highlight}
          </div>
        )}

        {/* Quick Add Visual */}
        <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/5 transition-colors duration-700 flex items-center justify-center">
           <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <Plus size={24} />
           </div>
        </div>
      </div>

      {/* Product Narrative */}
      <div className="flex flex-col flex-1 px-2">
         <div className="mb-4">
            <span className="text-[9px] uppercase font-bold text-gray-400 tracking-[0.4em] mb-2 block">{product.category}</span>
            <h4 className="text-2xl font-black uppercase tracking-tighter text-brand-black group-hover:text-brand-orange transition-colors duration-500">
              {product.name}
            </h4>
         </div>
         
         <p className="text-sm text-brand-gray-dark/50 font-medium mb-8 line-clamp-2 leading-relaxed">
            {product.description}
         </p>

         <div className="mt-auto pt-6 border-t border-brand-gray-mid flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Price</span>
              <span className="text-2xl font-black text-brand-black text-serif italic tracking-normal">{product.price}</span>
            </div>
            <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-black/30 group-hover:text-brand-orange group-hover:gap-4 transition-all duration-500">
               Details <ArrowRight size={14} />
            </button>
         </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
