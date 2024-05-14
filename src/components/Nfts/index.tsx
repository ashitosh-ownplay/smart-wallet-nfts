/* eslint-disable @typescript-eslint/no-explicit-any */
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, CircularProgress, Container, Tab } from "@mui/material";
import { NFT } from "@thirdweb-dev/react";
import { Suspense, lazy, useCallback, useState } from "react";
import { Account, Wallet } from "thirdweb/wallets";
import TransferModal from "../TransferModal";

const CityBuildingNfts = lazy(() => import("./cityBuildingNfts"));
const GiftPackagesNFT = lazy(() => import("./giftPackagesNft"));
const PackagesNFT = lazy(() => import("./packagesNft"));

export interface IOwnedNfts {
  wallet: Wallet | undefined;
  accuont: Account | undefined;
}

export const OwnedNfts = ({ wallet, accuont }: IOwnedNfts) => {
  const [openTransfer, setOpenTransfer] = useState(false);
  const [selectedNft, setSelectedNft] = useState<NFT>();
  const [tabValue, setTabValue] = useState("1");

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
    (e: React.MouseEvent<HTMLElement>, nft: NFT) => {
      e.preventDefault();
      e.stopPropagation();
      setSelectedNft(nft);
      setOpenTransfer(true);
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
          <Suspense fallback={<CircularProgress size={40} />}>
            <CityBuildingNfts
              wallet={wallet}
              account={accuont}
              handleTransfer={handleTransfer}
            />
          </Suspense>
        </TabPanel>
        <TabPanel value="2">
          <Suspense fallback={<CircularProgress size={40} />}>
            <PackagesNFT
              wallet={wallet}
              account={accuont}
              handleTransfer={handleTransfer}
            />
          </Suspense>
        </TabPanel>
        <TabPanel value="3">
          <Suspense fallback={<CircularProgress size={40} />}>
            <GiftPackagesNFT
              wallet={wallet}
              account={accuont}
              handleTransfer={handleTransfer}
            />
          </Suspense>
        </TabPanel>
      </TabContext>
      {openTransfer ? (
        <TransferModal
          open={openTransfer}
          onClose={() => setOpenTransfer(false)}
          nftInfo={selectedNft}
        />
      ) : null}
    </Container>
  );
};

export default OwnedNfts;
