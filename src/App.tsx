import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./App.css";
import { chainId, thirdWebClientId } from "./configs";
import HomePage from "./pages/home";
import { Box, Snackbar, Typography } from "@mui/material";
import { useSnackbarContext } from "./contexts/snackbarContext";

function App() {
  const { toastState, handleCloseToast } = useSnackbarContext();

  return (
    <>
      <ThirdwebProvider activeChain={chainId} clientId={thirdWebClientId}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <Typography variant="h3">Ownplay</Typography>
          <HomePage />
        </Box>
        <Snackbar
          open={toastState.isOpen}
          autoHideDuration={6000}
          onClose={handleCloseToast}
          message={toastState.text}
          action={null}
        />
      </ThirdwebProvider>
    </>
  );
}

export default App;
