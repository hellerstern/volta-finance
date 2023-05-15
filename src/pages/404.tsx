import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Volta404Png } from 'src/config/images';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <NotFoundPageContainer>
      <Img src={Volta404Png} alt="404-image" />
      <NotFoundAction>
        <NotFoundTitle>Ooops!...Page not found.</NotFoundTitle>
        <NotFoundContent>Sorry, we could not find the page you are looking for.</NotFoundContent>
        <GoHomeButton onClick={() => navigate('/')}>Go back to home</GoHomeButton>
      </NotFoundAction>
    </NotFoundPageContainer>
  );
};

const NotFoundPageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 'calc(100vh - 214px)',
  gap: '70px',
  [theme.breakpoints.down(1120)]: {
    gap: '45px'
  },
  [theme.breakpoints.down(640)]: {
    gap: '35px'
  }
}));

const Img = styled('img')(({ theme }) => ({
  height: '120px',
  width: 'auto',
  [theme.breakpoints.down(1120)]: {
    height: '75px'
  },
  [theme.breakpoints.down(640)]: {
    height: '53px'
  }
}));

const NotFoundAction = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px'
}));

const NotFoundTitle = styled(Box)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '30px',
  color: '#FFFFFF',
  [theme.breakpoints.down(1120)]: {
    fontSize: '25px'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '20px'
  }
}));

const NotFoundContent = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '16px',
  color: '#A5A5A5',
  [theme.breakpoints.down(1120)]: {
    fontSize: '16px'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '14px',
    textAlign: 'center'
  }
}));

const GoHomeButton = styled(Button)(({ theme }) => ({
  border: '2px solid #1D1E1F',
  borderRadius: '6px',
  background: 'transparent',
  //   padding: '16px 18px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: '600',
  color: '#FFFFFF',
  marginTop: '20px',
  '&:hover': {
    background: 'transparent'
  }
}));
