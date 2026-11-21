// Receives contact-form enquiries and emails them to you using Resend.
// Needs these settings in Vercel (Project > Settings > Environment Variables):
//   RESEND_API_KEY    your Resend API key
//   CONTACT_TO_EMAIL  the inbox that should receive enquiries
//   CONTACT_FROM      (optional) e.g. "Brainy Services <hello@yourdomain.com>"
//                     Leave unset until you have verified your domain in Resend.

// ---- Settings you can change -------------------------------------------
const MAX_PER_HOUR = 5 // enquiries allowed per visitor per hour
const MIN_FILL_SECONDS = 3 // forms sent faster than this are treated as bots
// ------------------------------------------------------------------------

// Best-effort memory of recent requests (resets when the server restarts)
const hits = new Map()

function tooManyRequests(ip) {
  const now = Date.now()
  const hourAgo = now - 60 * 60 * 1000
  const recent = (hits.get(ip) || []).filter((t) => t > hourAgo)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_HOUR
}

const clean = (value, max) =>
  typeof value === "string" ? value.replace(/\r/g, "").trim().slice(0, max) : ""

const oneLine = (value, max) => clean(value, max).replace(/\s+/g, " ")

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "Method not allowed." })
  }

  // Only accept submissions that come from this website
  const origin = req.headers.origin
  if (origin) {
    try {
      if (new URL(origin).host !== req.headers.host) {
        return res.status(403).json({ error: "Not allowed." })
      }
    } catch {
      return res.status(403).json({ error: "Not allowed." })
    }
  }

  const body = req.body && typeof req.body === "object" ? req.body : {}

  // Spam traps: a hidden field real people never fill, and a "too fast" check.
  // Bots get a normal-looking success reply so they learn nothing.
  const startedAt = Number(body.startedAt)
  const tooFast =
    Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_SECONDS * 1000
  if (body.website || tooFast) {
    return res.status(200).json({ ok: true })
  }

  const ip = String(req.headers["x-forwarded-for"] || "unknown").split(",")[0].trim()
  if (tooManyRequests(ip)) {
    return res
      .status(429)
      .json({ error: "Too many messages from this device. Please try again later." })
  }

  const name = oneLine(body.name, 100)
  const email = oneLine(body.email, 200)
  const service = oneLine(body.service, 120)
  const budget = oneLine(body.budget, 60)
  const message = clean(body.message, 3000)

  if (name.length < 2) {
    return res.status(400).json({ error: "Please enter your name." })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." })
  }
  if (message.length < 10) {
    return res.status(400).json({ error: "Please tell us a little more about your project." })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    console.error("RESEND_API_KEY or CONTACT_TO_EMAIL is not set")
    return res
      .status(500)
      .json({ error: "Our contact form is not set up yet. Please use the chat instead." })
  }

  const from = process.env.CONTACT_FROM || "Brainy Services Website <onboarding@resend.dev>"

  const text = [
    "New enquiry from the Brainy Services Ltd website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Service: ${service || "Not specified"}`,
    `Budget: ${budget || "Not specified"}`,
    "",
    "Message:",
    message,
  ].join("\n")

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry: ${service || "General"} - ${name}`.slice(0, 200),
        text,
      }),
    })

    if (!response.ok) {
      console.error("Resend error:", response.status, await response.text())
      return res
        .status(502)
        .json({ error: "We couldn't send your message. Please try again or use the chat." })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return res
      .status(500)
      .json({ error: "We couldn't send your message. Please try again or use the chat." })
  }
}
