export type ScrapStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | "Overdue"
  | "Draft"
  | "Sent For Approval"
  | "Resubmitted"
  | "Pending by Finance Team"
  | "Challan Generated";


type StatusBadgeProps = {
  status: ScrapStatus
}

export default function StatusBadge({ status }: StatusBadgeProps) {

  const statusClass = `status-badge status-${status.toLowerCase()}`

  return (
    <span className={statusClass}>
      {status}
    </span>
  )
}