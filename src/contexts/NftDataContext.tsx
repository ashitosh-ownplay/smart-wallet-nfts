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
  usdcAddress,
} from "../configs";
import {
  ThirdwebContract,
  eth_getBalance,
  getContract,
  getRpcClient,
} from "thirdweb";
import { client } from "../configs/client";
import { getOwnedNFTs } from "thirdweb/extensions/erc721";

import { getBalance } from "thirdweb/extensions/erc20";
import { NFTWithQuantity } from "../components/types";

interface NftDataContextProps {
  cityNfts: NFTWithQuantity[] | undefined;
  isCityNftFetching: boolean;
  usdcBalance: any;
  ethBalance: any;
  usdcContract: ThirdwebContract | undefined;
  cityNftContract: ThirdwebContract | undefined;
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

  const [cityNftTokens, setCityNftTokens] = useState<any[]>([]);
  const [usdcBalance, setUsdcBalance] = useState<any>();
  const [ethBalance, setEthBalance] = useState<any>();
  const [refetch, setRefetch] = useState<boolean>(false);
  const [refetchBalances, setRefetchBalances] = useState<boolean>(false);

  const [isCityNftFetching, setIsCityNftFetching] = useState<boolean>(false);
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
  }, [account?.address, usdcContract, refetchBalances]);

  useEffect(() => {
    const getEthBalance = async () => {
      if (account?.address) {
        setIsGiftPackageFetching(true);

        const rpcRequest = getRpcClient({ client, chain: chains[chainId] });
        const balance = await eth_getBalance(rpcRequest, {
          address: account?.address,
        });
        setEthBalance(balance);
        setIsGiftPackageFetching(false);
      }
    };
    getEthBalance();
  }, [account?.address, refetchBalances]);

  const refetchData = useCallback(() => {
    setRefetch(!refetch);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      // check for new USDC and ETG balances every ten seconds
      setRefetchBalances(!refetchBalances);
    }, 10000);
  });

  const value = {
    cityNfts: cityNftTokens,
    isCityNftFetching,
    isGiftPackageFetching,
    usdcBalance,
    ethBalance,
    usdcContract,
    cityNftContract,
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
