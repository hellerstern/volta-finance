import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { VoltaLogo } from 'src/components/VoltaLogo';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLine />
      <FooterWrapper>
        <FooterContent>
          <VoltaLogo size="small" name="footer" />
          <DesktopAllRightReserve>
            © 2023 Volta.finance. All rights reserved | info@voltafinance.com
          </DesktopAllRightReserve>
          <ServicePolicyContainer>
            <Legal>Terms of service</Legal>
            <Legal>Privacy Policy</Legal>
          </ServicePolicyContainer>
        </FooterContent>
        <MobileAllRightReserve>© 2023 Volta.finance. All rights reserved | info@voltafinance.com</MobileAllRightReserve>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  paddingTop: '30px'
}));

const FooterWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1280px',
  width: '100%',
  padding: '21px 40px',
  [theme.breakpoints.down(1120)]: {
    flexDirection: 'column',
    gap: '30px'
  },
  [theme.breakpoints.down(480)]: {
    padding: '21px 20px'
  }
}));

const DesktopAllRightReserve = styled(Box)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '17px',
  lineHeight: '18px',
  color: '#CDCDCD',
  opacity: '0.8',
  width: '100%',
  textAlign: 'left',
  [theme.breakpoints.down(1120)]: {
    display: 'none'
  }
}));

const MobileAllRightReserve = styled(Box)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '18px',
  color: '#CDCDCD',
  opacity: '0.8',
  display: 'none',
  width: '100%',
  textAlign: 'left',
  [theme.breakpoints.down(1120)]: {
    display: 'block'
  }
}));

const ServicePolicyContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '35px'
}));

const Legal = styled(Box)(({ theme }) => ({
  fontSize: '17px',
  lineHeight: '18px',
  color: '#CDCDCD',
  opacity: '0.8'
}));

const FooterLine = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 0,
  border: '1px solid #1D1E1F'
}));

const FooterContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1280px',
  width: '100%',
  [theme.breakpoints.down(590)]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '40px'
  }
}));
