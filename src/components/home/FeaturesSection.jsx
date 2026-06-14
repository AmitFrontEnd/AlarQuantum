import { useSanityData } from "@/hooks/useSanityData"
import { featuresData as fallbackData } from "@/data/homeData"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "@/components/theme-provider"

export default function FeaturesSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("features", fallbackData)

  if (!data) return null

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(232,98,42,0.25) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(168,212,230,0.8) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto leading-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)",
            }}
          >
            {data.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base max-w-xl mx-auto"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)",
            }}
          >
            {data.subtext}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.cards?.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <Card
                className="h-full border transition-all duration-300 group"
                style={{
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.65)",
                  borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(26,43,60,0.1)",
                  backdropFilter: "blur(12px)",
                  boxShadow: isDark
                    ? "0 4px 24px rgba(0,0,0,0.3)"
                    : "0 4px 24px rgba(26,43,60,0.06)",
                }}
              >
                <CardContent className="p-6 flex flex-col gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110"
                    style={{
                      background: isDark ? "rgba(232,98,42,0.12)" : "rgba(232,98,42,0.08)",
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "oklch(0.62 0.17 35)",
                    }}
                  >
                    {card.tag}
                  </span>
                  <h3
                    className="text-base font-bold leading-snug"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: isDark ? "rgba(232,246,250,0.5)" : "oklch(0.42 0.04 220)",
                    }}
                  >
                    {card.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <span
                      className="text-xs font-semibold flex items-center gap-1 transition-gap group-hover:gap-2"
                      style={{ color: "oklch(0.62 0.17 35)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Learn more
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}