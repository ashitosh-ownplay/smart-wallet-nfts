/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, CircularProgress } from "@mui/material";
import { NFT } from "@thirdweb-dev/react";
import NftCard from "../NftCard";

type NftsListProps = {
  nfts: NFT[] | undefined;
  isFetching: boolean;
  contractAddress: string | undefined;
  handleTransfer: (
    e: React.MouseEvent<HTMLElement>,
    nft: NFT,
    contractAddress: string | undefined
  ) => void;
};

export const NftsList = ({
  nfts,
  isFetching,
  contractAddress,
  handleTransfer,
}: NftsListProps) => {
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
      {nfts?.map((nft, key) => {
        return (
          <NftCard
            key={key}
            nftInfo={nft}
            handleTransfer={handleTransfer}
            contractAddress={contractAddress}
          />
        );
      })}
    </Box>
  );
};

export default NftsList;
