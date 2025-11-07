"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import HeroSlider from "@/components/hero-slider"
import { PRODUCTS } from "@/data/products"

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 6)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSlider />

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Why Choose Bhairav Textorium
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Premium Quality",
                  description: "High-quality materials and superior craftsmanship",
                  icon: "✓",
                },
                {
                  title: "Safety Standards",
                  description: "All products meet international safety regulations",
                  icon: "✓",
                },
                {
                  title: "Customization",
                  description: "Tailored solutions for your specific needs",
                  icon: "✓",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-8 bg-card rounded-lg shadow-lg border border-border hover:border-accent transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4 text-balance">
                Featured Products
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Explore our popular uniform and safety wear collections
              </p>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  View All Products
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Upgrade Your Uniform?
            </motion.h2>

            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Contact us today for bulk orders and custom solutions tailored to your organization
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Enquiry
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
