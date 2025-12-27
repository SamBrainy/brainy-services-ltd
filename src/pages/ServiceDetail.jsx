import { useParams } from "react-router-dom"
import { services } from "../data/services"
import { motion } from "framer-motion"

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return <div className="p-10">Service not found</div>
  }

  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-10 py-24 max-w-4xl mx-auto"
    >
      <Icon className="w-14 h-14 text-brainy mb-6" />

      <h1 className="text-4xl font-bold mb-6">
        {service.title}
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        {service.description}
      </p>

      <div className="flex gap-4">
        <button className="bg-brainy text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90">
          Chat With Us
        </button>

        <a
          href="/#contact"
          className="border border-brainy text-brainy px-8 py-4 rounded-xl font-semibold hover:bg-brainy hover:text-white"
        >
          Request a Quote
        </a>
      </div>
    </motion.div>
  )
}
