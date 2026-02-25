import { useState } from "react"
import AppLayout from "../../../layouts/AppLayout"
import ScrapCard, { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard"
import FilterBar from "../../../Common/DashboardComponents/Filterbar"
import AssemblyNavigationTabs from "../../../Common/Components/UI/AssemblyNavigationTabs"
import "../../../styles/style.css"
import syncIcon from "../../../assets/image-assets/sync.png"


const tabs = ["Assembly", "Inbound", "Outbound"]

const mockData: ScrapItem[] = Array.from({ length: 21 }, (_, i) => ({
  id: 155 + i,
  type: "Aluminum",
  weight: "80kg",
  status: "Pending",
  time: "12-01-2026 16:40:29",
}))

export default function AdminAssembly() {

  const [activeTab, setActiveTab] = useState("Assembly")

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
    <FilterBar mode="inbound" />
  </>
)

  return (
    <AppLayout header={header}>
      <div className="admin-content">
        <div className="admin-grid">
            {activeTab === "Assembly" && (
                mockData.map(item => (
                <ScrapCard
                    key={item.id}
                    item={item}
                    mode="outbound"
                />
                ))
            )}

            {activeTab === "Inbound" && (
                <div className="empty-state">
                Inbound Scrap details to be integrated soon...
                </div>
            )}

            {activeTab === "Outbound" && (
                <div className="empty-state">
                Outbound Scrap details to be integrated soon...
                </div>
            )}
            </div>
      </div>
    </AppLayout>
  )
}