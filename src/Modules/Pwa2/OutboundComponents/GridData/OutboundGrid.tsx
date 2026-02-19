import { useState } from "react";
import OutboundGridData from "../GridData/OutboundGridData";
import ScrapCard, {
  ScrapItem,
} from "../../../../Common/DashboardComponents/ScrapCard";
import OutboundModal from "../../OutboundComponents/Create/OutboundModal";

export default function OutboundGrid() {
  const [selectedItem, setSelectedItem] =
    useState<ScrapItem | null>(null);

  return (
    <>
      <div className="scrap-grid">
        {OutboundGridData.map((item) => (
          <ScrapCard
            key={item.id}
            item={item}
            mode="outbound"
            onClick={(item) => setSelectedItem(item)}
          />
        ))}
      </div>

      <OutboundModal
        open={Boolean(selectedItem)}
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}
