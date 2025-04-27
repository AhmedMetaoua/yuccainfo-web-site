import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "YUCCAINFO - Votre partenaire pour la transformation digitale",
  description:
    "YUCCAINFO transforme vos défis numériques en opportunités avec des solutions sur mesure, innovantes et performantes.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
