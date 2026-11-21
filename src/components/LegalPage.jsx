import { Helmet } from "react-helmet-async"
import { legal } from "../data/legal"

// Shared layout for Terms, Privacy, Refunds and Cookies pages.
// sections: [{ heading, paragraphs: [string], items: [string] }]
export default function LegalPage({ title, description, sections, intro, children }) {
  return (
    <div className="px-6 md:px-10 py-20 max-w-3xl mx-auto">
      <Helmet>
        <title>{title} | Brainy Services Ltd</title>
        <meta name="description" content={description} />
      </Helmet>

      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {legal.lastUpdated}</p>
      {intro && <p className="text-gray-700 mb-8">{intro}</p>}

      {sections.map((s) => (
        <section key={s.heading} className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{s.heading}</h2>
          {s.paragraphs?.map((p, i) => (
            <p key={i} className="text-gray-700 mb-3 leading-relaxed">
              {p}
            </p>
          ))}
          {s.items && (
            <ul className="list-disc pl-6 grid gap-1 text-gray-700">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {s.after?.map((p, i) => (
            <p key={"a" + i} className="text-gray-700 mt-3 leading-relaxed">
              {p}
            </p>
          ))}
        </section>
      ))}
      {children}
    </div>
  )
}
