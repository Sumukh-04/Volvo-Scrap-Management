import { useState } from "react"
import filterIcon from "../../assets/image-assets/filter.png";
import FilterModal from "./FilterModal"

export default function FilterBar({ mode = "inbound" }) {
  const isOutbound = mode === "outbound";

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleFilterClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)

  return (
    <div className="filter-row">
      <div className="filter-title">Scrap</div>

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



