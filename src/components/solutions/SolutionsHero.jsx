import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { solutionsHeroData } from "@/data/solutionsData"

export default function SolutionsHero() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-25"
        style={{ background: isDark ? "radial-gradient(ellipse, rgba(232,98,42,0.3) 0%, transparent 70%)" : "radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, transparent 65%)" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <Badge className="mb-5 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full border"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.35)", color: "oklch(0.62 0.17 35)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.17_35)] mr-2 inline-block animate-pulse" />
            {solutionsHeroData.badge}
          </Badge>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
          {solutionsHeroData.heading}{" "}
          <span style={{ color: "oklch(0.62 0.17 35)" }}>{solutionsHeroData.headingAccent}</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.35 0.04 220)" }}>
          {solutionsHeroData.subtext}
        </motion.p>

        {/* Sector pills nav */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {["🪖 Government", "🏦 Banking", "📡 Telecom", "🏢 Enterprise"].map((item, i) => (
            <a key={i} href={`#${["government","banking","telecom","enterprise"][i]}`}
              className="px-4 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.7)",
                border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(26,43,60,0.12)",
                color: isDark ? "rgba(232,246,250,0.75)" : "oklch(0.25 0.04 220)",
              }}>
              {item}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}