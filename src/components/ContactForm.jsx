import { Link } from "react-router-dom"

// NOTE: This still uses FormSubmit. It will be replaced in Phase 4
// (own form handler, spam protection, thank-you message).
export default function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/brainyservices00@gmail.com"
      method="POST"
      className="max-w-2xl mx-auto grid gap-6"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New enquiry from Brainy Services Ltd website" />
      {/* Hidden spam trap: real visitors never see or fill this */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

      <div>
        <label htmlFor="cf-name" className="block text-sm font-medium mb-2">Your name</label>
        <input id="cf-name" name="name" required className="w-full border p-4 rounded-xl outline-none focus:border-brainy" />
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-sm font-medium mb-2">Your email</label>
        <input id="cf-email" name="email" type="email" required className="w-full border p-4 rounded-xl outline-none focus:border-brainy" />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium mb-2">Tell us about your project</label>
        <textarea id="cf-message" name="message" rows="5" required className="w-full border p-4 rounded-xl outline-none focus:border-brainy" />
      </div>

      <button className="bg-brainy text-white py-4 rounded-xl font-semibold hover:opacity-90 transition">
        Submit request
      </button>

      <p className="text-xs text-gray-500">
        We use your details only to reply to your enquiry. Your message is sent
        to us by a form service (FormSubmit). See our{" "}
        <Link to="/privacy" className="underline">Privacy Policy</Link>.
      </p>
    </form>
  )
}
