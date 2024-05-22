/* eslint-disable @typescript-eslint/no-explicit-any */
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Container, Stack, Tab, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { NFT } from "@thirdweb-dev/react";
import { Account } from "thirdweb/wallets";
import { NftDataProvider, useNftData } from "../../contexts/NftDataContext"; // Adjust the import path as needed
import TransferModal from "../TransferModal";
import NftsList from "./nftsList";

export interface IOwnedNfts {
  account: Account | undefined;
}

const OwnedNftsContent: React.FC<{ account: Account | undefined }> = ({
  account,
}) => {
  const [openTransfer, setOpenTransfer] = useState<boolean>(false);
  const [selectedNft, setSelectedNft] = useState<NFT>();
  const [tabValue, setTabValue] = useState("1");
  const [selectedContractAddrss, setSelectedContractAdress] =
    useState<string>();
  const [isERC20TokenTransfer, setIsERC20TokenTransfer] =
    useState<boolean>(false);

  const {
    cityNfts,
    giftPackageNfts,
    packageNfts,
    isCityNftFetching,
    isGiftPackageFetching,
    isPackageNftFetching,
    usdcBalance,
    cityNftContract,
    packagesNftContract,
    giftPackagesNFTContract,
  } = useNftData();

  const handleTabChange = (_event: any, newValue: any) => {
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

  const handleERC20Transfer = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setSelectedContractAdress(usdcBalance?.contract?.getAddress());
      setIsERC20TokenTransfer(true);
      setOpenTransfer(true);
    },
    [usdcBalance?.contract]
  );

  const handleTransferModalClose = useCallback(() => {
    setSelectedContractAdress(undefined);
    setIsERC20TokenTransfer(false);
    setOpenTransfer(false);
  }, []);

  return (
    <Container maxWidth={false} sx={{ gap: 4 }}>
      <Stack
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mb={3}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          width="100%"
          gap={2}
        >
          <Typography variant="h6">Usdc Balance:</Typography>
          <Typography variant="h6" fontWeight={600}>
            {usdcBalance?.value.toString() || 0} USDC
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={handleERC20Transfer}
          disabled={Number(usdcBalance?.value.toString()) <= 0}
        >
          Transfer USDC
        </Button>
      </Stack>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleTabChange}
            aria-label="nfts tabs"
            scrollButtons="auto"
            variant="scrollable"
          >
            {[
              { label: "City Building NFTs", id: "1" },
              { label: "Packages NFTs", id: "2" },
              { label: "Gift Packages NFTs", id: "3" },
            ].map((tab) => (
              <Tab key={tab.id} label={tab.label} value={tab.id} />
            ))}
          </TabList>
        </Box>
        <TabPanel value="1">
          <NftsList
            contractAddress={cityNftContract?.contract?.getAddress()}
            nfts={cityNfts}
            handleTransfer={handleTransfer}
            isFetching={isCityNftFetching}
          />
        </TabPanel>
        <TabPanel value="2">
          <NftsList
            contractAddress={packagesNftContract?.contract?.getAddress()}
            nfts={packageNfts}
            handleTransfer={handleTransfer}
            isFetching={isPackageNftFetching}
          />
        </TabPanel>
        <TabPanel value="3">
          <NftsList
            contractAddress={giftPackagesNFTContract?.contract?.getAddress()}
            nfts={giftPackageNfts}
            handleTransfer={handleTransfer}
            isFetching={isGiftPackageFetching}
          />
        </TabPanel>
      </TabContext>
      {openTransfer ? (
        <TransferModal
          open={openTransfer}
          onClose={handleTransferModalClose}
          nftInfo={selectedNft}
          contractAddress={selectedContractAddrss}
          account={account}
          isERC20TokenTransfer={isERC20TokenTransfer}
          usdcBalance={usdcBalance?.value?.toBigInt()}
        />
      ) : null}
    </Container>
  );
};

const OwnedNfts: React.FC<IOwnedNfts> = ({ account }) => {
  return (
    <NftDataProvider account={account}>
      <OwnedNftsContent account={account} />
    </NftDataProvider>
  );
};

export default OwnedNfts;
