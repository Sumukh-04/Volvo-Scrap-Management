type StatsRowProps = {
  variant?: "default" | "adminInbound" | "adminOutbound"
}

export default function StatsRow({ variant = "default" }: StatsRowProps) {

  const defaultStats = [
    { label: "All Scrap", value: 325, type: "primary" },
    { label: "Pending", value: 42, type: "pending" },
    { label: "Rejected", value: 54, type: "rejected" },
    { label: "Overdue", value: 23, type: "overdue" },
    { label: "Approved", value: 206, type: "approved" }
  ]

    const adminInboundStats = [
    { label: "All Scrap", value: 302, type: "primary" },
    { label: "Pending", value: 42, type: "pending" },
    { label: "Rejected", value: 54, type: "rejected" },
    { label: "Approved", value: 206, type: "approved" }
  ]

  const adminOutboundStats = [
    { label: "All Scrap", value: 325, type: "primary" },
    { label: "Pending", value: 42, type: "pending" },
    { label: "Rejected", value: 10, type: "rejected" },
    { label: "Pending By Finance Team", value: 23, type: "pending" },
    { label: "Approved", value: 206, type: "approved" }
  ]

  const stats =
    variant === "adminInbound"
      ? adminInboundStats
      : defaultStats
    variant === "adminOutbound"
      ? adminOutboundStats
      : defaultStats


  return (
    <div className={`stats-row ${variant}`}>
      {stats.map((s, i) => (
        <div
          key={i}
          className={`stat-card ${s.type}`}
          data-status={s.type}
        >
          <div className="stat-label">{s.label}</div>
          <div className="stat-value">{s.value}</div>
        </div>
      ))}
    </div>
  )
}
