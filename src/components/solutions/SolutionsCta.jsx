import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { solutionsCtaData } from "@/data/solutionsData"

export default function SolutionsCta() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden px-6 py-14 sm:px-12 sm:py-16 text-center"
          style={{
            background: isDark ? "linear-gradient(135deg, rgba(232,98,42,0.18) 0%, rgba(10,25,40,0.95) 50%, rgba(59,130,246,0.1) 100%)" : "linear-gradient(135deg, rgba(232,98,42,0.1) 0%, rgba(200,232,242,0.85) 50%, rgba(59,130,246,0.06) 100%)",
            border: isDark ? "1px solid rgba(232,98,42,0.2)" : "1px solid rgba(232,98,42,0.15)",
          }}>
          <div className="pointer-events-none absolute inset-0 opacity-5"
            style={{ backgroundImage: "linear-gradient(rgba(232,98,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,98,42,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="relative z-10">
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
              {solutionsCtaData.heading}
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-sm sm:text-base mb-10 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.35 0.04 220)" }}>
              {solutionsCtaData.subtext}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
              <Button asChild className="w-full sm:w-auto px-7 py-5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
                style={{ background: "oklch(0.62 0.17 35)", boxShadow: "0 8px 30px oklch(0.62 0.17 35 / 40%)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <Link to={solutionsCtaData.ctaPrimary.href}>{solutionsCtaData.ctaPrimary.label}</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto px-7 py-5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", borderColor: isDark ? "rgba(232,246,250,0.2)" : "rgba(26,43,60,0.25)", background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.6)", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>
                <Link to={solutionsCtaData.ctaSecondary.href}>{solutionsCtaData.ctaSecondary.label}</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}