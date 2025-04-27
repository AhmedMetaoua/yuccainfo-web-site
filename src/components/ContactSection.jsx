"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [subjectOpen, setSubjectOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }))
    setSubjectOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici, vous implémenteriez la logique d'envoi du formulaire
    console.log("Form submitted:", formData)
    alert("Merci pour votre message ! Nous vous contacterons bientôt.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const subjects = [
    { value: "general", label: "Renseignement général" },
    { value: "devis", label: "Demande de devis" },
    { value: "support", label: "Support technique" },
    { value: "partnership", label: "Partenariat" },
    { value: "other", label: "Autre" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="grid gap-10 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <motion.div
              variants={itemVariants}
              className="inline-block rounded-lg bg-cyan-900/30 px-3 py-1 text-sm text-cyan-400"
            >
              Contact
            </motion.div>
            <motion.h2 variants={itemVariants} className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              Parlons de votre projet
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-4 text-gray-300 md:text-lg">
              Vous avez un projet ou une question ? N'hésitez pas à nous contacter. Notre équipe est là pour vous aider
              et répondre à toutes vos questions.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 grid gap-6">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Adresse</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Dar Chaabane Fehri, Nabeul, Tunisia
                    <br />
                    Technopole Sousse, Tunisia
                  </p>
                </div>
              </div>

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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Téléphone</h3>
                  <p className="mt-1 text-sm text-gray-400">+216 23 198 524 / +216 97 131 795</p>
                </div>
              </div>

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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="mt-1 text-sm text-gray-400">contact@yuccainfo.com.tn</p>
                </div>
              </div>

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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Horaires</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Lundi - Vendredi: 9h00 - 18h00
                    <br />
                    Samedi - Dimanche: Fermé
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="rounded-xl border border-gray-800 bg-gray-800 p-6 shadow-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white">Envoyez-nous un message</h3>
            <p className="mt-2 text-sm text-gray-400">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="Votre numéro"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Sujet
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setSubjectOpen(!subjectOpen)}
                      className="flex w-full items-center justify-between rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    >
                      <span>
                        {formData.subject
                          ? subjects.find((s) => s.value === formData.subject)?.label
                          : "Sélectionnez un sujet"}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${subjectOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {subjectOpen && (
                      <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-700 bg-gray-800 py-1 shadow-lg">
                        {subjects.map((subject) => (
                          <button
                            key={subject.value}
                            type="button"
                            onClick={() => handleSelectChange(subject.value)}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700"
                          >
                            {subject.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <motion.button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
