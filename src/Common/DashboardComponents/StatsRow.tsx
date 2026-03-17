import { useState, useEffect } from "react";
import ScrapCardSkeleton from "../Components/Skeleton/skeleton"; 
type StatsRowProps = {
  variant?: "default" | "adminInbound" | "adminOutbound" | "inbound" | "outbound" | "l1l2l3";
  onFilterChange?: (filter: string) => void;
  data?: any[];
};

export default function StatsRow({
  variant = "default",
  onFilterChange,
  data
}: StatsRowProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true); 

  const defaultStats = [
    { label: "All Scrap",  type: "all" },
    { label: "Pending",  type: "pending" },
    { label: "Rejected",  type: "rejected" },
    { label: "Overdue",  type: "overdue" },
    { label: "Approved",  type: "approved" },
  ];
   const inboundtStats = [
    { label: "All Scrap",  type: "all" },
    { label: "Pending",  type: "pending" },
    { label: "Rejected",  type: "rejected" },
    { label: "Overdue",  type: "overdue" },
    { label: "Approved",  type: "approved" },
  ];

  const adminInboundStats = [
    { label: "All Scrap",  type: "all" },
    { label: "Pending",  type: "pending" },
    { label: "Rejected",  type: "rejected" },
    { label: "Approved",  type: "approved" },
  ];

  const adminOutboundStats = [
    { label: "All Scrap",  type: "all" },
    { label: "Approved",  type: "approved" },
    { label: "Pending",  type: "pending" },
    { label: "Rejected",  type: "rejected" },
    { label: "Finance Pending",  type: "pending by finance team" },
    { label: "Challan Generated",  type: "challan generated" },
  ];
  const outboundStats = [
      { label: "All Scrap", value:24, type: "all" }, 
      { label: "Pending",  type: "pending" },
      { label: "Draft",  type: "draft" },
      { label: "Sent For Approval",  type: "sent for approval" },
      { label: "Resubmitted",  type: "resubmitted" } 
    ];
  const l1l2l3Stats = [
    { label: "All Scrap",  type: "all" },
    { label: "Pending",  type: "pending" },
    { label: "Rejected",  type: "rejected" },
    { label: "Approved",  type: "approved" },    
    ];

  const statsMap = {
    default: defaultStats,
    adminInbound: adminInboundStats,
    adminOutbound: adminOutboundStats,
    outbound: outboundStats,
    inbound: adminInboundStats,
    l1l2l3: l1l2l3Stats,
  };

  const countByStatus = (status: string) => {
  if (!data) return 0;

  if (status === "all") return data.length;

  return data.filter(
    (item) => item.status?.toLowerCase() === status.toLowerCase() 
  ).length;
};

 const stats = statsMap[variant] || [];


 const handleClick = (label: string) => {
  setActiveFilter(label);
  onFilterChange?.(label);
};

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s for loading.
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`stats-row ${variant}`}>
      {loading
        ? stats.map((_, i) => <ScrapCardSkeleton key={i} />) 
        : stats.map((s, i) => (
            <div
              key={i}
              className={`stat-card ${s.type} ${
               activeFilter === s.type ? "active" : ""
              }`}
              data-status={s.type}
             onClick={() => handleClick(s.type)}
            >
              <div className="stat-label">{s.label}</div>
             <div className="stat-value">{countByStatus(s.type)}</div>
            </div>
          ))}
    </div>
  );
}