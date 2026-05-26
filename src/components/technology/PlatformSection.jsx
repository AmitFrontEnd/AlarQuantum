import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { platformData } from "@/data/technologyData"

export default function PlatformSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const card = { background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)", border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)", backdropFilter: "blur(12px)" }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0"
        style={{ background: isDark ? "linear-gradient(180deg, transparent, rgba(232,98,42,0.04), transparent)" : "linear-gradient(180deg, transparent, rgba(232,98,42,0.02), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="mb-3 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
              {platformData.badge}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {platformData.heading}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}>
            {platformData.subtext}
          </motion.p>
        </div>

        {/* Stack Architecture Diagram */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-2xl p-6 sm:p-8" style={card}>
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-8"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "oklch(0.62 0.17 35)" }}>
            QShield™ Architecture Stack
          </p>
          <div className="flex flex-col gap-3">
            {platformData.layers.map((layer, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                style={{ background: `${layer.color}12`, border: `1px solid ${layer.color}30` }}>
                {/* Layer label */}
                <div className="flex-shrink-0 sm:w-44">
                  <span className="text-xs font-bold" style={{ color: layer.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {layer.layer}
                  </span>
                </div>
                {/* Divider */}
                <div className="w-px h-8 hidden sm:block flex-shrink-0" style={{ background: `${layer.color}30` }} />
                {/* Components */}
                <div className="flex flex-wrap gap-2">
                  {layer.components.map((comp, j) => (
                    <span key={j} className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg"
                      style={{ background: `${layer.color}15`, color: layer.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {comp}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          {/* Bottom label */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px flex-1" style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(26,43,60,0.08)" }} />
            <span className="text-[10px] font-semibold tracking-widest"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.3)" : "oklch(0.55 0.04 220)" }}>
              Unified API — REST / gRPC / SDK
            </span>
            <div className="h-px flex-1" style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(26,43,60,0.08)" }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}