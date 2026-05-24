import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <Outlet />
        </main>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;