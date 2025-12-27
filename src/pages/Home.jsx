import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { services } from "../data/services"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b"
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Brainy Services Ltd Logo" className="h-8 md:h-10" />
            <span className="text-xl font-bold">Brainy Services Ltd</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#services" className="hover:text-brainy">Services</a>
            <a href="#contact" className="hover:text-brainy">Contact</a>
          </nav>

          <button
            className="hidden md:block bg-brainy text-white px-6 py-2 rounded-xl font-semibold"
            onClick={() => window.$crisp?.push(["do", "chat:open"])}
          >
            Chat With Us
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden">
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              exit={{ y: -300 }}
              className="fixed inset-x-0 top-0 bg-white p-6 shadow-xl z-50"
            >
              <button
                className="mb-6 text-xl"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>

              <nav className="flex flex-col gap-6 text-lg">
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                <button
                  className="bg-brainy text-white py-3 rounded-xl"
                  onClick={() => {
                    setMenuOpen(false)
                    window.$crisp?.push(["do", "chat:open"])
                  }}
                >
                  Chat With Us
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ================= HERO ================= */}
      <section className="px-6 md:px-10 py-28 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold mb-6">
            Your Idea, <span className="text-brainy">Amplified</span>.<br />
            Your Future, <span className="text-brainy">Assured</span>.
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            We deliver premium solutions in data analysis, cyber security,
            animation, branding, and virtual assistance.
          </p>

          <div className="flex gap-4">
            <button
              className="bg-brainy text-white px-8 py-4 rounded-xl"
              onClick={() => window.$crisp?.push(["do", "chat:open"])}
            >
              Chat With Us
            </button>
            <a
              href="#contact"
              className="border border-brainy text-brainy px-8 py-4 rounded-xl"
            >
              Request a Quote
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="bg-gray-50 px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
                  >
                    <Icon className="w-10 h-10 text-brainy mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Let’s Work Together
        </h2>

        <form
          action="https://formsubmit.co/brainyservices00@gmail.com"
          method="POST"
          className="max-w-2xl mx-auto grid gap-6"
        >
          <input type="hidden" name="_captcha" value="false" />

          <input name="name" required placeholder="Your Name" className="border p-4 rounded-xl" />
          <input name="email" required placeholder="Your Email" className="border p-4 rounded-xl" />
          <textarea name="message" rows="5" required placeholder="Tell us about your project" className="border p-4 rounded-xl" />

          <button className="bg-black text-white py-4 rounded-xl font-semibold">
            Submit Request
          </button>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-8 text-gray-500">
        © {new Date().getFullYear()} Brainy Services Ltd. All rights reserved.
      </footer>
    </div>
  )
}
