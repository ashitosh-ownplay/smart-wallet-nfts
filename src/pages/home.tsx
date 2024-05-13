import { ChangeEvent, useCallback, useState } from "react";
import OwnedNfts from "../components/Nfts";
import { Box, Button, Divider, TextField } from "@mui/material";

const HomePage = () => {
  const [privateKey, setPrivateKey] = useState<string>();

  const onPkChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPrivateKey(e.target.value);
  }, []);

  const handleFetchNft = useCallback(() => {}, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <TextField
        required
        id="private-key-input"
        value={privateKey}
        onChange={onPkChange}
        label="Private key"
        placeholder="Enter smart wallet private key"
        style={{ width: "500px", height: "48px" }}
      />
      <Button
        variant="contained"
        disabled={!privateKey}
        onClick={handleFetchNft}
        style={{ width: "fit-content", height: "48px" }}
      >
        Fetch Nfts
      </Button>

      <Divider sx={{ width: "80%" }} />
      <OwnedNfts />
    </Box>
  );
};

export default HomePage;
