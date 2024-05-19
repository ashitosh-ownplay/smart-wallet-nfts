export const ipfsUrlToCfGateway = (ipfsUrl: string): string => {
    if (!ipfsUrl) return "";
    const cfIpfsGatewayBaseUrl = 'https://cf-ipfs.com/ipfs/';
    const ipfsCID = ipfsUrl.substring(7)

    return `${cfIpfsGatewayBaseUrl}${ipfsCID}`;
}