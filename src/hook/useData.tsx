import { useEffect, useState } from 'react';
import { useAccount, useContractRead } from 'wagmi';
import ABI from '../contracts/abi.json';
import { useTokenPrice } from './useToken';

export const useDepositBalance = (contractAddy: string) => {
  const { address } = useAccount();
  const [deposited, setDeposited] = useState('Loading...');
  const decimals = 18;

  const { data } = useContractRead({
    address: contractAddy as `0x${string}`,
    abi: ABI.contract.abi,
    functionName: 'balanceOf',
    args: [address as `0x${string}`],
    watch: true
  });

  useEffect(() => {
    const balance = data !== undefined ? Number(data) : 0;
    const adjustedBalance = balance / 10 ** decimals;
    const formattedBalance = Math.floor(adjustedBalance * 100) / 100;
    setDeposited(formattedBalance.toString());
  }, [data]);

  return deposited;
};

export const useTvlBalance = (contractAddy: string) => {
  const [totalAssets, setTotalAssets] = useState(0);
  const decimals = 18;

  const { data } = useContractRead({
    address: contractAddy as `0x${string}`,
    abi: ABI.contract.abi,
    functionName: 'totalAssets',
    watch: true
  });

  useEffect(() => {
    const assets = data !== undefined ? Number(data) : 0;
    const adjustedAssets = assets / 10 ** decimals;
    const formattedAssets = Math.floor(adjustedAssets * 100) / 100;
    setTotalAssets(formattedAssets);
  }, [data]);

  const price = useTokenPrice(contractAddy);
  const tvl = Math.floor(totalAssets * price * 100) / 100;

  return tvl;
};
