import { useState, useEffect } from "react"
import ScrapCard, { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard"
import ScrapCardSkeleton from "../../../Common/Components/Skeleton/skeleton"
import Pagination from "@mui/material/Pagination"
import PopupWithTextarea from "../../../Common/Components/UI/PopupWithTextarea"

type AdminInboundProps = {
  data: ScrapItem[]
  loading?: boolean
  filter?: string
  emptyMessage?: string
}

export default function AdminInbound({
  data,
  loading = false,
  filter = "all",
  emptyMessage = "No data available"
}: AdminInboundProps) {


  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ScrapItem | null>(null);
  const [page, setPage] = useState(1)

  const itemsPerPage = 12

  // 🔹 filter logic
  const filteredData =
    filter === "all"
      ? data
      : data.filter(
          (item) =>
            item.status.toLowerCase() === filter.toLowerCase()
        )

  const startIndex = (page - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  // reset page when data or filter changes
  useEffect(() => {
    setPage(1)
  }, [data, filter])

  return (
    <>
      <div className="scrap-grid">

        {loading ? (
          Array.from({ length: 18 }).map((_, i) => (
            <div className="admin-inbound-card" key={i}>
              <ScrapCardSkeleton />
            </div>
          ))
        ) : filteredData.length === 0 ? (

          // 🔹 EMPTY STATE
          <div className="empty-state">
            {emptyMessage}
          </div>

        ) : (
          paginatedData.map((item) => (
            <div className="admin-inbound-card" key={item.id}>
              <ScrapCard
                item={item}
                mode="adminInbound"
              />
            </div>
          ))
        )}

      </div>

      {!loading && filteredData.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Pagination
            count={Math.ceil(filteredData.length / itemsPerPage)}
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        </div>
      )}
    </>
  )
}