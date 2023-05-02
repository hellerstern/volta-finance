import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

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
  [theme.breakpoints.down(640)]: {
    fontSize: '15px',
    lineHeight: '24px'
  }
}));
