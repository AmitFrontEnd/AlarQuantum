import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Technology from "./pages/Technology.jsx";
import Solutions from "./pages/Solutions.jsx";
import Academy from "./pages/Academy.jsx";
import Research from "./pages/Research.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
      {
        path: "/solutions",
        element: <Solutions />,
      },
      {
        path: "/academy",
        element: <Academy />,
      },
      {
        path: "/research",
        element: <Research/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);