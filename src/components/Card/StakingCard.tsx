import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Volt2CRVLogoSvg, VoltaLogoSvg } from 'src/config/images';
import { NorthEast } from '@mui/icons-material';
import { MaxLogoInput } from '../Input/MaxLogoInput';

export const StakingVoltaCard = () => {
  const [isStake, setStake] = useState(true);
  const [stakeAmount, setStakeAmount] = useState(0);

  return (
    <StakeVoltaCardContainer>
      <StakeVoltaCardHeader>
        <StakeVoltaCardTitleContainer>
          <Img src={VoltaLogoSvg} alt="volta-logo" />
          <StakeVoltaCardTitle>
            <StakeVoltaCardPrimaryTitle>Stake Volta</StakeVoltaCardPrimaryTitle>
            <StakeVoltaCardSecondaryTitle>Stake Volta to Earn WETH</StakeVoltaCardSecondaryTitle>
          </StakeVoltaCardTitle>
        </StakeVoltaCardTitleContainer>
      </StakeVoltaCardHeader>
      <StakeHeaderLine />
      <StakeVoltaCardContent>
        <StakeVoltaChooserContainer>
          <StakeVoltaChooserTitle>Stake Volta:</StakeVoltaChooserTitle>
          <StakeVoltaChooserWrapper>
            <StakeChooser selected={isStake} onClick={() => setStake(true)} disableRipple>
              Stake
            </StakeChooser>
            <UnStakeChooser selected={!isStake} onClick={() => setStake(false)} disableRipple>
              Unstake
            </UnStakeChooser>
          </StakeVoltaChooserWrapper>
        </StakeVoltaChooserContainer>
        <MaxLogoInput
          primaryText="Amount"
          secondaryText={`Balance: ${0.789} VoltGNS`}
          state={stakeAmount}
          setState={setStakeAmount}
          logo={VoltaLogoSvg}
          logoText="Volta"
        />
        <StakeVoltaRewardContainer>
          <StakeVoltaRewardAPR>WETH rewards APR:</StakeVoltaRewardAPR>
          <StakeVoltaNetworkFeeContainer>
            <StakeVoltaNetworkFeePrimaryText>~ 0.00 %</StakeVoltaNetworkFeePrimaryText>
            <StakeVoltaNetworkFee>
              Network Fee: <span> ~ 0.00 % </span>
            </StakeVoltaNetworkFee>
          </StakeVoltaNetworkFeeContainer>
        </StakeVoltaRewardContainer>
        <StakeVoltaAction>
          <StakeVoltaButton>Stake Volta</StakeVoltaButton>
          <ManageButton>Manage</ManageButton>
        </StakeVoltaAction>
      </StakeVoltaCardContent>
    </StakeVoltaCardContainer>
  );
};

export const StakingVolt2CRVCard = () => {
  const [isStake, setStake] = useState(true);
  const [stakeAmount, setStakeAmount] = useState(0);

  return (
    <StakeVoltaCardContainer>
      <StakeVoltaCardHeader>
        <StakeVoltaCardTitleContainer>
          <Img src={Volt2CRVLogoSvg} alt="volta-logo" />
          <StakeVoltaCardTitle>
            <StakeVoltaCardPrimaryTitle>Stake Volt2CRV</StakeVoltaCardPrimaryTitle>
            <StakeVoltaCardSecondaryTitle>Earn Volta and WETH</StakeVoltaCardSecondaryTitle>
          </StakeVoltaCardTitle>
        </StakeVoltaCardTitleContainer>
        <DesktopAddLiquidityButton endIcon={<NorthEast />}>Add Liquidity</DesktopAddLiquidityButton>
      </StakeVoltaCardHeader>
      <StakeHeaderLine />
      <StakeVoltaCardContent>
        <StakeVoltaChooserContainer>
          <StakeVoltaChooserTitle>Stake Volt2CRV:</StakeVoltaChooserTitle>
          <StakeVoltaChooserWrapper>
            <StakeChooser selected={isStake} onClick={() => setStake(true)} disableRipple>
              Stake
            </StakeChooser>
            <UnStakeChooser selected={!isStake} onClick={() => setStake(false)} disableRipple>
              Unstake
            </UnStakeChooser>
          </StakeVoltaChooserWrapper>
        </StakeVoltaChooserContainer>
        <MaxLogoInput
          primaryText="Amount"
          secondaryText={`Balance: ${0.789} VoltGNS`}
          state={stakeAmount}
          setState={setStakeAmount}
          logo={Volt2CRVLogoSvg}
          logoText="Volt2CRV"
        />
        <StakeVoltaRewardContainer>
          <StakeVoltaRewardAPR>VOLTA rewards APR:</StakeVoltaRewardAPR>
          <StakeVoltaNetworkFeeContainer>
            <StakeVoltaNetworkFeePrimaryText>~ 0.00 %</StakeVoltaNetworkFeePrimaryText>
            <StakeVoltaNetworkFee>
              Network Fee: <span> ~ 0.00 % </span>
            </StakeVoltaNetworkFee>
          </StakeVoltaNetworkFeeContainer>
        </StakeVoltaRewardContainer>
        <StakeVoltaRewardContainer>
          <StakeVoltaRewardAPR>WETH rewards APR:</StakeVoltaRewardAPR>
          <StakeVoltaNetworkFeeContainer>
            <StakeVoltaNetworkFeePrimaryText>~ 0.00 %</StakeVoltaNetworkFeePrimaryText>
            <StakeVoltaNetworkFee>
              Network Fee: <span> ~ 0.00 % </span>
            </StakeVoltaNetworkFee>
          </StakeVoltaNetworkFeeContainer>
        </StakeVoltaRewardContainer>
        <StakeVoltaAction>
          <StakeVoltaButton>Stake Volta</StakeVoltaButton>
          <MobileAddLiquidityButton endIcon={<NorthEast />}>Add Liquidity</MobileAddLiquidityButton>
          <ManageButton>Manage</ManageButton>
        </StakeVoltaAction>
      </StakeVoltaCardContent>
    </StakeVoltaCardContainer>
  );
};

const StakeVoltaCardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#131418',
  borderRadius: '8px',
  width: '600px',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down(1366)]: {
    width: '500px'
  },
  [theme.breakpoints.down(1150)]: {
    width: '600px'
  },
  [theme.breakpoints.down(700)]: {
    width: 'auto'
  }
}));

const StakeVoltaCardHeader = styled(Box)(({ theme }) => ({
  padding: '20px 34px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down(540)]: {
    padding: '24px 18px'
  }
}));

const Img = styled('img')(({ theme }) => ({
  width: '30px',
  height: '30px',
  objectFit: 'cover'
}));

const StakeVoltaCardTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '7px'
}));

const StakeVoltaCardPrimaryTitle = styled(Box)(({ theme }) => ({
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '20px',
  color: '#FFFFFF',
  [theme.breakpoints.down(480)]: {
    fontSize: '15px'
  }
}));

const StakeVoltaCardSecondaryTitle = styled(Box)(({ theme }) => ({
  fontSize: '13px',
  lineHeight: '16px',
  fontWeight: '600',
  color: '#A5A5A5'
}));

const StakeHeaderLine = styled(Box)(({ theme }) => ({
  height: '0.8px',
  width: '100%',
  backgroundColor: '#1D1E1F'
}));

const StakeVoltaCardContent = styled(Box)(({ theme }) => ({
  padding: '30px 34px',
  display: 'flex',
  gap: '35px',
  flexDirection: 'column',
  [theme.breakpoints.down(450)]: {
    padding: '26px 18px'
  }
}));

const StakeVoltaChooserContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const StakeVoltaChooserTitle = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '20px',
  fontWeight: '500',
  [theme.breakpoints.down(450)]: {
    fontSize: '14px'
  }
}));

const StakeVoltaChooserWrapper = styled(Box)(({ theme }) => ({
  display: 'flex'
}));

const StakeChooser = styled(Button)<{ selected: boolean }>(({ theme, selected }) => ({
  backgroundColor: selected ? 'rgba(0, 235, 136, 0.07)' : 'rgba(255, 255, 255, 0.02)',
  border: selected ? '1px solid #00EB88' : '1px solid #1D1E1F',
  color: selected ? '#00EB88' : '#A5A5A5',
  borderRadius: '4px 0px 0px 4px',
  padding: '3px 16px',
  fontSize: '16px',
  lineHeight: '30px',
  fontWeight: 600,
  textTransform: 'none',
  [theme.breakpoints.down(450)]: {
    padding: '0px 16px',
    fontSize: '14px'
  }
}));

const UnStakeChooser = styled(Button)<{ selected: boolean }>(({ theme, selected }) => ({
  backgroundColor: selected ? 'rgba(0, 235, 136, 0.07)' : 'rgba(255, 255, 255, 0.02)',
  border: selected ? '1px solid #00EB88' : '1px solid #1D1E1F',
  color: selected ? '#00EB88' : '#A5A5A5',
  borderRadius: '0px 4px 4px 0px',
  padding: '3px 16px',
  fontSize: '16px',
  lineHeight: '30px',
  fontWeight: 600,
  textTransform: 'none',
  [theme.breakpoints.down(450)]: {
    padding: '0px 16px',
    fontSize: '14px'
  }
}));

const StakeVoltaRewardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

const StakeVoltaRewardAPR = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#A5A5A5'
}));

const StakeVoltaNetworkFeeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  gap: '10px'
}));

const StakeVoltaNetworkFeePrimaryText = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '20px',
  color: '#FFFFFF'
}));

const StakeVoltaNetworkFee = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '13px',
  lineHeight: '17px',
  color: '#A5A5A5',
  span: {
    color: '#ffffff',
    fontWeight: '700'
  }
}));

const StakeVoltaAction = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
}));

const StakeVoltaButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: '48px',
  background: '#26272A',
  boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.043)',
  borderRadius: '4px',
  textTransform: 'none'
}));

const ManageButton = styled(Button)(({ theme }) => ({
  border: '1px solid #1D1E1F',
  filter: 'drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.043))',
  width: '100%',
  height: '48px',
  borderRadius: '4px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'transparent'
  }
}));

const StakeVoltaCardTitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
}));

const DesktopAddLiquidityButton = styled(Button)(({ theme }) => ({
  border: '1px solid #356DF3',
  borderRadius: '4px',
  textTransform: 'none',
  paddingLeft: '16px',
  paddingRight: '16px',
  color: '#356DF3',
  [theme.breakpoints.down(540)]: {
    display: 'none'
  }
}));

const MobileAddLiquidityButton = styled(Button)(({ theme }) => ({
  border: '1px solid #356DF3',
  borderRadius: '4px',
  textTransform: 'none',
  paddingLeft: '16px',
  paddingRight: '16px',
  color: '#356DF3',
  display: 'none',
  height: '48px',
  [theme.breakpoints.down(540)]: {
    display: 'flex',
    alignItems: 'center'
  }
}));
