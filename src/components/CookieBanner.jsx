import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getConsent, setConsent } from "../lib/consent"
import { loadChat } from "../lib/chat"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [chatRequested, setChatRequested] = useState(false)

  useEffect(() => {
    const consent = getConsent()
    if (consent === "accepted") loadChat()
    if (consent === null) setVisible(true)

    function onChatNeedsConsent() {
      setChatRequested(true)
      setVisible(true)
    }
    function onOpenSettings() {
      setChatRequested(false)
      setVisible(true)
    }
    window.addEventListener("brainy:chat-needs-consent", onChatNeedsConsent)
    window.addEventListener("brainy:open-cookie-settings", onOpenSettings)
    return () => {
      window.removeEventListener("brainy:chat-needs-consent", onChatNeedsConsent)
      window.removeEventListener("brainy:open-cookie-settings", onOpenSettings)
    }
  }, [])

  function accept() {
    setConsent("accepted")
    loadChat()
    if (chatRequested) window.$crisp.push(["do", "chat:open"])
    setVisible(false)
    setChatRequested(false)
  }

  function reject() {
    const hadChat = Boolean(document.getElementById("crisp-chat-script"))
    setConsent("rejected")
    setVisible(false)
    setChatRequested(false)
    // Crisp is already running in this page, so reload to switch it off
    if (hadChat) window.location.reload()
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[70] bg-white border shadow-2xl rounded-2xl p-5"
    >
      <p className="font-semibold mb-2">
        {chatRequested ? "Live chat needs your permission" : "Cookies on this site"}
      </p>
      <p className="text-sm text-gray-600 mb-4">
        Our live chat (provided by Crisp) uses cookies, so it stays switched off
        unless you allow it. We do not use advertising or analytics cookies.{" "}
        <Link to="/cookies" className="text-brainy underline">
          Cookie policy
        </Link>
      </p>
      <div className="flex gap-3">
        <button
          onClick={accept}
          className="flex-1 bg-brainy text-white py-2.5 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Allow chat
        </button>
        <button
          onClick={reject}
          className="flex-1 border py-2.5 rounded-xl font-semibold hover:bg-gray-50 transition"
        >
          No thanks
        </button>
      </div>
    </div>
  )
}
