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
/*
export default function StatsRow() {

  const stats = [
    { label: "All Scrap", value: 6 },
    { label: "Pending", value: 3 },
    { label: "Rejected", value: 1 },
    { label: "Overdue", value: 1 },
    { label: "Approved", value: 1 }
  ]

  const getValueClass = (label) => {
    switch(label) {
      case "All Scrap":
        return "stat-value-allscrap"
      case "Pending":
        return "stat-value-pending"
      case "Approved":
        return "stat-value-approved"
      case "Overdue":
        return "stat-value-overdue"
      case "Rejected":
        return "stat-value-rejected"
      default:
        return "stat-value"
    }
  }

  return (
    <div className="stats-row">
      {stats.map((s, i) => (
        <div 
          key={i}
          className={
            s.label === "All Scrap"
              ? "stat-card primary"
              : "stat-card"
          }
        >

          <div
            className={
              s.label === "All Scrap"
                ? "stat-label-allscrap"
                : "stat-label"
            }
          >
            {s.label}
          </div>

          <div className={getValueClass(s.label)}>
            {s.value}
          </div>

        </div>
      ))}
    </div>
  )
}
*/