
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inbound from "./Modules/Pwa1/InboundPages/Inbound"
import Outbound from "./Modules/Pwa2/OutboundPages/outbound"
import AdminAssembly from "./Modules/AdminDashboard/AdminPages/AdminAssembly"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inbound" element={<Inbound />} />
        <Route path="/outbound" element={<Outbound/>} />
        <Route path="/admin" element={<AdminAssembly />} /> 

      </Routes>
    </BrowserRouter>
  )
}

