
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inbound from "./Modules/Pwa1/InboundPages/Inbound"
import Outbound from "./Modules/Pwa2/OutboundPages/outbound"

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

