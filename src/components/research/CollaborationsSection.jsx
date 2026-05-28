import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { collaborationsData } from "@/data/researchData"

const typeColors = { Academic: "#3B82F6", Government: "oklch(0.62 0.17 35)", Defence: "#EF4444", Industry: "#8B5CF6" }
const typeColorRaw = { Academic: "rgba(59,130,246,", Government: "rgba(232,98,42,", Defence: "rgba(239,68,68,", Industry: "rgba(139,92,246," }

export default function CollaborationsSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 bottom-0 w-[400px] h-[400px] opacity-10"
        style={{ background: isDark ? "radial-gradient(circle, rgba(232,98,42,0.4) 0%, transparent 70%)" : "radial-gradient(circle, rgba(168,212,230,0.9) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
              {collaborationsData.badge}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {collaborationsData.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {collaborationsData.partners.map((partner, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)",
                border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)",
                backdropFilter: "blur(12px)",
              }}>

              <div className="flex items-center justify-between">
                {/* Partner name */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm"
                  style={{ background: `${typeColorRaw[partner.type]}0.12)`, color: typeColors[partner.type], fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {partner.name.slice(0, 2)}
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${typeColorRaw[partner.type]}0.1)`, color: typeColors[partner.type], fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {partner.type}
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
                  {partner.name}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.5)" : "oklch(0.42 0.04 220)" }}>
                  {partner.desc}
                </p>
              </div>

              {/* Hover line */}
              <motion.div className="h-0.5 rounded-full mt-auto"
                style={{ background: `linear-gradient(90deg, ${typeColors[partner.type]}, transparent)` }}
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}