import { useSanityData } from "@/hooks/useSanityData"
import { ctaBannerData as fallbackData } from "@/data/homeData"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export default function CtaBanner() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const data = useSanityData("ctaBanner", fallbackData)

  if (!data) return null

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden px-5 py-12 sm:px-8 sm:py-16 md:px-16 text-center"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(232,98,42,0.2) 0%, rgba(10,25,40,0.9) 50%, rgba(232,98,42,0.1) 100%)"
              : "linear-gradient(135deg, rgba(232,98,42,0.12) 0%, rgba(200,232,242,0.8) 50%, rgba(232,98,42,0.08) 100%)",
            border: isDark ? "1px solid rgba(232,98,42,0.25)" : "1px solid rgba(232,98,42,0.2)",
            backdropFilter: "blur(20px)",
            boxShadow: isDark
              ? "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
              : "0 20px 60px rgba(26,43,60,0.12)",
          }}
        >
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-40"
            style={{
              background: "radial-gradient(ellipse, rgba(232,98,42,0.35) 0%, transparent 70%)",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(232,98,42,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(232,98,42,0.5) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 px-2">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)",
                wordBreak: "break-word",
              }}
            >
              {data.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-sm sm:text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.35 0.04 220)",
              }}
            >
              {data.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-sm sm:max-w-none mx-auto"
            >
              <Button
                asChild
                className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "oklch(0.62 0.17 35)",
                  boxShadow: "0 8px 30px oklch(0.62 0.17 35 / 45%)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                <Link to={data.ctaPrimaryHref}>{data.ctaPrimaryLabel}</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  borderColor: isDark ? "rgba(232,246,250,0.2)" : "rgba(26,43,60,0.25)",
                  background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.6)",
                  color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Link to={data.ctaSecondaryHref}>{data.ctaSecondaryLabel}</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}