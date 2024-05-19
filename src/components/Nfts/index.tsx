/* eslint-disable @typescript-eslint/no-explicit-any */
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Container, Stack, Tab, Typography } from "@mui/material";
import {
  NFT,
  useContract,
  useOwnedNFTs,
  useTokenBalance,
} from "@thirdweb-dev/react";
import { useCallback, useState } from "react";
import { Account } from "thirdweb/wallets";
import {
  chainId,
  cityBuildingsNFTAddress,
  giftPackageNFTAddress,
  packagesNFTAddress,
  usdcAddress,
} from "../../configs";
import TransferModal from "../TransferModal";
import NftsList from "./nftsList";

export interface IOwnedNfts {
  account: Account | undefined;
}

export const OwnedNfts = ({ account }: IOwnedNfts) => {
  const [openTransfer, setOpenTransfer] = useState<boolean>(false);
  const [selectedNft, setSelectedNft] = useState<NFT>();
  const [tabValue, setTabValue] = useState("1");
  const [selectedContractAddrss, setSelectedContractAdress] =
    useState<string>();
  const [isERC20TokenTransfer, setIsERC20TokenTransfer] =
    useState<boolean>(false);

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
      setSelectedContractAdress(usdcContract.contract?.getAddress());
      setIsERC20TokenTransfer(true);
      setOpenTransfer(true);
    },
    [usdcContract.contract]
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
        <Button variant="contained" onClick={handleERC20Transfer}>
          Transfer USDC
        </Button>
      </Stack>
      <TabContext value={tabValue}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", overflow: "scroll" }}
        >
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
            handleTransfer={handleTransfer}
            isFetching={isCityNftFetching}
          />
        </TabPanel>
        <TabPanel value="2">
          <NftsList
            contractAddress={packagesNftContract?.contract?.getAddress()}
            nfts={packageNFts}
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
          usdcBalance={usdcBalance?.value?.toNumber()}
        />
      ) : null}
    </Container>
  );
};

export default OwnedNfts;
