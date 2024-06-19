/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { Account } from "thirdweb/wallets";
import { NftDataProvider, useNftData } from "../../contexts/NftDataContext"; // Adjust the import path as needed
import TransferModal from "../TransferModal";
import NftsList from "./nftsList";
import { toEther } from "thirdweb";

export interface IOwnedNfts {
  account: Account | undefined;
}

const OwnedNftsContent: React.FC<{ account: Account | undefined }> = ({
  account,
}) => {
  const [openTransfer, setOpenTransfer] = useState<boolean>(false);
  const [selectedContractAddrss, setSelectedContractAdress] =
    useState<string>();
  const [isERC20TokenTransfer, setIsERC20TokenTransfer] =
    useState<boolean>(false);
  const [isEthTransfer, setIsEthTransfer] = useState<boolean>(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  const {
    cityNfts,
    isCityNftFetching,
    usdcBalance,
    ethBalance,
    usdcContract,
    cityNftContract,
  } = useNftData();

  const handleERC20Transfer = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setSelectedContractAdress(usdcContract?.address);
      setIsERC20TokenTransfer(true);
      setIsEthTransfer(false);
      setOpenTransfer(true);
    },
    [usdcContract?.address]
  );

  // const handleETHTransfer = useCallback(
  //   (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     setIsEthTransfer(true);
  //     setIsERC20TokenTransfer(false);
  //     setOpenTransfer(true);
  //   },
  //   []
  // );

  const handleTransferModalClose = useCallback(() => {
    setSelectedContractAdress(undefined);
    setIsERC20TokenTransfer(false);
    setOpenTransfer(false);
  }, []);

  return (
    <>
      {" "}
      {account && (
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
              width="50%"
              gap={2}
            >
              {!isMobile && <Typography variant="h6">ETH Balance:</Typography>}

              <Typography variant="h6" fontWeight={600}>
                {ethBalance ? toEther(ethBalance) : 0} ETH
              </Typography>
            </Box>
            {/* <Button
              variant="contained"
              onClick={handleETHTransfer}
              disabled={Number(ethBalance) / 10 ** 18 <= 0}
              sx={{ backgroundColor: "primary.dark" }}
            >
              Transfer ETH
            </Button> */}

            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              width="50%"
              gap={2}
            >
              {!isMobile && <Typography variant="h6">USDC Balance:</Typography>}
              <Typography variant="h6" fontWeight={600}>
                {usdcBalance?.displayValue.toString() || 0} USDC
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={handleERC20Transfer}
              disabled={Number(usdcBalance?.displayValue) <= 0}
              sx={{ backgroundColor: "primary.dark" }}
            >
              Transfer USDC
            </Button>
          </Stack>
          <Stack
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={2}
            mb={3}
            sx={{ borderTop: 1, borderColor: "divider", pt: 5 }}
          >
            <NftsList
              contractAddress={cityNftContract?.address}
              nfts={cityNfts}
              isFetching={isCityNftFetching}
              account={account}
            />
          </Stack>

          {openTransfer ? (
            <TransferModal
              open={openTransfer}
              onClose={handleTransferModalClose}
              nftInfo={undefined}
              contractAddress={selectedContractAddrss}
              account={account}
              isERC20TokenTransfer={isERC20TokenTransfer}
              isEthTransfer={isEthTransfer}
              ethBalance={ethBalance}
              usdcBalance={usdcBalance}
            />
          ) : null}
        </Container>
      )}
    </>
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
