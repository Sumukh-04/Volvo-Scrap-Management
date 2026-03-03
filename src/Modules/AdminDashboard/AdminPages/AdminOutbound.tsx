import { ScrapItem } from "../../../Common/DashboardComponents/ScrapCard";
import AdminOutboundCard from "../AdminComponents/AdminOutboundCard";

type AdminOutboundProps = {
  data: ScrapItem[];
};

export default function AdminOutbound({ data }: AdminOutboundProps) {
  return (
    <div className="scrap-grid admin-outbound-grid">
      {data.map((item) => (
        <AdminOutboundCard key={item.id} item={item} />
      ))}
    </div>
  );
}