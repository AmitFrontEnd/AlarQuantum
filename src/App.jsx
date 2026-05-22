import { Button } from "@/components/ui/button"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button>AlarQuantum</Button>
      <Outlet/>
    </div>
  )
}

export default App