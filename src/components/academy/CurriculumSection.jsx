import { useSanityData } from "@/hooks/useSanityData"
import { curriculumData as fallbackData } from "@/data/academyData"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"

const tagColors = { Foundation: "#3B82F6", Professional: "oklch(0.62 0.17 35)", Expert: "#8B5CF6" }

export default function CurriculumSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("curriculum", fallbackData)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  if (!data) return null

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-10"
        style={{ background: isDark ? "radial-gradient(ellipse, rgba(232,98,42,0.4) 0%, transparent 60%)" : "radial-gradient(ellipse, rgba(168,212,230,0.8) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16" ref={ref}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <Badge className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
              {data.badge}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {data.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.modules?.map((mod, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300"
              style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)", border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)", backdropFilter: "blur(12px)" }}>

              <div className="flex items-center justify-between">
                <motion.div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${tagColors[mod.tag]}15` }}
                  whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}>
                  {mod.icon}
                </motion.div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${tagColors[mod.tag]}15`, color: tagColors[mod.tag], fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {mod.tag}
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-bold leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
                {mod.title}
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.5)" : "oklch(0.42 0.04 220)" }}>
                {mod.desc}
              </p>

              <motion.div className="h-0.5 rounded-full mt-auto"
                style={{ background: tagColors[mod.tag] }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}