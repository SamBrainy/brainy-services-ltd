import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"
import { services } from "../data/services"
import { motion } from "framer-motion"

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) {
    return (
      <div className="px-6 md:px-10 py-32 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Service not found
        </h2>

        <p className="text-gray-600 mb-6">
          The service you’re looking for does not exist.
        </p>

        <Link
          to="/"
          className="text-brainy font-semibold underline"
        >
          Go back home
        </Link>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-6 md:px-10 py-28 max-w-4xl mx-auto"
    >
      {/* Icon */}
      <Icon className="w-14 h-14 text-brainy mb-6" />

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">
        {service.title}
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-10">
        {service.description}
      </p>

      {/* Optional Details */}
      {service.details && (
        <ul className="grid gap-4 mb-14">
          {service.details.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700"
            >
              <span className="text-brainy text-xl leading-none">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <button
          className="bg-brainy text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          onClick={() => window.$crisp?.push(["do", "chat:open"])}
        >
          Chat With Us
        </button>

        <Link
          to="/#contact"
          className="border border-brainy text-brainy px-8 py-4 rounded-xl font-semibold hover:bg-brainy hover:text-white transition"
        >
          Request a Quote
        </Link>
      </div>
    </motion.section>
  )
}
