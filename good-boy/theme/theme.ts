import { createTheme } from "@mui/material/styles";

const primaryColor = "#4F46E5";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: "#0288D1",
    },
  },

  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "#555",
          borderColor: "#ccc",
          "&.Mui-selected": {
            color: "#fff",
            backgroundColor: primaryColor,
          },

          "&.Mui-selected:hover": {
            backgroundColor: primaryColor,
          },
        },
      },
    },
  },
});
