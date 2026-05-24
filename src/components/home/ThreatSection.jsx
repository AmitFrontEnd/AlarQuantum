import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { threatData } from "@/data/homeData"

export default function ThreatSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isDark
            ? "linear-gradient(180deg, transparent 0%, rgba(232,98,42,0.04) 50%, transparent 100%)"
            : "linear-gradient(180deg, transparent 0%, rgba(232,98,42,0.03) 50%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
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
              {threatData.badge}
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}
          >
            {threatData.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}
          >
            {threatData.subtext}
          </motion.p>
        </div>

        {/* Quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {threatData.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.65)",
                border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Quote mark */}
              <span className="text-4xl font-serif opacity-30" style={{ color: "oklch(0.62 0.17 35)", lineHeight: 1 }}>"</span>

              <p
                className="text-sm leading-relaxed flex-1 italic"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.75)" : "oklch(0.25 0.04 220)" }}
              >
                {item.quote}
              </p>

              <div
                className="pt-4 text-xs font-semibold tracking-wide"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "oklch(0.62 0.17 35)",
                  borderTop: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)",
                }}
              >
                — {item.source}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}