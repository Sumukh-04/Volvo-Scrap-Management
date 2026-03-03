import { useState } from "react"
import AppLayout from "../../../layouts/AppLayout"
import ScrapCard, { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard"
import FilterBar from "../../../Common/DashboardComponents/Filterbar"
import AssemblyNavigationTabs from "../../../Common/Components/UI/AssemblyNavigationTabs"
import "../../../styles/style.css"
import syncIcon from "../../../assets/image-assets/sync.png"
import AdminInbound from "./AdminInbound"
import StatsRow from "../../../Common/DashboardComponents/StatsRow"



const tabs = ["Assembly", "Inbound", "Outbound"]

const mockData1: ScrapItem[] = Array.from({ length: 18 }, (_, i) => ({
  id: 155 + i*2,
  type: "Aluminium",
  weight: `${80 + i*3}kg`,
  status: "Pending",
  time: "12-01-2026 16:40:29",
}))

const mockData2: ScrapItem[] = Array.from({ length: 18 }, (_, i) => ({
  id: 155 + i*2,
  type: "Aluminium",
  weight: `${80 + i*3}kg`,
  status: "Approved",
  time: "12-01-2026 16:40:29",
  scheduled: i%2===0,
}))

export default function AdminAssembly() {

  const [activeTab, setActiveTab] = useState("Assembly")

const getFilterMode = () => {
  switch (activeTab) {
    case "Assembly":
      return "inbound"
    case "Inbound":
      return "adminInbound" 
    case "Outbound":
      return "inbound"
    default:
      return "inbound"
  }
}

const header = (
  <>
    <div className="flex-between">
      <AssemblyNavigationTabs
        value={activeTab as "Assembly" | "Inbound" | "Outbound"}
        onChange={setActiveTab}
      />
      <button className="btn btn-outline sync-btn">
        <img
          src={syncIcon}
          alt="Sync"
          className="sync-icon"
        />
      </button> 
    </div>
    {activeTab === "Inbound" && (
      <StatsRow variant="adminInbound" />
    )}
    <FilterBar mode={getFilterMode()} /> 
  </>
)

  return (
    <AppLayout header={header} showSettings={true} onSettingsClick={()=> console.log("Settings clicked")}>
      <div className="admin-content">
            {activeTab === "Assembly" && (
                <div className="scrap-grid">
                {mockData1.map(item => (
                <ScrapCard
                    key={item.id}
                    item={item}
                    mode="outbound"
                />
                ))}
                </div>
            )}
            
            {activeTab === "Inbound" && (
                <AdminInbound data={mockData2} />
                )}

            {activeTab === "Outbound" && (
                <div className="empty-state">
                Outbound Scrap details to be integrated soon...
                </div>
            )}
      </div>
    </AppLayout>
  )
}