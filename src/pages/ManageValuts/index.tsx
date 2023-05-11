import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { ManageVaultsBreadcrumb } from './ManageVaultsBreadcrumb';
import { ManageVaultsCards } from './ManageVaultsCards';

export const ManageVaults = () => {
  return (
    <ManageVaultsContainer>
      <ManageVaultsBreadcrumb />
      <ManageVaultsCards />
    </ManageVaultsContainer>
  );
};

const ManageVaultsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '37px'
}));
