import { Drawer } from "@mui/material"
import closeIcon from "../../../assets/image-assets/close_icon.png"
import fileExport from "../../../assets/image-assets/FileExport.svg"

type HistoryItem = {
  title: string
  user?: string
  time?: string
  comment?: string
}

type Props = {
  open: boolean
  onClose: () => void
  scrapTitle: string
  history: HistoryItem[]
}

export default function HistoryDrawer({
  open,
  onClose,
  scrapTitle,
  history
}: Props) {

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >
    <div className="history-drawer">

      {/* Header */}
      <div className="history-header">
        <div className="history-title">History</div>
        <button className="history-close" onClick={onClose}>
          <img
            src={closeIcon}
            alt="close"
            className="history-close-icon"
          />
        </button>
      </div>

      {/* Scrap Title*/}
      <div className="history-subheader">
        <div className="history-scrap-title">{scrapTitle}</div>
        <div className="history-export">
          <img
            src={fileExport}
            alt="fileExport"
            className="history-export-icon"
          /> 
           Export log</div>
      </div>
          <div className="history-timeline">

        {history.map((h, i) => (
            <div className="timeline-row" key={i}>

            <div className="timeline-left">
                <div className="timeline-dot"></div>

                {i !== history.length - 1 && (
                <div className="timeline-line"></div>
                )}
            </div>

            <div className="timeline-content">
                <div className="timeline-title">
                {h.title}
                </div>

                {h.user && (
                <div className="timeline-user">
                    {h.user}
                </div>
                )}

                {h.time && (
                <div className="timeline-time">
                    {h.time}
                </div>
                )}

                {h.comment && (
                <div className="timeline-comment">
                    <div className="timeline-comment-title">Comment</div>
                    <div className="timeline-comment-text">
                    {h.comment}
                    </div>
                </div>
                )}

            </div>

            </div>
        ))}

      </div>
</div>
    </Drawer>
  )
}