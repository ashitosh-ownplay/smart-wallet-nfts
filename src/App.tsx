import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./App.css";
import { chainId } from "./configs";
import HomePage from "./pages/home";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <>
      <ThirdwebProvider activeChain={chainId}>
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
      </ThirdwebProvider>
    </>
  );
}

export default App;
