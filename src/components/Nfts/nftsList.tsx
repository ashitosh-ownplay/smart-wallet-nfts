/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, CircularProgress } from "@mui/material";
import NftCard from "../NftCard";
import { memo } from "react";
import { Account } from "thirdweb/wallets";
import { NFTWithQuantity } from "../types";

type NftsListProps = {
  nfts: NFTWithQuantity[] | undefined;
  isFetching: boolean;
  contractAddress: string | undefined;
  account: Account | undefined;
};

export const NftsList = memo(
  ({ nfts, isFetching, contractAddress, account }: NftsListProps) => {
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
              contractAddress={contractAddress}
              account={account}
            />
          );
        })}
      </Box>
    );
  }
);

export default NftsList;
