import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { StakingVolt2CRVCard, StakingVoltaCard } from 'src/components/Card/StakingCard';

export const StakingCards = () => {
  return (
    <StakingCardsContainer>
      <StakingVoltaCard />
      <StakingVolt2CRVCard />
    </StakingCardsContainer>
  );
};

const StakingCardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '26px',
  [theme.breakpoints.down(1150)]: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
