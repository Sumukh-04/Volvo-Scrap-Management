import ScrapCard, { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard"
import ScrapCardSkeleton from "../../../Common/Components/Skeleton/skeleton"

type AdminInboundProps = {
  data: ScrapItem[]
  loading?: boolean
}

export default function AdminInbound({ data, loading = false }: AdminInboundProps) {

  return (
    <>
      <div className="scrap-grid">

        {loading
          ? Array.from({ length: 18 }).map((_, i) => (
              <div className="admin-inbound-card" key={i}>
                <ScrapCardSkeleton />
              </div>
            ))
          : data.map((item) => (
              <div className="admin-inbound-card" key={item.id}>
                <ScrapCard
                  item={item}
                  mode="adminInbound"
                />
              </div>
            ))}

      </div>
    </>
  )
}