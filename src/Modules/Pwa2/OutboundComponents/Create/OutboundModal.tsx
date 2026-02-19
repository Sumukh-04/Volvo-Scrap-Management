import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Box,
} from "@mui/material";
import { ScrapItem } from "../../../../Common/DashboardComponents/ScrapCard";
import stat from "../../../../assets/image-assets/stat-image.png";
import AppButton from "../../../../Common/Components/UI/ButtonUI";

type Props = {
  open: boolean;
  item: ScrapItem | null;
  onClose: () => void;
};

export default function OutboundModal({
  open,
  item,
  onClose,
}: Props) {
  if (!item) return null;

  return (
  <Dialog
  open={open}
  onClose={onClose}
  maxWidth="lg"
  fullWidth
  PaperProps={{
    sx: {
      minHeight: 520,
      display: "flex",
      flexDirection: "column",
      background:"#F8F7F7",
    },
  }}
>
  {/* MAIN BODY */}
  <Box
    sx={{
      flex: 1,
      display: "flex",
      overflow: "hidden",
      p:3
    }}
  >
    {/* LEFT SIDE — IMAGE */}
    <Box
      sx={{
        flex: 1,
        padding:"10px",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <Box
        component="img"
        src={stat}
        alt="scrap"
        sx={{
          width: "100%",
          height:"95%",
          objectFit: "cover",
        }}
      />
    </Box>

    {/* RIGHT SIDE — FORM */}
    <Box
      sx={{
        flex: 1.4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p:1
        
      }}
    >
      {/* INPUTS */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, background:"#fff", py:3, px:3 }}>
        {/* Row 1 */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ fontSize: 13, mb: 1 }}>
              Material Type
            </Box>
            <TextField value={item.type} fullWidth disabled size="small" />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ fontSize: 13, mb: 1 }}>
              Net Weight (kg)
            </Box>
            <TextField value={item.weight} fullWidth disabled size="small" />
          </Box>
        </Box>

        {/* Row 2 */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ fontSize: 13, mb: 1 }}>
              Sentry Verified Status
            </Box>
            <TextField value="Approved" fullWidth disabled size="small" />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ fontSize: 13, mb: 1 }}>
              Inbound Date & Time
            </Box>
            <TextField value={item.date} fullWidth disabled size="small" />
          </Box>
        </Box>

        
        <Box>
          <Box sx={{ fontSize: 13, mb: 1 }}>
            Comments
          </Box>
          <TextField
            multiline
            rows={5}
            fullWidth
            defaultValue={
              item.note ||
              "Significant discrepancy in scrap condition; approval cannot be granted."
            }
          />
        </Box>
      </Box>

      
      <Box
        sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:1
        }}
        >
        <AppButton>Save to Draft</AppButton>
        <Box sx={{ display: "flex", gap: 2 }}>
            <AppButton variant="outlined" onClick={onClose}>Cancel</AppButton>
            <AppButton variant="filled">
            Send For Approval
            </AppButton>
        </Box>
        </Box>
    </Box>
  </Box>
</Dialog>

  );
}
