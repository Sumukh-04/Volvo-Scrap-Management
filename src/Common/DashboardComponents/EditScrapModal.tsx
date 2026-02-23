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
      className="edit-dialog"
      maxWidth="xs"
      fullWidth
    >

      {/* Title */}
      <DialogTitle className="edit-dialog-title">
        Edit Scrap {scrap?.id}
      </DialogTitle>

      {/* Content */}
      <DialogContent className="edit-dialog-content">

        <label className="edit-label">
          Material Type
        </label>

        <TextField
          select
          fullWidth
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          className="edit-input"
          size="small"
        >
          {materialOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

      </DialogContent>

      {/* Actions */}
      <DialogActions className="edit-dialog-actions">

        <Box sx={{ display: "flex", gap: 2, ml: "auto" }}>

          <AppButton
            variant="outlined"
            onClick={onClose}
          >
            Cancel
          </AppButton>

          <AppButton
            variant="filled"
            onClick={handleSave}
          >
            Save
          </AppButton>

        </Box>

      </DialogActions>

    </Dialog>
  );
}
