// import SyncButton from "../../../Common/Components/UI/SyncButton"
// import {useState,useEffect} from "react"
// import AppLayout from "../../../layouts/AppLayout"
// import { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard";
// import StatsRow from "../../../Common/DashboardComponents/StatsRow"
// import FilterBar from "../../../Common/DashboardComponents/Filterbar"
// import  L1L2L3Card from "../AdminComponents/L1L2L3Card"
// import { Pagination } from "@mui/material"

// const mockData1: ScrapItem[] = Array.from({ length: 18 }, (_, i) => ({
//   id: 155 + i * 2,
//   type: "Aluminium",
//   weight: `${80 + i * 3}kg`,
//   status: "Pending",
//   time: "12-01-2026 16:40:29",
// }))

// export default function L1L2L3Management() {
 
//   const [page, setPage] = useState(1)
//   const itemsPerPage = 18

//   // initial page load
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2500)
//     return () => clearTimeout(timer)
//   }, [])  

//   const[filter , setFilter] =useState("all")
//   return (
//     <AppLayout
//       header={
//         <>
//           <div className="flex-between">
//             <h2 className="page-title">Dashboard</h2>
//             <SyncButton/>
//           </div>

//           <StatsRow 
//           variant="adminInbound"
//           onFilterChange={setFilter}
//           data={mockData1}
//         />
//           <FilterBar mode="outbound" />
//         </>
//       }
//     >
//     </AppLayout>
//   )
// }

import SyncButton from "../../../Common/Components/UI/SyncButton"
import { useState, useEffect } from "react"
import AppLayout from "../../../layouts/AppLayout"
import { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard"
import StatsRow from "../../../Common/DashboardComponents/StatsRow"
import FilterBar from "../../../Common/DashboardComponents/Filterbar"
import L1L2L3Card from "../AdminComponents/L1L2L3Card"
import ScrapCardSkeleton from "../../../Common/Components/Skeleton/skeleton"
import Pagination from "@mui/material/Pagination"

const mockData1: ScrapItem[] = Array.from({ length: 18 }, (_, i) => ({
  id: 155 + i * 2,
  type: "Aluminium",
  weight: `${80 + i * 3}kg`,
  status: "Pending",
  time: "12-01-2026 16:40:29",
}))

export default function L1L2L3Management() {

  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")

  const [page, setPage] = useState(1)
  const itemsPerPage = 6

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
      ? mockData1
      : mockData1.filter(
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
        <h2 className="page-title">Dashboard</h2>
        <SyncButton />
      </div>

      <StatsRow
        variant="adminInbound"
        onFilterChange={setFilter}
        data={mockData1}
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
            <L1L2L3Card key={item.id} item={item} />
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