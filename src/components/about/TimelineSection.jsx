import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { timelineData } from "@/data/aboutData"

export default function TimelineSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const lineH = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"])

  return (
    <section className="py-28 relative overflow-hidden" ref={ref}>
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] opacity-10"
        style={{ background: isDark ? "radial-gradient(ellipse, rgba(232,98,42,0.5) 0%, transparent 60%)" : "radial-gradient(ellipse, rgba(168,212,230,0.9) 0%, transparent 60%)" }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <Badge className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
              {timelineData.badge}
            </Badge>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
            {timelineData.heading}
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px"
            style={{ background: isDark ? "rgba(255,255,255,0.07)" : "rgba(26,43,60,0.08)" }}>
            <motion.div className="w-full origin-top" style={{ height: lineH, background: "linear-gradient(180deg, oklch(0.62 0.17 35), rgba(232,98,42,0.2))" }} />
          </div>

          <div className="flex flex-col gap-12">
            {timelineData.events.map((event, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}>

                  {/* Content */}
                  <div className={`flex-1 pl-14 sm:pl-0 ${isLeft ? "sm:pr-14 sm:text-right" : "sm:pl-14 sm:text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block rounded-2xl p-5 sm:p-6 text-left"
                      style={{
                        background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)",
                        border: `1px solid ${event.color}30`,
                        backdropFilter: "blur(12px)",
                        boxShadow: `0 4px 24px ${event.color}15`,
                      }}>
                      <span className="text-xs font-bold tracking-widest" style={{ color: event.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {event.year}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold mt-1 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
                        {event.title}
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.42 0.04 220)" }}>
                        {event.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-5 h-5 rounded-full border-2 border-white z-10 flex items-center justify-center"
                      style={{ background: event.color, boxShadow: `0 0 12px ${event.color}60` }}>
                      <motion.div className="w-2 h-2 rounded-full bg-white"
                        animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                    </motion.div>
                  </div>

                  {/* Empty side */}
                  <div className="flex-1 hidden sm:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}