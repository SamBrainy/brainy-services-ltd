import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

const faqs = [
  {
    q: "What does Brainy Services Ltd do?",
    a: "We are a UK online digital services company. We offer data and spreadsheet services, branding and graphic design, and animation and video editing, with digital products and support services launching soon.",
  },
  {
    q: "How does a project work?",
    a: "You tell us what you need, we send a written quote with the scope, price, timeline and number of revisions, you approve it, we create the work, and you review it and request the agreed revisions before we deliver the final files.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the service and the size of the job. Your quote will include a delivery estimate. Delays in sending us materials can move the date.",
  },
  {
    q: "What if I want changes?",
    a: "Each package includes a set number of revisions, shown in your quote. Extra revisions or work outside the agreed scope can be quoted separately.",
  },
  {
    q: "How do I pay?",
    a: "You can pay by card through our secure Stripe payment page, or by invoice. Larger projects may be split into a deposit and a final payment. We never see or store your card details.",
  },
  {
    q: "Do you use AI?",
    a: "Sometimes. We use AI tools to speed up parts of some services, and a person reviews the work before it is delivered. We tell you when AI is part of how your service is delivered, and you can always ask us how it was used.",
  },
  {
    q: "What data should I send you?",
    a: "Only what is needed for the job. For data analysis and spreadsheet work, please remove or anonymise personal details such as names, emails and phone numbers unless they are essential.",
  },
  {
    q: "Which services are available now?",
    a: "Branding and graphic design, animation and video editing, and data analysis and spreadsheets are open now. Our shop, learning products, audio, translation, social media and training services are marked “Coming soon” and you can ask to be notified.",
  },
  {
    q: "Do you work with clients outside the UK?",
    a: "Yes. Everything is delivered online, so we can work with clients anywhere. Prices are in pounds sterling.",
  },
  {
    q: "Can you help with legal, tax, medical or investment advice?",
    a: "No. We do not provide regulated advice. Our data analysis and reports should not be used as a substitute for professional financial, legal or tax advice.",
  },
]

export default function Faq() {
  return (
    <div className="px-6 md:px-10 py-20 max-w-3xl mx-auto">
      <Helmet>
        <title>FAQ | Brainy Services Ltd</title>
        <meta
          name="description"
          content="Answers to common questions about working with Brainy Services Ltd: how projects work, revisions, payment, AI use and data."
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-center mb-4">Frequently asked questions</h1>
      <p className="text-center text-gray-600 mb-12">
        Can’t find your answer? <Link to="/contact" className="text-brainy underline">Get in touch</Link>.
      </p>

      <div className="grid gap-3">
        {faqs.map((item) => (
          <details key={item.q} className="group border rounded-xl p-5 open:shadow-sm">
            <summary className="cursor-pointer font-semibold list-none flex justify-between gap-4">
              <span>{item.q}</span>
              <span className="text-brainy transition group-open:rotate-45 text-xl leading-none">+</span>
            </summary>
            <p className="text-gray-600 mt-3">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
