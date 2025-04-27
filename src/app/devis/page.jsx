"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function DevisPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    typeProjet: "",
    budget: "",
    delai: "",
    description: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler un envoi de formulaire
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Ici, vous implémenteriez l'envoi réel du formulaire à votre backend
    console.log("Formulaire soumis:", formData)
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 text-center">
            <motion.div
              className="inline-block rounded-lg bg-cyan-900/30 px-3 py-1 text-sm text-cyan-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Demande de devis
            </motion.div>
            <motion.h1
              className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Obtenez un devis personnalisé
            </motion.h1>
            <motion.p
              className="mt-4 text-gray-300 md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Remplissez le formulaire ci-dessous pour recevoir une estimation adaptée à votre projet.
              Notre équipe vous contactera dans les plus brefs délais.
            </motion.p>
          </div>

          {isSubmitted ? (
            <motion.div
              className="rounded-xl border border-cyan-800 bg-gray-800/50 p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-cyan-900/30 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-4 text-2xl font-bold">Demande envoyée avec succès !</h2>
              <p className="mb-6 text-gray-300">
                Merci pour votre demande de devis. Notre équipe va l'étudier et vous contactera dans les 48 heures ouvrables.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/"
                  className="rounded-full border border-gray-600 bg-transparent px-6 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Retour à l'accueil
                </Link>
                <Link
                  href="/rendez-vous"
                  className="rounded-full bg-cyan-400 px-6 py-2 text-sm font-medium text-black hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="rounded-xl border border-gray-800 bg-gray-800/30 p-6 shadow-lg md:p-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <motion.div className="grid gap-2" variants={itemVariants}>
                  <label htmlFor="nom" className="text-sm font-medium text-gray-300">
                    Nom complet <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="Votre nom et prénom"
                  />
                </motion.div>

                <motion.div className="grid gap-2" variants={itemVariants}>
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="votre@email.com"
                  />
                </motion.div>

                <motion.div className="grid gap-2" variants={itemVariants}>
                  <label htmlFor="telephone" className="text-sm font-medium text-gray-300">
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="Votre numéro de téléphone"
                  />
                </motion.div>

                <motion.div className="grid gap-2" variants={itemVariants}>
                  <label htmlFor="entreprise" className="text-sm font-medium text-gray-300">
                    Entreprise
                  </label>
                  <input
                    id="entreprise"
                    name="entreprise"
                    type="text"
                    value={formData.entreprise}
                    onChange={handleChange}
                    className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="Nom de votre entreprise"
                  />
                </motion.div>

                <motion.div className="grid gap-2" variants={itemVariants}>
                  <label htmlFor="typeProjet" className="text-sm font-medium text-gray-300">
                    Type de projet <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    id="typeProjet"
                    name="typeProjet"
                    required
                    value={formData.typeProjet}
                    onChange={handleChange}
                    className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="" disabled>Sélectionnez un type de projet</option>
                    <option value="site-web">Site web</option>
                    <option value="application-mobile">Application mobile</option>
                    <option value="logiciel">Logiciel sur mesure</option>
                    <option value="erp">ERP / CRM</option>
                    <option value="bim-pos">BIM POS</option>
                    <option value="ia">Intelligence artificielle</option>
                    <option value="autre">Autre</option>
                  </select>
                </motion.div>

                <motion.div className="grid gap-2" variants={itemVariants}>
                  <label htmlFor="budget" className="text-sm font-medium text-gray-300">
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="" disabled>Sélectionnez une fourchette de budget</option>
                    <option value="moins-5000">Moins de 5 000 €</option>
                    <option value="5000-10000">5 000 € - 10 000 €</option>
                    <option value="10000-20000">10 000 € - 20 000 €</option>
                    <option value="20000-50000">20 000 € - 50 000 €</option>
                    <option value="plus-50000">Plus de 50 000 €</option>
                    <option value="a-definir">À définir</option>
                  </select>
                </motion.div>

                <motion.div className="grid gap-2" variants={itemVariants}>
                  <label htmlFor="delai" className="text-sm font-medium text-gray-300">
                    Délai souhaité
                  </label>
                  <select
                    id="delai"
                    name="delai"
                    value={formData.delai}
                    onChange={handleChange}
                    className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="" disabled>Sélectionnez un délai</option>
                    <option value="urgent">Urgent (moins d'un mois)</option>
                    <option value="1-3-mois">1 à 3 mois</option>
                    <option value="3-6-mois">3 à 6 mois</option>
                    <option value="plus-6-mois">Plus de 6 mois</option>
                    <option value="a-definir">À définir</option>
                  </select>
                </motion.div>
              </div>

              <motion.div className="mt-6 grid gap-2" variants={itemVariants}>
                <label htmlFor="description" className="text-sm font-medium text-gray-300">
                  Description du projet <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={6}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  placeholder="Décrivez votre projet, vos besoins et vos attentes..."
                />
              </motion.div>

              <motion.div className="mt-8 flex justify-end" variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-2 text-sm font-medium text-black hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    "Demander un devis"
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          )}

          <motion.div
            className="mt-8 rounded-lg border border-gray-800 bg-gray-800/50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-cyan-900/30 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-white">Comment ça marche ?</h3>
                <p className="mt-1 text-sm text-gray-300">
                  Après l'envoi de votre demande, notre équipe l'analysera et vous contactera sous 48h pour discuter des détails.
                  Un devis personnalisé vous sera ensuite envoyé par email. Pour toute question, n'hésitez pas à nous contacter
                  directement au +216 23 198 524.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}
