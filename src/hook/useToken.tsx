import { useEffect, useState } from 'react';
import { erc20ABI, useAccount, useContractRead } from 'wagmi';
import ABI from '../contracts/abi.json';

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

  const { data: decimalsData } = useContractRead({
    address: tokenAddress as `0x${string}`,
    abi: erc20ABI,
    functionName: 'decimals',
    watch: false
  });

  const decimals = decimalsData !== undefined ? Number(decimalsData) : 18; // Default to 18 if decimals data is unavailable

  useEffect(() => {
    const balance = data !== undefined ? Number(data) : 0;
    const adjustedBalance = balance / 10 ** decimals;
    const formattedBalance = Math.floor(adjustedBalance * 100) / 100;
    setTokenBalance(formattedBalance.toString());
  }, [data, decimals]);

  return tokenBalance;
};
