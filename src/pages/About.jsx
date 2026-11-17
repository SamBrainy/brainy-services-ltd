import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { company } from "../data/company"

const values = [
  { title: "Clarity", text: "Plain language, clear scope, clear prices." },
  { title: "Quality", text: "Nothing is delivered without a human check." },
  { title: "Honesty", text: "We say when AI is part of the process and we never overpromise." },
  { title: "Originality", text: "We create original work and respect other people’s intellectual property." },
  { title: "Respect for data", text: "We collect and keep only what we need." },
  { title: "Reliability", text: "We deliver what we agreed, when we agreed." },
]

export default function About() {
  return (
    <div className="px-6 md:px-10 py-20 max-w-4xl mx-auto">
      <Helmet>
        <title>About | Brainy Services Ltd</title>
        <meta
          name="description"
          content="Brainy Services Ltd is a UK-registered online digital services company helping businesses and creators turn ideas into polished results."
        />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">About Brainy Services Ltd</h1>

      <p className="text-lg text-gray-600 mb-6">
        Brainy Services Ltd is a UK-registered, fully online digital services
        company. We help individuals, creators and small businesses turn ideas
        into polished results through data and spreadsheet services, branding
        and design, animation and video, and a growing range of digital
        products and support services.
      </p>
      <p className="text-gray-600 mb-12">
        We work remotely with clients anywhere. We sell our own services and
        products directly, and we use modern tools, including AI, to deliver
        quality work quickly and at fair prices. Every project is clear on
        scope, price and timeline, and is checked by a person before it
        reaches you.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-14">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-brainy mb-2">Our mission</h2>
          <p className="text-gray-700">
            To give individuals and small businesses affordable, reliable access
            to professional digital services and products, delivered
            transparently, on time and to a high standard.
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-brainy mb-2">Our vision</h2>
          <p className="text-gray-700">
            A world where anyone with a good idea can access professional-quality
            digital help, quickly and affordably, wherever they are.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">What we stand for</h2>
      <div className="grid sm:grid-cols-2 gap-6 mb-14">
        {values.map((v) => (
          <div key={v.title} className="border rounded-xl p-5">
            <h3 className="font-semibold mb-1">{v.title}</h3>
            <p className="text-sm text-gray-600">{v.text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">How we use AI</h2>
      <p className="text-gray-600 mb-14">
        AI is a tool, not a replacement for judgement. We tell you when AI is
        part of how a service is delivered, a person reviews the work before it
        is delivered, and we only use tools whose licences allow commercial use.
        We never imitate real people’s voices without written permission.
      </p>

      <div className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-xl font-bold mb-3">Company details</h2>
        <ul className="grid gap-1 text-gray-700">
          <li>{company.name}</li>
          <li>Registered with Companies House, United Kingdom</li>
          {company.number && <li>Company number: {company.number}</li>}
          {company.registeredAddress && <li>Registered office: {company.registeredAddress}</li>}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/contact"
          className="bg-brainy text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Work with us
        </Link>
        <Link
          to="/services"
          className="border border-brainy text-brainy px-8 py-4 rounded-xl font-semibold hover:bg-brainy hover:text-white transition"
        >
          See our services
        </Link>
      </div>
    </div>
  )
}
