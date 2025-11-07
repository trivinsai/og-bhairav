"use client"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { COMPANY_INFO } from "@/data/products"

export default function ContactPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 text-balance"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-lg opacity-90"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Visit our showroom or reach out directly
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Contact Info */}
              {[
                {
                  title: "Address",
                  value:
                    "No. 469, Industrial Area, 1st Stage NH4, Bengaluru, Next to Government Primary School, Tumkur Road, Peenya-560058",
                  icon: "📍",
                },
                {
                  title: "Phone",
                  value: COMPANY_INFO.phone,
                  icon: "☎️",
                },
                {
                  title: "Email",
                  value: COMPANY_INFO.email,
                  icon: "✉️",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Map Section */}
              <motion.div
                className="bg-card rounded-lg shadow-lg overflow-hidden border border-border h-96"
                initial={{ opacity: 0, x: -20 }}
                {...fadeInUp}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9482638820527!2d77.53388!3d13.314472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8e0000001%3A0x1234567890ab!2sNo.%20469%2C%20Industrial%20Area%2C%201st%20Stage%2C%20Tumkur%20Road%2C%20Peenya%2C%20Bengaluru%2C%20Karnataka%20560058!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              {/* Info Cards Section */}
              <motion.div className="space-y-6" initial={{ opacity: 0, x: 20 }} {...fadeInUp}>
                <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Visit Our Showroom</h3>
                  <p className="text-card-foreground mb-4 leading-relaxed">
                    No. 469, Industrial Area, 1st Stage NH4, Bengaluru, Next to Government Primary School, Tumkur Road,
                    Peenya-560058
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">Phone:</p>
                    <p className="text-card-foreground">{COMPANY_INFO.phone}</p>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <p className="font-semibold">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="font-semibold">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="opacity-80">Sunday: Closed</p>
                  </div>
                </div>

                <div className="bg-accent text-accent-foreground rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Quick Connect</h3>
                  <p className="mb-4">Chat with us directly for immediate assistance</p>
                  <motion.a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-2 bg-white text-accent font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Chat on WhatsApp
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
