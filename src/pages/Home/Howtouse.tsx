import { CallMade, East } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { ALink } from 'src/components/ALink';
import { CheckIcon1, CheckIcon2, GDAILogoSvg, VoltGNSLogoSvg } from 'src/config/images';

export const Howtouse = () => {
  return (
    <HowtouseContainer>
      <HowtouseText>
        <HowtouseTitle>How to use ?</HowtouseTitle>
        <HowtouseContent>
          Volta is currently live on Arbitrum (more chains in the future) and supports voltGNS and gDAI as collateral
          (more assets in the near future). Volta is currently live on Arbitrum (more chains in the future) and supports
          voltGNS and gDAI as collateral (more assets in the near future).
        </HowtouseContent>
      </HowtouseText>
      <HowtouseCardContainer>
        <HowtouseCard icon={VoltGNSLogoSvg} name="VoltGNS" title="To use GNS as collateral:" launchLink="" isGns={true}>
          <HowtouseExplain content="Wrap GNS to receive voltGNS (there is no swapping fee)" isGreen={true} />
          <HowtouseExplain content="Create a voltGNS vault" isGreen={true} />
          <HowtouseExplain content="Deposit voltGNS and borrow VOLT" isGreen={true} />
        </HowtouseCard>
        <HowtouseCard icon={GDAILogoSvg} name="GDAI" title="To use gDAI as collateral:" launchLink="">
          <HowtouseExplain content="Create a gDAI vault" />
          <HowtouseExplain content="Deposit gDAI and borrow VOLT" />
        </HowtouseCard>
      </HowtouseCardContainer>
    </HowtouseContainer>
  );
};

const HowtouseContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  paddingTop: '120px',
  [theme.breakpoints.down(1240)]: {
    paddingTop: '190px'
  },
  [theme.breakpoints.down(640)]: {
    paddingTop: '100px'
  }
}));

const HowtouseText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '28px'
}));

const HowtouseTitle = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '40px',
  lineHeight: '56px',
  [theme.breakpoints.down(1240)]: {
    fontSize: '30px'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '23px'
  }
}));

const HowtouseContent = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '28px',
  color: '#CDCDCD',
  textAlign: 'center',
  padding: '0 40px',
  [theme.breakpoints.down(640)]: {
    fontSize: '15px',
    lineHeight: '24px'
  }
}));

const HowtouseCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '42px',
  [theme.breakpoints.down(1240)]: {
    flexDirection: 'column'
  }
}));

const HowtouseCard = (props: {
  icon: string;
  name: string;
  title: string;
  launchLink: string;
  children: React.ReactNode;
  isGns?: boolean;
}) => {
  return (
    <HowtouseCardWrapper gns={props.isGns === true ? 1 : 0}>
      <HowtouseCardContentContainer>
        <HowtouseCardHeader>
          <HowtouseCardLogo src={props.icon} alt="howtouse-logo" />
          <ALink link={props.launchLink}>
            <HowtouseLink>
              <CallMade />
            </HowtouseLink>
          </ALink>
        </HowtouseCardHeader>
        <HowtouseCardText>
          <HowtouseCardName>{props.name}</HowtouseCardName>
          <HowtouseCardTitle>{props.title}</HowtouseCardTitle>
        </HowtouseCardText>
        <HowtouseCardContent>{props.children}</HowtouseCardContent>
      </HowtouseCardContentContainer>
      <GotoLaunchApp>
        LAUNCH APP
        <East />
      </GotoLaunchApp>
    </HowtouseCardWrapper>
  );
};

const HowtouseCardWrapper = styled(Box)<{ gns: number }>(({ theme, gns }) => ({
  padding: '55px',
  backgroundColor: gns === 1 ? '#131418' : 'transparent',
  borderRadius: '4px',
  border: gns === 1 ? 'none' : '1px solid #1D1E1F',
  width: '600px',
  height: '645px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down(1240)]: {
    width: '100%'
  },
  [theme.breakpoints.down(640)]: {
    padding: '28px',
    height: '480px'
  }
}));

const HowtouseCardContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '28px'
}));

const HowtouseCardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

const HowtouseCardLogo = styled('img')(({ theme }) => ({
  width: '87px',
  height: '87px',
  [theme.breakpoints.down(640)]: {
    width: '61px',
    height: '61px'
  }
}));

const HowtouseLink = styled(IconButton)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.002)',
  borderRadius: '8px',
  boxShadow: 'inset 0px 0px 0px 1px rgba(255, 255, 255, 0.12)',
  width: '48px',
  height: '48px',
  [theme.breakpoints.down(640)]: {
    width: '37px',
    height: '37px'
  }
}));

const HowtouseExplain = (props: { content: string; isGreen?: boolean }) => {
  return (
    <HowtouseExplainContainer>
      <HowtouseExplainIcon src={props.isGreen === true ? CheckIcon1 : CheckIcon2} alt="check-icon" />
      <HowtouseExplainContent>{props.content}</HowtouseExplainContent>
    </HowtouseExplainContainer>
  );
};

const HowtouseExplainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '18px'
}));

const HowtouseExplainIcon = styled('img')(({ theme }) => ({
  width: '20px',
  height: '20px'
}));

const HowtouseExplainContent = styled(Box)(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '28px',
  color: '#CDCDCD',
  fontWeight: '400',
  [theme.breakpoints.down(640)]: {
    fontSize: '15px',
    lineHeight: '24px'
  }
}));

const HowtouseCardText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '11px'
}));

const HowtouseCardName = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '22px',
  lineHeight: '33px',
  color: '#657786',
  [theme.breakpoints.down(1240)]: {
    fontSize: '20px '
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '17px '
  }
}));

const HowtouseCardTitle = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '35px',
  lineHeight: '58px',
  [theme.breakpoints.down(1240)]: {
    fontSize: '30px'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '20px',
    lineHeight: '30px'
  }
}));

const HowtouseCardContent = styled(Box)(({ theme }) => ({
  paddingTop: '28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  [theme.breakpoints.down(640)]: {
    gap: '20px',
    paddingTop: '0'
  }
}));

const GotoLaunchApp = styled(Box)(({ theme }) => ({
  color: '#00D395',
  fontSize: '18px',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  cursor: 'pointer',
  [theme.breakpoints.down(640)]: {
    fontSize: '14px'
  }
}));
