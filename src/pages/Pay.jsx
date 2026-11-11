import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Lock, CircleCheck, CircleX } from "lucide-react"
import logo from "../assets/logo.png"

// Keep these in sync with api/create-checkout-session.js
const MIN_AMOUNT = 1
const MAX_AMOUNT = 5000

export default function Pay() {
  const [searchParams] = useSearchParams()
  const status = searchParams.get("status")

  const [amount, setAmount] = useState("")
  const [reference, setReference] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Allow only digits and one decimal point, max 2 decimal places
  function handleAmountChange(e) {
    let value = e.target.value.replace(/[^0-9.]/g, "")
    const [whole, ...rest] = value.split(".")
    value = rest.length ? `${whole}.${rest.join("").slice(0, 2)}` : whole
    setAmount(value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")

    const value = Number(amount)
    if (!Number.isFinite(value) || value < MIN_AMOUNT || value > MAX_AMOUNT) {
      setError(
        `Please enter an amount between £${MIN_AMOUNT} and £${MAX_AMOUNT.toLocaleString("en-GB")}.`
      )
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: value, reference }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Something went wrong. Please try again.")
      }
      window.location.assign(data.url) // off to Stripe's secure payment page
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Helmet>
        <title>Pay Online | Brainy Services Ltd</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Header */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Brainy Services Ltd Logo" className="h-8 md:h-10" />
            <span className="text-xl font-bold">Brainy Services Ltd</span>
          </Link>
          <Link to="/" className="font-medium hover:text-brainy">
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-8"
        >
          {status === "success" ? (
            <div className="text-center">
              <CircleCheck className="w-14 h-14 text-green-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-3">Payment received</h1>
              <p className="text-gray-600 mb-8">
                Thank you! A receipt will be sent to the email address you used at
                checkout.
              </p>
              <Link
                to="/"
                className="inline-block bg-brainy text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Back to home
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold mb-2">Make a payment</h1>
              <p className="text-gray-600 mb-6">
                Enter the amount you'd like to pay. You'll complete your card
                details on Stripe's secure payment page.
              </p>

              {status === "cancelled" && (
                <div className="flex items-start gap-2 bg-amber-50 text-amber-800 text-sm rounded-xl p-3 mb-6">
                  <CircleX className="w-5 h-5 shrink-0" />
                  <span>Payment cancelled. You have not been charged.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="grid gap-5">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium mb-2">
                    Amount (GBP)
                  </label>
                  <div className="flex items-center border rounded-xl focus-within:border-brainy overflow-hidden">
                    <span className="pl-4 pr-2 text-gray-500 text-lg">£</span>
                    <input
                      id="amount"
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      placeholder="0.00"
                      value={amount}
                      onChange={handleAmountChange}
                      required
                      className="w-full py-4 pr-4 text-lg outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reference" className="block text-sm font-medium mb-2">
                    Payment reference <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    id="reference"
                    type="text"
                    maxLength={100}
                    placeholder="e.g. invoice number or service"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    className="w-full border p-4 rounded-xl outline-none focus:border-brainy"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-red-600 text-sm">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-brainy text-white py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Redirecting to secure checkout…" : "Pay by card"}
                </button>
              </form>

              <p className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-6">
                <Lock className="w-4 h-4" />
                Payments are processed securely by Stripe. We never see or store
                your card details.
              </p>
            </>
          )}
        </motion.div>
      </main>
    </div>
  )
}
