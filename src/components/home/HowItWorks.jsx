import { useSanityData } from "@/hooks/useSanityData"
import { howItWorksData as fallbackData } from "@/data/homeData"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"

export default function HowItWorks() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("howItWorks", fallbackData)

  if (!data) return null

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(232,98,42,0.2) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(200,232,242,1) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)",
            }}
          >
            {data.heading}
          </motion.h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-start gap-8 md:gap-0">
          <div
            className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px"
            style={{
              background: isDark
                ? "linear-gradient(90deg, transparent, rgba(232,98,42,0.4), transparent)"
                : "linear-gradient(90deg, transparent, rgba(232,98,42,0.3), transparent)",
            }}
          />

          {data.steps?.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex-1 flex flex-col items-center text-center px-6 relative"
            >
              <div
                className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 z-10"
                style={{
                  background: isDark ? "rgba(232,98,42,0.12)" : "rgba(232,98,42,0.08)",
                  border: "2px solid rgba(232,98,42,0.4)",
                  boxShadow: "0 0 30px rgba(232,98,42,0.15)",
                }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "oklch(0.62 0.17 35)",
                  }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                className="text-xl font-bold mb-3"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)",
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed max-w-xs"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: isDark ? "rgba(232,246,250,0.5)" : "oklch(0.42 0.04 220)",
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}