import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Box
} from "@mui/material";

import { useState, useEffect } from "react";
import type { ScrapItem } from "./ScrapCard";
import AppButton from "../Components/UI/ButtonUI";
type Props = {
  open: boolean;
  scrap: ScrapItem | null;
  onClose: () => void;
  onSave: (updated: ScrapItem) => void;
};

const materialOptions = [
  "Aluminum",
  "Steel",
  "Copper",
  "Magnesium",
  "Plastic",
  "Others"
];

export default function EditScrapDialog({
  open,
  scrap,
  onClose,
  onSave
}: Props) {

  const [material, setMaterial] = useState("");

  useEffect(() => {
    if (scrap) {
      setMaterial(scrap.type);
    }
  }, [scrap]);

  const handleSave = () => {
    if (!scrap) return;

    onSave({
      ...scrap,
      type: material
    });

    onClose();
  };

  return (
    <Dialog
  open={open}
  onClose={onClose}
  maxWidth="sm"
  fullWidth
>
  <DialogTitle sx={{ px: 3}}>
    Edit Scrap {scrap?.id}
  </DialogTitle>

  <DialogContent sx={{ px: 3, pt: 2 }}>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <label style={{ fontSize: 14, fontWeight: 400, color:"#888B8D" }}>
        Material Type
      </label>

      <TextField
        select
        fullWidth
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
        size="small"
      >
        {materialOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  </DialogContent>

  <DialogActions sx={{ px: 3, pb: 3 }}>
    <Box sx={{ display: "flex", gap: 2, ml: "auto" }}>
      <AppButton variant="outlined" onClick={onClose} sx={{height:"30px"}}>
        Cancel
      </AppButton>

      <AppButton variant="filled" onClick={handleSave} sx={{height:"30px"}}>
        Save
      </AppButton>
    </Box>
  </DialogActions>
</Dialog>
  );
}
