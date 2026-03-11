import { useState } from "react"
import ConfirmActionDialog from "../../../Common/Components/UI/ConfirmActionDialog"
import { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard";
import Approvedstat from "../../../assets/image-assets/stats-approval_img.png";
import StatusBadge from "../../../Common/DashboardComponents/StatusBadge";
import AppButton from "../../../Common/Components/UI/ButtonUI";
import statImage from "../../../assets/image-assets/stat-image.png"

type Props = {
  item: ScrapItem;
};

export default function AdminOutboundCard({ item }: Props) {

  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmAction, setConfirmAction] = useState<
    "Approve" | "Reject" | "Send Approval Mail" | null>(null)
  
  const openConfirm = (
    action: "Approve" | "Reject" | "Send Approval Mail") => {
    setConfirmAction(action)
    setConfirmOpen(true)
  }  

  return (
    <div className="scrap-card adminOutbound-card">
      
     
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
            {["Pending", "Pending by Finance Team"].includes(item.status) && (
              <>
                {/* L1 Comment */}
                <div className="scrap-comment">
                  <p className="comment-title">L1 Comment</p>
                  <p className="comment-text">
                    Verified and approved. Significant discrepancy in scrap condition; approval cannot be granted at this stage.
                  </p>
                </div>

                {/* L2 Comment */}
                <div className="scrap-comment">
                  <p className="comment-title">L2 Comment</p>
                  <p className="comment-text">
                    Significant discrepancy in scrap condition; approval cannot be granted at this stage.
                  </p>
                </div>
              </>
            )}

            {/* Finance Comment */}
            {["Approved", "Challan Generated"].includes(item.status) && (
                <div className="digital-sign">
                  <div className="digital-sign-row">
                    <span className="finance-team-digital-sign-title">
                      Digital signature : 
                    </span>
                    <span className="finance-team-digital-sign-name">
                         Lucas Leon
                      </span>
                  </div>
                  <div className="scrap-comment finance-comment">
                    <p className="comment-title">Finance Team Comment</p>
                    <p className="comment-text">
                      Significant discrepancy in scrap condition; approval cannot be granted at this stage.
                    </p>
                  </div>  
                </div>
            )}
          </div> 
        </div>
      </div>

      
      <div className="card-divider" />

      <div className="admin-bottom-row">

        {/* Approval Levels */}
        <div className="approval-levels">
            <div className="approval-user">
                <span className="level-circle active">L1</span>
                <span className="level-email">leon.david@volvo.com</span>
            </div>

            <div className="approval-user">
                <span className="level-circle active">L2</span>
                <span className="level-email">eric.jason@volvo.com</span>
            </div>

            <div className="approval-user">
                <span className="level-circle active">L3</span>
                <span className="level-email">oskar.time@volvo.com</span>
            </div>
            </div>

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
          {["Approved", "Challan Generated"].includes(item.status) && (
          <AppButton
            variant="filled"
            onClick={() => openConfirm("Send Approval Mail")}
          >
            Send Approval Mail
          </AppButton>
            )}

        </div>
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