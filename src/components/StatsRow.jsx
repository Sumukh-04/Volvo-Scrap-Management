export default function StatsRow() {

  const stats = [
    { label: "All Scrap", value: 6, type: "primary" },
    { label: "Pending", value: 3, type: "pending" },
    { label: "Rejected", value: 1, type: "rejected" },
    { label: "Overdue", value: 1, type: "overdue" },
    { label: "Approved", value: 1, type: "approved" }
  ]

  return (
    <div className="stats-row">
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
