import LegalPage from "../components/LegalPage"

const sections = [
  {
    heading: "What are cookies?",
    paragraphs: [
      "Cookies are small files stored on your device by websites. Similar technologies, such as browser storage, work in the same way.",
    ],
  },
  {
    heading: "What we use",
    paragraphs: [
      "We do not use analytics or advertising cookies. The table below lists everything that can be stored on your device.",
    ],
  },
]

const rows = [
  {
    name: "brainy-cookie-consent",
    who: "Us (browser storage)",
    why: "Remembers your cookie choice so we do not keep asking.",
    when: "Always. This is strictly necessary for the cookie notice to work.",
  },
  {
    name: "Crisp chat cookies",
    who: "Crisp",
    why: "Runs the live chat window and remembers your conversation.",
    when: "Only if you click “Allow chat”.",
  },
  {
    name: "Stripe cookies",
    who: "Stripe",
    why: "Fraud prevention and secure payment on Stripe’s own payment page.",
    when: "Only on Stripe’s payment page, which is run by Stripe.",
  },
]

export default function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="The cookies and browser storage used by the Brainy Services Ltd website."
      sections={sections}
    >
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Set by</th>
              <th className="p-3 border">Purpose</th>
              <th className="p-3 border">When</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="align-top">
                <td className="p-3 border font-medium">{r.name}</td>
                <td className="p-3 border">{r.who}</td>
                <td className="p-3 border">{r.why}</td>
                <td className="p-3 border">{r.when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mb-3">Changing your choice</h2>
      <p className="text-gray-700 mb-3">
        You can change your mind at any time using the “Cookie settings” link in the footer of any page.
        You can also delete cookies in your browser settings. Details of how Crisp and Stripe use data are in their own privacy policies.
      </p>
      <button
        className="text-brainy underline"
        onClick={() => window.dispatchEvent(new Event("brainy:open-cookie-settings"))}
      >
        Open cookie settings
      </button>
    </LegalPage>
  )
}
