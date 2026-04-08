import {
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Typography
} from "@mui/material";
import AppButton from "./ButtonUI";
import alertIcon from "../../../assets/image-assets/alert-triangle.svg";

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
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          
          <img
            src={alertIcon}
            alt="alert"
            style={{ width: 24, height: 24 }}
          />
          <Typography sx={{ fontSize: 15 }}>
            {message}
          </Typography>

        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 1, pb: 1 }}>
        <Box sx={{ display: "flex", gap: 2, ml: "auto" }}>
          <AppButton variant="outlined" onClick={onCancel} sx={{ height: "30px" }}>
            No
          </AppButton>

          <AppButton variant="filled" onClick={onConfirm} sx={{ height: "30px" }}>
            Yes
          </AppButton>
        </Box>
      </DialogActions>
    </Dialog>
  );
}