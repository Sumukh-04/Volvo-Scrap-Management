import {
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  TextField
} from "@mui/material";
import { useState } from "react";
import AppButton from "./ButtonUI";

type Props = {
  open: boolean;
  message: string;
  onClose: () => void;
  onConfirm: (reason: string) => void;
};

export default function PopupWithTextarea({
  open,
  message,
  onClose,
  onConfirm
}: Props) {

  const [reason, setReason] = useState("");

  const handleConfirm = () => {
    if (!reason.trim()) return;
    onConfirm(reason);
    setReason(""); // reset after submit
  };

  const handleClose = () => {
    setReason(""); // reset on close
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      
      <DialogContent sx={{ px: 3, py: 3 }}>
        <Typography sx={{ mb: 2 }}>
          {message}
        </Typography>

        <TextField
          fullWidth
          multiline
          minRows={3}
          placeholder="Enter reason..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Box sx={{ display: "flex", gap: 2, ml: "auto" }}>
          
          <AppButton variant="outlined" onClick={handleClose}>
            No
          </AppButton>

          <AppButton
            variant="filled"
            onClick={handleConfirm}
            disabled={!reason.trim()}   // ✅ KEY REQUIREMENT
          >
            Yes
          </AppButton>

        </Box>
      </DialogActions>
    </Dialog>
  );
}