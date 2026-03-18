import { useState } from "react"
import ConfirmActionDialog from "../../../Common/Components/UI/ConfirmActionDialog"
import { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard";
import Approvedstat from "../../../assets/image-assets/stats-approval_img.png";
import StatusBadge from "../../../Common/DashboardComponents/StatusBadge";
import AppButton from "../../../Common/Components/UI/ButtonUI";
import statImage from "../../../assets/image-assets/stat-image.png"
import fileAttachmentIcon from "../../../assets/image-assets/file-attachments-icon.png"

type Props = {
  item: ScrapItem;
};

export default function FinanceTeamCard({ item }: Props) {

  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmAction, setConfirmAction] = useState<
    "Generate Challan" | "Reject" | null>(null)
  
  const openConfirm = (
    action: "Generate Challan" | "Reject") => {
    setConfirmAction(action)
    setConfirmOpen(true)
  }  

  return (
    <div className="scrap-card FinanceTeam-card">
      
     
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

            <div className="status-with-file-attachments-icon">
            {item.status === "Challan Generated" && (
                <img
                src={fileAttachmentIcon}
                className="file-attachment-icon"
                alt="attachments"
                />
            )}

            <StatusBadge status={item.status} />
            </div>
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
            {["Pending","Challan Generated"].includes(item.status) && (
              <>
                {/* L2 Comment */}
                <div className="scrap-comment">
                  <p className="comment-title">L2 Comment</p>
                  <p className="comment-text">
                    Significant discrepancy in scrap condition; approval cannot be granted at this stage.
                  </p>
                </div>

                {/* L3 Comment */}
                <div className="scrap-comment">
                  <p className="comment-title">L3 Comment</p>
                  <p className="comment-text">
                    Significant discrepancy in scrap condition; approval cannot be granted at this stage.
                  </p>
                </div>
              </>
            )}
          </div> 
        </div>
      </div>

      <div className="card-divider" />

      <div className="finance-team-bottom-row">

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

            <div className="approval-user">
                <span className="level-circle active">PH</span>
                <span className="level-email">nino.willi@volvo.com</span>
            </div>
            </div>

        {/* Action Buttons */}
        <div className="finance-team-actions">
          {item.status === "Pending" && (
            <>
              <button
                className="btn btn-danger"
                onClick={() => openConfirm("Reject")}
              >
                Reject
              </button>
             <AppButton
                variant="filled"
                onClick={() => openConfirm("Generate Challan")}
             >
                Generate Challan
             </AppButton>
            </>
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