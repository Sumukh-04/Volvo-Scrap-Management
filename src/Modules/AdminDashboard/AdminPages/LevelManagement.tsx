import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import backArrow from "../../../assets/image-assets/Back_Arrow.png"
import DeleteIcon from "../../../assets/image-assets/bin_delete.png"
import AppButton from "../../../Common/Components/UI/ButtonUI";

export default function LevelManagement() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        pt: 2,
      }}
    >
      
      <Box
        sx={{
          width: "100%",
          maxWidth: 700,
          display: "flex",
          flexDirection: "column",
        }}
      >
        
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
         <div className="left-user-main">
          <img src={backArrow} alt="back" className="back-main" />
          <div className="filter-title">
            <p>Level Management</p>
          </div>
        </div>
        </Box>

        <Paper
          elevation={0}
          sx={{
            width: "100%",
            p: 3,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography fontWeight={500}>Role Category</Typography>
            <AppButton
              variant="outlined"
              size="small"
              sx={{ textTransform: "none" , height:"35px"}}
            >
              Create Level
            </AppButton>
          </Box>

          <Divider />

          {/* Assembly */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
            }}
          >
            <Typography fontWeight={500}>Assembly</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", color: "gray" }}
              >
                Add Sub-category
              </Typography>
              <IconButton size="small">
                <img
                      src={DeleteIcon}
                      alt="delete"
                      style={{
                        width: "14px",
                        height: "18px",
                        cursor: "pointer"
                      }}
                    />
              </IconButton>
            </Box>
          </Box>

          <Divider />

          {/* Inbound */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
            }}
          >
            <Typography fontWeight={500}>Inbound</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", color: "gray" }}
              >
                Add Sub-category
              </Typography>
              <IconButton size="small">
                <img
                      src={DeleteIcon}
                      alt="delete"
                      style={{
                        width: "14px",
                        height: "18px",
                        cursor: "pointer"
                      }}
                    />
              </IconButton>
            </Box>
          </Box>

          <Divider />

          {/* Outbound */}
          <Box sx={{ py: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography fontWeight={500}>Outbound</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography
                  variant="body2"
                  sx={{ cursor: "pointer", color: "gray" }}
                >
                  Add Sub-category
                </Typography>
                <IconButton size="small">
                  <img
                      src={DeleteIcon}
                      alt="delete"
                      style={{
                        width: "14px",
                        height: "18px",
                        cursor: "pointer"
                      }}
                    />
                </IconButton>
              </Box>
            </Box>

            {/* Sub Levels */}
            <Box sx={{ pl: 4, mt: 2 }}>
              {["L1 Manager", "L2 Manager", "L3 Manager"].map((level) => (
                <Box
                  key={level}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1,
                  }}
                >
                  <Typography variant="body2">{level}</Typography>
                  <IconButton size="small">
                    <img
                      src={DeleteIcon}
                      alt="delete"
                      style={{
                        width: "14px",
                        height: "18px",
                        cursor: "pointer"
                      }}
                    />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}