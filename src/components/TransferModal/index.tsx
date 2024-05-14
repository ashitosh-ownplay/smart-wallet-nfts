import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { NFT, useContract, useTransferNFT } from "@thirdweb-dev/react";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { isAddress } from "thirdweb";

type TransferModalProps = {
  nftInfo: NFT | undefined;
  open: boolean;
  contractAddress: string | undefined;
  onClose: () => void;
};

export const TransferModal = ({
  open,
  onClose,
  nftInfo,
  contractAddress,
}: TransferModalProps) => {
  const [walletAddress, setWalletAddress] = useState<string>();

  const { contract } = useContract(contractAddress);

  const {
    mutateAsync: transferNFT,
    isLoading,
    error,
  } = useTransferNFT(contract);

  const tranferNft = useCallback(() => {}, []);

  const isValidAddress = useMemo(() => {
    if (!walletAddress) return false;

    return isAddress(walletAddress);
  }, [walletAddress]);

  return (
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

        <Button
          variant="contained"
          disabled={!walletAddress || !isValidAddress}
          onClick={tranferNft}
        >
          Transfer
        </Button>
        <Button variant="text" onClick={onClose}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default TransferModal;
