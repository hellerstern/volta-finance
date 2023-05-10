import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { CreateVault } from './CreateVault';
import { UserVault } from './UserVault';

export const Vaults = () => {
  return (
    <VaultsContainer>
      <CreateVault />
      <UserVault />
    </VaultsContainer>
  );
};

const VaultsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
  paddingTop: '70px'
}));
