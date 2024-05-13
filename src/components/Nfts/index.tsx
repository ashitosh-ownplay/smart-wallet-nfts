import { NFT, useContract, useNFTs } from "@thirdweb-dev/react";
import { chainId, cityBuildingsNFTAddress } from "../../configs";
import NftCard from "../NftCard";
import { Box, CircularProgress } from "@mui/material";
import { useCallback, useState } from "react";
import TransferModal from "../TransferModal";

export const OwnedNfts = () => {
  const [openTransfer, setOpenTransfer] = useState(false);
  const [selectedNft, setSelectedNft] = useState<NFT>();

  const cityNftContract = useContract(cityBuildingsNFTAddress[chainId]);
  const { data, isLoading } = useNFTs(cityNftContract.contract);

  const handleTransfer = useCallback(
    (e: React.MouseEvent<HTMLElement>, nft: NFT) => {
      e.preventDefault();
      e.stopPropagation();
      setSelectedNft(nft);
      setOpenTransfer(true);
    },
    []
  );

  console.log("nfts: ", data);
  return isLoading ? (
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
      {openTransfer ? (
        <TransferModal
          open={openTransfer}
          onClose={() => setOpenTransfer(false)}
          nftInfo={selectedNft}
        />
      ) : null}
    </Box>
  );
};

export default OwnedNfts;
