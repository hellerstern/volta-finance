import { useEffect, useState } from 'react';
import { useAccount, useContractRead } from 'wagmi';
import ABIS from 'src/contracts/ABI/abis';
import { rowDataProps } from 'src/constant/interface';
import { getGLPPrice, getGMXPrice, getGNSPrice } from 'src/contracts';

export const useDepositBalance = (contractAddy: string) => {
  const { address } = useAccount();
  const [deposited, setDeposited] = useState('Loading...');
  const decimals = 18;

  const { data } = useContractRead({
    address: contractAddy as `0x${string}`,
    abi: ABIS.voltaGNS.contract.abi,
    functionName: 'balanceOf',
    args: [address ?? ('0x0000000000000000000000000000000000000000' as `0x${string}`)],
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

export const useTvlBalance = (item: rowDataProps) => {
  const [totalAssets, setTotalAssets] = useState(0);
  const [gnsPrice, setGnsPrice] = useState(0);
  const [gmxPrice, setGmxPrice] = useState(0);
  const [glpPrice, setGlpPrice] = useState(0);
  const decimals = 18;

  const { data } = useContractRead({
    address: item.contract as `0x${string}`,
    abi: ABIS.voltaGNS.contract.abi,
    functionName: 'totalAssets',
    watch: true
  });

  useEffect(() => {
    const assets = data !== undefined ? Number(data) : 0;
    const adjustedAssets = assets / 10 ** decimals;
    const formattedAssets = Math.floor(adjustedAssets * 100) / 100;
    setTotalAssets(formattedAssets);
  }, [data]);

  const handleGNSPrice = async () => {
    const price = await getGNSPrice();
    setGnsPrice(price);
  };

  const handleGMXPrice = async () => {
    const price = await getGMXPrice();
    setGmxPrice(price);
  };

  const handleGLPPrice = async () => {
    const price = await getGLPPrice();
    setGlpPrice(price);
  };

  useEffect(() => {
    handleGNSPrice();
    handleGMXPrice();
    handleGLPPrice();
  }, []);

  const tokenPrice =
    item.assetPrimary === 'GNS'
      ? gnsPrice
      : item.assetPrimary === 'GMX'
      ? gmxPrice
      : item.assetPrimary === 'GLP'
      ? glpPrice
      : 0;

  const tvl = Math.floor(totalAssets * tokenPrice * 100) / 100;

  return tvl;
};
