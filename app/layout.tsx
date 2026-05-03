import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PitchCast – Personalized Podcast Guest Pitches',
  description: 'Generate personalized podcast guest pitch emails with AI. Research hosts, analyze recent episodes, and land more podcast appearances.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d89cbc13-5520-4c60-a304-84deb879a4d7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
