"use client"
import React from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { products } from '@/data/products'

interface ProductSectionProps {
  category: string;
  id: string;
}

const ProductSection = ({ category, id }: ProductSectionProps) => {
  const filteredProducts = products.filter(p => p.category === category)

  return (
    <section id={id} className="bg-brand-white section-padding overflow-hidden">
      <div className="max-width-container">
        {/* Editorial Section Header */}
        <div className="mb-32 flex flex-col items-start max-w-4xl">
           <div className="flex items-center gap-6 mb-10">
              <span className="text-tagline !mb-0">{category} Collection</span>
              <div className="w-16 h-px bg-brand-orange/30" />
           </div>
           <h2 className="!leading-[0.9] mb-12">
             The <span className="text-brand-orange">{category}</span> <br /> 
             <span className="text-serif lowercase opacity-80 italic">Experience.</span>
           </h2>
           <p className="text-2xl text-brand-gray-dark/50 font-medium leading-tight tracking-tight">
             Discover the pinnacle of {category.toLowerCase()} craftsmanship. Every piece is a result of <span className="text-brand-black">uncompromising quality</span> and traditional heritage.
           </p>
        </div>

        {/* Product Grid: High-End Breathability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection
