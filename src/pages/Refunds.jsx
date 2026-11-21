import { Link } from "react-router-dom"
import LegalPage from "../components/LegalPage"
import { howToContact } from "../data/legal"

const sections = [
  {
    heading: "Services (custom work)",
    paragraphs: [
      "If you are a consumer buying online, you generally have 14 days from the date the contract is made to cancel a service. If you ask us to start work during that period, you pay for the work already done up to the point you cancel.",
      "Business customers: cancellation terms are set out in your written quote.",
      "If work is faulty or not as described, we will correct it. If we cannot, we will refund the relevant part.",
    ],
  },
  {
    heading: "Digital products (downloads and courses)",
    paragraphs: [
      "Digital products are supplied immediately. When you complete your purchase and start the download or access, you agree we begin supply straight away and you lose your right to cancel once supply has started.",
      "If a digital product is faulty, does not work or is not as described, contact us and we will fix it, replace it or refund you.",
    ],
  },
  {
    heading: "Deposits and staged payments",
    paragraphs: [
      "For larger projects we may take a deposit or split payment into stages. Your quote will show what is due and when. Refunds of a deposit take into account any work already carried out.",
    ],
  },
  {
    heading: "How to ask for a refund or cancel",
    paragraphs: [
      `Please ${howToContact()}, include the name you used to order and the payment reference, and tell us what went wrong. Approved refunds go back to the original payment method.`,
    ],
  },
  {
    heading: "Your legal rights",
    paragraphs: [
      "Nothing here affects your statutory rights. For full details see our Terms of Service.",
    ],
  },
]

export default function Refunds() {
  return (
    <LegalPage
      title="Refunds and Cancellation"
      description="How cancellations and refunds work for services and digital products from Brainy Services Ltd."
      sections={sections}
    >
      <p className="text-gray-700">
        Read our full <Link to="/terms" className="text-brainy underline">Terms of Service</Link>.
      </p>
    </LegalPage>
  )
}
