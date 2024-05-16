/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Stack,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { NFT } from "@thirdweb-dev/react";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import {
  ThirdwebContract,
  getContract,
  isAddress,
  prepareContractCall,
  sendAndConfirmTransaction,
} from "thirdweb";
import { Account, Wallet } from "thirdweb/wallets";
import { chainId, chains } from "../../configs";
import { client } from "../../configs/client";

type TransferModalProps = {
  account: Account | undefined;
  wallet: Wallet | undefined;
  nftInfo: NFT | undefined;
  open: boolean;
  contractAddress: string | undefined;
  onClose: () => void;
};

export const TransferModal = ({
  account,
  wallet,
  open,
  onClose,
  nftInfo,
  contractAddress,
}: TransferModalProps) => {
  const [walletAddress, setWalletAddress] = useState<string>();
  const [tokenQuantity, setTokenQuantity] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [contract, setContract] = useState<ThirdwebContract>();

  useMemo(() => {
    if (!client || !contractAddress) return;

    const contract = getContract({
      client,
      chain: chains[chainId],
      address: contractAddress,
    });

    setContract(contract);
  }, [contractAddress]);

  const tranferNft = useCallback(async () => {
    try {
      if (!walletAddress || !account || !contract) return;
      setLoading(true);
      if (nftInfo?.type === "ERC1155") {
        const transaction = prepareContractCall({
          contract,
          // Pass the method signature that you want to call
          method:
            "function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data)",
          // and the params for that method
          // Their types are automatically inferred based on the method signature
          params: [
            account?.address,
            walletAddress,
            [BigInt(nftInfo?.metadata?.id)],
            [BigInt(tokenQuantity)],
            "0x",
          ],
        });
        const transactionResult = await sendAndConfirmTransaction({
          transaction,
          account,
        });

        // const receipt = await waitForReceipt(transactionResult);

        console.log("receipt: ", transactionResult);
        setLoading(false);
        onClose();
      } else if (nftInfo?.type === "ERC721") {
        const transaction = prepareContractCall({
          contract,
          // Pass the method signature that you want to call
          method:
            "function safeTransferFrom(address from, address to, uint256 tokenId)",
          // and the params for that method
          // Their types are automatically inferred based on the method signature
          params: [
            account?.address,
            walletAddress,
            BigInt(nftInfo?.metadata?.id),
          ],
        });

        const transactionResult = await sendAndConfirmTransaction({
          transaction,
          account,
        });

        // const receipt = await waitForReceipt(transactionResult);

        console.log("receipt: ", transactionResult);
        setLoading(false);
        onClose();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [
    account,
    contract,
    nftInfo?.metadata?.id,
    nftInfo?.type,
    onClose,
    tokenQuantity,
    walletAddress,
  ]);

  const isValidAddress = useMemo(() => {
    if (!walletAddress) return false;

    return isAddress(walletAddress);
  }, [walletAddress]);

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 464,
          height: "fit-content",
          boxShadow: 24,
          borderRadius: 2,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgcolor="white"
          width="100%"
          height="100%"
          borderRadius={2}
          p={4}
          gap={2}
        >
          <Box
            component="img"
            src={nftInfo?.metadata?.image || ""}
            width="100%"
            height={350}
            alt="nft-image"
            borderRadius={1}
          />
          <Typography variant="h5"> {nftInfo?.metadata?.name}</Typography>
          <TextField
            fullWidth
            label="Wallet Address"
            value={walletAddress}
            variant="outlined"
            placeholder="Enter wallet address"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setWalletAddress(e.target.value);
            }}
            error={
              walletAddress !== undefined &&
              String(walletAddress)?.length > 0 &&
              !isValidAddress
            }
            helperText={
              walletAddress !== undefined &&
              String(walletAddress)?.length > 0 &&
              !isValidAddress
                ? "Please enter correct wallet address"
                : ""
            }
            sx={{ borderColor: isValidAddress ? "green" : "" }}
          />
          {nftInfo?.type === "ERC1155" ? (
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography variant="h6"> Quantity</Typography>
              <Stack
                direction="row"
                gap={1}
                sx={{
                  border: "1px solid gray",
                  pl: 1,
                  pr: 1,
                  alignItems: "center",
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{ fontSize: "32px", cursor: "pointer", pl: 2, pr: 2 }}
                  onClick={() => {
                    if (tokenQuantity > 0) setTokenQuantity(tokenQuantity - 1);
                  }}
                >
                  -
                </Typography>
                <Typography variant="h5" color={colors.blue[700]}>
                  {" "}
                  {tokenQuantity}
                </Typography>
                <Typography
                  sx={{ fontSize: "32px", cursor: "pointer", pl: 2, pr: 2 }}
                  onClick={() => {
                    if (Number(nftInfo?.quantityOwned) > tokenQuantity)
                      setTokenQuantity(tokenQuantity + 1);
                  }}
                >
                  +
                </Typography>
              </Stack>
            </Stack>
          ) : null}

          <Button
            variant="contained"
            disabled={
              !walletAddress ||
              !isValidAddress ||
              loading ||
              nftInfo?.type === "ERC1155"
                ? tokenQuantity == 0
                : false
            }
            onClick={tranferNft}
            fullWidth
          >
            {loading ? <CircularProgress size={20} sx={{ mr: 1 }} /> : null}
            Transfer
          </Button>
          <Button variant="text" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default TransferModal;
