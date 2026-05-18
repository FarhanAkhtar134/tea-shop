import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'  
import ThemeSwitcher from './components/ThemeSwitcher'
import LanguageSwitcher from './components/LanguageSwitcher'
import NavLinks from './components/NavLinks'
import FooterText from './components/FooterText'  // Import the client component

export const metadata: Metadata = {
  title: 'Tea Haven - Premium Loose Leaf Teas',
  description: 'Discover the finest organic teas from around the world',
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
                <div className="flex justify-between items-center h-16">
                  <Link href="/" className="text-2xl font-serif font-bold transition-colors whitespace-nowrap"
                        style={{ color: 'var(--accent)' }}>
                    🍵 Tea Haven
                  </Link>
                  
                  <NavLinks />
                  
                  <div className="flex items-center gap-2">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </nav>

            <main className="min-h-screen transition-colors duration-300"
                  style={{ backgroundColor: 'var(--bg-primary)' }}>
              {children}
            </main>

            <footer className="mt-16 py-8 border-t transition-colors duration-300"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-secondary)'
                    }}>
              <div className="max-w-7xl mx-auto px-4 text-center">
                <FooterText />  {/* Use the client component */}
              </div>
            </footer>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}