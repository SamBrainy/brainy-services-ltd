import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { availableServices, services } from "../data/services"

export default function Pricing() {
  const comingSoon = services.filter((s) => s.status !== "available")

  return (
    <div className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
      <Helmet>
        <title>Pricing | Brainy Services Ltd</title>
        <meta
          name="description"
          content="How pricing works at Brainy Services Ltd: clear packages, a written quote with scope, price and timeline, and secure card payment."
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-center mb-4">Pricing</h1>
      <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
        Every project is priced before work begins. Tell us what you need and
        we will send a written quote with the scope, price, timeline and number
        of revisions included.
      </p>

      {/* How pricing works */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="font-semibold mb-2">Fixed-scope packages</h2>
          <p className="text-sm text-gray-600">
            Our packages cover the most common jobs, so you know what you are buying.
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="font-semibold mb-2">Custom quotes</h2>
          <p className="text-sm text-gray-600">
            Need something different? We will quote for exactly what you need.
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="font-semibold mb-2">Secure payment</h2>
          <p className="text-sm text-gray-600">
            Pay by card through Stripe once the quote is agreed. Larger projects may be split into a deposit and a final payment.
          </p>
        </div>
      </div>

      {/* Packages */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {availableServices.map((service) => {
          const Icon = service.icon
          return (
            <div key={service.slug} className="border rounded-2xl p-8 flex flex-col">
              <Icon className="w-9 h-9 text-brainy mb-4" />
              <h2 className="text-xl font-bold mb-4">{service.title}</h2>

              <ul className="grid gap-4 mb-6 flex-1">
                {service.packages.map((p) => (
                  <li key={p.name} className="border-b pb-3 last:border-b-0">
                    <div className="flex justify-between gap-4">
                      <span className="font-semibold">{p.name}</span>
                      <span className="text-sm font-semibold text-brainy whitespace-nowrap">
                        {p.from ? `From £${p.from}` : "Custom quote"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{p.summary}</p>
                  </li>
                ))}
              </ul>

              <Link
                to={`/contact?service=${service.slug}`}
                className="text-center bg-brainy text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Request a quote
              </Link>
            </div>
          )
        })}
      </div>

      {/* Coming soon */}
      {comingSoon.length > 0 && (
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-xl font-bold mb-2">Launching soon</h2>
          <p className="text-gray-600 mb-4 text-sm">
            These services are on the way. Get in touch if you would like to hear when they open.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {comingSoon.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-brainy hover:underline">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="text-center">
        <p className="text-gray-600 mb-4">Already agreed a price with us?</p>
        <Link to="/pay" className="text-brainy font-semibold hover:underline">
          Pay online →
        </Link>
      </div>
    </div>
  )
}
