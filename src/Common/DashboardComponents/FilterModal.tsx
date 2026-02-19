import {
  Autocomplete,
  TextField,
  Popper,
  Chip,
  Button,
  ClickAwayListener
} from "@mui/material"

import { useState } from "react"


type FilterModalProps = {
  open: boolean
  anchorEl: HTMLElement | null
  onClose: () => void
}

const statusOptions = ["Pending", "Approved", "Rejected", "Overdue"]
const weightOptions = ["25–50 kg", "50–75 kg", "75–100 kg", "100–125 kg"]

export default function FilterModal({
  open,
  anchorEl,
  onClose
}: FilterModalProps) {

  const [status, setStatus] = useState<string[]>([])
  const [weight, setWeight] = useState<string[]>([])

  return (
  <Popper
    open={open}
    anchorEl={anchorEl}
    placement="bottom-end"
    className="filter-popper"
  >
    <ClickAwayListener onClickAway={onClose}>
      <div className="filter-dropdown">

        <div className="filter-section">Date Range
          <div className="date-row">
            <div className="date-field">
              <label>From</label>
              <TextField type="date" size="small" fullWidth />
            </div>

            <div className="date-field">
              <label>To</label>
              <TextField type="date" size="small" fullWidth />
            </div>
          </div>
        </div>

        <div className="filter-divider" />

        <div className="filter-section">
          <div className="filter-section-title">Status</div>

          <div className="chip-row">
            {statusOptions.map((s) => (
              <button
                key={s}
                className={`chip-btn ${status.includes(s) ? "active" : ""}`}
                onClick={() =>
                  setStatus((prev) =>
                    prev.includes(s)
                      ? prev.filter((i) => i !== s)
                      : [...prev, s]
                  )
                }
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-divider" />

        <div className="filter-section">
          <div className="filter-section-title">Weight Range</div>

          <div className="chip-row">
            {weightOptions.map((w) => (
              <button
                key={w}
                className={`chip-btn ${weight.includes(w) ? "active" : ""}`}
                onClick={() =>
                  setWeight((prev) =>
                    prev.includes(w)
                      ? prev.filter((i) => i !== w)
                      : [...prev, w]
                  )
                }
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-divider" />

        <div className="filter-actions">
          <Button
            variant="outlined"
            className="btn-cancel"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            className="btn-apply"
            onClick={onClose}
          >
            Apply
          </Button>
        </div>

      </div>
    </ClickAwayListener>
    </Popper>
  )
}