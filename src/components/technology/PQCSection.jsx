import { useSanityData } from "@/hooks/useSanityData"
import { pqcData as fallbackData } from "@/data/technologyData"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"

export default function PQCSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("pqc", fallbackData)

  if (!data) return null

  const card = { background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)", border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)", backdropFilter: "blur(12px)" }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] opacity-15"
        style={{ background: isDark ? "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)" : "radial-gradient(circle, rgba(168,212,230,0.9) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="mb-3 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0.1)", borderColor: "rgba(139,92,246,0.3)", color: "#8B5CF6" }}>
              {data.badge} — {data.tag}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {data.heading}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}>
            {data.subtext}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {data.algorithms?.map((algo, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300" style={card}>
              <div className="flex items-center justify-between">
                <span className="text-2xl">{algo.icon}</span>
                <span className="text-[10px] font-bold px-2 py-1 rounded-full"
                  style={{ background: `${algo.color}20`, color: algo.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  NIST {algo.nistLevel}
                </span>
              </div>
              <h4 className="text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>{algo.name}</h4>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs">
                  <span style={{ color: isDark ? "rgba(232,246,250,0.4)" : "oklch(0.5 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Type</span>
                  <span style={{ color: isDark ? "rgba(232,246,250,0.8)" : "oklch(0.25 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>{algo.type}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span style={{ color: isDark ? "rgba(232,246,250,0.4)" : "oklch(0.5 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Basis</span>
                  <span style={{ color: isDark ? "rgba(232,246,250,0.8)" : "oklch(0.25 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>{algo.basis}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span style={{ color: isDark ? "rgba(232,246,250,0.4)" : "oklch(0.5 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Use Case</span>
                  <span style={{ color: algo.color, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, textAlign: "right", maxWidth: "55%" }}>{algo.use}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl p-6 sm:p-10" style={card}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-8 text-center"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8B5CF6" }}>PQC Migration Roadmap</p>
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-0">
            {data.migrationSteps?.map((step, i) => (
              <div key={i} className="flex-1 flex flex-col md:items-center md:text-center gap-3 relative">
                {i < data.migrationSteps?.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-1/2 w-full h-px"
                    style={{ background: "linear-gradient(90deg, #8B5CF6, rgba(139,92,246,0.2))" }} />
                )}
                <div className="flex md:flex-col md:items-center gap-3 md:gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 z-10"
                    style={{ background: "#8B5CF6" }}>{i + 1}</div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: "#8B5CF6", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{step.phase}</p>
                    <h4 className="text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>{step.title}</h4>
                    <p className="text-xs leading-relaxed mt-1 max-w-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.5)" : "oklch(0.42 0.04 220)" }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}