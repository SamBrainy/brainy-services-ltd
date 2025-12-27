import { Link } from "react-router-dom"
import { services } from "../data/services"

export default function Services() {
  return (
    <div className="min-h-screen px-10 py-24 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-14">
        Our Services
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {services.map(service => (
          <div
            key={service.slug}
            className="border rounded-2xl p-8 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold mb-4">
              {service.title}
            </h2>

            <p className="text-gray-600 mb-6">
              {service.description}
            </p>

            <Link
              to={`/services/${service.slug}`}
              className="text-brainy font-semibold hover:underline"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
