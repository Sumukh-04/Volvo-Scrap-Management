import { useState, useEffect } from "react";
import OutboundGridData from "../GridData/OutboundGridData";
import ScrapCard, {
  ScrapItem,
} from "../../../../Common/DashboardComponents/ScrapCard";
import OutboundModal from "../../OutboundComponents/Create/OutboundModal";
import ScrapCardSkeleton from "../../../../Common/Components/Skeleton/skeleton";

type Props = {
  filter: string;
};

export default function OutboundGrid({ filter }: Props) {
  const [selectedItem, setSelectedItem] =
    useState<ScrapItem | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  const filteredData =
    filter === "All Scrap"
      ? OutboundGridData
      : OutboundGridData.filter(
          (item) =>
            item.status.toLowerCase() === filter.toLowerCase()
        );

  return (
    <>
      <div className="scrap-grid">

        {loading
          ? Array.from({ length: 18 }).map((_, i) => (
              <ScrapCardSkeleton key={i} />
            ))
          : filteredData.map((item) => (
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