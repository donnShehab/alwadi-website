"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: "breaded",
    title: "Breaded Collection",
    image: "/images/breaded_category.png",
    description: "Crispy, golden-breaded poultry and appetizers.",
    tag: "Premium Quality"
  },
  {
    id: "burger",
    title: "Burger & Kuftah",
    image: "/images/burger_category.png",
    description: "Signature meat and poultry patties for the perfect meal.",
    tag: "Artisan Cuts"
  },
  {
    id: "marinated",
    title: "Marinated Cuts",
    image: "/images/category_marinated.png",
    description: "Ready-to-cook marinated meats and poultry.",
    tag: "Pure Freshness",
    fallback: "/images/hero_burger.png"
  },
  {
    id: "bakery",
    title: "Kubbe & Bakery",
    image: "/images/category_bakery.png",
    description: "Traditional specialties and artisanal frozen dough.",
    tag: "Heritage Flavour",
    fallback: "/images/breaded_category.png"
  },
  {
    id: "sandwiches",
    title: "Ready Meals",
    image: "/images/category_sandwiches.png",
    description: "Delicious Arayes and ready-to-eat sandwiches.",
    tag: "Quick & Gourmet",
    fallback: "/images/burger_category.png"
  },
  {
    id: "hotdogs",
    title: "Hot Dogs & Franks",
    image: "/images/category_hotdogs.png",
    description: "Classic sausages and franks for any occasion.",
    tag: "Classic Standard",
    fallback: "/images/hero_burger.png"
  }
]

const CategorySection = () => {
  return (
    <section id="products" className="bg-white section-padding">
      <div className="max-width-container">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-tagline">Our Expertise</span>
          <h2 className="mb-8">A World of <span className="text-brand-orange">Flavours.</span></h2>
          <p className="text-lg text-gray-500 font-medium">
            Explore our curated selection of high-quality frozen products, crafted with the finest ingredients and traditional recipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group cursor-pointer relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-brand-gray-light mb-6">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e: any) => {
                    e.currentTarget.src = cat.fallback || "/images/logo_official_web.png"
                  }}
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-10 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                   <p className="text-white text-sm font-medium mb-4">{cat.description}</p>
                   <Link href={`#${cat.id}`} className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest border-b border-white pb-1 hover:text-brand-orange hover:border-brand-orange transition-colors">
                      View Collection <ArrowRight size={14} />
                   </Link>
                </div>
              </div>

              <div className="text-left px-2">
                 <span className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.2em] mb-2 block">{cat.tag}</span>
                 <h3 className="text-2xl font-extrabold uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                   {cat.title}
                 </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
