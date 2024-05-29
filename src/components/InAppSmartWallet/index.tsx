"use client";

import { inAppWallet } from "thirdweb/wallets/in-app";
import { smartWallet } from "thirdweb/wallets/smart";
import { Button, CircularProgress } from "@mui/material";
import { Account, Wallet } from "thirdweb/wallets";
import { client } from "../../configs/client";
import { chainId, chains, smartWalletFactory } from "../../configs";

type InAppSmartWalletProps = {
  loading: boolean;
  setWallet: (wallet: Wallet) => void;
  setAccount: (account: Account) => void;
  setLoading: (isLoading: boolean) => void;
};
export function InAppSmartWallet({
  loading,
  setWallet,
  setAccount,
  setLoading,
}: InAppSmartWalletProps) {
  async function connectToInAppWallet() {
    setLoading(true);
    try {
      const inApp = inAppWallet({});

      const inAppAccount = await inApp.connect({
        client,
        strategy: "iframe",
        chain: chains[chainId],
      });

      const wallet = smartWallet({
        factoryAddress: smartWalletFactory[chainId],
        chain: chains[chainId],
        gasless: true,
      });
      const smartAccount = await wallet.connect({
        client,
        personalAccount: inAppAccount,
      });

      setWallet(wallet);
      setAccount(smartAccount);
      setLoading(false);
    } catch (e) {
      console.error("error connecting to inApp smart wallet", e);
      setLoading(false);
    }
  }

  return (
    <Button
      variant="contained"
      style={{ width: "fit-content", height: "48px" }}
      onClick={() => connectToInAppWallet()}
    >
      {loading ? (
        <CircularProgress color="info" size={20} sx={{ mr: 1 }} />
      ) : null}
      Connect Game Wallet
    </Button>
  );
}
