import OutboundGridData from "../GridData/OutboundGridData";
import ScrapCard from "../../../../Common/DashboardComponents/ScrapCard";

export default function OutboundGrid() {
  return (
    <div className="scrap-grid">
      {OutboundGridData.map((item, index) => (
        <ScrapCard
          key={index}
          item={item}
          mode="outbound"
        />
      ))}
    </div>
  );
}
