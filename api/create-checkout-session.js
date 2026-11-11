import Stripe from "stripe"

// ---- Settings you can change -------------------------------------------
const CURRENCY = "gbp"
const MIN_AMOUNT = 1      // smallest payment accepted (in pounds)
const MAX_AMOUNT = 5000   // largest payment accepted (in pounds)
// ------------------------------------------------------------------------

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "Method not allowed." })
  }

  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    console.error("STRIPE_SECRET_KEY is not set")
    return res.status(500).json({ error: "Payments are not set up yet." })
  }

  // Never trust the browser: validate everything here on the server.
  const body = req.body && typeof req.body === "object" ? req.body : {}

  const amount = Number(body.amount)
  if (!Number.isFinite(amount) || amount < MIN_AMOUNT || amount > MAX_AMOUNT) {
    return res.status(400).json({
      error: `Please enter an amount between £${MIN_AMOUNT} and £${MAX_AMOUNT.toLocaleString("en-GB")}.`,
    })
  }
  const pence = Math.round(amount * 100) // Stripe works in the smallest currency unit

  const reference =
    typeof body.reference === "string" ? body.reference.trim().slice(0, 100) : ""

  const origin =
    process.env.SITE_URL || req.headers.origin || `https://${req.headers.host}`

  try {
    const stripe = new Stripe(secretKey)

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      submit_type: "pay",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            unit_amount: pence,
            product_data: {
              name: "Brainy Services Ltd – Payment",
              ...(reference && { description: reference }),
            },
          },
        },
      ],
      ...(reference && {
        metadata: { reference },
        payment_intent_data: {
          description: `Brainy Services Ltd – ${reference}`,
          metadata: { reference },
        },
      }),
      success_url: `${origin}/pay?status=success`,
      cancel_url: `${origin}/pay?status=cancelled`,
    })

    return res.status(200).json({ url: session.url })
  } catch (err) {
    console.error("Stripe error:", err)
    return res
      .status(500)
      .json({ error: "We couldn't start the payment. Please try again." })
  }
}
