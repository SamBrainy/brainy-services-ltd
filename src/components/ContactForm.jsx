import { useRef, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { services } from "../data/services"
import { openChat } from "../lib/chat"

const budgets = [
  "Not sure yet",
  "Under £100",
  "£100 to £250",
  "£250 to £500",
  "£500 to £1,000",
  "Over £1,000",
]

const inputClass =
  "w-full border p-4 rounded-xl outline-none focus:border-brainy bg-white"

export default function ContactForm() {
  const [params] = useSearchParams()
  const preselected = services.find((s) => s.slug === params.get("service"))

  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [errorText, setErrorText] = useState("")
  const startedAt = useRef(Date.now())

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    setStatus("sending")
    setErrorText("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, startedAt: startedAt.current }),
      })
      const result = await res.json().catch(() => ({}))

      if (!res.ok) {
        setErrorText(result.error || "Something went wrong. Please try again.")
        setStatus("error")
        return
      }
      form.reset()
      setStatus("success")
    } catch {
      setErrorText("We couldn't reach the server. Please check your connection and try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="max-w-2xl mx-auto text-center border rounded-2xl p-10 bg-gray-50"
      >
        <h3 className="text-2xl font-bold mb-3">Thank you, we’ve got your message</h3>
        <p className="text-gray-600 mb-6">
          We will reply to the email address you gave us with a clear next step.
          Need something sooner? Start a chat with us.
        </p>
        <div className="flex justify-center gap-6">
          <button onClick={openChat} className="text-brainy font-semibold underline">
            Chat with us
          </button>
          <button
            onClick={() => {
              startedAt.current = Date.now()
              setStatus("idle")
            }}
            className="text-gray-600 underline"
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-6">
      {/* Hidden spam trap: real visitors never see or fill this */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="cf-website">Leave this field empty</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="cf-name" className="block text-sm font-medium mb-2">Your name</label>
        <input id="cf-name" name="name" required maxLength={100} autoComplete="name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-sm font-medium mb-2">Your email</label>
        <input id="cf-email" name="email" type="email" required maxLength={200} autoComplete="email" className={inputClass} />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cf-service" className="block text-sm font-medium mb-2">What do you need?</label>
          <select
            id="cf-service"
            name="service"
            defaultValue={preselected ? preselected.title : ""}
            className={inputClass}
          >
            <option value="">Choose a service (optional)</option>
            <optgroup label="Available now">
              {services.filter((s) => s.status === "available").map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
            </optgroup>
            <optgroup label="Coming soon (notify me)">
              {services.filter((s) => s.status !== "available").map((s) => (
                <option key={s.slug} value={`${s.title} (coming soon)`}>{s.title}</option>
              ))}
            </optgroup>
            <option value="Something else">Something else</option>
          </select>
        </div>

        <div>
          <label htmlFor="cf-budget" className="block text-sm font-medium mb-2">Budget</label>
          <select id="cf-budget" name="budget" defaultValue="" className={inputClass}>
            <option value="">Choose a range (optional)</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium mb-2">Tell us about your project</label>
        <textarea
          id="cf-message"
          name="message"
          rows="5"
          required
          minLength={10}
          maxLength={3000}
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-red-700 bg-red-50 border border-red-200 rounded-xl p-4 text-sm">
          {errorText}
        </p>
      )}

      <button
        disabled={status === "sending"}
        className="bg-brainy text-white py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit request"}
      </button>

      <p className="text-xs text-gray-500">
        We use your details only to reply to your enquiry. Your message is
        delivered to us by an email service (Resend). See our{" "}
        <Link to="/privacy" className="underline">Privacy Policy</Link>.
      </p>
    </form>
  )
}
