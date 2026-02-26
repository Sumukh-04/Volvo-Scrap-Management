import editIcon from "../../assets/image-assets/penciledit.png";
import scrapIcon from "../../assets/image-assets/scrap_icon.png";
import Approvedstat from "../../assets/image-assets/stats-approval_img.png";
import StatusBadge from "./StatusBadge";
import { useState } from "react";
import EditScrapDialog from "./EditScrapModal";

export type ScrapStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | "Overdue"
  | "Draft"
  | "Sent For Approval"
  | "Resubmitted";

export type ScrapItem = {
  id: number | string;
  type: string;
  weight: number | string;
  status: ScrapStatus;
  time?: string;
  date?: string;
  approval?: string;
  note?: string;
  icon?: string;
};

type ScrapCardProps = {
  item: ScrapItem;
  mode?: "inbound" | "outbound";
  onClick?: (item: ScrapItem) => void;
};

export default function ScrapCard({
  item,
  mode = "inbound",
  onClick,
}: ScrapCardProps) {
  const statusClass = item.status
    .toLowerCase()
    .replace(/\s/g, "");

  const [editOpen, setEditOpen] = useState(false);

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSave = (updated: ScrapItem) => {
    console.log("Updated scrap:", updated);
    setEditOpen(false);
  };

  return (
    <div
      className={`scrap-card ${mode}-card ${statusClass}`}
      onClick={() =>
        mode === "outbound" &&
        item.status === "Pending" &&
        onClick?.(item)
      }
    >
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

            {mode === "inbound" &&
            (item.status === "Pending" ||
              item.status === "Overdue") && (
              <img
                src={editIcon}
                className="edit-icon"
                alt="Edit"
                onClick={handleEditClick}
              />
          )}

          
          {mode === "outbound" &&
            item.status === "Draft" && (
              <img
                src={editIcon}
                className="edit-icon"
                alt="Edit"
                onClick={handleEditClick}
              />
          )}
            </div>

            <div className="scrap-meta">
              {item.id} |{" "}
              {mode === "outbound"
            ? item.date || item.time
            : item.time}

            
              {mode === "outbound" &&
                item.approval && (
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
          </div>
        </div>

        <StatusBadge status={item.status} />
      </div>

      {mode === "inbound" && (
        <div className="card-actions">
          {(item.status === "Pending" ||
            item.status === "Overdue") && (
            <>
              <button className="btn btn-danger">
                Reject
              </button>
              <button className="btn btn-success">
                Approve
              </button>
            </>
          )}

          {item.status === "Rejected" && (
            <button className="btn btn-dark">
              Reopen
            </button>
          )}
        </div>
      )}

      {mode === "outbound" && item.note && (
        <div className="scrap-note outbound-note">
          <p className="note-title">
            Additional Note
          </p>
          <p className="note-text">
            {item.note}
          </p>
        </div>
      )}
    <EditScrapDialog
        open={editOpen}
        scrap={item}
        onClose={handleEditClose}
        onSave={handleEditSave}
      />
  </div>
  );
}
