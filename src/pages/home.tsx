/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, CircularProgress, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Account, Wallet, privateKeyToAccount, smartWallet } from "thirdweb/wallets";
import OwnedNfts from "../components/Nfts";
import { chainId, chains, smartWalletFactory } from "../configs";
import { client } from "../configs/client";
import { truncateAddress } from "../utils";
import { InAppWalletPKExtractorButton } from "../components/InAppWalletPKExtractor";
import { ConnectWalletButton } from "../components/ConnectButton";
import { useActiveAccount, useActiveWallet } from "thirdweb/react";

const HomePage = () => {
  const [privateKey, setPrivateKey] = useState<string>();
  const [error, setError] = useState<string>();

  const [account, setSmartAccount] = useState<Account>();
  const [wallet, setSmartWallet] = useState<Wallet>();
  const [loading, setLoading] = useState<boolean>(false);

  const [openPKModal, setOpenPKModal] = useState<boolean>(false);

  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();

  const isMobile = useMediaQuery("(max-width:600px)");

  const onPkChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPrivateKey(e.target.value);
  }, []);

  const handleDisconnect = useCallback(() => {
    wallet?.disconnect();
    setPrivateKey("");
    setSmartWallet(undefined);
    setSmartAccount(undefined);
  }, [wallet]);

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleDisconnect();
      handleFetchNft();
    }
  };

  useEffect(() => {
    if (activeAccount) {
      setSmartAccount(activeAccount);
    } else if (!privateKey) {
      handleDisconnect();
    }

    if (activeWallet) {
      setSmartWallet(activeWallet);
    } else if (!privateKey) {
      handleDisconnect();
    }
  }, [activeAccount, activeWallet, handleDisconnect, privateKey]);

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

      setSmartAccount(smartAccount);
      setSmartWallet(wallet);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }, [privateKey]);

  const handleInAppPKExtrractModalClose = useCallback(() => {
    setOpenPKModal(false);
  }, []);

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
      {account?.address ? (
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => {
            navigator.clipboard.writeText(account?.address);
          }}
        >
          <b>In-Game Wallet: </b>
          {isMobile ? truncateAddress(account?.address) : account?.address}
        </Typography>
      ) : null}
      {!account?.address ? (
        <>
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
            onKeyDownCapture={handleKeyPress}
            error={error ? error?.length > 0 : false}
            helperText={error && error?.length > 0 ? "Invalid private key" : ""}
          />
          <Button
            variant="contained"
            disabled={!privateKey || loading}
            onClick={handleFetchNft}
            sx={{
              width: "fit-content",
              height: "48px",
              backgroundColor: "primary.dark",
            }}
          >
            {loading && <CircularProgress size={20} sx={{ mr: 1 }} />}
            Connect To In-Game Wallet
          </Button>

          <Stack direction="row" spacing={2}>
            <InAppWalletPKExtractorButton
              setOpen={setOpenPKModal}
              open={openPKModal}
              onClose={handleInAppPKExtrractModalClose}
            />
            <ConnectWalletButton />
          </Stack>
        </>
      ) : (
        <Stack direction={"row"} spacing={2} alignItems="center">
          <Button
            variant="contained"
            onClick={handleDisconnect}
            sx={{
              width: "fit-content",
              height: "54px",
              backgroundColor: "warning.dark",
            }}
          >
            {loading && <CircularProgress size={20} sx={{ mr: 1 }} />}
            Disconnect In-Game Wallet
          </Button>
          {activeWallet ? <ConnectWalletButton /> : null}
        </Stack>
      )}
      <OwnedNfts account={account} />
    </Box>
  );
};

export default HomePage;
