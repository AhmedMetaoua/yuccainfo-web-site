"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
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
    <section id="about" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="space-y-4">
            <motion.div
              variants={itemVariants}
              className="inline-block rounded-lg bg-cyan-900/30 px-3 py-1 text-sm text-cyan-400"
            >
              À propos de nous
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Votre partenaire stratégique pour la transformation numérique
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 md:text-lg">
              YUCCAINFO est bien plus qu'une entreprise technologique : c'est votre partenaire stratégique pour relever
              les défis de la transformation numérique dans un monde en constante évolution.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-300 md:text-lg">
              Créée par une équipe passionnée de développeurs, d'ingénieurs et d'experts métier, YUCCAINFO s'engage à
              proposer des solutions sur mesure, alliant technologie de pointe, créativité et vision d'avenir.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-300 md:text-lg">
              Aujourd'hui, YUCCAINFO contribue à la modernisation des entreprises tunisiennes et internationales à
              travers des solutions technologiques intelligentes et des projets sur mesure.
            </motion.p>

            <motion.div variants={itemVariants} className="grid gap-2 pt-4">
              <h3 className="text-lg font-semibold">Chaque solution développée par YUCCAINFO est pensée pour être :</h3>
              {[
                "Innovante, intégrant les dernières avancées en matière de logiciels, systèmes intelligents et analyses prédictives.",
                "Fiable, avec un haut niveau de performance et de sécurité pour garantir votre tranquillité.",
                "Évolutive, capable de s'adapter à la croissance et aux changements de votre entreprise.",
                "Centrée client, parce que votre satisfaction est notre moteur quotidien.",
              ].map((item, i) => (
                <motion.div key={i} className="flex items-start gap-2" variants={itemVariants} custom={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 h-5 w-5 shrink-0 text-cyan-400"
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

            <motion.p variants={itemVariants} className="mt-4 font-medium text-gray-200">
              Notre objectif est d'accompagner les entreprises dans leur digitalisation en leur fournissant des outils
              puissants qui transforment leurs idées en réussites concrètes.
            </motion.p>

            <motion.button
              variants={itemVariants}
              className="mt-4 rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              En savoir plus sur notre histoire
            </motion.button>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl">
                <img
                  src="/réunion.png"
                  alt="Équipe YUCCAINFO en réunion"
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-tr-3xl">
                  <img
                    src="/Bureaux.png"
                    alt="Bureaux modernes de YUCCAINFO"
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-bl-3xl">
                  <img
                    src="/image.png"
                    alt="Technologies utilisées chez YUCCAINFO"
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 rounded-lg bg-gray-800 p-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className="text-4xl font-bold text-cyan-400">7+</div>
                <div className="text-sm text-gray-300">
                  années
                  <br />
                  d'expertise
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 rounded-lg bg-gray-800 p-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className="text-4xl font-bold text-cyan-400">98%</div>
                <div className="text-sm text-gray-300">
                  taux de
                  <br />
                  satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
