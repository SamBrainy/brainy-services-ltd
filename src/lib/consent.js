// Remembers the visitor's cookie choice in their own browser.
// Values: "accepted", "rejected", or null (not chosen yet).
const KEY = "brainy-cookie-consent"

export function getConsent() {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(KEY, value)
  } catch {
    // storage blocked: the choice just won't be remembered
  }
  window.dispatchEvent(new Event("brainy:consent-changed"))
}
