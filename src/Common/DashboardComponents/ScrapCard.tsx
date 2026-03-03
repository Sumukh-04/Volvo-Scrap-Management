import editIcon from "../../assets/image-assets/penciledit.png";
import scrapIcon from "../../assets/image-assets/scrap_icon.png";
import Approvedstat from "../../assets/image-assets/stats-approval_img.png";
import StatusBadge from "./StatusBadge";
import { useState } from "react";
import EditScrapDialog from "./EditScrapModal";

/* -------------------- TYPES -------------------- */

export type ScrapStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | "Overdue"
  | "Draft"
  | "Sent For Approval"
  | "Resubmitted"
  | "Pending by Finance team"
  | "Chalan Generated";

export type ScrapMode =
  | "inbound"
  | "outbound"
  | "adminInbound"
  | "adminOutbound";

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
  mode?: ScrapMode;
  onClick?: (item: ScrapItem) => void;
};

/* -------------------- COMPONENT -------------------- */

export default function ScrapCard({
  item,
  mode = "inbound",
  onClick,
}: ScrapCardProps) {
  // Better CSS class formatting
  const statusClass = item.status
    .toLowerCase()
    .replace(/\s+/g, "-");

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

  const handleCardClick = () => {
    if (
      (mode === "outbound" || mode === "adminOutbound") &&
      item.status === "Pending"
    ) {
      onClick?.(item);
    }
  };

  /* -------------------- UI -------------------- */

  return (
    <div
      className={`scrap-card ${mode}-card ${statusClass}`}
      onClick={handleCardClick}
    >
      {/* -------------------- TOP SECTION -------------------- */}
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

              {/* EDIT ICON RULES */}

              {/* INBOUND + ADMIN INBOUND */}
              {(mode === "inbound" ||
                mode === "adminInbound") &&
                (item.status === "Pending" ||
                  item.status === "Overdue") && (
                  <img
                    src={editIcon}
                    className="edit-icon"
                    alt="Edit"
                    onClick={handleEditClick}
                  />
                )}

              {/* OUTBOUND + ADMIN OUTBOUND */}
              {(mode === "outbound" ||
                mode === "adminOutbound") &&
                item.status === "Draft"  && (
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
              {mode === "outbound" ||
              mode === "adminOutbound"
                ? item.date || item.time
                : item.time}

              {(mode === "outbound" ||
                mode === "adminOutbound") &&
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

      {/* -------------------- INBOUND ACTIONS -------------------- */}

      {(mode === "inbound" ||
        mode === "adminInbound") && (
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

      {/* -------------------- OUTBOUND NOTE -------------------- */}

      {(mode === "outbound" ||
        mode === "adminOutbound") &&
        item.note && (
          <div className="scrap-note outbound-note">
            <p className="note-title">
              Additional Note
            </p>
            <p className="note-text">
              {item.note}
            </p>
          </div>
        )}

      {/* -------------------- ADMIN OUTBOUND EXTRA ACTIONS -------------------- */}

      {mode === "adminOutbound" && (
        <div className="admin-outbound-actions">
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

          {item.status === "Approved" && (
            <button className="btn btn-primary">
              Send Approve Mail
            </button>
          )}

          {item.status ===
            "Pending by Finance team" && (
            <button className="btn btn-warning">
              Waiting for Finance
            </button>
          )}
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