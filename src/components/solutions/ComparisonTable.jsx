import { useSanityData } from "@/hooks/useSanityData"
import { comparisonData as fallbackData } from "@/data/solutionsData"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"

export default function ComparisonTable() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("comparison", fallbackData)

  if (!data) return null

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0"
        style={{ background: isDark ? "linear-gradient(180deg, transparent, rgba(232,98,42,0.04), transparent)" : "linear-gradient(180deg, transparent, rgba(232,98,42,0.02), transparent)" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="mb-4 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
              {data.badge}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {data.heading}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}>
            {data.subtext}
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl overflow-hidden"
          style={{ border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)" }}>

          <div className="grid grid-cols-3 text-xs font-bold tracking-wider uppercase"
            style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(26,43,60,0.06)" }}>
            <div className="px-4 sm:px-6 py-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.4)" : "oklch(0.5 0.04 220)" }}>Feature</div>
            <div className="px-4 sm:px-6 py-4 text-center" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgb(239,68,68)" }}>⚠️ Classical</div>
            <div className="px-4 sm:px-6 py-4 text-center" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "oklch(0.62 0.17 35)" }}>⚛️ Alar Quantum</div>
          </div>

          {data.rows?.map((row, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="grid grid-cols-3 border-t text-xs sm:text-sm"
              style={{ borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(26,43,60,0.07)", background: i % 2 === 0 ? (isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.5)") : "transparent" }}>
              <div className="px-4 sm:px-6 py-4 font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.7)" : "oklch(0.28 0.04 220)" }}>
                {row.feature}
              </div>
              <div className="px-4 sm:px-6 py-4 text-center" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgb(239,68,68)" }}>
                {row.classical}
              </div>
              <div className="px-4 sm:px-6 py-4 text-center font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "oklch(0.62 0.17 35)" }}>
                {row.quantum}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}