import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { StakingAbout } from './StakingAbout';
import { StakingBadges } from './StakingBadges';
import { StakingCards } from './StakingCards';
export const StakingPage = () => {
  return (
    <StakingPageContainer>
      <StakingAbout />
      <StakingBadges />
      <StakingCards />
    </StakingPageContainer>
  );
};

const StakingPageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '31px'
}));
