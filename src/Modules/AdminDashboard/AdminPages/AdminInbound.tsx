import ScrapCard, { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard"

type AdminInboundProps = {
  data: ScrapItem[]
}

export default function AdminInbound({ data }: AdminInboundProps) {

  return (
    <>
    <div className="scrap-grid">
        {data.map(item => (
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