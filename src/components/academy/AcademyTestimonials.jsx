import { useSanityData } from "@/hooks/useSanityData"
import { testimonialsData as fallbackData } from "@/data/academyData"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useTheme } from "@/components/theme-provider"

const trackColors = { Foundation: "#3B82F6", Professional: "oklch(0.62 0.17 35)", Expert: "#8B5CF6" }

export default function AcademyTestimonials() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("academyTestimonials", fallbackData)
  const [active, setActive] = useState(0)

  if (!data) return null

  const items = data.items || []

  useEffect(() => {
    const t = setTimeout(() => setActive((a) => (a + 1) % items.length), 5000)
    return () => clearTimeout(t)
  }, [active, items.length])

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0"
        style={{ background: isDark ? "linear-gradient(180deg, transparent, rgba(232,98,42,0.04), transparent)" : "linear-gradient(180deg, transparent, rgba(232,98,42,0.03), transparent)" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
              {data.badge}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {data.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div key={i}
              onClick={() => setActive(i)}
              animate={{
                scale: i === active ? 1.03 : 0.97,
                opacity: i === active ? 1 : 0.6,
              }}
              whileHover={{ scale: 1.04, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl p-6 flex flex-col gap-5 cursor-pointer transition-all"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)",
                border: i === active ? `1.5px solid ${trackColors[item.track]}` : isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)",
                backdropFilter: "blur(12px)",
              }}>

              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full self-start"
                style={{ background: `${trackColors[item.track]}15`, color: trackColors[item.track], fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {item.track} Track
              </span>

              <p className="text-xs sm:text-sm leading-relaxed italic flex-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.75)" : "oklch(0.25 0.04 220)" }}>
                "{item.quote}"
              </p>

              <div className="flex items-center gap-3">
                <Avatar className="w-9 h-9 flex-shrink-0">
                  <AvatarFallback className="text-xs font-bold text-white" style={{ background: trackColors[item.track] }}>
                    {item.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>{item.name}</p>
                  <p className="text-[10px] leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.4)" : "oklch(0.5 0.04 220)" }}>{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <motion.button key={i} onClick={() => setActive(i)}
              animate={{ width: i === active ? 28 : 8, background: i === active ? "oklch(0.62 0.17 35)" : isDark ? "rgba(255,255,255,0.2)" : "rgba(26,43,60,0.2)" }}
              className="h-2 rounded-full transition-all" />
          ))}
        </div>
      </div>
    </section>
  )
}