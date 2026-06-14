import { useSanityData } from "@/hooks/useSanityData"
import { officesData as fallbackData } from "@/data/contactData"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

export default function OfficesSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("offices", fallbackData)

  if (!data) return null

  return (
    <section className="pb-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-4xl font-bold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {data.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {data.locations?.map((loc, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)",
                border: `1px solid ${loc.color}25`,
                backdropFilter: "blur(12px)",
              }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: `${loc.color}15` }}>
                📍
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase"
                  style={{ color: loc.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {loc.type}
                </span>
                <h4 className="text-base font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
                  {loc.city}
                </h4>
                <p className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.5)" : "oklch(0.45 0.04 220)" }}>
                  {loc.address}
                </p>
              </div>
              <motion.div className="h-0.5 rounded-full" style={{ background: `linear-gradient(90deg, ${loc.color}, transparent)` }}
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