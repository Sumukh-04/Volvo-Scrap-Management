
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inbound from "./pages/Inbound"
import Outbound from "./pages/Outbound"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inbound />} />
        <Route path="/:" element={<Outbound/>} />
      </Routes>
    </BrowserRouter>
  )
}

