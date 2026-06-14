import { useSanityData } from "@/hooks/useSanityData"
import { testimonialsData as fallbackData } from "@/data/homeData"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useTheme } from "@/components/theme-provider"

export default function Testimonials() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("testimonials", fallbackData)
  const [active, setActive] = useState(0)

  if (!data) return null

  const items = data.items || []

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20"
        style={{
          background: isDark
            ? "radial-gradient(ellipse, rgba(232,98,42,0.2) 0%, transparent 70%)"
            : "radial-gradient(ellipse, rgba(168,212,230,0.9) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
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

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full rounded-3xl p-8 md:p-12 text-center"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)",
                border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(26,43,60,0.1)",
                backdropFilter: "blur(16px)",
                boxShadow: isDark ? "0 8px 40px rgba(0,0,0,0.3)" : "0 8px 40px rgba(26,43,60,0.08)",
              }}
            >
              <div
                className="text-6xl font-serif leading-none mb-4 opacity-40"
                style={{ color: "oklch(0.62 0.17 35)" }}
              >
                "
              </div>

              <p
                className="text-lg md:text-xl leading-relaxed mb-8"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: isDark ? "rgba(232,246,250,0.85)" : "oklch(0.2 0.04 220)",
                  fontStyle: "italic",
                }}
              >
                {items[active]?.quote}
              </p>

              <div className="flex items-center justify-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback
                    className="text-xs font-bold text-white"
                    style={{ background: "oklch(0.62 0.17 35)" }}
                  >
                    {items[active]?.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p
                    className="text-sm font-bold"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)",
                    }}
                  >
                    {items[active]?.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: isDark ? "rgba(232,246,250,0.45)" : "oklch(0.45 0.04 220)",
                    }}
                  >
                    {items[active]?.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? "28px" : "8px",
                height: "8px",
                background: i === active ? "oklch(0.62 0.17 35)" : isDark ? "rgba(255,255,255,0.2)" : "rgba(26,43,60,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}