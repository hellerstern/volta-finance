import { ethers } from "ethers";
import { erc20ABI } from "wagmi";
import ABIS from "./ABI/abis";

let provider: any = new ethers.providers.JsonRpcProvider("https://arb1.arbitrum.io/rpc");
let signer: any = null

export const initializeWeb3 = async (provider_: any, signer_: any) => {
    provider = provider_;
    signer =  signer_;
};

export const tokenApprove = async (spender: string, tokenAddy: string) => {
    const tokenContract = new ethers.Contract(tokenAddy, erc20ABI, signer);
    const max_allow = '115792089237316195423570985008687907853269984665640564039457584007913129639934'
    const tx = await tokenContract.approve(spender, max_allow);
    await tx.wait();
}

export const isApproved = async (owner: string | undefined, spender: string, tokenAddy: string) => {
    if(owner === undefined) return;
    const tokenContract = new ethers.Contract(tokenAddy, erc20ABI, signer);
    const _allowance = await tokenContract.allowance(owner, spender);
    const allowance = _allowance.toString();
    const isAllow = allowance > '100000000000'
    return isAllow;
}

export const tokenDeposit = async (amount: number, spender: string, owner: string) => {
    const stakingABI = ABIS.voltaGNS.token.abi;
    const stakingContract = new ethers.Contract(spender, stakingABI, signer);
    const tx = await stakingContract.deposit((amount * (10 ** 18)).toString(), owner);
    await tx.wait();
}

export const getGNSPrice = async () => {
    const gnsABI = [{
    "inputs": [],
    "name": "tokenPriceDai",
    "outputs": [{ "internalType": "uint256", "name": "price", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }];
  const gnsAddress = '0xcef1c791cdd8c3ea92d6ab32399119fd30e1ff21';
  const gnsContract = new ethers.Contract(gnsAddress, gnsABI, provider);
  const gnsPrice = await gnsContract.tokenPriceDai();
  const adjuestedPrice = Number(gnsPrice) / 10 ** 10;
  const formattedPrice = Math.floor(adjuestedPrice * 100) / 100;
  return formattedPrice;
}

export const getGMXPrice = async () => {
    const gmxABI = [{
    "inputs": [],
    "name": "latestAnswer",
    "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }],
    "stateMutability": "view",
    "type": "function"
  }]
  const gmxAddress = '0xdb98056fecfff59d032ab628337a4887110df3db';
  const gmxContract = new ethers.Contract(gmxAddress, gmxABI, provider);
  const gmxPrice = await gmxContract.latestAnswer();
  const adjuestedPrice = Number(gmxPrice) / 10 ** 8;
  const formattedPrice = Math.floor(adjuestedPrice * 100) / 100;
  return formattedPrice;
}

export const getGLPPrice = async () => {
    const glpABI = [{
        "inputs": [{ "internalType": "bool", "name": "_maximise", "type": "bool" }],
        "name": "getPrice",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    }]
    const glpAddress = '0x3963ffc9dff443c2a94f21b129d429891e32ec18'
    const glpContract = new ethers.Contract(glpAddress, glpABI, provider);
    const glpPrice = await glpContract.getPrice(true);
    const adjuestedPrice = Number(glpPrice) / 10 ** 30;
    const formattedPrice = Math.floor(adjuestedPrice * 100) / 100;
    return formattedPrice;
}