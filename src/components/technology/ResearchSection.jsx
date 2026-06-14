import { useSanityData } from "@/hooks/useSanityData"
import { researchData as fallbackData } from "@/data/technologyData"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"

export default function ResearchSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("research", fallbackData)

  if (!data) return null

  const card = { background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)", border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)", backdropFilter: "blur(12px)" }

  const tagColors = { QKD: "oklch(0.62 0.17 35)", QRNG: "#3B82F6", PQC: "#8B5CF6", "Threat Research": "#EF4444" }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="mb-3 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
              {data.badge}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {data.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {data.papers?.map((paper, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl p-6 flex flex-col gap-4 group cursor-pointer transition-all duration-300" style={card}>
              <div className="flex items-start justify-between gap-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{ background: `${tagColors[paper.tag] || "oklch(0.62 0.17 35)"}15`, color: tagColors[paper.tag] || "oklch(0.62 0.17 35)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {paper.tag}
                </span>
                <span className="text-[10px] font-semibold" style={{ color: isDark ? "rgba(232,246,250,0.35)" : "oklch(0.55 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {paper.year}
                </span>
              </div>
              <h4 className="text-sm font-bold leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>
                {paper.title}
              </h4>
              <div className="flex items-center justify-between mt-auto">
                <p className="text-xs italic" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.4)" : "oklch(0.48 0.04 220)" }}>
                  {paper.journal}
                </p>
                <span className="text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "oklch(0.62 0.17 35)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Read
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}