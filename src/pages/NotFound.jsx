import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export default function NotFound() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto"
      >
        {/* 404 Number */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          className="text-8xl sm:text-9xl md:text-[12rem] font-bold leading-none tracking-tighter"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            background: isDark
              ? "linear-gradient(135deg, #e8f6fa 0%, oklch(0.62 0.17 35) 100%)"
              : "linear-gradient(135deg, oklch(0.12 0.04 220) 0%, oklch(0.62 0.17 35) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 mb-3"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base mb-8 leading-relaxed"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}
        >
          The page you're looking for doesn't exist or has been moved.
          <br />
          Let's get you back on track.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild
            className="px-6 py-5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
            style={{ background: "oklch(0.62 0.17 35)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <Link to="/">Go Home</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="px-6 py-5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              borderColor: isDark ? "rgba(232,246,250,0.2)" : "rgba(26,43,60,0.25)",
              background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.5)",
              color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)",
            }}
          >
            <Link to="/contact">Contact Support</Link>
          </Button>
        </motion.div>

        {/* Floating orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-20 blur-3xl"
            style={{ background: "oklch(0.62 0.17 35)" }} />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full opacity-20 blur-3xl"
            style={{ background: "#3B82F6" }} />
        </div>
      </motion.div>
    </section>
  )
}