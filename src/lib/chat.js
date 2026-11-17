// Opens the Crisp chat window (does nothing if chat has not loaded)
export function openChat() {
  window.$crisp?.push(["do", "chat:open"])
}
