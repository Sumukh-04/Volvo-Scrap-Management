
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inbound from "./pages/Inbound"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inbound />} />
      </Routes>
    </BrowserRouter>
  )
}

