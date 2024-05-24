/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { Account } from "thirdweb/wallets";
import {
  chainId,
  chains,
  cityBuildingsNFTAddress,
  giftPackageNFTAddress,
  packagesNFTAddress,
  usdcAddress,
} from "../configs";
import { ThirdwebContract, getContract } from "thirdweb";
import { client } from "../configs/client";
import { getOwnedNFTs } from "thirdweb/extensions/erc721";
import { getOwnedNFTs as getERC1155NFts } from "thirdweb/extensions/erc1155";

import { getBalance } from "thirdweb/extensions/erc20";
import { NFTWithQuantity } from "../components/types";

interface NftDataContextProps {
  cityNfts: NFTWithQuantity[] | undefined;
  giftPackageNfts: NFTWithQuantity[] | undefined;
  packageNfts: NFTWithQuantity[] | undefined;
  isCityNftFetching: boolean;
  isGiftPackageFetching: boolean;
  isPackageNftFetching: boolean;
  usdcBalance: any;
  usdcContract: ThirdwebContract | undefined;
  cityNftContract: ThirdwebContract | undefined;
  packagesNftContract: ThirdwebContract | undefined;
  giftPackagesNFTContract: ThirdwebContract | undefined;
  refetchData: () => void;
}

const NftDataContext = createContext<NftDataContextProps | undefined>(
  undefined
);

export const NftDataProvider: React.FC<{
  account: Account | undefined;
  children: any;
}> = ({ account, children }) => {
  const [usdcContract, setUsdcContract] = useState<
    ThirdwebContract | undefined
  >(undefined);

  const [cityNftContract, setCityNftContract] = useState<
    ThirdwebContract | undefined
  >(undefined);

  const [packagesNftContract, setPackagesNftContract] = useState<
    ThirdwebContract | undefined
  >(undefined);

  const [giftPackagesNFTContract, setGiftPackagesNFTContract] = useState<
    ThirdwebContract | undefined
  >(undefined);

  const [cityNftTokens, setCityNftTokens] = useState<any[]>([]);
  const [packagesNftTokens, setPackagesNftTokens] = useState<any[]>([]);
  const [giftPackageNftTokens, setGiftPackageNftTokens] = useState<any[]>([]);
  const [usdcBalance, setUsdcBalance] = useState<any>();
  const [refetch, setRefetch] = useState<boolean>(false);

  const [isCityNftFetching, setIsCityNftFetching] = useState<boolean>(false);
  const [isPackageNftFetching, setIsPackageNftFetching] =
    useState<boolean>(false);
  const [isGiftPackageFetching, setIsGiftPackageFetching] =
    useState<boolean>(false);

  useEffect(() => {
    const contract = getContract({
      client: client,
      address: usdcAddress[chainId],
      chain: chains[chainId],
    });
    setUsdcContract(contract);
  }, []);

  useEffect(() => {
    const contract = getContract({
      client: client,
      address: cityBuildingsNFTAddress[chainId],
      chain: chains[chainId],
    });
    setCityNftContract(contract);
  }, []);

  useEffect(() => {
    const contract = getContract({
      client: client,
      address: packagesNFTAddress[chainId],
      chain: chains[chainId],
    });
    setPackagesNftContract(contract);
  }, []);

  useEffect(() => {
    const contract = getContract({
      client: client,
      address: giftPackageNFTAddress[chainId],
      chain: chains[chainId],
    });
    setGiftPackagesNFTContract(contract);
  }, []);

  useEffect(() => {
    const getOwnedTokens = async () => {
      if (cityNftContract && account?.address) {
        setIsCityNftFetching(true);
        const ownedNfts = await getOwnedNFTs({
          contract: cityNftContract,
          owner: account?.address || "",
        });
        setCityNftTokens(ownedNfts);
        setIsCityNftFetching(false);
      }
    };
    getOwnedTokens();
  }, [account?.address, cityNftContract, refetch]);

  useEffect(() => {
    const getOwnedTokens = async () => {
      if (packagesNftContract && account?.address) {
        setIsPackageNftFetching(true);
        const ownedNfts = await getERC1155NFts({
          contract: packagesNftContract,
          address: account?.address || "",
        });
        setPackagesNftTokens(ownedNfts);
        setIsPackageNftFetching(false);
      }
    };
    getOwnedTokens();
  }, [account?.address, packagesNftContract]);

  useEffect(() => {
    const getOwnedTokens = async () => {
      if (giftPackagesNFTContract && account?.address) {
        setIsGiftPackageFetching(true);
        const ownedNfts = await getERC1155NFts({
          contract: giftPackagesNFTContract,
          address: account?.address || "",
        });
        setGiftPackageNftTokens(ownedNfts);
        setIsGiftPackageFetching(false);
      }
    };
    getOwnedTokens();
  }, [account?.address, giftPackagesNFTContract, refetch]);

  useEffect(() => {
    const getUsdcBalance = async () => {
      if (usdcContract && account?.address) {
        setIsGiftPackageFetching(true);
        const balance = await getBalance({
          contract: usdcContract,
          address: account?.address || "",
        });
        setUsdcBalance(balance);
        setIsGiftPackageFetching(false);
      }
    };
    getUsdcBalance();
  }, [account?.address, usdcContract, refetch]);

  const refetchData = useCallback(() => {
    setRefetch(true);
  }, []);

  const value = {
    cityNfts: cityNftTokens,
    giftPackageNfts: giftPackageNftTokens,
    packageNfts: packagesNftTokens,
    isCityNftFetching,
    isGiftPackageFetching,
    isPackageNftFetching,
    usdcBalance,
    usdcContract,
    cityNftContract,
    packagesNftContract,
    giftPackagesNFTContract,
    refetchData,
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
