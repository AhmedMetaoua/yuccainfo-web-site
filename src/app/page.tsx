"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import BimPosSection from "@/components/BimPosSection"
import ClientsSection from "@/components/ClientsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <BimPosSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
