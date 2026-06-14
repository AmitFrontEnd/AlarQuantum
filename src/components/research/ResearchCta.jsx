import { useSanityData } from "@/hooks/useSanityData"
import { researchCtaData as fallbackData } from "@/data/researchData"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export default function ResearchCta() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("researchCta", fallbackData)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  if (!data) return null

  return (
    <section className="py-24 px-4 sm:px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden px-6 py-14 sm:px-14 sm:py-20 text-center"
          style={{
            background: isDark ? "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(10,25,40,0.97) 40%, rgba(232,98,42,0.12) 100%)" : "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(200,232,242,0.9) 50%, rgba(232,98,42,0.06) 100%)",
            border: isDark ? "1px solid rgba(59,130,246,0.2)" : "1px solid rgba(59,130,246,0.15)",
          }}>

          <motion.div className="pointer-events-none absolute inset-0 opacity-[0.04]"
            animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ backgroundImage: "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

          <motion.div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px]"
            animate={{ opacity: [0.15, 0.35, 0.15] }} transition={{ duration: 3, repeat: Infinity }}
            style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.3) 0%, transparent 70%)" }} />

          <div className="relative z-10">
            <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7 }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
              {data.heading}
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.7 }}
              className="text-sm sm:text-base mb-12 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.35 0.04 220)" }}>
              {data.subtext}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-xs sm:max-w-none mx-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button asChild className="w-full sm:w-auto px-8 py-6 rounded-full text-sm font-bold text-white"
                  style={{ background: "oklch(0.62 0.17 35)", boxShadow: "0 10px 36px oklch(0.62 0.17 35 / 40%)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <Link to={data.ctaPrimaryHref}>{data.ctaPrimaryLabel}</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button asChild variant="outline" className="w-full sm:w-auto px-8 py-6 rounded-full text-sm font-bold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", borderColor: isDark ? "rgba(232,246,250,0.2)" : "rgba(26,43,60,0.25)", background: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.7)", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>
                  <Link to={data.ctaSecondaryHref}>{data.ctaSecondaryLabel}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}