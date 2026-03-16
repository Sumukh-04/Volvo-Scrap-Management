import { useState, useEffect } from "react";
import ScrapCardSkeleton from "../Components/Skeleton/skeleton"; 
type StatsRowProps = {
  variant?: "default" | "adminInbound" | "adminOutbound";
  onFilterChange?: (filter: string) => void;
};

export default function StatsRow({
  variant = "default",
  onFilterChange,
}: StatsRowProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true); 

  const defaultStats = [
    { label: "All Scrap", value: 325, type: "all" },
    { label: "Pending", value: 42, type: "pending" },
    { label: "Rejected", value: 54, type: "rejected" },
    { label: "Overdue", value: 23, type: "overdue" },
    { label: "Approved", value: 206, type: "approved" },
  ];

  const adminInboundStats = [
    { label: "All Scrap", value: 302, type: "all" },
    { label: "Pending", value: 42, type: "pending" },
    { label: "Rejected", value: 54, type: "rejected" },
    { label: "Approved", value: 206, type: "approved" },
  ];

  const adminOutboundStats = [
    { label: "All Scrap", value: 325, type: "primary" },
    { label: "Approved", value: 206, type: "approved" },
    { label: "Pending", value: 42, type: "pending" },
    { label: "Rejected", value: 10, type: "rejected" },
    { label: "Finance Pending", value: 23, type: "finance pending" },
    { label: "Chalan Generated", value: 206, type: "chalan generated" },
  ];
  const outboundStats = [
      { label: "All Scrap", value: 325, type: "all" }, 
      { label: "Pending", value: 42, type: "pending" },
      { label: "Draft", value: 20, type: "draft" },
      { label: "Sent For Approval", value: 30, type: "sent for approval" },
      { label: "Resubmitted", value: 30, type: "resubmitted" } ]

  const statsMap = {
    default: defaultStats,
    adminInbound: adminInboundStats,
    adminOutbound: adminOutboundStats,
    outbound: outboundStats,
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
              <div className="stat-value">{s.value}</div>
            </div>
          ))}
    </div>
  );
}