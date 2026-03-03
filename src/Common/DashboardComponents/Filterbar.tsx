import { useState } from "react"
import filterIcon from "../../assets/image-assets/filter.png";
import FilterModal from "./FilterModal"
import AppButton from "../Components/UI/ButtonUI"

type FilterBarProps = {
  mode?: "inbound" | "outbound" | "adminInbound"
}

export default function FilterBar({ mode = "inbound" }: FilterBarProps) {

  const isOutbound = mode === "outbound";
  const isAdminInbound = mode === "adminInbound"


  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [activeTab, setActiveTab] = useState("All")

  const handleFilterClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)

  return (
    <div className="filter-row">
      {!isAdminInbound && (
        <div className="filter-title">Scrap</div>
      )}

      {isAdminInbound && (
        <div className="admin-filter-tabs">
          <AppButton
            variant={activeTab === "All" ? "filled" : "outlined"}
            onClick={() => setActiveTab("All")}
            sx={{
              height: 28,
              fontSize: "14px",
              padding: "4px 14px",
              borderRadius: "2px",
              minWidth: "auto",
            }}
          >
          <div className="scheduled-label">
            All
          </div>
          </AppButton>

          <AppButton
            variant={activeTab === "Today" ? "filled" : "outlined"}
            onClick={() => setActiveTab("Today")}
            sx={{
              height: 28,
              fontSize: "14px",
              padding: "4px 14px",
              borderRadius: "2px",
              minWidth: "auto",
            }}
          >
          <div className="scheduled-label">
            Scheduled for today (15)
          </div>
          </AppButton>

          <AppButton
            variant={activeTab === "Tomorrow" ? "filled" : "outlined"}
            onClick={() => setActiveTab("Tomorrow")}
            sx={{
              height: 28,
              fontSize: "14px",
              padding: "4px 14px",
              borderRadius: "2px",
              minWidth: "auto",
            }}
          >
          <div className="scheduled-label">
            Scheduled for Tomorrow (10)
          </div>
          </AppButton>

          <AppButton
            variant={activeTab === "Unscheduled" ? "filled" : "outlined"}
            onClick={() => setActiveTab("Unscheduled")}
            sx={{
              height: 28,
              fontSize: "14px",
              padding: "4px 14px",
              borderRadius: "2px",
              minWidth: "auto",
            }}
          >
          <div className="scheduled-label">
            Unscheduled (6)
          </div>
          </AppButton>
        </div>
      )}

      <div className="filter-controls">

        {!isOutbound && (
          <>
            <input
              className="input"
              placeholder="Search"
            />

            <div className="sort-group">
              <span className="sort-label">Sort By </span>

              <select className="input">
                <option value="">Select</option>
                <option>Others</option>
                <option>Aluminium</option>
                <option>Magnesium</option>
              </select>
            </div>
          </>
        )}

        <button
          className="btn-filter"
          onClick={handleFilterClick}
        >
        <img
            src={filterIcon}
            className="filter-icon"
            alt=""
        />
          Filter
        </button>

        <FilterModal
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        />
      </div>
    </div>
  );
}



