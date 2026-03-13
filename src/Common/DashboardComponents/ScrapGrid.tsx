import { useState, useEffect } from "react"
import ScrapCard from "./ScrapCard"
import ScrapCardSkeleton from "../Components/Skeleton/skeleton"
import type { ScrapItem, ScrapMode } from "./ScrapCard"

type Props = {
  filter: string
  mode?: ScrapMode
}

const data: ScrapItem[] = [
  { id:1, type:"Aluminum", weight:"1kg", status:"pending", time:"3-02-2026 00:00" },
  { id:2, type:"Plastic", weight:"1kg", status:"pending", time:"3-02-2026 00:00" },
  { id:3, type:"Magnesium", weight:"1kg", status:"pending", time:"3-02-2026 00:00" },
  { id:4, type:"Steel", weight:"2kg", status:"Approved", time:"3-02-2026 00:00" },
  { id:5, type:"Copper", weight:"99kg", status:"Rejected", time:"3-02-2026 00:00" },
  { id:6, type:"Others", weight:"111kg", status:"Overdue", time:"3-02-2026 00:00" },
  { id:7, type:"Aluminum", weight:"1kg", status:"pending", time:"3-02-2026 00:00" },
  { id:8, type:"Plastic", weight:"1kg", status:"pending", time:"3-02-2026 00:00" },
  { id:9, type:"Magnesium", weight:"1kg", status:"pending", time:"3-02-2026 00:00" },
  { id:10, type:"Steel", weight:"2kg", status:"Approved", time:"3-02-2026 00:00" },
  { id:11, type:"Copper", weight:"99kg", status:"Rejected", time:"3-02-2026 00:00" },
  { id:12, type:"Others", weight:"111kg", status:"Overdue", time:"3-02-2026 00:00" },
  { id:13, type:"Aluminum", weight:"1kg", status:"pending", time:"3-02-2026 00:00" },
  { id:14, type:"Plastic", weight:"1kg", status:"pending", time:"3-02-2026 00:00" },
  { id:15, type:"Magnesium", weight:"1kg", status:"pending", time:"3-02-2026 00:00" },
  { id:16, type:"Steel", weight:"2kg", status:"Approved", time:"3-02-2026 00:00" },
  { id:17, type:"Copper", weight:"99kg", status:"Rejected", time:"3-02-2026 00:00" },
  { id:18, type:"Others", weight:"111kg", status:"Overdue", time:"3-02-2026 00:00" }
]

export default function ScrapGrid({ filter, mode = "inbound" }: Props) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  const filteredData =
    filter === "All Scrap"
      ? data
      : data.filter(
          (item) =>
            item.status.toLowerCase() === filter.toLowerCase()
        )

  return (
    <div className="scrap-grid">

      {loading
        ? Array.from({ length: 18 }).map((_, i) => (
            <ScrapCardSkeleton key={i} />
          ))
        : filteredData.map((item) => (
            <ScrapCard
              key={item.id}
              item={item}
              mode={mode}
            />
          ))}

    </div>
  )
}