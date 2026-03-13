import { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard";
import AdminOutboundCard from "../AdminComponents/AdminOutboundCard";
import ScrapCardSkeleton from "../../../Common/Components/Skeleton/skeleton";

type AdminOutboundProps = {
  data: ScrapItem[];
  loading?: boolean;
};

export default function AdminOutbound({ data, loading }: AdminOutboundProps) {
  return (
    <div className="scrap-grid admin-outbound-grid">

      {loading
        ? Array.from({ length: 18 }).map((_, i) => (
            <div key={i}>
              <ScrapCardSkeleton />
            </div>
          ))
        : data.map((item) => (
            <AdminOutboundCard key={item.id} item={item} />
          ))}

    </div>
  );
}