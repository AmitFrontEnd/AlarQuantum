import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { researchAreasData } from "@/data/researchData"

export default function ResearchAreas() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Scan line animation */}
      <motion.div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div key={i} className="absolute w-full h-px"
            style={{ top: `${20 + i * 22}%`, background: `linear-gradient(90deg, transparent, ${isDark ? "rgba(232,246,250,0.04)" : "rgba(26,43,60,0.04)"}, transparent)` }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear", delay: i * 2 }} />
        ))}
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
              {researchAreasData.badge}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {researchAreasData.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {researchAreasData.areas.map((area, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl p-7 flex flex-col gap-5 cursor-pointer transition-all duration-300"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)",
                border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: isDark ? "0 4px 32px rgba(0,0,0,0.3)" : "0 4px 32px rgba(26,43,60,0.06)",
              }}>
              {/* Icon + colored bg that expands on hover */}
              <div className="flex items-center gap-4">
                <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: `${area.colorRaw}0.12)`, border: `1px solid ${area.colorRaw}0.2)` }}
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
                  {area.icon}
                </motion.div>
                <h3 className="text-base sm:text-lg font-bold leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
                  {area.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}>
                {area.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag, j) => (
                  <motion.span key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.06 + 0.3 }}
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${area.colorRaw}0.12)`, color: area.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Animated bottom border */}
              <motion.div className="h-0.5 rounded-full" style={{ background: `linear-gradient(90deg, ${area.color}, transparent)` }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 0.3 }}
                whileHover={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}