import { Outlet } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ParticleBackground from "@/components/ParticleBackground"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {/* Global particle canvas — fixed, behind everything */}
      <ParticleBackground />

      <div className="relative min-h-screen flex flex-col" style={{ zIndex: 1 }}>
        <Header />
        <main className="pt-16 flex-1">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App