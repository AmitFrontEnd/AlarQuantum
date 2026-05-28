import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { contactInfoData, inquiryTypes } from "@/data/contactData"

function InputField({ label, type = "text", placeholder, value, onChange, isDark, required }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.38 0.04 220)" }}>
        {label} {required && <span style={{ color: "oklch(0.62 0.17 35)" }}>*</span>}
      </label>
      <div className="relative">
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            background: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.8)",
            border: focused ? "1.5px solid oklch(0.62 0.17 35)" : isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(26,43,60,0.15)",
            color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)",
            boxShadow: focused ? "0 0 0 3px oklch(0.62 0.17 35 / 12%)" : "none",
          }} />
        {/* Focus indicator line */}
        <motion.div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
          style={{ background: "oklch(0.62 0.17 35)" }}
          animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
          transition={{ duration: 0.2 }} />
      </div>
    </div>
  )
}

function TextAreaField({ label, placeholder, value, onChange, isDark, required }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.38 0.04 220)" }}>
        {label} {required && <span style={{ color: "oklch(0.62 0.17 35)" }}>*</span>}
      </label>
      <textarea rows={5} placeholder={placeholder} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          background: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.8)",
          border: focused ? "1.5px solid oklch(0.62 0.17 35)" : isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(26,43,60,0.15)",
          color: isDark ? "#e8f6fa" : "oklch(0.15 0.04 220)",
          boxShadow: focused ? "0 0 0 3px oklch(0.62 0.17 35 / 12%)" : "none",
        }} />
    </div>
  )
}

export default function ContactForm() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", org: "", inquiry: "", message: "" })

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1800))
    setLoading(false)
    setSubmitted(true)
  }

  const card = {
    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)",
    border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(26,43,60,0.1)",
    backdropFilter: "blur(16px)",
  }

  return (
    <section className="pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Contact info sidebar */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 flex flex-col gap-5">

            <div>
              <Badge className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: isDark ? "rgba(232,98,42,0.15)" : "rgba(232,98,42,0.1)", borderColor: "rgba(232,98,42,0.3)", color: "oklch(0.62 0.17 35)" }}>
                Contact Details
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
                Reach Us Directly
              </h2>
              <p className="text-sm leading-relaxed"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.38 0.04 220)" }}>
                Our quantum security team is available Monday to Saturday. We respond to all inquiries within 24 hours.
              </p>
            </div>

            {contactInfoData.map((info, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-200"
                style={card}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: `${info.colorRaw}0.12)` }}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider uppercase mb-0.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: info.color }}>
                    {info.label}
                  </p>
                  <p className="text-xs sm:text-sm leading-snug"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.75)" : "oklch(0.25 0.04 220)" }}>
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { label: "LinkedIn", icon: "in" },
                { label: "Twitter", icon: "𝕏" },
                { label: "GitHub", icon: "gh" },
              ].map((s, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.12, y: -2 }} whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all"
                  style={{ background: isDark ? "rgba(255,255,255,0.07)" : "rgba(26,43,60,0.07)", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.38 0.04 220)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(0.62 0.17 35)"; e.currentTarget.style.color = "white" }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.07)" : "rgba(26,43,60,0.07)"; e.currentTarget.style.color = isDark ? "rgba(232,246,250,0.6)" : "oklch(0.38 0.04 220)" }}>
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3 rounded-3xl p-6 sm:p-8" style={card}>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex flex-col gap-5">
                  <div>
                    <h3 className="text-lg font-bold mb-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
                      Send Us a Message
                    </h3>
                    <p className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.4)" : "oklch(0.5 0.04 220)" }}>
                      All fields marked <span style={{ color: "oklch(0.62 0.17 35)" }}>*</span> are required
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Full Name" placeholder="Dr. Arjun Mehta" value={form.name} onChange={set("name")} isDark={isDark} required />
                    <InputField label="Work Email" type="email" placeholder="arjun@company.in" value={form.email} onChange={set("email")} isDark={isDark} required />
                  </div>
                  <InputField label="Organization" placeholder="Company / Institution" value={form.org} onChange={set("org")} isDark={isDark} />

                  {/* Inquiry type selector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.6)" : "oklch(0.38 0.04 220)" }}>
                      Inquiry Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((type) => (
                        <motion.button key={type.value} onClick={() => setForm({ ...form, inquiry: type.value })}
                          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                          className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            background: form.inquiry === type.value ? "oklch(0.62 0.17 35)" : isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.8)",
                            color: form.inquiry === type.value ? "white" : isDark ? "rgba(232,246,250,0.6)" : "oklch(0.38 0.04 220)",
                            border: form.inquiry === type.value ? "none" : isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(26,43,60,0.12)",
                            boxShadow: form.inquiry === type.value ? "0 4px 12px oklch(0.62 0.17 35 / 30%)" : "none",
                          }}>
                          {type.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <TextAreaField label="Message" placeholder="Describe your security challenge, deployment requirements, or research interest..." value={form.message} onChange={set("message")} isDark={isDark} required />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button onClick={handleSubmit} disabled={loading || !form.name || !form.email || !form.message}
                      className="w-full py-5 rounded-xl text-sm font-bold text-white transition-all"
                      style={{
                        background: loading ? "oklch(0.5 0.1 35)" : "oklch(0.62 0.17 35)",
                        boxShadow: "0 8px 24px oklch(0.62 0.17 35 / 35%)",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        opacity: (!form.name || !form.email || !form.message) ? 0.5 : 1,
                      }}>
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent"
                            animate={{ rotate: 360 }} transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }} />
                          Sending...
                        </span>
                      ) : "Send Message →"}
                    </Button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "backOut" }}
                  className="flex flex-col items-center justify-center gap-6 py-16 text-center">
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                    style={{ background: "oklch(0.62 0.17 35 / 15%)", border: "2px solid oklch(0.62 0.17 35 / 40%)" }}>
                    ✅
                  </motion.div>
                  <div>
                    <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "#e8f6fa" : "oklch(0.12 0.04 220)" }}>
                      Message Received.
                    </motion.h3>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                      className="text-sm leading-relaxed max-w-xs"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? "rgba(232,246,250,0.55)" : "oklch(0.42 0.04 220)" }}>
                      Our quantum security team will respond within 24 hours. Check your inbox at <span style={{ color: "oklch(0.62 0.17 35)", fontWeight: 600 }}>{form.email}</span>.
                    </motion.p>
                  </div>
                  <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", org: "", inquiry: "", message: "" }) }}
                    className="text-xs font-semibold"
                    style={{ color: "oklch(0.62 0.17 35)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Send another message →
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}