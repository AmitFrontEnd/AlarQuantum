import { useSanityData } from "@/hooks/useSanityData"
import { contactHeroData as fallbackData } from "@/data/contactData"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"

export default function ContactHero() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("contactHero", fallbackData)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  if (!data) return null

  return (
    <section ref={ref} className="relative pt-36 pb-20 overflow-hidden">
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0">
        {[
          { w: 500, l: "10%", t: "0%", c: isDark ? "rgba(232,98,42,0.12)" : "rgba(232,98,42,0.06)" },
          { w: 350, l: "70%", t: "30%", c: isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.05)" },
          { w: 300, l: "40%", t: "60%", c: isDark ? "rgba(139,92,246,0.08)" : "rgba(139,92,246,0.04)" },
        ].map((orb, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{ width: orb.w, height: orb.w, left: orb.l, top: orb.t, background: `radial-gradient(circle, ${orb.c} 0%, transparent 70%)`, filter: "blur(60px)" }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5 + i * 2, repeat: Infinity, delay: i * 1.5 }} />
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: `linear-gradient(${isDark ? "rgba(232,246,250,1)" : "rgba(26,43,60,1)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "rgba(232,246,250,1)" : "rgba(26,43,60,1)"} 1px, transparent 1px)`, backgroundSize: "70px 70px" }} />

      <motion.div style={{ opacity }} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
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
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.1 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: i === 1 ? "oklch(0.62 0.17 35)" : isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
              {line}
            </motion.h1>
          </div>
        ))}

        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.35 0.04 220)" }}>
          {data.subtext}
        </motion.p>
      </motion.div>
    </section>
  )
}