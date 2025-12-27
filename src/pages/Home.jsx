import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import logo from "../assets/logo.png"

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
            <img
              src={logo}
              alt="Brainy Services Ltd Logo"
              className="h-8 md:h-10 w-auto"
            />
            <span className="text-xl font-bold tracking-wide">
              Brainy Services Ltd
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#services" className="hover:text-brainy transition">
              Services
            </a>
            <a href="#contact" className="hover:text-brainy transition">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <button
            className="hidden md:block bg-brainy text-white px-6 py-2 rounded-xl font-semibold hover:opacity-90"
            onClick={() => window.$crisp?.push(["do", "chat:open"])}
          >
            Chat With Us
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              exit={{ y: -300 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 bg-white z-50 px-6 py-8 shadow-xl"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-lg font-medium">
                <a href="#services" onClick={() => setMenuOpen(false)}>
                  Services
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>

                <button
                  className="mt-4 bg-brainy text-white py-3 rounded-xl font-semibold"
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
      <section className="px-6 md:px-10 py-28 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Your Idea, <span className="text-brainy">Amplified</span>.<br />
            Your Future, <span className="text-brainy">Assured</span>.
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Brainy Services Ltd delivers premium solutions in data analysis,
            cyber security, animation, branding, and virtual assistance —
            helping businesses grow with confidence.
          </p>

          <div className="flex gap-4">
            <button
              className="bg-brainy text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90"
              onClick={() => window.$crisp?.push(["do", "chat:open"])}
            >
              Chat With Us
            </button>

            <a
              href="#contact"
              className="border border-brainy text-brainy px-8 py-4 rounded-xl font-semibold hover:bg-brainy hover:text-white transition"
            >
              Request a Quote
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="bg-gray-50 px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Data Analysis",
              "Cyber Security",
              "Motion Graphics",
              "Advert Animations",
              "2D Animation & Illustration",
              "Logo Design & Animation",
              "Explainer Videos",
              "Product Animation",
              "Virtual Assistance",
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-8 rounded-2xl shadow-md text-center text-lg font-semibold hover:shadow-xl transition"
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Let’s Work Together
          </h2>

          <form
            action="https://formsubmit.co/brainyservices00@gmail.com"
            method="POST"
            className="max-w-2xl mx-auto grid gap-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Website Enquiry - Brainy Services Ltd"
            />

            <input
              type="text"
              name="name"
              required
              className="border p-4 rounded-xl"
              placeholder="Your Name"
            />

            <input
              type="email"
              name="email"
              required
              className="border p-4 rounded-xl"
              placeholder="Your Email"
            />

            <textarea
              name="message"
              required
              className="border p-4 rounded-xl"
              rows="5"
              placeholder="Tell us about your project"
            />

            <button
              type="submit"
              className="bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-8 text-gray-500">
        © {new Date().getFullYear()} Brainy Services Ltd. All rights reserved.
      </footer>
    </div>
  )
}
