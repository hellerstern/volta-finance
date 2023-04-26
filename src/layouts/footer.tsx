import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { VoltaLogo } from 'src/components/VoltaLogo';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLine />
      <FooterWrapper>
        <VoltaLogo size="small" />
        <AllRightReserve>© 2023 Volta.finance. All rights reserved | info@voltafinance.com</AllRightReserve>
        <ServicePolicyContainer>
          <Legal>Terms of service</Legal>
          <Legal>Privacy Policy</Legal>
        </ServicePolicyContainer>
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
  padding: '21px 40px'
}));

const AllRightReserve = styled(Box)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '17px',
  lineHeight: '18px',
  color: '#CDCDCD',
  opacity: '0.8'
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
