import { ethers } from "ethers";
import { erc20ABI } from "wagmi";
import ABI from './abi.json'

let provider: any = null;
let signer: any = null

export const initializeWeb3 = async (provider_: any, signer_: any) => {
    provider =  provider_;
    signer =  await signer_;
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
    console.log("isApproved: ", allowance)
    const isAllow = allowance > '100000000000'
    return isAllow;
}

export const tokenDeposit = async (amount: number, spender: string, owner: string) => {
    const stakingABI = ABI.token.abi;
    const stakingContract = new ethers.Contract(spender, stakingABI, signer);
    const tx = await stakingContract.deposit((amount * (10 ** 18)).toString(), owner);
    await tx.wait();
}