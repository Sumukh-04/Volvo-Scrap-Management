export default function StatusBadge({ status }) {

  const statusClass = `status-badge status-${status.toLowerCase()}`

  return (
    <span className={statusClass}>
      {status}
    </span>
  )
}