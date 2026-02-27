
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inbound from "./Modules/Pwa1/InboundPages/Inbound"
import Outbound from "./Modules/Pwa2/OutboundPages/outbound"
import AdminAssembly from "./Modules/AdminDashboard/AdminPages/AdminAssembly"
import UserManagement from "./Modules/AdminDashboard/AdminPages/Usermanagement"
import LevelManagement from "./Modules/AdminDashboard/AdminPages/LevelManagement"
import AppLayout from "./layouts/AppLayout"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inbound" element={<Inbound />} />
        <Route path="/" element={<Outbound/>} />
        <Route path="/admin" element={<AdminAssembly />} /> 
        <Route
          path="/usermanagement"
          element={
            <AppLayout showSettings={true}>
              <UserManagement />
            </AppLayout>
          }
        />
        <Route
          path="/levelmanagement"
          element={
            <AppLayout showSettings={true}>
              <LevelManagement />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

