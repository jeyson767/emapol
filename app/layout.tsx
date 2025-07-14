import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "EMAPOL S.A.C",
  description: "EMAPOL S.A.C - Especialistas en repuestos industriales, polímeros y caucho",
  generator: "EMAPOL S.A.C",

  // Configuración del favicon con tu logo
  icons: {
    icon: [
      { url: "images/emapol.png" },
      { url: "images/emapol.png", sizes: "16x16", type: "image/png" },
      { url: "images/emapol.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "images/emapol.png", sizes: "180x180", type: "image/png" }],
  },

  // Meta adicionales
  keywords: "repuestos industriales, polímeros, caucho, EMAPOL, Lima, Perú",
  authors: [{ name: "EMAPOL S.A.C" }],
  themeColor: "#2563eb",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Favicon y responsiveadicional para máxima compatibilidad */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="images/emapol.png" />
        <link rel="shortcut icon" type="image/png" href="images/emapol.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}

