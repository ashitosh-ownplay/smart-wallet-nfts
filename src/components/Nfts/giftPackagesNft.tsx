import { Box, CircularProgress } from "@mui/material";
import { NFT, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import { Account, Wallet } from "thirdweb/wallets";
import { chainId, giftPackageNFTAddress } from "../../configs";
import NftCard from "../NftCard";

type GiftPackagesNFTProps = {
  wallet: Wallet | undefined;
  account: Account | undefined;
  handleTransfer: (
    e: React.MouseEvent<HTMLElement>,
    nft: NFT,
    contractAddress: string | undefined
  ) => void;
};

export const GiftPackagesNFT = ({
  wallet,
  account,
  handleTransfer,
}: GiftPackagesNFTProps) => {
  const giftPackagesNFTContract = useContract(giftPackageNFTAddress[chainId]);

  console.log("account: ", account);

  const { data, isFetching } = useOwnedNFTs(
    giftPackagesNFTContract?.contract,
    account?.address || ""
  );

  console.log("gift package: ", data);
  return isFetching ? (
    <CircularProgress size={40} />
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4,
      }}
    >
      {data?.map((nft, key) => {
        return (
          <NftCard
            key={key}
            nftInfo={nft}
            handleTransfer={handleTransfer}
            contractAddress={giftPackagesNFTContract?.contract?.getAddress()}
          />
        );
      })}
    </Box>
  );
};

export default GiftPackagesNFT;
