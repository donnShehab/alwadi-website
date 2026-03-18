"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import { products, Product } from '@/data/products'

interface ProductSectionProps {
  category: string;
  id: string;
}

const ProductSection = ({ category, id }: ProductSectionProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filteredProducts = products.filter(p => p.category === category)

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <section id={id} className="bg-brand-white section-padding overflow-hidden">
      <div className="max-width-container">
        {/* Editorial Section Header: High-End Storytelling */}
        <div className="mb-16 sm:mb-32 flex flex-col items-start max-w-4xl interactive">
           <div className="flex items-center gap-6 mb-8 sm:mb-10">
              <span className="text-tagline !mb-0">{category} Masterpieces</span>
              <div className="w-12 sm:w-16 h-px bg-brand-orange/20" />
           </div>
           <h2 className="!leading-[0.85] mb-8 sm:mb-12">
             The <span className="text-brand-orange">{category}</span> <br /> 
             <span className="text-serif lowercase opacity-70 italic">Series.</span>
           </h2>
           <p className="text-lg sm:text-2xl text-brand-gray-dark/50 font-medium leading-tight tracking-tight max-w-2xl">
              Artisanal preparation and <span className="text-brand-black">premium selection</span>. Each product is a chapter in our legacy of culinary excellence.
           </p>
        </div>

        {/* Product Grid: High-End Breathability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-24 text-left">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <ProductCard product={product} onOpenModal={handleOpenModal} />
            </motion.div>
          ))}
        </div>

        {/* Section Anchor: Subtle Brand Signature */}
        <div className="mt-20 sm:mt-40 pt-16 sm:pt-20 border-t border-brand-gray-mid/20 flex justify-center">
           <div className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gray-dark/20 text-center">
              End of {category} Selection
           </div>
        </div>
      </div>

      {/* Discovery Layer */}
      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  )
}

export default ProductSection
