"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-full lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">
                YUCCA<span className="text-cyan-400">INFO</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-gray-400">
              Vos défis, nos solutions. YUCCAINFO à vos côtés. Votre partenaire de confiance pour l'innovation et la
              transformation digitale.
            </p>
            <div className="mt-6 flex space-x-4">
              {[
                {
                  icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                  name: "Facebook",
                },
                {
                  icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                  name: "Twitter",
                },
                {
                  icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.364-.06-4.087v-.08c0-2.643.013-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 4.123-.06h.08zM12 6.35a5.65 5.65 0 00-5.66 5.65 5.65 5.65 0 005.66 5.65 5.65 5.65 0 005.65-5.65 5.65 5.65 0 00-5.65-5.65zm0 9.505a3.855 3.855 0 01-3.85-3.85 3.855 3.855 0 013.85-3.85 3.855 3.855 0 013.85 3.85 3.855 3.855 0 01-3.85 3.85zm8.199-11.13a1.25 1.25 0 00-1.25-1.25 1.25 1.25 0 00-1.25 1.25 1.25 1.25 0 001.25 1.25 1.25 1.25 0 001.25-1.25z",
                  name: "Instagram",
                },
                {
                  icon: "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8 19h-2v-5h2v5zm-1-7.425a1.864 1.864 0 111.85-1.85 1.864 1.864 0 01-1.85 1.85zM19 19h-2.667v-2.97a3.45 3.45 0 00-.921-2.542c-.582-.783-1.292-1.171-2.092-1.171-1.49 0-2.45 1.019-2.45 3.3v3.383H9.333v-14h2.667v1.172c.879-1.334 2.277-1.666 3.467-1.666 1.785 0 3.25 1.06 3.25 3.737v8.759H19z",
                  name: "LinkedIn",
                },
                {
                  icon: "M22 6.942V16a2 2 0 01-2 2H4a2 2 0 01-2-2V6.942a2 2 0 012.909-1.754l16.182-6.191A2 2 0 0122 6.942z",
                  name: "Youtube",
                },
              ].map((item, index) => (
                <motion.button
                  key={index}
                  className="rounded-full bg-gray-800 p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={item.icon} />
                  </svg>
                  <span className="sr-only">{item.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white">Entreprise</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-cyan-400">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-cyan-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#bimpos" className="text-gray-400 hover:text-cyan-400">
                  BIM POS
                </Link>
              </li>
              <li>
                <Link href="#clients" className="text-gray-400 hover:text-cyan-400">
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-cyan-400">
                  Ingénierie Logicielle
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-cyan-400">
                  Transformation Digitale
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-cyan-400">
                  Intelligence Artificielle & IoT
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-cyan-400">
                  Optimisation SEO & AEO
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-cyan-400">
                  Cybersécurité & Cloud
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">Dar Chaabane Fehri, Nabeul, Tunisia</li>
              <li className="text-gray-400">Technopole Sousse, Tunisia</li>
              <li className="text-gray-400">+216 23 198 524 / +216 97 131 795</li>
              <li>
                <a href="mailto:contact@yuccainfo.com.tn" className="text-gray-400 hover:text-cyan-400">
                  contact@yuccainfo.com.tn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-white">Abonnez-vous à notre newsletter</h3>
              <p className="mt-2 text-sm text-gray-400">
                Recevez nos dernières actualités et offres directement dans votre boîte mail.
              </p>
              <div className="mt-4 flex max-w-md gap-2">
                <input
                  placeholder="Votre email"
                  type="email"
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
                <motion.button
                  className="inline-flex items-center justify-center rounded-md bg-cyan-400 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  S'abonner
                </motion.button>
              </div>
            </div>

            <div className="flex flex-col justify-end md:items-end">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} YUCCAINFO. Tous droits réservés.</p>
              <div className="mt-2 flex gap-4 text-sm text-gray-400">
                <Link href="#" className="hover:text-cyan-400">
                  Mentions légales
                </Link>
                <Link href="#" className="hover:text-cyan-400">
                  Politique de confidentialité
                </Link>
                <Link href="#" className="hover:text-cyan-400">
                  CGU
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
