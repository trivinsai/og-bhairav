"use client"

import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { GALLERY_IMAGES } from "@/data/products"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Product Gallery
            </h1>
            <p className="text-lg opacity-90">
              Browse our professional uniform collections
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {GALLERY_IMAGES.map((image) => (
                <div
                  key={image.id}
                  className="cursor-pointer group"
                  onClick={() => setSelectedImage(image.image)}
                >
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                    <Image
                      src={image.image || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="bg-accent text-accent-foreground px-4 py-2 rounded font-semibold">
                        View
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mt-4">{image.title}</h3>
                  <p className="text-muted-foreground text-sm">{image.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4 text-balance">
                Quality in Every Detail
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image src="about.jpg" alt="Featured Product" fill className="object-cover" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-card-foreground mb-4">Commitment to Excellence</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Every product from Bhairav Textorium undergoes rigorous quality checks to ensure durability, comfort,
                  and safety standards. Our collections are designed for professional environments where performance and
                  appearance matter.
                </p>
                <ul className="space-y-3">
                  {[
                    "Premium fabric selection",
                    "Advanced stitching techniques",
                    "International quality standards",
                    "Eco-friendly manufacturing process",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery Item"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
