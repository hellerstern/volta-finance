import { useContractRead } from 'wagmi';
import tokenAddys from '../contracts/address.json';
import ABIS from 'src/contracts/ABI/abis';

export const useVoltGNSBoost = () => {
  const { data, isError, isFetching } = useContractRead({
    address: tokenAddys.tokens.voltGNS.address,
    abi: ABIS.voltaGNS.contract.abi,
    functionName: 'boostedGNS',
    args: [],
    watch: true
  });

  return data;
};

export const useVoltGNSCap = () => {
  const { data, isError, isFetching } = useContractRead({
    address: tokenAddys.tokens.voltGNS.address,
    abi: ABIS.voltaGNS.contract.abi,
    functionName: 'totalAssets',
    args: [],
    watch: true
  });

  return data;
};
