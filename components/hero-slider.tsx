"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface Slide {
  id: number
  title: string
  subtitle: string
  image: string
  cta: string
  ctaLink: string
}

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Premium School Uniforms",
    subtitle: "High-quality uniforms designed for comfort and durability",
    image: "/primary-school-uniform-white-navy.jpg",
    cta: "Explore School Uniforms",
    ctaLink: "/products",
  },
  {
    id: 2,
    title: "Industrial Safety Wear",
    subtitle: "Professional uniforms meeting international safety standards",
    image: "/industrial-worker-uniform-safety.jpg",
    cta: "View Safety Uniforms",
    ctaLink: "/products",
  },
  {
    id: 3,
    title: "Corporate Solutions",
    subtitle: "Customized uniforms for your corporate identity",
    image: "/corporate-office-uniform-professional.jpg",
    cta: "Browse Corporate Line",
    ctaLink: "/products",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 3000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 3000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 3000)
  }

  const slide = SLIDES[currentSlide]

  return (
    <section className="relative w-full h-screen overflow-hidden bg-primary">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.div
          key={`content-${currentSlide}`}
          className="absolute inset-0 flex items-center justify-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-3xl mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">{slide.title}</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 text-balance">{slide.subtitle}</p>
            <Link href={slide.ctaLink}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {slide.cta}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide ? "w-8 h-3 bg-accent" : "w-3 h-3 bg-white/50 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.1 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
