import { useEffect, useState } from 'react';
import { useAccount, useContractRead } from 'wagmi';
import ABI from '../contracts/abi.json';

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

  console.log('Deposited Value: ', deposited);

  return deposited;
};
