import { useSanityData } from "@/hooks/useSanityData"
import { aboutHeroData as fallbackData } from "@/data/aboutData"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"

export default function AboutHero() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("aboutHero", fallbackData)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  if (!data) return null

  return (
    <section ref={ref} className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `linear-gradient(${isDark ? "rgba(232,246,250,1)" : "rgba(26,43,60,1)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "rgba(232,246,250,1)" : "rgba(26,43,60,1)"} 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />

      <motion.div style={{ y }} className="pointer-events-none absolute inset-0">
        {[
          { size: 500, x: "-5%", top: "5%", color: isDark ? "rgba(232,98,42,0.12)" : "rgba(232,98,42,0.07)" },
          { size: 350, x: "75%", top: "50%", color: isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.05)" },
          { size: 250, x: "40%", top: "70%", color: isDark ? "rgba(139,92,246,0.1)" : "rgba(139,92,246,0.05)" },
        ].map((orb, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.top, background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`, filter: "blur(60px)" }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5 + i * 2, repeat: Infinity, delay: i * 1.5 }} />
        ))}
      </motion.div>

      <motion.div style={{ opacity, scale }} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 flex flex-col items-center text-center">

        <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "backOut" }}>
          <Badge className="mb-6 px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-full border"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.4)", color: "oklch(0.62 0.17 35)" }}>
            <motion.span className="w-2 h-2 rounded-full mr-2 inline-block" style={{ background: "oklch(0.62 0.17 35)" }}
              animate={{ scale: [1, 1.6, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            {data.badge}
          </Badge>
        </motion.div>

        {[data.heading, data.headingAccent].map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: i === 1 ? "oklch(0.62 0.17 35)" : isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)",
              }}>
              {line}
            </motion.h1>
          </div>
        ))}

        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.35 0.04 220)" }}>
          {data.subtext}
        </motion.p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
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