import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { CallMade } from '@mui/icons-material';

export const Heading = () => {
  return (
    <HeadingContainer>
      <HeadingPrimaryText>
        <p>Deposit and Borrow</p>
        <p>Multiply Your Exposure to Crypto</p>
      </HeadingPrimaryText>
      <HeadingSecondaryText>
        Borrow VOLT stablecoin at 0% interest by depositing your crypto assets.
      </HeadingSecondaryText>
      <HeadingAction>
        <AutocompoundButton endIcon={<CallMade />}>Auto-Compound GNS</AutocompoundButton>
        <BorrowButton>Borrow</BorrowButton>
      </HeadingAction>
      <HeadingFooterText>Total Value Locked: $367,616.82</HeadingFooterText>
    </HeadingContainer>
  );
};

const HeadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const HeadingPrimaryText = styled(Box)(({ theme }) => ({
  fontSize: '60px',
  textAlign: 'center',
  fontWeight: '600',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  p: {
    margin: 0,
    [theme.breakpoints.down(450)]: {
      width: '300px'
    }
  },
  [theme.breakpoints.down(1120)]: {
    fontSize: '50px'
  },
  [theme.breakpoints.down(920)]: {
    fontSize: '40px'
  },
  [theme.breakpoints.down(768)]: {
    fontSize: '30px'
  },
  [theme.breakpoints.down(570)]: {
    fontSize: '25px'
  }
}));

const HeadingSecondaryText = styled(Box)(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '28px',
  color: '#CDCDCD',
  textAlign: 'center',
  paddingTop: '20px',
  [theme.breakpoints.down(768)]: {
    fontSize: '16px'
  },
  [theme.breakpoints.down(450)]: {
    fontSize: '15px'
  }
}));

const HeadingAction = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  paddingTop: '40px',
  [theme.breakpoints.down(540)]: {
    flexDirection: 'column',
    width: '100%'
  }
}));

const AutocompoundButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  backgroundColor: '#00EB88',
  color: '#000000',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '600',
  borderRadius: '8px',
  padding: '15px 22px',
  '&:hover': {
    backgroundColor: '#00EB88'
  },
  [theme.breakpoints.down(540)]: {
    width: '100%'
  }
}));

const BorrowButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1A1B1F',
  textTransform: 'none',
  color: '#FFFFFF',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '600',
  borderRadius: '8px',
  padding: '15px 22px',
  '&:hover': {
    backgroundColor: '#1A1B1F'
  },
  [theme.breakpoints.down(540)]: {
    width: '100%'
  }
}));

const HeadingFooterText = styled(Box)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '18px',
  lineHeight: '28px',
  color: '#FFFFFF',
  paddingTop: '20px'
}));
