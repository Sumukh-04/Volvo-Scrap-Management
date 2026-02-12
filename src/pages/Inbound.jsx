import syncIcon from "../assets/image-assets/sync.png"
import AppLayout from "../layouts/AppLayout"
import StatsRow from "../components/dashboard/StatsRow"
import FilterBar from "../components/dashboard/FilterBar"
import ScrapGrid from "../components/dashboard/ScrapGrid"

export default function Inbound() {
  return (
    <AppLayout
      header={
        <>
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
        </>
      }
    >
      <ScrapGrid />
    </AppLayout>
  )
}
