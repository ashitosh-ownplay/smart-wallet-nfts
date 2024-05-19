export const truncateStr = (str: string, n: number) => {
    if (!str) return '';
    return str.length > n ? str.substring(0, n - 1) + ' ...' : str;
  };
  