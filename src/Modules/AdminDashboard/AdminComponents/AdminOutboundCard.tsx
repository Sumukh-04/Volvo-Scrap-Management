import { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard";
import scrapIcon from "../../../assets/image-assets/scrap_icon.png";
import Approvedstat from "../../../assets/image-assets/stats-approval_img.png";
import StatusBadge from "../../../Common/DashboardComponents/StatusBadge";
import AppButton from "../../../Common/Components/UI/ButtonUI";

type Props = {
  item: ScrapItem;
};

export default function AdminOutboundCard({ item }: Props) {
  return (
    <div className="scrap-card adminOutbound-card">
      
     
      <div className="scrap-top">
        <div className="scrap-left">
          <img
            src={item.icon || scrapIcon}
            className="scrap-img"
            alt="scrap"
          />

          <div>
            <div className="scrap-title">
              {item.type} - {item.weight}
            </div>

            <div className="scrap-meta">
              {item.id} | {item.date || item.time}

              {item.approval && (
                <>
                  {" | "}
                  <span className="approved-dot">
                    <img
                      src={Approvedstat}
                      className="stat-dot"
                      alt="approval"
                    />
                    {item.approval}
                  </span>
                </>
              )}
            </div>

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

            {/* Finance Comment */}
            {item.status === "Approved" && (
              <div className="scrap-comment finance-comment">
                <p className="comment-title">Finance Team Comment</p>
                <p className="comment-text">
                  Significant discrepancy in scrap condition; approval cannot be granted at this stage.
                </p>
              </div>
            )}
          </div>
        </div>

        <StatusBadge status={item.status} />
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
              <button className="btn btn-danger">
                Reject
              </button>
              <button className="btn btn-success">
                Approve
              </button>
            </>
          )}

          {["Approved", "Chalan Generated"].includes(item.status) && (
            <AppButton variant="filled">
                Send Approve Mail
            </AppButton>
            )}

        </div>
      </div>
    </div>
  );
}