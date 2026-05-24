import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { trustedByData } from "@/data/homeData"

export default function TrustedBy() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="py-14 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "rgba(255,255,255,0.02)"
            : "rgba(26,43,60,0.03)",
          borderTop: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(26,43,60,0.08)",
          borderBottom: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(26,43,60,0.08)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold tracking-widest uppercase mb-8"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: isDark ? "rgba(232,246,250,0.35)" : "oklch(0.5 0.04 220)",
          }}
        >
          {trustedByData.heading}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustedByData.logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm tracking-widest transition-all hover:scale-105 cursor-default"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.6)",
                border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(26,43,60,0.1)",
                color: isDark ? "rgba(232,246,250,0.5)" : "oklch(0.38 0.04 220)",
                backdropFilter: "blur(8px)",
              }}
            >
              {logo.abbr}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}