import SyncButton from "../../../Common/Components/UI/SyncButton"
import { useState, useEffect } from "react"
import AppLayout from "../../../layouts/AppLayout"
import { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard"
import StatsRow from "../../../Common/DashboardComponents/StatsRow"
import FilterBar from "../../../Common/DashboardComponents/Filterbar"
import ScrapCardSkeleton from "../../../Common/Components/Skeleton/skeleton"
import FinanceTeamCard from "../AdminComponents/FinanceTeamCard"
import Pagination from "@mui/material/Pagination"

const mockData1: ScrapItem[] = Array.from({ length: 18 }, (_, i) => ({
  id: 155 + i * 2,
  type: "Plastic",
  weight: `${80 + i * 3}kg`,
  status: "Pending",
  time: "12-01-2026 16:40:29",
}))

const mockData2: ScrapItem[] = Array.from({ length: 18 }, (_, i) => ({
  id: 155 + i * 2,
  type: "Plastic",
  weight: `${80 + i * 3}kg`,
  status: "Challan Generated",
  time: "12-01-2026 16:40:29",
}))

export default function FinanceTeam() {

  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")

  const [page, setPage] = useState(1)
  const itemsPerPage = 6
  const combinedData = [...mockData1, ...mockData2]

  // initial load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  // reset page on filter change
  useEffect(() => {
    setPage(1)
  }, [filter])

  // 🔹 filtering logic
  const filteredData =
    filter === "all"
      ? combinedData
      : combinedData.filter(
          (item) =>
            item.status.toLowerCase() === filter.toLowerCase()
        )

  // 🔹 pagination logic
  const startIndex = (page - 1) * itemsPerPage
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const header = (
    <>
      <div className="flex-between">
        <h2 className="page-title">Finance Team Dashboard</h2>
        <SyncButton />
      </div>

      <StatsRow
        variant="financeTeam"
        onFilterChange={setFilter}
        data={[...mockData1,...mockData2]}
      />

      <FilterBar mode="outbound" />
    </>
  )

  return (
    <AppLayout header={header}>
      <div className="scrap-grid admin-outbound-grid">

        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <ScrapCardSkeleton key={i} />
          ))
        ) : filteredData.length === 0 ? (
          <div className="empty-state">
            No scrap found
          </div>
        ) : (
          paginatedData.map((item) => (
            <FinanceTeamCard key={item.id} item={item} />
          ))
        )}

      </div>

      {!loading && filteredData.length > 0 && (
        <div className="pagination-wrapper">
          <Pagination
            count={Math.ceil(filteredData.length / itemsPerPage)}
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        </div>
      )}
    </AppLayout>
  )
}