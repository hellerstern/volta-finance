export interface swapCoinArrayProps {
  logo: string;
  name: string;
}

export interface VaultsDataProps {
  logo: string;
  title: string;
  id: number;
  ratio: number;
  collateral: number;
  collateralUSD: number;
  dept: number;
}

export interface rowDataProps {
  id: number;
  assetIcon: string;
  assetPrimary: string;
  assetSecondary: string;
  apr: string;
  boost: string;
  network: string;
  token: string;
  contract: string;
}
