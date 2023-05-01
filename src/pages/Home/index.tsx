import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { Heading } from './Heading';
import { AboutVoltaCard } from './AboutVoltaCard';

export const Home = () => {
  return (
    <HomePageContainer>
      <Heading />
      {/* <AboutVoltaCard /> */}
    </HomePageContainer>
  );
};

const HomePageContainer = styled(Box)(({ theme }) => ({
  paddingTop: '150px',
  [theme.breakpoints.down(450)]: {
    paddingTop: '100px'
  }
}));
