"use client"

import { motion } from "framer-motion"

export default function BimPosSection() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      title: "Intégration Complète POS + ERP + BI",
      description: "Solution unique qui regroupe le point de vente, la gestion d'entreprise et l'analyse avancée",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Microship intelligent sur caisse POS",
      description: "Contrôle en temps réel des ouvertures de caisse et détection proactive des anomalies",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      title: "CRM avancé intégré",
      description: "Meilleure relation client avec historique d'achats, préférences et fidélisation",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Rapports Automatisés",
      description: "Suivi et rapports en temps réel pour une prise de décision éclairée",
    },
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
    <section id="bimpos" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-2"
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
              Partenariat Exclusif
            </motion.div>
            <motion.h2 variants={itemVariants} className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              1er Partenaire Officiel de BIM POS en Tunisie
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-4 text-gray-300 md:text-lg">
              Nous sommes fiers d'être le premier représentant officiel de BIM POS en Tunisie, offrant des solutions de
              gestion commerciale de nouvelle génération.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-6 grid gap-4">
              {[
                "Intégration Complète POS + ERP + BI",
                "Installation et Paramétrage Personnalisé",
                "Déploiement Rapide et Accompagnement sur Mesure",
                "Support Technique Local 24/7",
                "Développement de Modules Exclusifs adaptés aux besoins tunisiens",
                "Microship Intelligent pour Sécurisation des Caisses",
                "Système CRM Avancé pour Booster votre Relation Client",
                "Suivi et Rapports Automatisés en Temps Réel",
              ].map((item, i) => (
                <motion.div key={i} className="flex items-start gap-2" variants={itemVariants} custom={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.button
                className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir BIM POS
              </motion.button>
              <motion.button
                className="rounded-full border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Demander une démo
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl bg-gray-800 p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">YUCCAINFO transforme la gestion d'entreprise</h3>
              <p className="mb-6 text-gray-300">
                Notre solution innovante combine en une seule plateforme : Système POS, ERP et BI (Business
                Intelligence).
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2">
                      {feature.icon}
                      <h4 className="font-semibold">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a href="https://bimpos.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
                <div className="rounded-lg border border-gray-700 bg-gray-800 p-4 text-center shadow-sm transition-all hover:shadow-md hover:shadow-cyan-900/20">
                  <p className="mb-2 text-sm text-gray-400">Site Web Officiel</p>
                  <p className="font-semibold text-cyan-400">bimpos.com</p>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
