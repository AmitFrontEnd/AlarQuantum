import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { papersData } from "@/data/researchData"

const tagColors = { QKD: "oklch(0.62 0.17 35)", QRNG: "#3B82F6", PQC: "#8B5CF6", "Threat Research": "#10B981" }
const tagColorRaw = { QKD: "rgba(232,98,42,", QRNG: "rgba(59,130,246,", PQC: "rgba(139,92,246,", "Threat Research": "rgba(16,185,129," }

export default function PublicationsSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [activeFilter, setActiveFilter] = useState("All")
  const [expanded, setExpanded] = useState(null)

  const filtered = activeFilter === "All" ? papersData.papers : papersData.papers.filter(p => p.tag === activeFilter)

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 w-[400px] h-[400px] opacity-10"
        style={{ background: isDark ? "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)" : "radial-gradient(circle, rgba(168,212,230,0.9) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
              {papersData.badge}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {papersData.heading}
          </motion.h2>
        </div>

        {/* Filter pills */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12">
          {papersData.filters.map((f) => (
            <motion.button key={f} onClick={() => setActiveFilter(f)}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full text-xs font-bold transition-all"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: activeFilter === f ? (f === "All" ? "oklch(0.62 0.17 35)" : tagColors[f]) : isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.7)",
                color: activeFilter === f ? "white" : isDark ? "rgba(232,246,250,0.6)" : "oklch(0.38 0.04 220)",
                border: activeFilter === f ? "none" : isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(26,43,60,0.1)",
                boxShadow: activeFilter === f ? `0 4px 16px ${f === "All" ? "rgba(232,98,42,0.3)" : `${tagColorRaw[f] || "rgba(232,98,42,"}0.3)`}` : "none",
              }}>
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Papers list */}
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4">
            {filtered.map((paper, i) => (
              <motion.div key={paper.doi}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="rounded-2xl p-5 sm:p-7 cursor-pointer transition-all duration-300"
                style={{
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)",
                  border: expanded === i ? `1.5px solid ${tagColors[paper.tag]}` : isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)",
                  backdropFilter: "blur(12px)",
                  boxShadow: expanded === i ? `0 8px 32px ${tagColorRaw[paper.tag]}0.15)` : "none",
                }}>

                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Tag + year */}
                  <div className="flex sm:flex-col items-center sm:items-start gap-2 flex-shrink-0 sm:w-28">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ background: `${tagColorRaw[paper.tag]}0.12)`, color: tagColors[paper.tag], fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {paper.tag}
                    </span>
                    <span className="text-[10px] font-semibold" style={{ color: isDark ? "rgba(232,246,250,0.35)" : "oklch(0.55 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {paper.year}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h4 className="text-sm sm:text-base font-bold leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
                      {paper.title}
                    </h4>
                    <p className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.45)" : "oklch(0.5 0.04 220)" }}>
                      {paper.authors} · <em>{paper.journal}</em>
                    </p>
                  </div>

                  {/* Expand arrow */}
                  <motion.div animate={{ rotate: expanded === i ? 180 : 0 }} transition={{ duration: 0.3 }}
                    className="flex-shrink-0 hidden sm:flex items-center justify-center w-7 h-7 rounded-full"
                    style={{ background: isDark ? "rgba(255,255,255,0.07)" : "rgba(26,43,60,0.06)" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke={isDark ? "rgba(232,246,250,0.5)" : "oklch(0.45 0.04 220)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </div>

                {/* Expandable abstract */}
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden">
                      <div className="mt-5 pt-5 flex flex-col gap-3"
                        style={{ borderTop: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.08)" }}>
                        <p className="text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.38 0.04 220)" }}>
                          {paper.abstract}
                        </p>
                        <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer"
                          className="text-xs font-bold flex items-center gap-1.5 w-fit"
                          style={{ color: tagColors[paper.tag], fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          DOI: {paper.doi}
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                            <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}