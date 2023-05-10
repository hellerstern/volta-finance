import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { CommonSelect } from 'src/components/Select';
import { VaultHeader, VaultHeaderAction, VaultHeaderText, VaultPrimaryText, VaultSecondaryText } from './CreateVault';
import { SearchIconSvg } from 'src/config/images';

const vaultsArr = ['gDAI', 'VoltGNS'];
const networkArr = ['Arbitrum', 'Ethereum', 'Binance'];

export const UserVault = () => {
  const [vaults, setVaults] = useState('');
  const [network, setNetwork] = useState('');
  return (
    <UserVaultContainer>
      <VaultHeader>
        <VaultHeaderText>
          <VaultPrimaryText>My vaults</VaultPrimaryText>
          <VaultSecondaryText>Create a vault to start borrowing</VaultSecondaryText>
        </VaultHeaderText>
        <VaultHeaderAction>
          <CommonSelect label="Vaults" state={vaults} setState={setVaults} arrayData={vaultsArr} width={160} />
          <CommonSelect label="Networks" state={network} setState={setNetwork} arrayData={networkArr} width={160} />
        </VaultHeaderAction>
      </VaultHeader>
      <VaultContent>
        <NotFound>
          <img src={SearchIconSvg} alt="search-icon" />
          <NotFoundTitle>Vaults not found</NotFoundTitle>
          <NotFoundText>
            If you're a new user to a digital platform that offers a vault service, you may not have any existing vaults
            created yet.
          </NotFoundText>
        </NotFound>
      </VaultContent>
    </UserVaultContainer>
  );
};

const UserVaultContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '37px'
}));

const VaultContent = styled(Box)(({ theme }) => ({
  backgroundColor: '#131418',
  borderRadius: '4px',
  height: '320px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const NotFound = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '20px'
}));

const NotFoundTitle = styled(Box)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '28px',
  color: '#FFFFFF'
}));

const NotFoundText = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#A5A5A5',
  textAlign: 'center',
  [theme.breakpoints.down(1120)]: {
    width: '444px'
  },
  [theme.breakpoints.down(560)]: {
    width: '260px'
  }
}));
