import { NFT, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import { Account, Wallet } from "thirdweb/wallets";
import { chainId, cityBuildingsNFTAddress } from "../../configs";
import { Box, CircularProgress } from "@mui/material";
import NftCard from "../NftCard";

type CityBuildingNftsProps = {
  wallet: Wallet | undefined;
  account: Account | undefined;
  handleTransfer: (e: React.MouseEvent<HTMLElement>, nft: NFT) => void;
};

export const CityBuildingNfts = ({
  wallet,
  account,
  handleTransfer,
}: CityBuildingNftsProps) => {
  const cityNftContract = useContract(cityBuildingsNFTAddress[chainId]);

  const { data, isFetching } = useOwnedNFTs(
    cityNftContract?.contract,
    account?.address
  );

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
          <NftCard key={key} nftInfo={nft} handleTransfer={handleTransfer} />
        );
      })}
    </Box>
  );
};

export default CityBuildingNfts;
