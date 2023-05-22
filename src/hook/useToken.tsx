import { useEffect, useState } from 'react';
import { erc20ABI, useAccount, useContractRead } from 'wagmi';

export const useTokenBalance = (tokenAddress: string) => {
  const { address } = useAccount();
  const [tokenBalance, setTokenBalance] = useState('Loading');

  const { data } = useContractRead({
    address: tokenAddress as `0x${string}`,
    abi: erc20ABI,
    functionName: 'balanceOf',
    args: [address as `0x${string}`],
    watch: true
  });

  useEffect(() => {
    setTokenBalance((Math.floor(((data !== undefined ? Number(data) : 0) / 10 ** 18) * 100) / 100).toString());
  }, [data]);

  return tokenBalance;
};
