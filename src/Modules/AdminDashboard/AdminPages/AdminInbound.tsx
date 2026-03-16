import { useState, useEffect } from "react"
import ScrapCard, { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard"
import ScrapCardSkeleton from "../../../Common/Components/Skeleton/skeleton"
import Pagination from "@mui/material/Pagination"

type AdminInboundProps = {
  data: ScrapItem[]
  loading?: boolean
}

export default function AdminInbound({ data, loading = false }: AdminInboundProps) {

  const [page, setPage] = useState(1)

  const itemsPerPage = 12

  // pagination logic
  const startIndex = (page - 1) * itemsPerPage
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage)

  // reset page when data changes
  useEffect(() => {
    setPage(1)
  }, [data])

  return (
    <>
      <div className="scrap-grid">

        {loading
          ? Array.from({ length: 18 }).map((_, i) => (
              <div className="admin-inbound-card" key={i}>
                <ScrapCardSkeleton />
              </div>
            ))
          : paginatedData.map((item) => (
              <div className="admin-inbound-card" key={item.id}>
                <ScrapCard
                  item={item}
                  mode="adminInbound"
                />
              </div>
            ))}

      </div>

      {!loading && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        </div>
      )}
    </>
  )
}