import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { researchHeroData } from "@/data/researchData"

export default function ResearchHero() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden">
      {/* Animated constellation bg */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: isDark ? "rgba(232,246,250,0.6)" : "rgba(26,43,60,0.3)",
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 3 + Math.random() * 4, delay: Math.random() * 3, repeat: Infinity }} />
        ))}
      </div>

      {/* Parallax glow */}
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20"
          style={{ background: isDark ? "radial-gradient(ellipse, rgba(232,98,42,0.5) 0%, transparent 60%)" : "radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, transparent 60%)" }} />
        <div className="absolute top-1/2 right-10 w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: isDark ? "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)" : "radial-gradient(circle, rgba(168,212,230,0.8) 0%, transparent 70%)" }} />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 flex flex-col items-center text-center">

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <Badge className="mb-6 px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-full border"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.4)", color: "oklch(0.62 0.17 35)" }}>
            <motion.span className="w-2 h-2 rounded-full mr-2 inline-block" style={{ background: "oklch(0.62 0.17 35)" }}
              animate={{ scale: [1, 1.6, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            {researchHeroData.badge}
          </Badge>
        </motion.div>

        {/* Heading with stagger */}
        <motion.div initial={{ opacity: 0, y: 40, filter: "blur(12px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {researchHeroData.heading}
          </h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40, filter: "blur(12px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "oklch(0.62 0.17 35)" }}>
            {researchHeroData.headingAccent}
          </h1>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-14"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.35 0.04 220)" }}>
          {researchHeroData.subtext}
        </motion.p>

        {/* Stats */}
        <motion.div initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } } }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
          {researchHeroData.stats.map((stat, i) => (
            <motion.div key={i}
              variants={{ hidden: { opacity: 0, y: 30, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } } }}
              whileHover={{ scale: 1.06, y: -4 }}
              className="flex flex-col items-center py-5 px-3 rounded-2xl"
              style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.7)", border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(26,43,60,0.1)", backdropFilter: "blur(12px)" }}>
              <span className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "oklch(0.62 0.17 35)" }}>{stat.value}</span>
              <span className="text-[10px] sm:text-xs mt-1 text-center leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.45)" : "oklch(0.45 0.04 220)" }}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll mouse */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: isDark ? "rgba(232,246,250,0.2)" : "rgba(26,43,60,0.2)" }}>
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.62 0.17 35)" }}
            animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </motion.div>
      </motion.div>
    </section>
  )
}