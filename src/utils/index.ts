export const truncateStr = (str: string, n: number) => {
  if (!str) return "";
  return str.length > n ? str.substring(0, n - 1) + " ..." : str;
};

export const truncateAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
