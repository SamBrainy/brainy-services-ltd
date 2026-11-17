import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Palette, BarChart3, ShoppingBag, LifeBuoy } from "lucide-react"
import { pillars, services } from "../data/services"
import ContactForm from "../components/ContactForm"
import { openChat } from "../lib/chat"

const pillarIcons = {
  creative: Palette,
  data: BarChart3,
  shop: ShoppingBag,
  support: LifeBuoy,
}

const steps = [
  { title: "Tell us your idea", text: "Send a message or chat with us about what you need." },
  { title: "Get a clear quote", text: "We confirm the scope, price, timeline and number of revisions in writing." },
  { title: "We create it", text: "We build your work and a person checks it before it reaches you." },
  { title: "Review and revise", text: "You review the result, request the agreed revisions, and we deliver the final files." },
]

const reasons = [
  { title: "Clear scope and pricing", text: "You know what you are getting, when, and for how much, before work begins." },
  { title: "Human-checked work", text: "We use modern tools, including AI, and a person reviews everything before delivery." },
  { title: "Honest about AI", text: "We tell you when AI is part of how a service is delivered." },
  { title: "Built for small teams", text: "Fair prices and friendly support for businesses and creators of any size." },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Brainy Services Ltd | Your Idea, Amplified.</title>
        <meta
          name="description"
          content="Brainy Services Ltd is a UK online digital services company offering data and spreadsheet services, branding and design, animation and video, and digital products."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="px-6 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Your Idea, <span className="text-brainy">Amplified</span>.
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            We help businesses and creators with data and spreadsheets,
            branding and design, animation and video, and ready-made digital
            products.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="bg-brainy text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="border border-brainy text-brainy px-8 py-4 rounded-xl font-semibold hover:bg-brainy hover:text-white transition"
            >
              Request a Quote
            </Link>
            <button
              onClick={openChat}
              className="px-8 py-4 rounded-xl font-semibold text-gray-700 hover:text-brainy transition"
            >
              Chat With Us
            </button>
          </div>
        </motion.div>
      </section>

      {/* ================= PILLARS ================= */}
      <section className="bg-gray-50 px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What we do</h2>
          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            Four areas, one small team. Pick what you need today and add more as you grow.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillarIcons[pillar.id]
              const list = services.filter((s) => s.pillar === pillar.id)
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white p-8 rounded-2xl shadow-md"
                >
                  <Icon className="w-10 h-10 text-brainy mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{pillar.blurb}</p>
                  <ul className="grid gap-1 text-sm">
                    {list.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="text-brainy hover:underline"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="text-brainy font-semibold hover:underline">
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">How it works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title}>
              <div className="w-10 h-10 rounded-full bg-brainy text-white font-bold flex items-center justify-center mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY BRAINY ================= */}
      <section className="bg-gray-50 px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Why Brainy Services</h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Let’s work together</h2>
        <p className="text-center text-gray-600 mb-10">
          Tell us about your idea and we will reply with a clear next step.
        </p>
        <ContactForm />
      </section>
    </>
  )
}
