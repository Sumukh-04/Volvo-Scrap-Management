import { useState } from "react"
import ConfirmActionDialog from "../../../Common/Components/UI/ConfirmActionDialog"
import { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard";
import Approvedstat from "../../../assets/image-assets/stats-approval_img.png";
import StatusBadge from "../../../Common/DashboardComponents/StatusBadge";
import statImage from "../../../assets/image-assets/stat-image.png"

type Props = {
  item: ScrapItem;
};

export default function L1L2L3Card({ item }: Props) {

  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmAction, setConfirmAction] = useState<
    "Approve" | "Reject" | null>(null)
  
  const openConfirm = (
    action: "Approve" | "Reject") => {
    setConfirmAction(action)
    setConfirmOpen(true)
  }  

  return (
    <div className="scrap-card L1L2L3-card">
      
     
      <div className="scrap-top">
        <div className="scrap-left">
          <img
            src={item.icon || statImage}
            className="admin-outbound-img"
            alt="scrap"
          />

          <div className="scrap-content">
            <div className="scrap-title-row">
              <div className="scrap-title">
                {item.type} - {item.weight}
              </div>

              <StatusBadge status={item.status} />
            </div>
            <div className="scrap-meta">
              {item.id} | {item.date || item.time}

              <span className="approved-dot">
                <span>|</span>
                <img
                  src={Approvedstat}
                  className="stat-dot"
                  alt="approval"
                />
                <span>Sentry Approved</span>
              </span>
            </div>
            {["Pending"].includes(item.status) && (
              <>
                {/* Environmental Engineer Comment */}
                <div className="scrap-comment">
                  <p className="comment-title">Environmental Engineer Comment</p>
                  <p className="comment-text">
                    Significant discrepancy in scrap condition; approval cannot be granted at this stage.
                  </p>
                </div>
                {/* Approval by L1,L2 */}
<div className="approval-text">
  <span className="approval-label">Approved by</span>{" "}
  eric.jason@volvo.com (L1)
</div>

<div className="approval-text">
  <span className="approval-label">Approved by</span>{" "}
  leon.david@volvo.com (L2)
</div>
              </>
            )}

          </div> 
        </div>
      </div>

      
      <div className="card-divider" />

        {/* Action Buttons */}
        <div className="admin-actions">
          {item.status === "Pending" && (
            <>
              <button
                className="btn btn-danger"
                onClick={() => openConfirm("Reject")}
              >
                Reject
              </button>
              <button
                className="btn btn-success"
                onClick={() => openConfirm("Approve")}
              >
                Approve
              </button>
            </>
          )}

        </div>
    
      <ConfirmActionDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => {
          console.log(`${confirmAction} confirmed for ${item.id}`)
          setConfirmOpen(false)
        }}
        message={`Do you want to ${confirmAction} Scrap (${item.id}) : ${item.type} - ${item.weight}?`}
      />
    </div>
  );
}