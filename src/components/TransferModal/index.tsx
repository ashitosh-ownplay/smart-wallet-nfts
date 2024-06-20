/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Modal,
  Stack,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import {
  ThirdwebContract,
  eth_gasPrice,
  getContract,
  getRpcClient,
  isAddress,
  prepareContractCall,
  prepareTransaction,
  sendAndConfirmTransaction,
  toUnits,
} from "thirdweb";
import { Account } from "thirdweb/wallets";
import usdc from "../../assets/usdc.svg";
import eth from "../../assets/eth.svg";
import { chainId, chains } from "../../configs";
import { client } from "../../configs/client";
import { truncateStr } from "../../utils";
import { NFTWithQuantity } from "../types";
import { MessageModal } from "../modal/messageModal";
import { useNftData } from "../../contexts/NftDataContext";

type TransferModalProps = {
  account: Account | undefined;
  nftInfo: NFTWithQuantity | undefined;
  open: boolean;
  contractAddress: string | undefined;
  isERC20TokenTransfer?: boolean;
  isEthTransfer?: boolean;
  ethBalance?: number;
  usdcBalance?: any;
  nftImage?: string | undefined;
  nftName?: string | undefined;
  onClose: () => void;
};

export const TransferModal = ({
  account,
  open,
  onClose,
  nftInfo,
  contractAddress,
  isERC20TokenTransfer,
  usdcBalance,
  isEthTransfer,
  ethBalance,
  nftImage,
  nftName,
}: TransferModalProps) => {
  const [walletAddress, setWalletAddress] = useState<string>();
  const [tokenQuantity, setTokenQuantity] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [contract, setContract] = useState<ThirdwebContract>();
  const [tokenAmount, setTokenAmount] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();

  const { refetchData } = useNftData();

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
      setLoading(true);
      if (isEthTransfer && account && ethBalance) {
        const estimatedGas = BigInt("210000");
        const rpcRequest = getRpcClient({ client, chain: chains[chainId] });
        const gasPrice = await eth_gasPrice(rpcRequest);
        console.log(estimatedGas * gasPrice);
        console.log(BigInt(ethBalance!));
        console.log(BigInt(ethBalance!) - estimatedGas * gasPrice);
        if (estimatedGas * gasPrice > BigInt(ethBalance!)) {
          throw Error("didn't pay prefund");
        }
        const transaction = prepareTransaction({
          to: walletAddress,
          chain: chains[chainId],
          client,
          value: BigInt(ethBalance!) - estimatedGas * gasPrice,
        });

        const transactionResult = await sendAndConfirmTransaction({
          transaction,
          account,
        });

        if (transactionResult?.status === "success") {
          setSuccessMessage("You successfully transferred the ETH tokens");
        }
        return;
      }
      if (!walletAddress || !account || !contract) return;

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
            [BigInt(nftInfo?.id)],
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
        if (transactionResult?.status === "success") {
          setSuccessMessage("You successfully transferred the NFT");
        }
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
          params: [account?.address, walletAddress, BigInt(nftInfo?.id)],
        });

        const transactionResult = await sendAndConfirmTransaction({
          transaction,
          account,
        });

        // const receipt = await waitForReceipt(transactionResult);

        console.log("receipt: ", transactionResult);
        if (transactionResult?.status === "success") {
          setSuccessMessage("You successfully transferred the NFT");
        }
        setLoading(false);
        // onClose();
      } else if (isERC20TokenTransfer) {
        const transaction = prepareContractCall({
          contract,
          // Pass the method signature that you want to call
          method: "function transfer(address to, uint256 value)",
          // and the params for that method
          // Their types are automatically inferred based on the method signature
          params: [
            walletAddress,
            toUnits(String(tokenAmount), usdcBalance?.decimals),
          ],
        });

        const transactionResult = await sendAndConfirmTransaction({
          transaction,
          account,
        });

        // const receipt = await waitForReceipt(transactionResult);

        console.log("receipt: ", transactionResult);
        if (transactionResult?.status === "success") {
          setSuccessMessage("You successfully transferred the USDC tokens");
        }
        setLoading(false);
        refetchData();
      }
    } catch (error) {
      if (String(error)?.includes("didn't pay prefund")) {
        setErrorMessage("Insufficient tokens to pay for gas fees");
      } else {
        setErrorMessage("Something went wrong");
      }
      console.log(error);
      setLoading(false);
    }
  }, [
    account,
    contract,
    isERC20TokenTransfer,
    nftInfo?.id,
    nftInfo?.type,
    onClose,
    tokenAmount,
    tokenQuantity,
    usdcBalance?.decimals,
    walletAddress,
    ethBalance,
    isEthTransfer,
    refetchData,
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
          width: {
            sm: "464px",
            xs: "80%",
          },
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          margin: "auto",
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
          bgcolor="#121212"
          borderRadius={2}
          p={4}
          gap={2}
          boxShadow={24}
        >
          <Box
            component="img"
            src={
              isEthTransfer
                ? eth
                : isERC20TokenTransfer
                ? usdc
                : nftImage || nftInfo?.metadata?.image || ""
            }
            width="100%"
            height={350}
            alt="nft-image"
            borderRadius={1}
          />
          <Typography variant="h5">
            {" "}
            {truncateStr(
              nftName || nftInfo?.metadata?.name?.toString() || "",
              20
            )}
          </Typography>
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

          {isERC20TokenTransfer ? (
            <TextField
              fullWidth
              label="Amount"
              value={tokenAmount}
              variant="outlined"
              placeholder="Enter Amount"
              type="text"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (/^\d*\.?\d{0,4}$/.test(e.target.value)) {
                  setTokenAmount(e.target.value);
                }
              }}
              InputProps={{
                inputProps: {
                  min: -0,
                  inputMode: "decimal",
                  pattern: "\\d*\\.?\\d{0,4}",
                },
                endAdornment: <Avatar src={usdc} alt="usdc" />,
              }}
              error={
                usdcBalance?.value && tokenAmount
                  ? Number(tokenAmount) > Number(usdcBalance?.displayValue)
                  : false
              }
              helperText={
                usdcBalance &&
                tokenAmount &&
                Number(tokenAmount) > Number(usdcBalance?.displayValue)
                  ? "Token amount exceeds balance"
                  : ""
              }
            />
          ) : null}

          <Button
            variant="contained"
            sx={{ backgroundColor: "primary.dark" }}
            disabled={
              loading ||
              !walletAddress ||
              !isValidAddress ||
              (isERC20TokenTransfer
                ? Number(tokenAmount) == 0 ||
                  tokenAmount == undefined ||
                  (usdcBalance?.value && tokenAmount
                    ? Number(tokenAmount) > Number(usdcBalance?.displayValue)
                    : true)
                : nftInfo?.type === "ERC1155"
                ? tokenQuantity == 0
                : false)
            }
            onClick={tranferNft}
            fullWidth
          >
            {loading && <CircularProgress size={20} sx={{ mr: 1 }} />}
            Transfer
          </Button>
          <Button variant="text" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Modal>
      <MessageModal
        open={!!errorMessage && errorMessage?.length > 0}
        onClose={() => setErrorMessage("")}
        message={errorMessage}
        title="Error"
      />
      <MessageModal
        open={!!successMessage && successMessage?.length > 0}
        onClose={() => {
          setSuccessMessage("");
          refetchData();
          onClose();
        }}
        message={successMessage}
        title="Success!"
        showErrorIcon={false}
      />
    </>
  );
};

export default TransferModal;
