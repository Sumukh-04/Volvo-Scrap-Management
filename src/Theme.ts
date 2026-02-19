import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
      dark: "#115293",
      light: "#4791DB",
    },
    secondary: {
      main: "#6C757D",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 600,
          padding: "8px 18px",
        },

        contained: {
          backgroundColor: "#202A44",
          color:"#fff",
          fontWeight:600,
        },

        outlined: {
          borderColor: "#1976D2",
          color: "#1976D2",
          "&:hover": {
            backgroundColor: "rgba(25,118,210,0.08)",
            borderColor: "#115293",
          },
        },

        text: {
          color: "#6C757D",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.04)",
          },
        },
      },
    },
  },
});
