"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const phrases = ["l'innovation", "la performance", "l'excellence", "votre succès"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900 py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="mb-6 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Vos défis, nos solutions.
            <br />
            <span className="text-cyan-400">YUCCAINFO</span> à vos côtés.
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-[800px] text-gray-300 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Votre partenaire de confiance pour l'innovation et la transformation digitale
          </motion.p>

          <motion.p
            className="mx-auto mb-8 max-w-[700px] text-gray-300 md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            YUCCAINFO transforme vos défis numériques en opportunités avec des solutions sur mesure, innovantes et
            performantes pour{" "}
            <span className="font-medium text-cyan-400 transition-all duration-500">{phrases[currentIndex]}</span>
          </motion.p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("services").scrollIntoView({ behavior: "smooth" })
              }}
            >
              Découvrir nos services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>

            <motion.a
              href="/rendez-vous"
              className="inline-flex items-center justify-center rounded-full border border-gray-600 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Prendre rendez-vous
            </motion.a>
          </div>

          <motion.div
            className="flex items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`inline-block h-8 w-8 rounded-full border-2 border-black bg-gradient-to-br ${
                    [
                      "from-purple-400 to-purple-600",
                      "from-cyan-400 to-cyan-600",
                      "from-amber-400 to-amber-600",
                      "from-rose-400 to-rose-600",
                    ][i]
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-400">Rejoint par +200 entreprises</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
