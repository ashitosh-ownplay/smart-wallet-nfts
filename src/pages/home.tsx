/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useCallback, useState } from "react";
import OwnedNfts from "../components/Nfts";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import {
  Wallet,
  Account,
  smartWallet,
  privateKeyToAccount,
} from "thirdweb/wallets";
import { chainId, chains, smartWalletFactory } from "../configs";
import { client } from "../configs/client";

const HomePage = () => {
  const [privateKey, setPrivateKey] = useState<string>();
  const [error, setError] = useState<string>();

  const [account, setSmartAccount] = useState<Account>();
  const [wallet, setSmartWallet] = useState<Wallet>();
  const [loading, setLoading] = useState<boolean>(false);

  const onPkChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPrivateKey(e.target.value);
  }, []);

  const handleDisconnect = useCallback(() => {
    wallet?.disconnect();
    setSmartWallet(undefined);
    setSmartAccount(undefined);
  }, [wallet]);

  const handleFetchNft = useCallback(async () => {
    try {
      if (!privateKey) return;
      setLoading(true);
      const pkWallet = privateKeyToAccount({
        client: client,
        privateKey: String(privateKey),
      });

      const wallet = smartWallet({
        factoryAddress: smartWalletFactory[chainId],
        chain: chains[chainId],
        gasless: false,
      });

      const smartAccount = await wallet.connect({
        personalAccount: pkWallet,
        client: client,
      });

      console.log("smartAccount: ", smartAccount);

      setSmartAccount(smartAccount);
      setSmartWallet(wallet);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }, [privateKey]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        width: "100% !important",
      }}
    >
      <TextField
        required
        id="private-key-input"
        value={privateKey}
        onChange={onPkChange}
        label="Private key"
        placeholder="Enter smart wallet private key"
        sx={{
          width: {
            sm: "564px",
            xs: "100%",
          },
        }}
        error={error ? error?.length > 0 : false}
        helperText={error && error?.length > 0 ? "Invalid private key" : ""}
      />
      {account?.address ? (
        <Typography>
          <b>Smart Account: </b>
          {account?.address}
        </Typography>
      ) : null}

      {!account?.address ? (
        <Button
          variant="contained"
          disabled={!privateKey || loading}
          onClick={handleFetchNft}
          style={{ width: "fit-content", height: "48px" }}
        >
          {loading ? <CircularProgress size={20} sx={{ mr: 1 }} /> : null}
          Connect To Smart Wallet
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={handleDisconnect}
          style={{
            width: "fit-content",
            height: "48px",
            backgroundColor: "red",
          }}
        >
          {loading ? <CircularProgress size={20} sx={{ mr: 1 }} /> : null}
          Disconnect Smart Wallet
        </Button>
      )}

      {/* <Divider sx={{ width: "100%" }} /> */}
      <OwnedNfts account={account} wallet={wallet} />
    </Box>
  );
};

export default HomePage;
