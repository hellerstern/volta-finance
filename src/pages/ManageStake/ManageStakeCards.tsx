import { HelpOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { VoltaStakeButton } from 'src/components/Button/VoltaStakeButton';
import { VoltaLogoSvg, WethLogoSvg } from 'src/config/images';

export const ManageStakeCards = () => {
  return (
    <ManageStakeCardsContainer>
      <StakeClaimContainer>
        <TotalStakeCard />
        <ClaimRewardCard />
      </StakeClaimContainer>
    </ManageStakeCardsContainer>
  );
};

const ManageStakeCardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '25px'
}));

const StakeClaimContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '25px'
}));

const TotalStakeCard = () => {
  return (
    <StakeCardContainer>
      <StakeCardTitle name="Total Staked" />
      <StakeCardActionContainer>
        <StakeCardValue name="Volta" icon={VoltaLogoSvg} primary={4.789} secondary={26.532} />
        <VoltaStakeButton>Stake</VoltaStakeButton>
      </StakeCardActionContainer>
    </StakeCardContainer>
  );
};

const StakeCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  flexDirection: 'column',
  padding: '23px 32px',
  width: '475px',
  height: '200px',
  borderRadius: '8px',
  background: '#131418'
}));

const StakeCardTitle = (props: { name: string }) => {
  const { name } = props;
  return (
    <StakeCardTitleContainer>
      <StakeCardTitleText>{name}</StakeCardTitleText>
      <StakeCardTitleIcon>
        <HelpOutline sx={{ width: '100%', height: '100%' }} />
      </StakeCardTitleIcon>
    </StakeCardTitleContainer>
  );
};

const StakeCardTitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  height: '20px'
}));

const StakeCardTitleText = styled(Box)(({ theme }) => ({
  fontSize: '15px',
  lineHeight: '20px',
  color: '#A5A5A5'
}));

const StakeCardTitleIcon = styled(Box)(({ theme }) => ({
  width: '12px',
  height: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#A5A5A5'
}));

const StakeCardActionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const StakeCardValue = (props: {
  name: string;
  icon: string;
  primary: number | string;
  secondary: number | string;
}) => {
  const { name, icon, primary, secondary } = props;
  return (
    <StakeCardValueContainer>
      <StakeCardValueName>{name}</StakeCardValueName>
      <StakeCardValueWrapper>
        <StakeCardValueIcon src={icon} alt="stake-card-icon" />
        <StakeCardPrimaryValue>{primary}</StakeCardPrimaryValue>
        <StakeCardSecondaryValue>(${secondary})</StakeCardSecondaryValue>
      </StakeCardValueWrapper>
    </StakeCardValueContainer>
  );
};

const StakeCardValueContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8.5px'
}));

const StakeCardValueName = styled(Box)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '11px',
  lineHeight: '16px',
  color: '#8A8C95'
}));

const StakeCardValueWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '8px'
}));

const StakeCardValueIcon = styled('img')(({ theme }) => ({
  width: '24px',
  height: '24px'
}));

const StakeCardPrimaryValue = styled(Box)(({ theme }) => ({
  fontSize: '30px',
  lineHeight: '20px',
  fontWeight: '700',
  color: '#F3F3F8'
}));

const StakeCardSecondaryValue = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '16px',
  color: '#8A8C95'
}));

const ClaimRewardCard = () => {
  return (
    <ClaimRewardCardContainer>
      <StakeCardTitle name="Claimable rewards" />
      <StakeCardActionContainer>
        <StakeCardValue name="WETH" icon={WethLogoSvg} primary={5.6789} secondary={7.894} />
        <StakeCardValue name="Volta" icon={VoltaLogoSvg} primary={'7.890'} secondary={45.744} />
        <VoltaStakeButton>Claim</VoltaStakeButton>
      </StakeCardActionContainer>
    </ClaimRewardCardContainer>
  );
};

const ClaimRewardCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  flexDirection: 'column',
  padding: '23px 32px',
  width: '740px',
  height: '200px',
  borderRadius: '8px',
  background: '#131418'
}));
