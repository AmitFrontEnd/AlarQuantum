import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"
import { useTheme } from "@/components/theme-provider"
import { statsData } from "@/data/homeData"

// Animated counter
function Counter({ value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 })

  // Extract number from string like "10+", "99.99%", "256-bit", "3ms"
  const num = parseFloat(value.replace(/[^0-9.]/g, ""))
  const suffix = value.replace(/[0-9.]/g, "")
  const isDecimal = value.includes(".")

  useEffect(() => {
    if (isInView && !isNaN(num)) {
      motionVal.set(0)
      spring.set(num)
    }
  }, [isInView, num, motionVal, spring])

  // For non-numeric values like "256-bit", "24/7" just show as-is
  if (isNaN(num)) {
    return <span ref={ref}>{value}</span>
  }

  return (
    <span ref={ref}>
      <motion.span>
        {isInView ? (
          <AnimatedNum from={0} to={num} isDecimal={isDecimal} />
        ) : "0"}
      </motion.span>
      {suffix}
    </span>
  )
}

function AnimatedNum({ from, to, isDecimal }) {
  const ref = useRef(null)
  const motionVal = useMotionValue(from)
  const spring = useSpring(motionVal, { duration: 1600, bounce: 0 })

  useEffect(() => {
    motionVal.set(from)
    spring.set(to)
  }, [from, to, motionVal, spring])

  useEffect(() => {
    return spring.onChange((v) => {
      if (ref.current) {
        ref.current.textContent = isDecimal ? v.toFixed(2) : Math.round(v).toString()
      }
    })
  }, [spring, isDecimal])

  return <span ref={ref}>{from}</span>
}

export default function StatsSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "rgba(232,98,42,0.04)"
            : "rgba(232,98,42,0.03)",
          borderTop: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(26,43,60,0.08)",
          borderBottom: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(26,43,60,0.08)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px"
          style={{
            background: isDark ? "rgba(255,255,255,0.06)" : "rgba(26,43,60,0.08)",
            borderRadius: "1.5rem",
            overflow: "hidden",
            border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)",
          }}
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{
                background: isDark ? "rgba(10,25,40,0.85)" : "rgba(232,246,250,0.8)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span
                className="text-2xl md:text-3xl font-bold"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "oklch(0.62 0.17 35)",
                }}
              >
                <Counter value={stat.value} />
              </span>
              <span
                className="text-xs mt-2 leading-snug"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: isDark ? "rgba(232,246,250,0.45)" : "oklch(0.42 0.04 220)",
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}