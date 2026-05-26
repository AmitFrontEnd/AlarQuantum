import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { sectorsData } from "@/data/solutionsData"

function SectorCard({ sector, isDark }) {
  const [activeTab, setActiveTab] = useState("problems")

  return (
    <section id={sector.id} className="py-20 relative overflow-hidden scroll-mt-20">
      {/* bg glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-[350px] h-[350px] rounded-full opacity-10"
        style={{ background: `radial-gradient(circle, ${sector.colorRaw}0.4) 0%, transparent 70%)` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Badge className="mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: `${sector.colorRaw}0.1)`, borderColor: `${sector.colorRaw}0.3)`, color: sector.color }}>
              {sector.badge}
            </Badge>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{sector.icon}</span>
              <h2 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
                {sector.sector}
              </h2>
            </div>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight max-w-2xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: sector.color }}>
              {sector.headline}
            </h3>
            <p className="mt-3 text-sm leading-relaxed max-w-2xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}>
              {sector.subtext}
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {[
            { key: "problems", label: "Problem → Solution" },
            { key: "deployments", label: "Deployments" },
            { key: "compliance", label: "Compliance" },
          ].map((tab) => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: activeTab === tab.key ? sector.color : isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.7)",
                color: activeTab === tab.key ? "white" : isDark ? "rgba(232,246,250,0.6)" : "oklch(0.35 0.04 220)",
                border: activeTab === tab.key ? "none" : isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(26,43,60,0.1)",
              }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === "problems" && (
            <motion.div key="problems" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sector.problems.map((item, i) => (
                <div key={i} className="rounded-2xl p-5 flex flex-col gap-4"
                  style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)", border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)", backdropFilter: "blur(12px)" }}>
                  {/* Problem */}
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(239,68,68,0.15)", color: "rgb(239,68,68)" }}>✗</div>
                    <p className="text-xs sm:text-sm leading-relaxed"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.35 0.04 220)" }}>
                      {item.problem}
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="flex items-center gap-2 px-2">
                    <div className="h-px flex-1" style={{ background: isDark ? "rgba(255,255,255,0.07)" : "rgba(26,43,60,0.1)" }} />
                    <span style={{ color: sector.color, fontSize: "10px" }}>▼</span>
                    <div className="h-px flex-1" style={{ background: isDark ? "rgba(255,255,255,0.07)" : "rgba(26,43,60,0.1)" }} />
                  </div>
                  {/* Solution */}
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5"
                      style={{ background: `${sector.colorRaw}0.15)`, color: sector.color }}>✓</div>
                    <p className="text-xs sm:text-sm font-semibold leading-relaxed"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.18 0.04 220)" }}>
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "deployments" && (
            <motion.div key="deployments" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sector.deployments.map((dep, i) => (
                <div key={i} className="rounded-2xl p-5 flex items-center gap-4"
                  style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)", border: `1px solid ${sector.colorRaw}0.2)`, backdropFilter: "blur(12px)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${sector.colorRaw}0.12)` }}>
                    <span style={{ color: sector.color, fontSize: "18px" }}>⚙️</span>
                  </div>
                  <span className="text-sm font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>
                    {dep}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "compliance" && (
            <motion.div key="compliance" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sector.compliance.map((comp, i) => (
                <div key={i} className="rounded-2xl p-5 flex items-center gap-4"
                  style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)", border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,43,60,0.1)", backdropFilter: "blur(12px)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: `${sector.colorRaw}0.1)` }}>✅</div>
                  <span className="text-sm font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)" }}>
                    {comp}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Divider */}
        <div className="mt-16 h-px w-full" style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(26,43,60,0.08)" }} />
      </div>
    </section>
  )
}

export default function SectorSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <>
      {sectorsData.map((sector) => (
        <motion.div key={sector.id}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}>
          <SectorCard sector={sector} isDark={isDark} />
        </motion.div>
      ))}
    </>
  )
}