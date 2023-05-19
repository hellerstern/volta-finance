let provider: any = null;
let signer: any = null

export const initializeWeb3 = async (provider_: any, signer_: any) => {
    provider =  provider_;
    signer =  await signer_;
};
