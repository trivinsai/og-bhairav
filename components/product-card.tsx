"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { Product } from "@/data/products"

interface ProductCardProps {
  product: Product
  index?: number
}

// ✅ Your WhatsApp number (no + or spaces)
const WHATSAPP_NUMBER = "917947141026"

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const handleEnquire = () => {
    const message = `Hello! I’m interested in *${product.name}* (${product.category}). Please share more details about this product.`
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded text-xs font-semibold">
            {product.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-2">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

          {/* 🟧 WhatsApp Enquiry Button (Orange) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnquire}
className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition-colors"

          >
            Enquire on WhatsApp
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
