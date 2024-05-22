/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext } from "react";
import {
  NFT,
  useOwnedNFTs,
  useTokenBalance,
  useContract,
} from "@thirdweb-dev/react";
import { Account } from "thirdweb/wallets";
import {
  chainId,
  cityBuildingsNFTAddress,
  giftPackageNFTAddress,
  packagesNFTAddress,
  usdcAddress,
} from "../configs";

interface NftDataContextProps {
  cityNfts: NFT[] | undefined;
  giftPackageNfts: NFT[] | undefined;
  packageNfts: NFT[] | undefined;
  isCityNftFetching: boolean;
  isGiftPackageFetching: boolean;
  isPackageNftFetching: boolean;
  usdcBalance: any;
  usdcContract: any;
  cityNftContract: any;
  packagesNftContract: any;
  giftPackagesNFTContract: any;
}

const NftDataContext = createContext<NftDataContextProps | undefined>(
  undefined
);

export const NftDataProvider: React.FC<{
  account: Account | undefined;
  children: any;
}> = ({ account, children }) => {
  const usdcContract = useContract(usdcAddress[chainId]);
  const cityNftContract = useContract(cityBuildingsNFTAddress[chainId]);
  const packagesNftContract = useContract(packagesNFTAddress[chainId]);
  const giftPackagesNFTContract = useContract(giftPackageNFTAddress[chainId]);

  const { data: usdcBalance } = useTokenBalance(
    usdcContract.contract,
    account?.address
  );

  const { data: cityNfts, isFetching: isCityNftFetching } = useOwnedNFTs(
    cityNftContract?.contract,
    account?.address
  );

  const { data: giftPackageNfts, isFetching: isGiftPackageFetching } =
    useOwnedNFTs(giftPackagesNFTContract?.contract, account?.address || "");

  const { data: packageNfts, isFetching: isPackageNftFetching } = useOwnedNFTs(
    packagesNftContract?.contract,
    account?.address
  );

  const value = {
    cityNfts,
    giftPackageNfts,
    packageNfts,
    isCityNftFetching,
    isGiftPackageFetching,
    isPackageNftFetching,
    usdcBalance,
    usdcContract,
    cityNftContract,
    packagesNftContract,
    giftPackagesNFTContract,
  };

  return (
    <NftDataContext.Provider value={value}>{children}</NftDataContext.Provider>
  );
};

export const useNftData = () => {
  const context = useContext(NftDataContext);
  if (!context) {
    throw new Error("useNftData must be used within a NftDataProvider");
  }
  return context;
};
