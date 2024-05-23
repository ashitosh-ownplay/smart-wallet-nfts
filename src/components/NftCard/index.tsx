/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NFT } from "@thirdweb-dev/react";
import { useCallback, useEffect, useState } from "react";
import { getContract } from "thirdweb";
import { tokenUri } from "thirdweb/extensions/erc1155";
import { tokenURI } from "thirdweb/extensions/erc721";
import NftPlaceholder from "../../assets/nft-placeholder.png";
import { chainId, chains } from "../../configs";
import { client } from "../../configs/client";
import { truncateStr } from "../../utils";
import { ipfsUrlToCfGateway } from "../../utils/ipfs-cf";
import TransferModal from "../TransferModal";
import { Account } from "thirdweb/wallets";

export interface INftCard {
  nftInfo: NFT;
  contractAddress: string | undefined;
  account: Account | undefined;
}

const gateways = [
  "https://cloudflare-ipfs.com/ipfs/",
  "https://ipfs.io/ipfs/",
  "https://gateway.pinata.cloud/ipfs/",
  "https://dweb.link/ipfs/",
];

export const NftCard = ({ nftInfo, contractAddress, account }: INftCard) => {
  console.log("nftInfo: ", nftInfo);

  const [metadata, setMetadata] = useState<any>(undefined);
  const [openTransfer, setOpenTransfer] = useState<boolean>(false);

  const [imageSrc, setImageSrc] = useState("");
  const [gatewayIndex, setGatewayIndex] = useState(0);

  const handleTransferModalClose = useCallback(() => {
    setOpenTransfer(false);
  }, []);

  const handleTransfer = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setOpenTransfer(true);
  }, []);

  console.log("metadata: ", metadata);
  useEffect(() => {
    const getTokenMetadata = async () => {
      const contract = getContract({
        client: client,
        address: contractAddress!,
        chain: chains[chainId],
      });

      if (contract) {
        let result;
        if (nftInfo?.type === "ERC1155") {
          result = await tokenUri({
            contract,
            tokenId: BigInt(nftInfo?.metadata?.id),
          });
        } else {
          result = await tokenURI({
            contract,
            tokenId: BigInt(nftInfo?.metadata?.id),
          });
        }
        const metadata = await (
          await fetch(
            nftInfo?.type === "ERC1155"
              ? ipfsUrlToCfGateway(result as string)
              : (result as string)
          )
        ).json();

        setMetadata(metadata);
      }
    };

    getTokenMetadata();
  }, [contractAddress, nftInfo?.metadata?.id, nftInfo?.type, setMetadata]);

  useEffect(() => {
    const fetchImage = () => {
      const gatewayUrl = metadata?.image.replace(
        "ipfs://",
        gateways[gatewayIndex]
      );
      setImageSrc(gatewayUrl);
    };

    fetchImage();
  }, [gatewayIndex, metadata?.image]);

  const handleError = () => {
    if (gatewayIndex < gateways.length - 1) {
      setGatewayIndex(gatewayIndex + 1);
    } else {
      setImageSrc(NftPlaceholder);
      console.log("Failed to load image from all gateways.");
    }
  };
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: 1,
          width: 300,
          height: "fit-content",
        }}
      >
        <CardMedia
          component="img"
          height="240"
          image={nftInfo?.metadata?.image || imageSrc || NftPlaceholder}
          alt="nft-image"
          onError={handleError}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography gutterBottom variant="h5" component="div">
            {truncateStr(
              metadata?.name || nftInfo?.metadata?.name?.toString() || "",
              20
            )}
          </Typography>

          {nftInfo?.type === "ERC1155" ? (
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="start"
            >
              <b>Token Quantity: </b> {nftInfo?.quantityOwned || 0}
            </Typography>
          ) : (
            <Typography variant="body2" color="text.secondary">
              {truncateStr(
                metadata?.description || nftInfo?.metadata?.description || "",
                50
              )}
            </Typography>
          )}

          <Button
            variant="contained"
            disabled={nftInfo.type === "ERC1155"}
            onClick={handleTransfer}
          >
            Transfer
          </Button>

          {openTransfer ? (
            <TransferModal
              open={openTransfer}
              onClose={handleTransferModalClose}
              nftInfo={nftInfo}
              contractAddress={contractAddress}
              account={account}
              isERC20TokenTransfer={false}
              usdcBalance={undefined}
              nftImage={imageSrc}
              nftName={metadata?.name}
            />
          ) : null}
        </CardContent>
      </Card>
    </>
  );
};

export default NftCard;
