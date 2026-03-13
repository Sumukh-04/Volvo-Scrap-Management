import { useState } from "react"
import syncIcon from "../../../assets/image-assets/sync.png"

type Props = {
  onSync?: () => Promise<void> | void
}

export default function SyncButton({ onSync }: Props) {

  const [isSyncing, setIsSyncing] = useState(false)

  const handleClick = async () => {
    setIsSyncing(true)

    try {
      await onSync?.()
    } finally {
      setTimeout(() => {
        setIsSyncing(false)
      }, 5000)
    }
  }

  return (
    <button
      className="btn btn-outline sync-btn"
      onClick={handleClick}
      disabled={isSyncing}
    >
      <img
        src={syncIcon}
        alt="Sync"
        className={`sync-icon ${isSyncing ? "rotating" : ""}`}
      />
    </button>
  )
}