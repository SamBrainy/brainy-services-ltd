import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { pillars, services } from "../data/services"
import StatusBadge from "../components/StatusBadge"

export default function Services() {
  return (
    <div className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
      <Helmet>
        <title>Services | Brainy Services Ltd</title>
        <meta
          name="description"
          content="Branding and design, animation and video, data and spreadsheet services, digital products and support services from Brainy Services Ltd."
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
        Everything is delivered online, with clear scope and pricing. Some
        services are launching soon and are marked as such.
      </p>

      {pillars.map((pillar) => {
        const list = services.filter((s) => s.pillar === pillar.id)
        return (
          <section key={pillar.id} className="mb-16">
            <h2 className="text-2xl font-bold mb-1">{pillar.title}</h2>
            <p className="text-gray-600 mb-6">{pillar.blurb}</p>

            <div className="grid md:grid-cols-2 gap-8">
              {list.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.slug}
                    className="border rounded-2xl p-8 hover:shadow-lg transition"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <Icon className="w-9 h-9 text-brainy" />
                      <StatusBadge status={service.status} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-brainy font-semibold hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
