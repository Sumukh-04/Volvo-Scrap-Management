import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

function ScrapCardSkeleton() {
  return (
    <Box
      className="stat-card" // reuse the same class for layout
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
        borderRadius: 1, // match your --radius-sm
        height: 57.57,
        width: "100%",
        maxWidth: 344.57,
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Label skeleton */}
      <Skeleton variant="text" width="60%" height={20} />

      {/* Value skeleton */}
      <Skeleton variant="text" width="20%" height={20} />
    </Box>
  );
}

export default ScrapCardSkeleton;