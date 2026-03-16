import SyncButton from "../../../Common/Components/UI/SyncButton"
import {useState} from "react"
import AppLayout from "../../../layouts/AppLayout"
import StatsRow from "../../../Common/DashboardComponents/StatsRow"
import FilterBar from "../../../Common/DashboardComponents/Filterbar"
import  OutboundGrid  from "../OutboundComponents/GridData/OutboundGrid"

export default function Outbound() {

  const[filter , setFilter] =useState("all")
  return (
    <AppLayout
      header={
        <>
          <div className="flex-between">
            <h2 className="page-title">Egress Dashboard</h2>
            <SyncButton/>
          </div>

          <StatsRow 
          variant="outbound"
          onFilterChange={setFilter}
          data={[
    { type: "all", value: 15 },
    { type: "pending", value: 5 },
    { type: "draft", value: 3 },
    { type: "sent for approval", value: 4 },
    { type: "resubmitted", value: 3 },
  ]} />
          <FilterBar mode="outbound" />
        </>
      }
    >
      <OutboundGrid filter={filter}/>
    </AppLayout>
  )
}