import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { qkdData } from "@/data/technologyData"

export default function QKDSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const card = {
    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)",
    border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)",
    backdropFilter: "blur(12px)",
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] opacity-15"
        style={{ background: isDark ? "radial-gradient(circle, rgba(232,98,42,0.3) 0%, transparent 70%)" : "radial-gradient(circle, rgba(168,212,230,0.9) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="mb-3 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
              {qkdData.badge} — {qkdData.tag}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {qkdData.heading}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}>
            {qkdData.subtext}
          </motion.p>
        </div>

        {/* QKD Flow Diagram */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-16 rounded-2xl p-6 sm:p-8" style={card}>
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-8"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "oklch(0.62 0.17 35)" }}>
            QKD Protocol Flow
          </p>
          {/* Visual flow */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            {/* Alice */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", border: "2px solid rgba(232,98,42,0.4)" }}>
                👩‍💻
              </div>
              <span className="text-xs font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>Alice</span>
              <span className="text-[10px] text-center" style={{ color: isDark ? "rgba(232,246,250,0.4)" : "oklch(0.5 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Sender</span>
            </div>

            {/* Quantum Channel */}
            <div className="flex-1 flex flex-col items-center gap-2 w-full">
              <div className="w-full flex items-center gap-1 justify-center">
                {[...Array(8)].map((_, i) => (
                  <motion.div key={i} className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                    transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity }}
                    style={{ background: "oklch(0.62 0.17 35)" }} />
                ))}
              </div>
              <span className="text-[10px] font-semibold tracking-wider uppercase"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.35)" : "oklch(0.5 0.04 220)" }}>
                ⚛️ Quantum Fiber Channel (Single Photons)
              </span>
              {/* Eve indicator */}
              <div className="flex flex-col items-center gap-1 mt-1">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)" }}>👤</div>
                <span className="text-[9px] font-semibold" style={{ color: "rgb(239,68,68)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Eve (Detected & Blocked)</span>
              </div>
            </div>

            {/* Bob */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.1)", border: "2px solid rgba(59,130,246,0.4)" }}>
                👨‍💻
              </div>
              <span className="text-xs font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>Bob</span>
              <span className="text-[10px] text-center" style={{ color: isDark ? "rgba(232,246,250,0.4)" : "oklch(0.5 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Receiver</span>
            </div>
          </div>

          {/* Public Channel below */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-px flex-1 max-w-[120px]" style={{ background: isDark ? "rgba(255,255,255,0.1)" : "rgba(26,43,60,0.1)" }} />
            <span className="text-[10px] tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.3)" : "oklch(0.55 0.04 220)" }}>
              🔗 Public Channel (Basis Reconciliation)
            </span>
            <div className="h-px flex-1 max-w-[120px]" style={{ background: isDark ? "rgba(255,255,255,0.1)" : "rgba(26,43,60,0.1)" }} />
          </div>
        </motion.div>

        {/* How it works steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {qkdData.howItWorks.map((step, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="rounded-2xl p-5 flex flex-col gap-3" style={card}>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold" style={{ color: "oklch(0.62 0.17 35)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{step.step}</span>
                <div className="h-px flex-1" style={{ background: isDark ? "rgba(255,255,255,0.07)" : "rgba(26,43,60,0.1)" }} />
              </div>
              <h4 className="text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>{step.title}</h4>
              <p className="text-xs leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.5)" : "oklch(0.42 0.04 220)" }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Specs */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl p-6 sm:p-8" style={card}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "oklch(0.62 0.17 35)" }}>Technical Specifications</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {qkdData.specs.map((spec, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold tracking-wider uppercase"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.35)" : "oklch(0.5 0.04 220)" }}>{spec.label}</span>
                <span className="text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}