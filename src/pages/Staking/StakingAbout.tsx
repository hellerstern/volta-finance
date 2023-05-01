import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { CRVLogoSvg } from 'src/config/images';

export const StakingAbout = () => {
  return (
    <StakingAboutContainer>
      <StakingPageAvailable>
        Availble on <img src={CRVLogoSvg} alt="crv-logo" /> CRV
      </StakingPageAvailable>
      <StakingPageTitle>Staking</StakingPageTitle>
      <StakingPageExplain>
        Volta holders can stake their VOLTA in the Safety Module to add more security to the protocol and earn Safety
        Incentives. In the case of a shortfall event, up to 30% of your stake can be slashed to cover the deficit,
        providing an additional layer of protection for the protocol. <span>Learn more</span>
      </StakingPageExplain>
    </StakingAboutContainer>
  );
};

const StakingAboutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '13px',
  flexDirection: 'column',
  paddingTop: '84px'
}));

const StakingPageAvailable = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: '#A5A5A5',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '16px',
  gap: '6px'
}));

const StakingPageTitle = styled(Box)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '28px',
  color: 'rgba(255, 255, 255, 0.92)'
}));

const StakingPageExplain = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#A5A5A5',
  width: '820px',
  span: {
    color: '#00EB88',
    cursor: 'pointer',
    textDecoration: 'underline'
  },
  [theme.breakpoints.down(890)]: {
    width: 'auto'
  }
}));
