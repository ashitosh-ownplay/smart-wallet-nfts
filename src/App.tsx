import { ThirdwebProvider } from "@thirdweb-dev/react";
import {
  Box,
  CssBaseline,
  Snackbar,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { chainId, thirdWebClientId } from "./configs";
import HomePage from "./pages/home";
import { useSnackbarContext } from "./contexts/snackbarContext";
import "./App.css";
import { Footer } from "./components/Footer";

function App() {
  const { toastState, handleCloseToast } = useSnackbarContext();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ThirdwebProvider activeChain={chainId} clientId={thirdWebClientId}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingBottom="5rem"
          gap={4}
        >
          <img src="/logo.png"></img>
          <HomePage />
        </Box>
        <Footer />

        <Snackbar
          open={toastState.isOpen}
          autoHideDuration={6000}
          onClose={handleCloseToast}
          message={toastState.text}
          action={null}
        />
      </ThirdwebProvider>
    </ThemeProvider>
  );
}

export default App;
