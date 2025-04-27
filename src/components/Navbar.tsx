"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const handleNavClick = (e, sectionId) => {
    if (isHomePage) {
      // Si on est sur la page d'accueil, on fait juste défiler jusqu'à la section
      e.preventDefault()
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }
    // Si on n'est pas sur la page d'accueil, on laisse le lien naviguer vers /#section
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-cyan-400">
            YUCCA<span className="text-white">INFO</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/#about"
            className="text-sm font-medium transition-colors hover:text-cyan-400"
            onClick={(e) => handleNavClick(e, "about")}
          >
            À propos
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium transition-colors hover:text-cyan-400"
            onClick={(e) => handleNavClick(e, "services")}
          >
            Services
          </Link>
          <Link
            href="/#bimpos"
            className="text-sm font-medium transition-colors hover:text-cyan-400"
            onClick={(e) => handleNavClick(e, "bimpos")}
          >
            BIM POS
          </Link>
          <Link
            href="/#clients"
            className="text-sm font-medium transition-colors hover:text-cyan-400"
            onClick={(e) => handleNavClick(e, "clients")}
          >
            Clients
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium transition-colors hover:text-cyan-400"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex gap-3">
          <Link href="/rendez-vous">
            <motion.button
              className="rounded-full border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Rendez-vous
            </motion.button>
          </Link>
          <Link href="/devis">
            <motion.button
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un devis
            </motion.button>
          </Link>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-16 z-50 bg-black transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="container mx-auto flex flex-col gap-6 p-6">
          <Link
            href="/#about"
            className="text-lg font-medium transition-colors hover:text-cyan-400"
            onClick={(e) => handleNavClick(e, "about")}
          >
            À propos
          </Link>
          <Link
            href="/#services"
            className="text-lg font-medium transition-colors hover:text-cyan-400"
            onClick={(e) => handleNavClick(e, "services")}
          >
            Services
          </Link>
          <Link
            href="/#bimpos"
            className="text-lg font-medium transition-colors hover:text-cyan-400"
            onClick={(e) => handleNavClick(e, "bimpos")}
          >
            BIM POS
          </Link>
          <Link
            href="/#clients"
            className="text-lg font-medium transition-colors hover:text-cyan-400"
            onClick={(e) => handleNavClick(e, "clients")}
          >
            Clients
          </Link>
          <Link
            href="/#contact"
            className="text-lg font-medium transition-colors hover:text-cyan-400"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </Link>
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/rendez-vous" onClick={() => setIsMenuOpen(false)}>
              <motion.button
                className="w-full rounded-full border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Prendre rendez-vous
              </motion.button>
            </Link>
            <Link href="/devis" onClick={() => setIsMenuOpen(false)}>
              <motion.button
                className="w-full rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Demander un devis
              </motion.button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
