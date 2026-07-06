import { Russo_One, Chakra_Petch, Geist_Mono } from "next/font/google"
import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils";

const russoOne = Russo_One({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400"],
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "PORSENI AMLI 2026 | FPMIPA UPI",
  description: "Landing page resmi informasi cabang lomba PORSENI AMLI 2026 hosted by FPMIPA Universitas Pendidikan Indonesia.",
  keywords: "PORSENI AMLI 2026, FPMIPA UPI, UPI, Science Short Movie, Mobile Legend, Tari Tradisional, Vocal Group, Lomba Mahasiswa MIPA",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cn("antialiased scroll-smooth", fontMono.variable, chakraPetch.variable, russoOne.variable)}
    >
      <body className="bg-brutal-bg text-brutal-black min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
