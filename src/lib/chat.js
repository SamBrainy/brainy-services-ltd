import { getConsent } from "./consent"

// Crisp live chat. It is NOT loaded until the visitor allows it.
const CRISP_WEBSITE_ID = "bae30597-86b0-4057-b70c-986a51174a96"

export function chatIsLoaded() {
  return Boolean(document.getElementById("crisp-chat-script"))
}

export function loadChat() {
  if (chatIsLoaded()) return
  window.$crisp = []
  window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID
  const s = document.createElement("script")
  s.id = "crisp-chat-script"
  s.src = "https://client.crisp.chat/l.js"
  s.async = true
  document.head.appendChild(s)
}

// Opens the chat window. If the visitor has not allowed chat cookies yet,
// asks for permission first (the cookie banner listens for this event).
export function openChat() {
  if (getConsent() !== "accepted") {
    window.dispatchEvent(new Event("brainy:chat-needs-consent"))
    return
  }
  loadChat()
  window.$crisp.push(["do", "chat:open"])
}
