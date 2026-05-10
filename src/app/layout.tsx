import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ThemeProvider } from './context/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitcher'

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
          <ThemeSwitcher />
          
          <nav className="sticky top-0 z-40 backdrop-blur-md border-b transition-all duration-300"
               style={{ 
                 backgroundColor: 'var(--bg-primary)',
                 borderColor: 'var(--border-color)'
               }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <Link href="/" className="text-2xl font-serif font-bold transition-colors"
                      style={{ color: 'var(--accent)' }}>
                  🍵 Tea Haven
                </Link>
                <div className="flex space-x-8">
                  <Link href="/" className="transition-colors hover:opacity-80"
                        style={{ color: 'var(--text-primary)' }}>
                    Home
                  </Link>
                  <Link href="/catalog" className="transition-colors hover:opacity-80"
                        style={{ color: 'var(--text-primary)' }}>
                    Teas
                  </Link>
                  <Link href="/about" className="transition-colors hover:opacity-80"
                        style={{ color: 'var(--text-primary)' }}>
                    About
                  </Link>
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
              <p>© 2025 Tea Haven. Sip slowly, live fully.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}