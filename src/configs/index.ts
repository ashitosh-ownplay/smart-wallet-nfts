import {
  Chain,
  anvil,
  arbitrum,
  arbitrumNova,
  arbitrumSepolia,
  avalanche,
  avalancheFuji,
  base,
  baseSepolia,
  ethereum,
  optimism,
  optimismSepolia,
  polygon,
  polygonAmoy,
  sepolia,
  zora,
  zoraSepolia,
} from "thirdweb/chains";

export const chainId = import.meta.env.VITE_CHAIN_ID || "sepolia";

export const cityBuildingsNFTAddress: Record<string, string> = {
  polgonAmoy: "",
  sepolia: "0xbe2290df49503844B851Fb31694fD546b2667dD3", // non-burnable
  // "sepolia": "0xf688b7201f29953A6828D3834Bd7164Dfd051f28", // burnable city buildings
  arbitrumNova: "0x56D2b86dB9c8aa3fFFE5d4f9e54a51b31C975277", // Dummy for now ...
  base: "0xA4E4A647f774e45df8f9EC9207f128B942616099", // Dummy for now ...
  baseSepolia: "0xFfdd56faC3A5A87b574b1E9ed0F826879811d7D3",
};

export const packagesNFTAddress: Record<string, string> = {
  polgonAmoy: "",
  sepolia: "0x9506D39EDd348314E6Ad8665a54e50cd660D35f3",
  arbitrumNova: "0xb8043620Ef662995b5bcBB6E5c39162642304894", // Dummy for now ...
  base: "0xeB85a0c71F935aCB22b5CcD7BBD7912AaaA8b0a9", // Dummt for now
  baseSepolia: "0x77Fc0BDE9a8380602F3Da53c2E43367237B1f6EE",
};

export const giftPackageNFTAddress: Record<string, string> = {
  polgonAmoy: "",
  sepolia: "0xc215dDc236826132F360A1f4CED208aDD526c8c8",
  arbitrumNova: "",
  base: "",
  baseSepolia: "0x15a1fa39a4A24940625052aAcb1A0617B4AEbA86",
};

export const smartWalletFactory: Record<string, string> = {
  polgonAmoy: "",
  sepolia: "0x21187414d973891032AdfD52e8808adA893dB60b", //"0xB3265d462a79b41279B012f9C9Cdd227b16CFfF9",
  arbitrumNova: "0x3f743c7417E1db677710371f4fd193c10322F666",
  base: "0x3f743c7417E1db677710371f4fd193c10322F666",
  baseSepolia: "0x3f743c7417E1db677710371f4fd193c10322F666",
};

export const chains: Record<string, Chain> = {
  anvil: anvil,
  arbitrumNova: arbitrumNova,
  arbitrumSepolia: arbitrumSepolia,
  arbitrum: arbitrum,
  avalancheFuji: avalancheFuji,
  avalanche: avalanche,
  baseSepolia: baseSepolia,
  base: base,
  ethereum: ethereum,
  optimismSepolia: optimismSepolia,
  optimism: optimism,
  polgonAmoy: polygonAmoy,
  polygon: polygon,
  sepolia: sepolia,
  zoraSepolia: zoraSepolia,
  zora: zora,
};

export const thirdWebClientId = import.meta.env.VITE_TW_CLIENT_ID;
