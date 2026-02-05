import syncIcon from "../assets/sync.png"
import TopBar from "../components/TopBar"
import StatsRow from "../components/StatsRow"
import FilterBar from "../components/FilterBar"
import ScrapGrid from "../components/ScrapGrid"

export default function Inbound() {

  return (
    <>
      <TopBar />

      <div className="sticky-section">

        <div className="flex-between">
          <h2 className="page-title">Sentry Dashboard</h2>

          <button className="btn btn-outline sync-btn">
            <img
              src={syncIcon}
              alt="Sync"
              className="sync-icon"
            />
          </button>
        </div>

        <StatsRow />
        <FilterBar />
      </div>

      <div className="scroll-area">
        <ScrapGrid />
      </div>
    </>
  )
}

