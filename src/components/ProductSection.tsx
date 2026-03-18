"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import ProductCard from './ProductCard'

interface ProductSectionProps {
  id: string;
  category: "Burger" | "Breaded";
}

const ProductSection = ({ id, category }: ProductSectionProps) => {
  const filteredProducts = products.filter(p => p.category === category)
  const isBurger = category === "Burger"

  return (
    <section id={id} className="section-padding bg-white relative">
      <div className="max-width-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-xl">
              <span className="text-tagline">Signature Selection</span>
              <h2 className="text-brand-black uppercase font-extrabold tracking-tight">
                Our <span className="text-brand-orange">{category}</span> Range.
              </h2>
           </div>
           <div className="pb-2">
              <p className="text-lg text-gray-500 font-medium italic">
                Crafted for the ultimate gourmet experience.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
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
