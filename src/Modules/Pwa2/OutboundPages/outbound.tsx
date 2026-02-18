// import syncIcon from "../../../assets/image-assets/sync.png"
import AppLayout from "../../../layouts/AppLayout"
import StatsRow from "../../../Common/DashboardComponents/StatsRow"
import FilterBar from "../../../Common/DashboardComponents/Filterbar"
import  OutboundGrid  from "../OutboundComponents/GridData/OutboundGrid"

export default function Outbound() {
  return (
    <AppLayout
      header={
        <>
          <div className="flex-between">
            <h2 className="page-title">Egress Dashboard</h2>

            <button className="btn btn-outline sync-btn">
              <img
                // src={syncIcon}
                alt="Sync"
                className="sync-icon"
              />
            </button>
          </div>

          <StatsRow />
          <FilterBar mode="outbound" />
        </>
      }
    >
      <OutboundGrid/>
    </AppLayout>
  )
}