import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { CreateVaultCard } from 'src/components/Card/CreateVaultCard';
import { CommonSelect } from 'src/components/Select';
import { GDAILogoSvg, VoltGNSLogoSvg } from 'src/config/images';

const vaultsArr = ['gDAI', 'VoltGNS'];
const networkArr = ['Arbitrum', 'Ethereum', 'Binance'];

export const CreateVault = () => {
  const [vaults, setVaults] = useState('');
  const [network, setNetwork] = useState('');
  return (
    <CreateVaultContainer>
      <VaultHeader>
        <VaultHeaderText>
          <VaultPrimaryText>Create new vault</VaultPrimaryText>
          <VaultSecondaryText>Create a vault to start borrowing</VaultSecondaryText>
        </VaultHeaderText>
        <VaultHeaderAction>
          <CommonSelect label="Vaults" state={vaults} setState={setVaults} arrayData={vaultsArr} width={160} />
          <CommonSelect label="Networks" state={network} setState={setNetwork} arrayData={networkArr} width={160} />
        </VaultHeaderAction>
      </VaultHeader>
      <CreateVaultCards>
        <CreateVaultCard logo={GDAILogoSvg} title="gDAI" id={1} collateral={110} />
        <CreateVaultCard logo={VoltGNSLogoSvg} title="VoltGNS" id={2} collateral={150} />
      </CreateVaultCards>
    </CreateVaultContainer>
  );
};

const CreateVaultContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '37px'
}));

export const VaultHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  [theme.breakpoints.down(768)]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '22px'
  }
}));

export const VaultHeaderText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '13px'
}));

export const VaultPrimaryText = styled(Box)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '28px',
  color: '#FFFFFF'
}));

export const VaultSecondaryText = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#A5A5A5'
}));

export const VaultHeaderAction = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}));

const CreateVaultCards = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '26px',
  [theme.breakpoints.down(1120)]: {
    flexDirection: 'column'
  }
}));
