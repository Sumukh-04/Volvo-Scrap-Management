import filterIcon from "../../assets/image-assets/filter.png";

export default function FilterBar({ mode = "inbound" }) {
  const isOutbound = mode === "outbound";

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

        <button className="btn-filter">
          <img src={filterIcon} className="filter-icon" alt="" />
          Filter
        </button>

      </div>
    </div>
  );
}

