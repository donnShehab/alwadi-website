"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Product } from '@/data/products'
import { Plus, ShoppingBag } from 'lucide-react'

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-[2rem] p-4 border border-brand-gray-mid card-hover flex flex-col h-full"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-brand-gray-light rounded-[1.5rem] overflow-hidden mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Highlight Badge */}
        {product.highlight && (
          <div className="absolute top-4 left-4 z-10 bg-brand-orange text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
             {product.highlight}
          </div>
        )}

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-brand-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <Plus size={24} />
           </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1 px-2 pb-2">
         <div className="mb-2">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{product.category}</span>
            <h4 className="text-xl font-extrabold uppercase tracking-tight text-brand-black group-hover:text-brand-orange transition-colors">
              {product.name}
            </h4>
         </div>
         
         <p className="text-sm text-gray-500 font-medium mb-6 line-clamp-2">
            {product.description}
         </p>

         <div className="mt-auto flex items-center justify-between">
            <span className="text-xl font-black text-brand-black">{product.price}</span>
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-orange group-hover:gap-3 transition-all">
               Details <ShoppingBag size={14} />
            </button>
         </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
