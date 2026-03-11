import syncIcon from "../../../assets/image-assets/sync.png"
import AppLayout from "../../../layouts/AppLayout"
import StatsRow from "../../../Common/DashboardComponents/StatsRow"
import FilterBar from "../../../Common/DashboardComponents/Filterbar"
import ScrapGrid from "../../../Common/DashboardComponents/ScrapGrid"
import SyncButton from "../../../Common/Components/UI/SyncButton"

export default function Inbound() {
  return (
    <AppLayout
      header={
        <>
          <div className="flex-between">
            <h2 className="page-title">Sentry Dashboard</h2>

          <SyncButton/>
          </div>

          <StatsRow />
          <FilterBar mode="inbound"/>
        </>
      }
    >
      <ScrapGrid />
    </AppLayout>
  )
}
