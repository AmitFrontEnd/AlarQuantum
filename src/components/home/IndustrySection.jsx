import { useSanityData } from "@/hooks/useSanityData"
import { industryData as fallbackData } from "@/data/homeData"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"

export default function IndustrySection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("industries", fallbackData)

  if (!data) return null

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(232,98,42,0.3) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(168,212,230,0.9) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge
              className="mb-4 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full border"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)",
                borderColor: "rgba(232,98,42,0.3)",
                color: "oklch(0.62 0.17 35)",
              }}
            >
              {data.badge}
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}
          >
            {data.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}
          >
            {data.subtext}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {data.sectors?.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-5 sm:p-7 flex flex-col sm:flex-row gap-4 sm:gap-5 group transition-all duration-300 cursor-pointer"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.65)",
                border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: isDark ? "0 4px 24px rgba(0,0,0,0.25)" : "0 4px 24px rgba(26,43,60,0.06)",
              }}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform group-hover:scale-110"
                style={{ background: isDark ? "rgba(232,98,42,0.12)" : "rgba(232,98,42,0.08)" }}
              >
                {sector.icon}
              </div>
              <div className="flex flex-col gap-2 min-w-0">
                <h3
                  className="font-bold text-sm sm:text-base"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}
                >
                  {sector.title}
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.5)" : "oklch(0.42 0.04 220)" }}
                >
                  {sector.description}
                </p>
                <span
                  className="text-xs font-semibold flex items-center gap-1 mt-1"
                  style={{ color: "oklch(0.62 0.17 35)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}