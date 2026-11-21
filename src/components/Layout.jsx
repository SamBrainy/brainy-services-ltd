import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import logo from "../assets/logo.png"
import { company } from "../data/company"
import { openChat } from "../lib/chat"
import CookieBanner from "./CookieBanner"

const navItems = [
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
  { to: "/pay", label: "Pay Online" },
]

function navClass({ isActive }) {
  return isActive
    ? "text-brainy font-semibold"
    : "hover:text-brainy transition"
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()

  // Scroll to a section if the link has #something, otherwise to the top
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" })
      }, 50)
      return () => clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  // Stop the page scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  // Close the mobile menu with the Escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img src={logo} alt="Brainy Services Ltd logo" className="h-8 md:h-10" />
            <span className="text-xl font-bold">Brainy Services Ltd</span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden lg:flex gap-7 font-medium">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="hidden lg:block bg-brainy text-white px-6 py-2 rounded-xl font-semibold hover:opacity-90 transition"
            onClick={openChat}
          >
            Chat With Us
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-2"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-white p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex justify-end mb-6">
              <button
                aria-label="Close menu"
                className="p-2 -mr-2"
                onClick={closeMenu}
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-col gap-6 text-xl">
              <Link to="/" onClick={closeMenu}>Home</Link>
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} onClick={closeMenu}>
                  {item.label}
                </Link>
              ))}
              <button
                className="bg-brainy text-white py-3 rounded-xl font-semibold"
                onClick={() => {
                  closeMenu()
                  openChat()
                }}
              >
                Chat With Us
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= PAGE CONTENT ================= */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="" className="h-8" />
              <span className="text-lg font-bold">{company.name}</span>
            </div>
            <p className="text-brainy font-semibold mb-2">{company.slogan}</p>
            <p className="text-sm text-gray-600">
              A UK online digital services company. We work with clients anywhere.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Explore</h2>
            <ul className="grid gap-2 text-sm text-gray-600">
              <li><Link to="/services" className="hover:text-brainy">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-brainy">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-brainy">About us</Link></li>
              <li><Link to="/faq" className="hover:text-brainy">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-brainy">Contact</Link></li>
              <li><Link to="/pay" className="hover:text-brainy">Pay online</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Legal</h2>
            <ul className="grid gap-2 text-sm text-gray-600">
              <li><Link to="/terms" className="hover:text-brainy">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-brainy">Privacy Policy</Link></li>
              <li><Link to="/refunds" className="hover:text-brainy">Refunds and Cancellation</Link></li>
              <li><Link to="/cookies" className="hover:text-brainy">Cookie Policy</Link></li>
              <li>
                <button
                  className="hover:text-brainy text-left"
                  onClick={() => window.dispatchEvent(new Event("brainy:open-cookie-settings"))}
                >
                  Cookie settings
                </button>
              </li>
            </ul>
          </div>

          <div className="text-sm text-gray-600 grid gap-1 content-start">
            <h2 className="font-semibold text-gray-900 mb-2">Company details</h2>
            <p>{company.name}</p>
            <p>Registered with Companies House, United Kingdom</p>
            {company.number && <p>Company number: {company.number}</p>}
            {company.registeredAddress && <p>Registered office: {company.registeredAddress}</p>}
            {company.email && (
              <p>
                Email:{" "}
                <a href={`mailto:${company.email}`} className="hover:text-brainy underline">
                  {company.email}
                </a>
              </p>
            )}
          </div>
        </div>

        <div className="border-t text-center py-5 text-sm text-gray-500">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </footer>

      <CookieBanner />
    </div>
  )
}
