import {
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Typography
} from "@mui/material";
import AppButton from "./ButtonUI";

type Props = {
  open: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function AlertModal({
  open,
  message,
  onConfirm,
  onCancel
}: Props) {
  return (
    <Dialog open={open} onClose={onCancel} maxWidth="sm" fullWidth>
      <DialogContent sx={{ px: 2, py: 2 }}>
        <Typography sx={{ fontSize: 15 }}>
          {message}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ px: 1, pb: 1 }}>
        <Box sx={{ display: "flex", gap: 2, ml: "auto" }}>
          <AppButton variant="outlined" onClick={onCancel}>
            No
          </AppButton>

          <AppButton variant="filled" onClick={onConfirm}>
            Yes
          </AppButton>
        </Box>
      </DialogActions>
    </Dialog>
  );
}