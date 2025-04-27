"use client"

import { motion } from "framer-motion"

export default function ServicesSection() {
  const services = [
    {
      icon: (
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Ingénierie Logicielle",
      description:
        "Applications web, mobiles et desktop sur mesure, avec une approche axée sur la performance, l'ergonomie et la scalabilité.",
      items: [
        "Utilisation des frameworks les plus récents (Laravel, React, Flutter, etc.)",
        "Intégration d'architectures modernes (API RESTful, microservices)",
        "Développement orienté UX/UI pour une expérience fluide et intuitive",
        "Anticipation des tendances technologiques pour des solutions d'avance",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Transformation Digitale",
      description:
        "Accompagnement des entreprises dans leur digitalisation complète grâce à des solutions ERP sur mesure et des systèmes POS performants.",
      items: [
        "Automatisation des processus métiers",
        "Centralisation intelligente des données",
        "Dashboards interactifs et solutions cloud-first",
        "Migration vers des environnements digitaux modernes",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      title: "Intelligence Artificielle & IoT",
      description:
        "Exploitation du potentiel de l'IA et de l'IoT pour offrir des solutions intelligentes, capables d'analyser, d'anticiper et d'optimiser les décisions.",
      items: [
        "Implémentation d'algorithmes d'apprentissage automatique",
        "Vision par ordinateur et traitement de langage naturel (NLP)",
        "Capteurs connectés et systèmes de monitoring en temps réel",
        "Transformation des systèmes passifs en environnements intelligents",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-rose-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: "Optimisation SEO & AEO",
      description:
        "Spécialisation dans le renforcement du SEO et de l'AEO pour maximiser la visibilité de votre site web dans les moteurs de recherche et les assistants vocaux.",
      items: [
        "Stratégies de contenu optimisées",
        "Structuration avancée des données (schema.org)",
        "Optimisation mobile-first et vitesse de chargement",
        "Intégration IA pour booster le référencement",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-sky-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      title: "Cybersécurité & Cloud Computing",
      description: "Sécurisation des infrastructures numériques tout en les modernisant par le cloud.",
      items: [
        "Déploiement de systèmes de détection d'intrusion",
        "Authentification renforcée et chiffrement avancé",
        "Sauvegardes intelligentes",
        "Hébergements cloud hybrides ou full SaaS",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      title: "Solutions BIM POS",
      description:
        "Premier partenaire officiel de BIM POS en Tunisie, offrant des solutions de gestion commerciale de nouvelle génération.",
      items: [
        "Intégration Complète POS + ERP + BI",
        "Installation et Paramétrage Personnalisé",
        "Support Technique Local 24/7",
        "Microship Intelligent pour Sécurisation des Caisses",
      ],
    },
  ]

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
    <section id="services" className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block rounded-lg bg-cyan-900/30 px-3 py-1 text-sm text-cyan-400">
            Nos Domaines d'Excellence
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Solutions technologiques complètes
          </h2>
          <p className="mt-4 max-w-[700px] text-gray-300 md:text-lg">
            Fidèle à notre mission d'innovation, YUCCAINFO intervient dans plusieurs domaines stratégiques pour répondre
            à tous vos besoins numériques.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group overflow-hidden rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-sm transition-all hover:shadow-lg hover:shadow-cyan-900/20"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <div className="mb-2">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{service.description}</p>
              </div>
              <div>
                <ul className="grid gap-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <button className="group-hover:text-cyan-400 inline-flex items-center p-0 text-sm font-medium">
                  En savoir plus
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span className="text-lg font-medium">Vous avez un projet spécifique en tête?</span>
          </div>
          <p className="mt-2 max-w-[600px] text-gray-400">
            Nos experts sont là pour vous accompagner dans la réalisation de vos projets, quelle que soit leur
            complexité.
          </p>
          <motion.button
            className="mt-6 rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuter de votre projet
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
