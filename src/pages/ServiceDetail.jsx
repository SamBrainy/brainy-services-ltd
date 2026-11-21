import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { services } from "../data/services"
import StatusBadge from "../components/StatusBadge"
import NotFound from "./NotFound"
import { openChat } from "../lib/chat"

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <NotFound />

  const Icon = service.icon
  const comingSoon = service.status !== "available"
  const others = services.filter((s) => s.pillar === service.pillar && s.slug !== service.slug)

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-6 md:px-10 py-20 max-w-4xl mx-auto"
    >
      <Helmet>
        <title>{service.title} | Brainy Services Ltd</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <Link to="/services" className="text-sm text-gray-500 hover:text-brainy">
        ← All services
      </Link>

      <div className="flex items-center gap-4 mt-6 mb-6">
        <Icon className="w-14 h-14 text-brainy" />
        <StatusBadge status={service.status} />
      </div>

      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
      <p className="text-lg text-gray-600 mb-10">{service.description}</p>

      <h2 className="text-xl font-semibold mb-4">What’s included</h2>
      <ul className="grid gap-3 mb-10">
        {service.details.map((item) => (
          <li key={item} className="flex items-start gap-3 text-gray-700">
            <span className="text-brainy text-xl leading-none">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {service.idealFor && (
        <p className="mb-6 text-gray-700">
          <span className="font-semibold">Ideal for: </span>
          {service.idealFor}
        </p>
      )}

      {service.note && (
        <p className="mb-10 bg-gray-50 border rounded-xl p-4 text-sm text-gray-700">
          {service.note}
        </p>
      )}

      {service.packages && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Packages</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.packages.map((p) => (
              <div key={p.name} className="border rounded-xl p-5">
                <h3 className="font-semibold mb-1">{p.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{p.summary}</p>
                <p className="text-sm font-semibold text-brainy">
                  {p.from ? `From £${p.from}` : "Custom quote"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 mb-16">
        <Link
          to={`/contact?service=${service.slug}`}
          className="bg-brainy text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          {comingSoon ? "Ask to be notified" : "Request a Quote"}
        </Link>
        <button
          className="border border-brainy text-brainy px-8 py-4 rounded-xl font-semibold hover:bg-brainy hover:text-white transition"
          onClick={openChat}
        >
          Chat With Us
        </button>
      </div>

      {others.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Related services</h2>
          <ul className="grid gap-2">
            {others.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-brainy hover:underline">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.section>
  )
}
