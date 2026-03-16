import { useState, useEffect } from "react"
import AppLayout from "../../../layouts/AppLayout"
import ScrapCard, { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard"
import FilterBar from "../../../Common/DashboardComponents/Filterbar"
import AssemblyNavigationTabs from "../../../Common/Components/UI/AssemblyNavigationTabs"
import "../../../styles/style.css"
import AdminInbound from "./AdminInbound"
import AdminOutbound from "./AdminOutbound"
import StatsRow from "../../../Common/DashboardComponents/StatsRow"
import SyncButton from "../../../Common/Components/UI/SyncButton"
import ScrapCardSkeleton from "../../../Common/Components/Skeleton/skeleton"
import { Pagination } from "@mui/material"

const tabs = ["Assembly", "Inbound", "Outbound"]

const mockData1: ScrapItem[] = Array.from({ length: 18 }, (_, i) => ({
  id: 155 + i * 2,
  type: "Aluminium",
  weight: `${80 + i * 3}kg`,
  status: "Pending",
  time: "12-01-2026 16:40:29",
}))

const mockData2: ScrapItem[] = Array.from({ length: 18 }, (_, i) => ({
  id: 155 + i * 2,
  type: "Aluminium",
  weight: `${80 + i * 3}kg`,
  status: "Approved",
  time: "12-01-2026 16:40:29",
  scheduled: i % 2 === 0,
}))

const mockData3: ScrapItem[] = Array.from({ length: 5 }, (_, i) => ({
  id: 155 + i * 2,
  type: "Aluminium",
  weight: `${80 + i * 3}kg`,
  status: "Challan Generated",
  time: "12-01-2026 16:40:29",
}))

const mockData4: ScrapItem[] = Array.from({ length: 5 }, (_, i) => ({
  id: 155 + i * 2,
  type: "Plastic",
  weight: `${80 + i * 3}kg`,
  status: "Pending by Finance Team",
  time: "12-01-2026 16:40:29",
}))

export default function AdminAssembly() {

  const [activeTab, setActiveTab] = useState("Assembly")
  const [loading, setLoading] = useState(true)

  const [filter, setFilter] = useState("all")

  // pagination state
  const [page, setPage] = useState(1)
  const itemsPerPage = 18

  // initial page load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  // loading when switching tabs
  useEffect(() => {
    setLoading(true)
    setPage(1)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [activeTab])

  const getFilterMode = () => {
    switch (activeTab) {
      case "Assembly":
        return "inbound"
      case "Inbound":
        return "adminInbound"
      case "Outbound":
        return "adminOutbound"
      default:
        return "inbound"
    }
  }

  // pagination calculation
  const startIndex = (page - 1) * itemsPerPage
  const paginatedAssembly = mockData1.slice(startIndex, startIndex + itemsPerPage)

  const header = (
    <>
      <div className="flex-between">
        <AssemblyNavigationTabs
          value={activeTab as "Assembly" | "Inbound" | "Outbound"}
          onChange={setActiveTab}
        />
        <SyncButton />
      </div>

     {activeTab === "Inbound" && (
        <StatsRow
          variant="adminInbound"
          onFilterChange={setFilter}
           data={mockData2}
        />
      )}

      {activeTab === "Outbound" && (
      <StatsRow
        variant="adminOutbound"
        onFilterChange={setFilter}
        data={[...mockData1, ...mockData2, ...mockData3, ...mockData4]}
      />
    )}

      <FilterBar mode={getFilterMode()} />
    </>
  )

  return (
    <AppLayout
      header={header}
      showSettings={true}
      onSettingsClick={() => console.log("Settings clicked")}
    >
      <div className="admin-content">

        {activeTab === "Assembly" && (
          <>
            <div className="scrap-grid">
              {loading
                ? Array.from({ length: 18 }).map((_, i) => (
                    <ScrapCardSkeleton key={i} />
                  ))
                : paginatedAssembly.map((item) => (
                    <ScrapCard
                      key={item.id}
                      item={item}
                      mode="outbound"
                    />
                  ))}
            </div>

            {!loading && (
              <div className="pagination-wrapper">
                <Pagination
                  count={Math.ceil(mockData1.length / itemsPerPage)}
                  page={page}
                  onChange={(e, value) => setPage(value)}
                />
              </div>
            )}
          </>
        )}

        {activeTab === "Inbound" && (
            <AdminInbound
              data={mockData2}
              loading={loading}
              filter={filter}
              emptyMessage="No inbound scrap found"
            />
          )}

        {activeTab === "Outbound" && (
        <AdminOutbound
          data={[...mockData1, ...mockData2, ...mockData3, ...mockData4]}
          loading={loading}
          filter={filter}
          emptyMessage="No outbound scrap found"
        />
      )}

      </div>
    </AppLayout>
  )
}