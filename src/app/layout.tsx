import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'  
import ThemeSwitcher from './components/ThemeSwitcher'
import LanguageSwitcher from './components/LanguageSwitcher'
import NavLinks from './components/NavLinks'
import MobileMenu from './components/MobileMenu'
import FooterText from './components/FooterText'

export const metadata: Metadata = {
  title: 'Tea Haven - Premium Loose Leaf Teas',
  description: 'Discover the finest organic teas from around the world',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark-theme">
        <ThemeProvider>
          <LanguageProvider>
            <nav className="sticky top-0 z-40 backdrop-blur-md border-b transition-all duration-300"
                 style={{ 
                   backgroundColor: 'var(--bg-primary)',
                   borderColor: 'var(--border-color)'
                 }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16">
                  {/* Logo with Image - Fixed with sizes prop */}
                  <Link href="/" className="flex items-center gap-2 transition-colors hover:opacity-80">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                      <Image
                        src="/tea-shop/logo.jpg"
                        alt="Tea Haven Logo"
                        fill
                        className="object-contain rounded-full"
                        sizes="(max-width: 640px) 32px, 40px"  // Added sizes prop
                        priority
                      />
                    </div>
                    <span className="hidden sm:inline text-xl sm:text-2xl font-serif font-bold"
                          style={{ color: 'var(--accent)' }}>
                      Tea Haven
                    </span>
                  </Link>
                  
                  <NavLinks />
                  
                  <div className="flex items-center gap-1 sm:gap-2">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                    <MobileMenu />
                  </div>
                </div>
              </div>
            </nav>

            <main className="min-h-screen transition-colors duration-300"
                  style={{ backgroundColor: 'var(--bg-primary)' }}>
              {children}
            </main>

            <footer className="mt-16 py-6 sm:py-8 border-t transition-colors duration-300"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-secondary)'
                    }}>
              <div className="max-w-7xl mx-auto px-4 text-center">
                <FooterText />
              </div>
            </footer>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}