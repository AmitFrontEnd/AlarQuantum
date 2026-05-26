import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { techHeroData } from "@/data/technologyData"

export default function TechHero() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* bg glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-30"
        style={{ background: isDark ? "radial-gradient(ellipse, rgba(232,98,42,0.25) 0%, transparent 70%)" : "radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, transparent 65%)" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <Badge className="mb-5 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full border"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.35)", color: "oklch(0.62 0.17 35)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.17_35)] mr-2 inline-block animate-pulse" />
            {techHeroData.badge}
          </Badge>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
          {techHeroData.heading}{" "}
          <span style={{ color: "oklch(0.62 0.17 35)" }}>{techHeroData.headingAccent}</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.35 0.04 220)" }}>
          {techHeroData.subtext}
        </motion.p>

        {/* Classical vs Quantum pill */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-10 inline-flex items-center gap-0 rounded-full overflow-hidden border text-xs sm:text-sm font-semibold"
          style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(26,43,60,0.15)" }}>
          <div className="px-4 sm:px-6 py-2.5 flex items-center gap-2"
            style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.7)", color: isDark ? "rgba(232,246,250,0.5)" : "oklch(0.45 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            ⚠️ Classical: Math-based
          </div>
          <div className="px-3 py-2.5 text-xs" style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(26,43,60,0.08)", color: isDark ? "rgba(232,246,250,0.3)" : "oklch(0.5 0.04 220)" }}>vs</div>
          <div className="px-4 sm:px-6 py-2.5 flex items-center gap-2"
            style={{ background: "oklch(0.62 0.17 35)", color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            ⚛️ Quantum: Physics-based
          </div>
        </motion.div>
      </div>
    </section>
  )
}