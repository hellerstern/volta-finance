import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { DatabaseLogoSvg, PercentLogoSvg, AntenaLogoSvg } from 'src/config/images';

export const UsecaseVolta = () => {
  return (
    <UsecaseVoltaContainer>
      <AboutUsecaseVolta>
        VOLT is a USD stablecoin backed solely by decentralized tokens. Its target peg is 1% within the US Dollar. VOLT
        can only be minted by users through overcollateralized debt positions.
      </AboutUsecaseVolta>
      <WhatUsecaseVolta>What are some use cases for Volta?</WhatUsecaseVolta>
      <UsecaseVoltaDetail>
        <Usecase
          icon={DatabaseLogoSvg}
          title="Keep your crypto while still using its value"
          content="Discover a practical approach to unlock the purchasing power of your cryptocurrency without relinquishing ownership"
        />
        <Usecase
          icon={PercentLogoSvg}
          title="Receive instant 0% interest loans"
          content="Discover a practical approach to unlock the purchasing power of your cryptocurrency without relinquishing ownership"
        />
        <Usecase
          icon={AntenaLogoSvg}
          title="Leverage your crypto positions, Seek extra yield through looping"
          content="Maximize your investment returns with the power of looping. Discover a proven investment technique that allows you to potentially earn extra yield on your investments."
        />
      </UsecaseVoltaDetail>
    </UsecaseVoltaContainer>
  );
};

const UsecaseVoltaContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
  alignItems: 'center',
  paddingTop: '120px'
}));

const AboutUsecaseVolta = styled(Box)(({ theme }) => ({
  width: '870px',
  fontSize: '40px',
  fontWeight: '600',
  lineHeight: '56px',
  textAlign: 'center',
  [theme.breakpoints.down(960)]: {
    width: 'auto',
    fontSize: '30px'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '23px',
    lineHeight: '35px'
  }
}));

const WhatUsecaseVolta = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '40px',
  lineHeight: '48px',
  textAlign: 'center',
  [theme.breakpoints.down(960)]: {
    fontSize: '30px'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '23px'
  }
}));

const UsecaseVoltaDetail = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down(1240)]: {
    flexDirection: 'column',
    width: 'auto',
    gap: '95px'
  },
  [theme.breakpoints.down(640)]: {
    gap: '60px'
  }
}));

const Usecase = (props: { icon: string; title: string; content: string }) => {
  return (
    <UsecaseContainer>
      <UsecaseIcon src={props.icon} alt="usecase-icon" />
      <UsecaseTitle>{props.title}</UsecaseTitle>
      <UsecaseContent>{props.content}</UsecaseContent>
    </UsecaseContainer>
  );
};

const UsecaseContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '341px',
  [theme.breakpoints.down(1240)]: {
    alignItems: 'center',
    maxWidth: 'inherit'
  }
}));

const UsecaseIcon = styled('img')(({ theme }) => ({
  width: '64px',
  height: '64px'
}));

const UsecaseTitle = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '38px',
  paddingTop: '31px',
  [theme.breakpoints.down(1240)]: {
    textAlign: 'center'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '20px'
  }
}));

const UsecaseContent = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  lineHeight: '29px',
  fontSize: '18px',
  color: '#CDCDCD',
  paddingTop: '12px',
  [theme.breakpoints.down(1240)]: {
    textAlign: 'center'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '15px',
    lineHeight: '24px'
  }
}));
