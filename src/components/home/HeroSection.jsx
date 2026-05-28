import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { heroData } from "@/data/homeData"

function ParticleCanvas({ isDark }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animId
    let W = (canvas.width = canvas.offsetWidth)
    let H = (canvas.height = canvas.offsetHeight)

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      o: Math.random() * 0.5 + 0.15,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const color = isDark ? "232,246,250" : "26,43,60"
      particles.forEach((p) => {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color},${p.o})`
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${color},${0.07 * (1 - dist / 110)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }

    draw()
    const onResize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
    }
  }, [isDark])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function HeroSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <ParticleCanvas isDark={isDark} />

      {/* Glow blobs */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] md:w-[700px] h-[400px] rounded-full opacity-40"
        style={{
          background: isDark
            ? "radial-gradient(ellipse, rgba(232,98,42,0.18) 0%, transparent 70%)"
            : "radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div {...fadeUp(0)} className="w-full flex justify-center mb-6 px-4">
          <Badge
            className="
      max-w-[92vw]
      px-4
      py-2
      text-[10px]
      sm:text-xs
      font-semibold
      tracking-wide
      uppercase
      rounded-2xl
      border
      text-center
      whitespace-normal
      break-all
      leading-relaxed
    "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              background: isDark
                ? "rgba(232,98,42,0.15)"
                : "rgba(232,98,42,0.1)",
              borderColor: "rgba(232,98,42,0.35)",
              color: "oklch(0.62 0.17 35)",
              display: "block",
            }}
          >
            <span className="inline-block mr-2 w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.17_35)] animate-pulse align-middle" />

            {heroData.badge}
          </Badge>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight w-full"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)",
          }}
        >
          {heroData.heading}{" "}
          <span style={{ color: "oklch(0.62 0.17 35)" }}>
            {heroData.headingAccent}
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.2)}
          className="mt-5 text-sm sm:text-base md:text-lg w-full max-w-2xl leading-relaxed"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.35 0.04 220)",
          }}
        >
          {heroData.subtext}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none"
        >
          <Button
            asChild
            className="w-full sm:w-auto px-7 py-5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
            style={{
              background: "oklch(0.62 0.17 35)",
              boxShadow: "0 6px 24px oklch(0.62 0.17 35 / 35%)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <Link to={heroData.ctaPrimary.href}>{heroData.ctaPrimary.label}</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto px-7 py-5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              borderColor: isDark ? "rgba(232,246,250,0.2)" : "rgba(26,43,60,0.25)",
              background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.5)",
              color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)",
            }}
          >
            <Link to={heroData.ctaSecondary.href}>{heroData.ctaSecondary.label}</Link>
          </Button>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4"
          style={{
            border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(26,43,60,0.12)",
            borderRadius: "1rem",
            overflow: "hidden",
            background: isDark ? "rgba(255,255,255,0.08)" : "rgba(26,43,60,0.08)",
            gap: "1px",
          }}
        >
          {heroData.stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-4 px-2"
              style={{
                background: isDark ? "rgba(10,25,40,0.8)" : "rgba(232,246,250,0.85)",
              }}
            >
              <span
                className="text-base sm:text-xl font-bold leading-tight"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "oklch(0.62 0.17 35)",
                }}
              >
                {stat.value}
              </span>
              <span
                className="mt-1 text-center"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: isDark ? "rgba(232,246,250,0.5)" : "oklch(0.42 0.04 220)",
                  fontSize: "10px",
                  lineHeight: "1.3",
                  maxWidth: "80px",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-col items-center gap-1"
        >
          <span
            className="text-[10px] tracking-widest uppercase"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: isDark ? "rgba(232,246,250,0.3)" : "rgba(26,43,60,0.35)",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 5l5 5 5-5"
                stroke={isDark ? "rgba(232,246,250,0.3)" : "rgba(26,43,60,0.35)"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}