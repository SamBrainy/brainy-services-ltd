import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ServiceDetail from "./pages/ServiceDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
