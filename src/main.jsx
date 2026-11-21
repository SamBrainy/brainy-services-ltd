import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

import "./index.css"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Services from "./pages/Services"
import ServiceDetail from "./pages/ServiceDetail"
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import Faq from "./pages/Faq"
import Contact from "./pages/Contact"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"
import Refunds from "./pages/Refunds"
import Cookies from "./pages/Cookies"
import NotFound from "./pages/NotFound"
import Pay from "./pages/Pay"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Pay has its own simple header, so it sits outside the shared layout */}
          <Route path="/pay" element={<Pay />} />

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refunds" element={<Refunds />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
