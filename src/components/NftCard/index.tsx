import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NFT } from "@thirdweb-dev/react";

export interface INftCard {
  nftInfo: NFT;
  handleTransfer: (e: React.MouseEvent<HTMLElement>, nft: NFT) => void;
}

export const NftCard = ({ nftInfo, handleTransfer }: INftCard) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, borderRadius: 1, width: 300, height: 400 }}>
        <CardMedia
          component="img"
          height="240"
          image={nftInfo?.metadata?.image || ""}
          alt="nft-image"
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography gutterBottom variant="h5" component="div">
            {nftInfo?.metadata?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {nftInfo?.metadata?.description}
          </Typography>

          <Button
            variant="contained"
            onClick={(e) => handleTransfer(e, nftInfo)}
          >
            Transfer
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default NftCard;
