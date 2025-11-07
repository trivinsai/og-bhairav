"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { COMPANY_INFO } from "@/data/products"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              About Us
            </h1>
            <p className="text-lg opacity-90">
              Learn about our journey and commitment to quality
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image src="about1.jpg" alt="Bhairav Textorium" fill className="object-cover" />
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Our Story
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {COMPANY_INFO.description}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded with a vision to revolutionize the uniform industry, Bhairav Textorium started with a small
                  team of passionate professionals dedicated to creating exceptional workwear solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4 text-balance">
                Our Mission
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            </div>

            <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground mb-16">
              {COMPANY_INFO.mission}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality",
                  description: "Premium materials and superior craftsmanship in every product",
                },
                {
                  title: "Reliability",
                  description: "Consistent delivery and exceptional customer service always",
                },
                {
                  title: "Innovation",
                  description: "Continuous improvement and modern design solutions",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-8 bg-background rounded-lg border border-border hover:border-accent transition-colors text-center"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Why Choose Bhairav Textorium
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "20+ Years Experience",
                  description: "Over two decades of expertise in uniform manufacturing",
                },
                {
                  title: "International Standards",
                  description: "All products meet global safety and quality regulations",
                },
                {
                  title: "Customization",
                  description: "Tailored solutions for schools, industries, and organizations",
                },
                {
                  title: "Competitive Pricing",
                  description: "Premium quality at affordable prices for bulk orders",
                },
                {
                  title: "Fast Delivery",
                  description: "Reliable and timely delivery across Bengaluru",
                },
                {
                  title: "Customer Support",
                  description: "24/7 support for all your uniform and safety wear needs",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg shadow-lg border border-border hover:border-accent transition-colors"
                >
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Let's Partner Together
            </h2>

            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss your uniform requirements
            </p>

            <div>
              <a href="/contact">
                <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
