import SyncButton from "../../../Common/Components/UI/SyncButton";
import { useState } from "react";
import AppLayout from "../../../layouts/AppLayout";
import StatsRow from "../../../Common/DashboardComponents/StatsRow";
import FilterBar from "../../../Common/DashboardComponents/Filterbar";
import OutboundGrid from "../OutboundComponents/GridData/OutboundGrid";
import OutboundGridData from "../OutboundComponents/GridData/OutboundGridData";

export default function Outbound() {
  const [filter, setFilter] = useState("all");

  // ✅ Dynamic stats generator
  const getStats = (data) => {
    const counts = {
      all: data.length,
      pending: 0,
      draft: 0,
      "sent for approval": 0,
      resubmitted: 0,
    };

    data.forEach((item) => {
      const status = item.status.toLowerCase();
      if (counts[status] !== undefined) {
        counts[status]++;
      }
    });

    return Object.keys(counts).map((key) => ({
      type: key,
      value: counts[key],
    }));
  };

  //For Generating real-time stats
  const statsData = getStats(OutboundGridData);

  return (
    <AppLayout
      header={
        <>
          <div className="flex-between">
            <h2 className="page-title">Egress Dashboard</h2>
            <SyncButton />
          </div>

         
           <StatsRow
            variant="outbound"
            onFilterChange={setFilter}
            data={OutboundGridData}   
            activeFilter={filter}
          />
        
          <FilterBar mode="outbound" />
        </>
      }
    >
      <OutboundGrid filter={filter} />
    </AppLayout>
  );
}