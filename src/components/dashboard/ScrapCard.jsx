import editIcon from "../../assets/image assets/penciledit.png"
import scrapIcon from "../../assets/image assets/scrap_icon.png"
import StatusBadge from "./StatusBadge"

export default function ScrapCard({ item }) {
  return (
    <div className="scrap-card">

      <div className="scrap-top">

        <div className="scrap-left">
          <img src={scrapIcon} className="scrap-img" />
          <div>
            <div className="scrap-title">
              {item.type} - {item.weight}kg
              {(item.status === "Pending" || item.status === "Overdue") && (
                <img src={editIcon} className="edit-icon" alt="Edit" />
              )}
            </div>

            <div className="scrap-meta">
              {item.id} | {item.time}
            </div>
          </div>
        </div>

        <StatusBadge status={item.status} />

      </div>

      <div className="card-actions">

        {(item.status === "Pending" || item.status === "Overdue") && (
          <>
            <button className="btn btn-danger">Reject</button>
            <button className="btn btn-success">Approve</button>
          </>
        )}

        {item.status === "Rejected" && (
          <button className="btn btn-dark">Reopen</button>
        )}

      </div>
    </div>
  )
}

