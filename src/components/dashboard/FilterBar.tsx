
import filterIcon from "../../assets/image-assets/filter.png"
export default function FilterBar() {
  return (
    <div className="filter-row">

      <div className="filter-title">
        Scrap
      </div>

      <div className="filter-controls">

        <input 
          className="input"
          placeholder="Search"
        />

        <div className="sort-group">
          <span className="sort-label">Sort By </span>

          <select className="input">
            <option value="">Select</option>
            <option>Copper</option>
            <option>Aluminium</option>
            <option>Magnesium</option>
            <option>Plastic</option>
            <option>Steel</option>
            <option>Others</option>
          </select>
        </div>

        <button className="btn-filter">
        <img src={filterIcon} className="filter-icon" alt="" />
        Filter
        </button>

      </div>
    </div>
  )
}
