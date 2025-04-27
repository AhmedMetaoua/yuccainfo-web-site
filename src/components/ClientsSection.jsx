"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ClientsSection() {
  const [activeTab, setActiveTab] = useState("multi-chain")

  const clientCategories = [
    {
      id: "multi-chain",
      name: "Multi-chain",
      clients: [
        { name: "Client 1", logo: "/multi-chain1.png" },
        { name: "Client 2", logo: "/multi-chain2.png" },
        { name: "Client 3", logo: "/multi-chain3.png" },
      ],
    },
    {
      id: "service-table",
      name: "Service à Table",
      clients: [
        { name: "Client 4", logo: "/service-table1.png" },
        { name: "Client 5", logo: "/service-table2.png" },
        { name: "Client 6", logo: "/service-table3.png" },
      ],
    },
    {
      id: "call-center",
      name: "Centre d'Appels et Cuisine Centrale",
      clients: [
        { name: "Client 7", logo: "/centre-appel1.png" },
        { name: "Client 8", logo: "/centre-appel2.png" },
        { name: "Client 8", logo: "/centre-appel3.png" },
        { name: "Client 8", logo: "/centre-appel4.png" },
      ],
    },
    {
      id: "delivery",
      name: "Service de Livraison",
      clients: [
        { name: "Client 9", logo: "/service-livraisant1.png" },
        { name: "Client 10", logo: "/service-livraisant2.png" },
        { name: "Client 10", logo: "/service-livraisant3.png" },
        { name: "Client 10", logo: "/service-livraisant4.png" },
        { name: "Client 10", logo: "/service-livraisant5.png" },
      ],
    },
    {
      id: "retail",
      name: "Vente au Détail (Retail)",
      clients: [
        { name: "Client 11", logo: "/vente-d1.png" },
        { name: "Client 11", logo: "/vente-d2.png" },
        { name: "Client 11", logo: "/vente-d3.png" },
        { name: "Client 12", logo: "/vente-d4.png" },
      ],
    },
    {
      id: "tunisia",
      name: "Clients en Tunisie",
      clients: [
        { name: "Client 13", logo: "/client1.png" },
        { name: "Client 14", logo: "/client2.png" },
        { name: "Client 15", logo: "/client3.png" },
      ],
    },
  ]

  const activeCategory = clientCategories.find((category) => category.id === activeTab) || clientCategories[0]

  return (
    <section id="clients" className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block rounded-lg bg-cyan-900/30 px-3 py-1 text-sm text-cyan-400">Nos Clients</div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">Ils nous font confiance</h2>
          <p className="mt-4 max-w-[700px] text-gray-300 md:text-lg">
            Découvrez les entreprises qui ont choisi YUCCAINFO pour leur transformation digitale et leurs solutions
            technologiques.
          </p>
        </motion.div>

        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-lg bg-gray-900 p-1 shadow-sm">
            {clientCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`rounded-md px-3 py-2 text-xs md:text-sm whitespace-normal h-auto ${
                  activeTab === category.id
                    ? "bg-cyan-900/50 text-cyan-400"
                    : "bg-transparent text-gray-400 hover:bg-gray-800"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          key={activeTab}
        >
          {activeCategory.clients.map((client, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center rounded-lg bg-gray-900 p-6 shadow-sm transition-all hover:shadow-md hover:shadow-cyan-900/20"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -5 }}
            >
              <img src={client.logo || "/placeholder.svg"} alt={client.name} className="mb-4 h-20 object-contain" />
              <p className="text-center text-sm font-medium text-gray-300">{client.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
