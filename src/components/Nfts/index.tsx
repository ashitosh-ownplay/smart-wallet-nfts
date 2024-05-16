/* eslint-disable @typescript-eslint/no-explicit-any */
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab } from "@mui/material";
import { NFT, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import { useCallback, useState } from "react";
import { Account, Wallet } from "thirdweb/wallets";
import {
  chainId,
  cityBuildingsNFTAddress,
  giftPackageNFTAddress,
  packagesNFTAddress,
} from "../../configs";
import TransferModal from "../TransferModal";
import NftsList from "./nftsList";

export interface IOwnedNfts {
  wallet: Wallet | undefined;
  account: Account | undefined;
}

export const OwnedNfts = ({ wallet, account }: IOwnedNfts) => {
  const [openTransfer, setOpenTransfer] = useState(false);
  const [selectedNft, setSelectedNft] = useState<NFT>();
  const [tabValue, setTabValue] = useState("1");
  const [selectedContractAddrss, setSelectedContractAdress] =
    useState<string>();

  const cityNftContract = useContract(cityBuildingsNFTAddress[chainId]);
  const packagesNftContract = useContract(packagesNFTAddress[chainId]);
  const giftPackagesNFTContract = useContract(giftPackageNFTAddress[chainId]);

  const { data: cityNfts, isFetching: isCityNftFetching } = useOwnedNFTs(
    cityNftContract?.contract,
    account?.address
  );

  const { data: giftPackageNfts, isFetching: isGiftPackageFetching } =
    useOwnedNFTs(giftPackagesNFTContract?.contract, account?.address || "");

  const { data: packageNFts, isFetching: isPackageNftFetching } = useOwnedNFTs(
    packagesNftContract?.contract,
    account?.address
  );

  const tabsData = [
    {
      label: "City Building NFTs",
      id: "1",
    },
    {
      label: "Packages NFTs",
      id: "2",
    },
    {
      label: "Gift Packages NFTs",
      id: "3",
    },
  ];

  const handleTabChange = (event: any, newValue: any) => {
    setTabValue(newValue);
  };

  const handleTransfer = useCallback(
    (
      e: React.MouseEvent<HTMLElement>,
      nft: NFT,
      contractAddress: string | undefined
    ) => {
      e.preventDefault();
      e.stopPropagation();
      setSelectedNft(nft);
      setOpenTransfer(true);
      setSelectedContractAdress(contractAddress);
    },
    []
  );

  return (
    <Container maxWidth={false}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabChange} aria-label="nfts tabs">
            {tabsData?.map((tab) => {
              return <Tab key={tab.id} label={tab.label} value={tab.id} />;
            })}
          </TabList>
        </Box>
        <TabPanel value="1">
          <NftsList
            contractAddress={cityNftContract?.contract?.getAddress()}
            nfts={cityNfts}
            wallet={wallet}
            account={account}
            handleTransfer={handleTransfer}
            isFetching={isCityNftFetching}
          />
        </TabPanel>
        <TabPanel value="2">
          <NftsList
            contractAddress={packagesNftContract?.contract?.getAddress()}
            nfts={packageNFts}
            wallet={wallet}
            account={account}
            handleTransfer={handleTransfer}
            isFetching={isPackageNftFetching}
          />
        </TabPanel>
        <TabPanel value="3">
          <NftsList
            contractAddress={giftPackagesNFTContract?.contract?.getAddress()}
            nfts={giftPackageNfts}
            wallet={wallet}
            account={account}
            handleTransfer={handleTransfer}
            isFetching={isGiftPackageFetching}
          />
        </TabPanel>
      </TabContext>
      {openTransfer ? (
        <TransferModal
          open={openTransfer}
          onClose={() => setOpenTransfer(false)}
          nftInfo={selectedNft}
          contractAddress={selectedContractAddrss}
          account={account}
          wallet={wallet}
        />
      ) : null}
    </Container>
  );
};

export default OwnedNfts;
