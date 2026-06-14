import { useSanityData } from "@/hooks/useSanityData"
import { qrngData as fallbackData } from "@/data/technologyData"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"

export default function QRNGSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("qrng", fallbackData)

  if (!data) return null

  const card = { background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)", border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)", backdropFilter: "blur(12px)" }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] opacity-15"
        style={{ background: isDark ? "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)" : "radial-gradient(circle, rgba(168,212,230,0.9) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="mb-3 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.1)", borderColor: "rgba(59,130,246,0.3)", color: "#3B82F6" }}>
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

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mb-12 rounded-2xl p-6 sm:p-8 overflow-hidden" style={card}>
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#3B82F6" }}>
            Live Quantum Entropy Stream
          </p>
          <div className="flex flex-wrap justify-center gap-1">
            {[...Array(120)].map((_, i) => (
              <motion.span key={i}
                className="text-[10px] font-mono font-bold"
                animate={{ opacity: [0.2, 1, 0.2], color: ["#3B82F6", "oklch(0.62 0.17 35)", "#10B981"] }}
                transition={{ duration: 0.8 + Math.random() * 1.5, delay: Math.random() * 2, repeat: Infinity }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.span>
            ))}
          </div>
          <p className="text-center text-[10px] mt-4 tracking-wider"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.3)" : "oklch(0.55 0.04 220)" }}>
            ↑ True random bits generated from quantum vacuum fluctuations — 10 Gbps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {data.comparison?.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ ...card, border: item.bad ? "1px solid rgba(239,68,68,0.2)" : "1px solid rgba(232,98,42,0.3)" }}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-bold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>{item.label}</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {item.points?.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs leading-relaxed"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.38 0.04 220)" }}>
                    <span className="mt-0.5 flex-shrink-0" style={{ color: item.bad ? "rgb(239,68,68)" : "oklch(0.62 0.17 35)" }}>
                      {item.bad ? "✗" : "✓"}
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl p-6 sm:p-8" style={card}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#3B82F6" }}>Technical Specifications</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {data.specs?.map((spec, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold tracking-wider uppercase" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.35)" : "oklch(0.5 0.04 220)" }}>{spec.label}</span>
                <span className="text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}