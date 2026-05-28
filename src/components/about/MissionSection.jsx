import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { missionData } from "@/data/aboutData"

export default function MissionSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0"
        style={{ background: isDark ? "linear-gradient(180deg, transparent, rgba(232,98,42,0.03), transparent)" : "linear-gradient(180deg, transparent, rgba(232,98,42,0.02), transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <Badge className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
              {missionData.badge}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {missionData.heading}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-5 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}>
            {missionData.subtext}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {missionData.pillars.map((pillar, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl p-8 flex flex-col gap-5 transition-all duration-300"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)",
                border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: isDark ? "0 4px 32px rgba(0,0,0,0.25)" : "0 4px 32px rgba(26,43,60,0.06)",
              }}>

              <div className="flex items-center gap-4">
                <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: `${pillar.colorRaw}0.12)`, border: `1px solid ${pillar.colorRaw}0.2)` }}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
                  {pillar.icon}
                </motion.div>
                <h3 className="text-base sm:text-lg font-bold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
                  {pillar.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}>
                {pillar.desc}
              </p>

              <motion.div className="h-0.5 rounded-full mt-auto"
                style={{ background: `linear-gradient(90deg, ${pillar.color}, transparent)` }}
                initial={{ scaleX: 0.2, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}