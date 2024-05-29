import { NFT } from "thirdweb";

export type NFTWithQuantity = (NFT & { quantityOwned?: bigint });
