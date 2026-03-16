import { useState } from "react"
import AppLayout from "../../../layouts/AppLayout"
import StatsRow from "../../../Common/DashboardComponents/StatsRow"
import FilterBar from "../../../Common/DashboardComponents/Filterbar"
import ScrapGrid from "../../../Common/DashboardComponents/ScrapGrid"
import SyncButton from "../../../Common/Components/UI/SyncButton"

export default function Inbound() {

  const [filter, setFilter] = useState("all")

  return (
    <AppLayout
      header={
        <>
          <div className="flex-between">
            <h2 className="page-title">Sentry Dashboard</h2>
            <SyncButton/>
          </div>

          <StatsRow onFilterChange={setFilter} />

          <FilterBar mode="inbound"/>
        </>
      }
    >
      <ScrapGrid filter={filter} />
    </AppLayout>
  )
}