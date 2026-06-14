import { useSanityData } from "@/hooks/useSanityData"
import { academyHeroData as fallbackData } from "@/data/academyData"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

function MagneticButton({ children, style, className, asChild, to, variant }) {
  const ref = useRef(null)
  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px) scale(1.04)`
  }
  const handleMouseLeave = () => {
    ref.current.style.transform = "translate(0,0) scale(1)"
  }
  return (
    <Button ref={ref} asChild={asChild} variant={variant}
      className={className} style={{ ...style, transition: "transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94)" }}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {asChild ? <Link to={to}>{children}</Link> : children}
    </Button>
  )
}

function FloatingOrb({ size, x, y, delay, color }) {
  return (
    <motion.div className="pointer-events-none absolute rounded-full"
      style={{ width: size, height: size, left: x, top: y, background: color, filter: "blur(40px)" }}
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
      transition={{ duration: 6 + delay, delay, repeat: Infinity, ease: "easeInOut" }} />
  )
}

export default function AcademyHero() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("academyHero", fallbackData)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  if (!data) return null

  const textReveal = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: (i) => ({ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] } }),
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0">
        <FloatingOrb size={400} x="10%" y="10%" delay={0} color={isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.08)"} />
        <FloatingOrb size={300} x="70%" y="60%" delay={2} color={isDark ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.06)"} />
        <FloatingOrb size={200} x="50%" y="20%" delay={1} color={isDark ? "rgba(139,92,246,0.1)" : "rgba(139,92,246,0.05)"} />
        <FloatingOrb size={250} x="80%" y="10%" delay={3} color={isDark ? "rgba(232,98,42,0.1)" : "rgba(232,98,42,0.05)"} />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `linear-gradient(${isDark ? "rgba(232,246,250,0.8)" : "rgba(26,43,60,0.8)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "rgba(232,246,250,0.8)" : "rgba(26,43,60,0.8)"} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-28 sm:py-32 flex flex-col items-center text-center">

        <motion.div custom={0} variants={textReveal} initial="hidden" animate="visible">
          <Badge className="mb-6 px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-full border"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.4)", color: "oklch(0.62 0.17 35)" }}>
            <motion.span className="w-2 h-2 rounded-full mr-2 inline-block" style={{ background: "oklch(0.62 0.17 35)" }}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            {data.badge}
          </Badge>
        </motion.div>

        <div className="overflow-hidden mb-3">
          <motion.h1 custom={1} variants={textReveal} initial="hidden" animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {data.heading}
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1 custom={2} variants={textReveal} initial="hidden" animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "oklch(0.62 0.17 35)" }}>
            {data.headingAccent}
          </motion.h1>
        </div>

        <motion.p custom={3} variants={textReveal} initial="hidden" animate="visible"
          className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-10"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.35 0.04 220)" }}>
          {data.subtext}
        </motion.p>

        <motion.div custom={4} variants={textReveal} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xs sm:max-w-none mb-16">
          <MagneticButton asChild to="/contact"
            className="w-full sm:w-auto px-8 py-6 rounded-full text-sm font-bold text-white"
            style={{ background: "oklch(0.62 0.17 35)", boxShadow: "0 8px 32px oklch(0.62 0.17 35 / 40%)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Explore Programs
          </MagneticButton>
          <MagneticButton asChild to="/contact" variant="outline"
            className="w-full sm:w-auto px-8 py-6 rounded-full text-sm font-bold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", borderColor: isDark ? "rgba(232,246,250,0.2)" : "rgba(26,43,60,0.25)", background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.6)", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>
            Download Curriculum
          </MagneticButton>
        </motion.div>

        <motion.div initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.8 } } }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
          {data.stats?.map((stat, i) => (
            <motion.div key={i}
              variants={{ hidden: { opacity: 0, y: 30, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } } }}
              whileHover={{ scale: 1.06, y: -4 }}
              className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl"
              style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.7)", border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(26,43,60,0.1)", backdropFilter: "blur(12px)" }}>
              <span className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "oklch(0.62 0.17 35)" }}>{stat.value}</span>
              <span className="text-[10px] sm:text-xs mt-1 text-center leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.45)" : "oklch(0.45 0.04 220)" }}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: isDark ? "rgba(232,246,250,0.2)" : "rgba(26,43,60,0.2)" }}>
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.62 0.17 35)" }}
            animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </motion.div>
      </motion.div>
    </section>
  )
}