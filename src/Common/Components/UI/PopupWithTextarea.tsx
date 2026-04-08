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
    setReason(""); 
  };

  const handleClose = () => {
    setReason(""); 
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
          minRows={1}
          placeholder="Enter reason for unscheduling..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Box sx={{ display: "flex", gap: 2, ml: "auto" }}>
          
          <AppButton variant="outlined" onClick={handleClose} sx={{ height: "30px" }}>
            No
          </AppButton>
          <AppButton
            variant="filled"
            onClick={handleConfirm}
            disabled={!reason.trim()}
            sx={{ height: "30px",
                  "&.Mui-disabled": {
                  color: "#9ca3af",
                  cursor: "not-allowed"
                }
            }}
               
          >
            Yes
          </AppButton>

        </Box>
      </DialogActions>
    </Dialog>
  );
}