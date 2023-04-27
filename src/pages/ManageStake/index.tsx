import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { ManageStakeBreadcrumb } from './ManageStakeBreadcrumb';
import { ManageStakeCards } from './ManageStakeCards';

export const ManageStake = () => {
  return (
    <ManageStakeContainer>
      <ManageStakeBreadcrumb />
      <ManageStakeCards />
    </ManageStakeContainer>
  );
};

const ManageStakeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '36px'
}));
