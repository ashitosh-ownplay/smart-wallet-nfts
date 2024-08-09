import { inAppWallet } from "thirdweb/wallets";
import { ConnectButton } from "thirdweb/react";
import { client } from "../../configs/client";
import { chainId, chains, smartWalletFactory } from "../../configs";

const wallets = [
  inAppWallet({
    smartAccount: { factoryAddress: smartWalletFactory[chainId], chain: chains[chainId], sponsorGas: false },
    auth: {
      options: ["email", "passkey", "google", "apple", "facebook"],
    },
  }),
];

export const ConnectWalletButton = () => {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      chain={chains[chainId]}
      accountAbstraction={{ chain: chains[chainId], sponsorGas: false, factoryAddress: smartWalletFactory[chainId] }}
    />
  );
};
