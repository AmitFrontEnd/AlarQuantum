import { useSanityData } from "@/hooks/useSanityData"
import { teamData as fallbackData } from "@/data/aboutData"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useTheme } from "@/components/theme-provider"

export default function TeamSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("team", fallbackData)
  const [active, setActive] = useState(null)

  if (!data) return null

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-1/4 w-[400px] h-[400px] opacity-10"
        style={{ background: isDark ? "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)" : "radial-gradient(circle, rgba(168,212,230,0.9) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <Badge className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
              {data.badge}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {data.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.members?.map((member, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setActive(active === i ? null : i)}
              whileHover={{ y: -8 }}
              className="group rounded-3xl p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300"
              style={{
                background: active === i ? (isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.9)") : isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)",
                border: active === i ? `1.5px solid ${member.bg}` : isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)",
                backdropFilter: "blur(12px)",
              }}>

              <div className="flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Avatar className="w-14 h-14 ring-2 ring-offset-2" style={{ ringColor: member.bg }}>
                    <AvatarFallback className="text-sm font-bold text-white" style={{ background: member.bg }}>
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
                <div>
                  <h4 className="text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
                    {member.name}
                  </h4>
                  <p className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: member.bg }}>
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {member.expertise?.map((ex, j) => (
                  <span key={j} className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${member.bg}15`, color: member.bg, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {ex}
                  </span>
                ))}
              </div>

              <AnimatePresence>
                {active === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="text-xs leading-relaxed overflow-hidden"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.38 0.04 220)" }}>
                    {member.bio}
                  </motion.p>
                )}
              </AnimatePresence>

              <p className="text-[10px] text-center" style={{ color: isDark ? "rgba(232,246,250,0.25)" : "oklch(0.6 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {active === i ? "Click to collapse" : "Click to read bio"}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}