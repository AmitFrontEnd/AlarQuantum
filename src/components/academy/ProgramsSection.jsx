import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { programsData } from "@/data/academyData"

export default function ProgramsSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Animated bg lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div key={i} className="absolute h-px w-full"
            style={{ top: `${15 + i * 18}%`, background: isDark ? "rgba(255,255,255,0.03)" : "rgba(26,43,60,0.04)" }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 12 + i * 3, repeat: Infinity, ease: "linear", delay: i * 1.5 }} />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5 }}>
            <Badge className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
              {programsData.badge}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {programsData.heading}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base max-w-xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}>
            {programsData.subtext}
          </motion.p>
        </div>

        {/* Track cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {programsData.tracks.map((track, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 60, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative flex flex-col rounded-3xl overflow-hidden"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)",
                border: track.featured ? `2px solid ${track.color}` : isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(26,43,60,0.1)",
                backdropFilter: "blur(16px)",
                boxShadow: track.featured ? `0 20px 60px ${track.colorRaw}0.2)` : isDark ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(26,43,60,0.08)",
              }}>

              {/* Featured badge */}
              {track.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}
                    className="px-3 py-1 rounded-full text-[10px] font-bold text-white"
                    style={{ background: track.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Most Popular
                  </motion.div>
                </div>
              )}

              {/* Colored top strip */}
              <motion.div className="h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, ${track.color}, transparent)` }}
                animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                transition={{ duration: 4, repeat: Infinity }} />

              <div className="p-7 flex flex-col gap-5 flex-1">
                {/* Level + icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                      style={{ background: `${track.colorRaw}0.12)` }}>
                      {track.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: track.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{track.level}</p>
                      <p className="text-xs" style={{ color: isDark ? "rgba(232,246,250,0.45)" : "oklch(0.5 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{track.duration} · {track.format}</p>
                    </div>
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-lg sm:text-xl font-bold leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
                  {track.headline}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}>
                  {track.desc}
                </p>

                {/* Audience */}
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase flex-shrink-0 mt-0.5" style={{ color: track.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>For:</span>
                  <span className="text-xs" style={{ color: isDark ? "rgba(232,246,250,0.5)" : "oklch(0.42 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{track.audience}</span>
                </div>

                {/* Modules */}
                <div className="flex flex-col gap-2 flex-1">
                  {track.modules.map((mod, j) => (
                    <motion.div key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.05 + 0.3 }}
                      className="flex items-start gap-2 text-xs"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.38 0.04 220)" }}>
                      <span className="mt-0.5 flex-shrink-0 text-[10px]" style={{ color: track.color }}>▸</span>
                      {mod}
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-4">
                  <Button asChild className="w-full py-5 rounded-2xl text-sm font-bold text-white"
                    style={{ background: track.color, fontFamily: "'Plus Jakarta Sans', sans-serif", boxShadow: `0 6px 20px ${track.colorRaw}0.3)` }}>
                    <Link to="/contact">{track.cta}</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}