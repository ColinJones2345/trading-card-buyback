import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { AuthProvider } from "@/contexts/auth-context"
import { StoreProvider } from "@/contexts/store-context"
import { BoxProvider } from "@/contexts/box-context"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "トレカコンパス",
  description: "トレーディングカード買取価格比較サービス",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            <StoreProvider>
              <BoxProvider>
                <div className="w-full overflow-x-hidden">
                  <Header />
                  <div className="w-full [&::-webkit-scrollbar-thumb]:bg-transparent">{children}</div>
                  <Footer />
                </div>
              </BoxProvider>
            </StoreProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
