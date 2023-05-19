import { erc20ABI, useAccount, useContractRead } from 'wagmi';

export const useTokenBalance = (tokenAddress: string) => {
  const { address } = useAccount();

  const { data } = useContractRead({
    address: tokenAddress as `0x${string}`,
    abi: erc20ABI,
    functionName: 'balanceOf',
    args: [address as `0x${string}`],
    watch: true
  });

  return data;
};
