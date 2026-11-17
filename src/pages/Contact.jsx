import { Helmet } from "react-helmet-async"
import ContactForm from "../components/ContactForm"
import { openChat } from "../lib/chat"

export default function Contact() {
  return (
    <div className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
      <Helmet>
        <title>Contact | Brainy Services Ltd</title>
        <meta
          name="description"
          content="Contact Brainy Services Ltd to request a quote or ask about our services."
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-center mb-4">Contact us</h1>
      <p className="text-center text-gray-600 mb-10">
        Tell us about your project and we will reply with a clear next step. Prefer to talk now?{" "}
        <button onClick={openChat} className="text-brainy underline">
          Chat with us
        </button>
        .
      </p>
      <ContactForm />
    </div>
  )
}
