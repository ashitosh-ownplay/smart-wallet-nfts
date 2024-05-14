import { Box, CircularProgress } from "@mui/material";
import { NFT, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import { Account, Wallet } from "thirdweb/wallets";
import { chainId, packagesNFTAddress } from "../../configs";
import NftCard from "../NftCard";

type PackagesNFTProps = {
  wallet: Wallet | undefined;
  account: Account | undefined;
  handleTransfer: (
    e: React.MouseEvent<HTMLElement>,
    nft: NFT,
    contractAddress: string | undefined
  ) => void;
};

export const PackagesNFT = ({
  wallet,
  account,
  handleTransfer,
}: PackagesNFTProps) => {
  const packagesNftContract = useContract(packagesNFTAddress[chainId]);

  const { data, isFetching } = useOwnedNFTs(
    packagesNftContract?.contract,
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
          <NftCard
            key={key}
            nftInfo={nft}
            handleTransfer={handleTransfer}
            contractAddress={packagesNftContract?.contract?.getAddress()}
          />
        );
      })}
    </Box>
  );
};

export default PackagesNFT;
