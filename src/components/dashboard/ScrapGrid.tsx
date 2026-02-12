import ScrapCard from "./ScrapCard"
import ScrapItem  from "./ScrapCard"

const data: ScrapItem = [
  { id:1, type:"Aluminum", weight:1, status:"Pending", time:"3-02-2026 00:00" },
  { id:2, type:"Plastic", weight:1, status:"Pending", time:"3-02-2026 00:00" },
  { id:3, type:"Magnesium", weight:1, status:"Pending", time:"3-02-2026 00:00" },
  { id:4, type:"Steel", weight:2, status:"Approved", time:"3-02-2026 00:00" },
  { id:5, type:"Copper", weight:99, status:"Rejected", time:"3-02-2026 00:00" },
  { id:6, type:"Others", weight:111, status:"Overdue", time:"3-02-2026 00:00" },
  { id:7, type:"Aluminum", weight:1, status:"Pending", time:"3-02-2026 00:00" },
  { id:8, type:"Plastic", weight:1, status:"Pending", time:"3-02-2026 00:00" },
  { id:9, type:"Magnesium", weight:1, status:"Pending", time:"3-02-2026 00:00" },
  { id:10, type:"Steel", weight:2, status:"Approved", time:"3-02-2026 00:00" },
  { id:11, type:"Copper", weight:99, status:"Rejected", time:"3-02-2026 00:00" },
  { id:12, type:"Others", weight:111, status:"Overdue", time:"3-02-2026 00:00" },
  { id:13, type:"Aluminum", weight:1, status:"Pending", time:"3-02-2026 00:00" },
  { id:14, type:"Plastic", weight:1, status:"Pending", time:"3-02-2026 00:00" },
  { id:15, type:"Magnesium", weight:1, status:"Pending", time:"3-02-2026 00:00" },
  { id:16, type:"Steel", weight:2, status:"Approved", time:"3-02-2026 00:00" },
  { id:17, type:"Copper", weight:99, status:"Rejected", time:"3-02-2026 00:00" },
  { id:18, type:"Others", weight:111, status:"Overdue", time:"3-02-2026 00:00" }
]


export default function ScrapGrid() {
  return (
    <div className="scrap-grid">
      {data.map(item => (
        <ScrapCard key={item.id} item={item} />
      ))}
    </div>
  )
}