import { HelpOutline } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { ClaimButton } from 'src/components/Button/ClaimButton';
import { StakeButton } from 'src/components/Button/StakeButton';
import {
  DecentralizedIcon,
  Volt2CRVLogoSvg,
  VoltaDaoIcon,
  VoltaIcon,
  VoltaLogoSvg,
  Web3BoostIcon,
  WethIcon,
  WethLogoSvg
} from 'src/config/images';

export const ManageStakeCards = () => {
  return (
    <ManageStakeCardsContainer>
      <StakeClaimContainer>
        <TotalStakeCard />
        <ClaimRewardCard />
      </StakeClaimContainer>
      <StartStakingCard />
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
  gap: '25px',
  [theme.breakpoints.down(1120)]: {
    flexDirection: 'column'
  }
}));

const TotalStakeCard = () => {
  return (
    <StakeCardContainer>
      <StakeCardTitle name="Total Staked" />
      <StakeCardActionContainer>
        <StakeCardValue name="Volta" icon={VoltaLogoSvg} primary={4.789} secondary={26.532} />
        <StakeButton />
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
  background: '#131418',
  [theme.breakpoints.down(1120)]: {
    flexDirection: 'column',
    width: '100%'
  },
  [theme.breakpoints.down(768)]: {
    gap: '40px',
    height: 'fit-content'
  },
  [theme.breakpoints.down(450)]: {
    padding: '23px 19px'
  }
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
  justifyContent: 'space-between',
  [theme.breakpoints.down(768)]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '36px'
  }
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
        <ClaimButton />
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
  background: '#131418',
  [theme.breakpoints.down(1120)]: {
    flexDirection: 'column',
    width: '100%'
  },
  [theme.breakpoints.down(1120)]: {
    gap: '40px',
    height: 'fit-content',
    width: '100%'
  },
  [theme.breakpoints.down(450)]: {
    padding: '23px 19px'
  }
}));

const StartStakingCard = () => {
  return (
    <StartStakingCardContainer>
      <Volta2CrvLogoImgContainer>
        <Volta2CrvLogoImg src={Volt2CRVLogoSvg} alt="volt2crv-logo" />
      </Volta2CrvLogoImgContainer>
      <StartStakingCardContent>
        <StartStakingCardPrimaryText>Start staking Volt2CRV</StartStakingCardPrimaryText>
        <StartStakingCardSecondaryText>
          From generating passive income to helping govern the network
        </StartStakingCardSecondaryText>
        <StartStakingCardButton>How it works ?</StartStakingCardButton>
      </StartStakingCardContent>
      <StartStakingCardFooter>
        <StartStakingCardFooterItemWrapper>
          <StartStakingCardFooterItem
            icon={VoltaIcon}
            subIcon={WethIcon}
            text={'Earn VOLTA and WETH for facilitating Web3 development'}
          />
          <StartStakingCardFooterLine />
        </StartStakingCardFooterItemWrapper>
        <StartStakingCardFooterItemWrapper>
          <StartStakingCardFooterItem icon={DecentralizedIcon} text={'Support decentralized Web3 infrastructure'} />
          <StartStakingCardFooterLine mobile={1} />
        </StartStakingCardFooterItemWrapper>
        <StartStakingCardFooterItemWrapper>
          <StartStakingCardFooterItem icon={Web3BoostIcon} text={'Boost Web3 integration and adoption'} />
          <StartStakingCardFooterLine />
        </StartStakingCardFooterItemWrapper>
        <StartStakingCardFooterItem icon={VoltaDaoIcon} text={'Earn participation in Volta DAO governance'} />
      </StartStakingCardFooter>
    </StartStakingCardContainer>
  );
};

const StartStakingCardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#131418',
  borderRadius: '4px',
  height: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down(1120)]: {
    height: '100%',
    padding: '50px 0'
  }
}));

const Volta2CrvLogoImgContainer = styled(Box)(({ theme }) => ({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: '#0D0D0D',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const Volta2CrvLogoImg = styled('img')(({ theme }) => ({
  width: '50px',
  height: '50px',
  objectFit: 'cover'
}));

const StartStakingCardContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '9px',
  paddingTop: '30px'
}));

const StartStakingCardPrimaryText = styled(Box)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '30px',
  lineHeight: '35px',
  [theme.breakpoints.down(450)]: {
    fontSize: '20px'
  }
}));

const StartStakingCardSecondaryText = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#A5A5A5',
  textAlign: 'center',
  [theme.breakpoints.down(640)]: {
    width: '270px'
  },
  [theme.breakpoints.down(450)]: {
    fontSize: '14px'
  }
}));

const StartStakingCardButton = styled(Button)(({ theme }) => ({
  border: '1px solid #1D1E1F',
  borderRadius: '6px',
  padding: '14px',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '14px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'transparent'
  }
}));

const StartStakingCardFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  paddingTop: '60px',
  [theme.breakpoints.down(1120)]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 2fr)'
  },
  [theme.breakpoints.down(640)]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 4fr)',
    gap: '50px'
  }
}));

const StartStakingCardFooterItem = (props: { icon: string; subIcon?: string; text: string }) => {
  return (
    <StartStakingCardFooterItemContainer>
      <StartStakingCardFooterItemIconContainer>
        <StartStakingCardFooterItemIcon src={props.icon} alt="item-icon" />
        {props.subIcon !== undefined && (
          <StartStakingCardFooterItemIcon src={props.subIcon} sx={{ marginLeft: '-2px' }} alt="item-icon" />
        )}
      </StartStakingCardFooterItemIconContainer>
      <StartStakingCardFooterItemText>{props.text}</StartStakingCardFooterItemText>
    </StartStakingCardFooterItemContainer>
  );
};

const StartStakingCardFooterItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  gap: '10px'
}));

const StartStakingCardFooterItemIconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center'
}));

const StartStakingCardFooterItemIcon = styled('img')(({ theme }) => ({
  width: 'auto',
  height: '20px'
}));

const StartStakingCardFooterItemText = styled(Box)(({ theme }) => ({
  width: '210px',
  textAlign: 'center',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#A5A5A5'
}));

const StartStakingCardFooterLine = styled(Box)<{ mobile?: number }>(({ theme, mobile }) => ({
  width: '1.6px',
  height: '70px',
  backgroundColor: '#1D1E1F',
  [theme.breakpoints.down(1120)]: {
    display: mobile === 1 ? 'none' : 'block'
  },
  [theme.breakpoints.down(640)]: {
    display: 'none'
  }
}));

const StartStakingCardFooterItemWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  justifyContent: 'center'
}));
