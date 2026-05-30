import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

const NAV_LINKS = [
  { label: "Technology", path: "/technology" },
  { label: "Solutions", path: "/solutions" },
  { label: "Academy", path: "/academy" },
  { label: "Research", path: "/research" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
]

export default function Header() {
  const { theme, setTheme } = useTheme()
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark")
  const isDark = theme === "dark"

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? isDark ? "rgba(10, 25, 40, 0.85)" : "rgba(232, 246, 250, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(26,43,60,0.1)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="./logo.png"
              alt="logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: isActive
                      ? "oklch(0.62 0.17 35)"
                      : isDark ? "rgba(232,246,250,0.75)" : "oklch(0.28 0.04 220)",
                    background: isActive ? "oklch(0.62 0.17 35 / 0.1)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)"
                      e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.07)" : "rgba(26,43,60,0.06)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = isDark ? "rgba(232,246,250,0.75)" : "oklch(0.28 0.04 220)"
                      e.currentTarget.style.background = "transparent"
                    }
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none cursor-pointer"
              style={{ background: isDark ? "oklch(0.62 0.17 35)" : "rgba(26,43,60,0.15)" }}
            >
              <motion.div
                className="absolute top-0.5 w-5 h-5 rounded-full shadow-md flex items-center justify-center text-xs"
                animate={{ left: isDark ? "26px" : "2px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{ background: isDark ? "#0a1928" : "white" }}
              >
                {isDark ? "🌙" : "☀️"}
              </motion.div>
            </button>

            {/* CTA desktop */}
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: "oklch(0.62 0.17 35)",
                boxShadow: "0 4px 14px oklch(0.62 0.17 35 / 35%)",
              }}
            >
              Get Started
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Hamburger mobile */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg cursor-pointer"
              style={{ background: menuOpen ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(26,43,60,0.08)") : "transparent" }}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 rounded-full"
                style={{ background: isDark ? "#e8f6fa" : "oklch(0.18 0.04 220)" }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-5 h-0.5 rounded-full"
                style={{ background: isDark ? "#e8f6fa" : "oklch(0.18 0.04 220)" }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 rounded-full"
                style={{ background: isDark ? "#e8f6fa" : "oklch(0.18 0.04 220)" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden px-4 pt-2 pb-6"
            style={{
              background: isDark ? "rgba(10, 25, 40, 0.97)" : "rgba(232, 246, 250, 0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(26,43,60,0.1)",
            }}
          >
            <nav className="flex flex-col gap-1 mb-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: location.pathname === link.path
                        ? "oklch(0.62 0.17 35)"
                        : isDark ? "rgba(232,246,250,0.85)" : "oklch(0.22 0.04 220)",
                      background: location.pathname === link.path
                        ? "oklch(0.62 0.17 35 / 0.1)" : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-white hover:scale-105 active:scale-95 transition-all"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "oklch(0.62 0.17 35)" }}
            >
              Get Started
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}