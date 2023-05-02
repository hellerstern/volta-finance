import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { Heading } from './Heading';
import { AboutVoltaCard } from './AboutVoltaCard';
import { UsecaseVolta } from './UsecaseVolta';
import { Howtouse } from './Howtouse';

export const Home = () => {
  return (
    <HomePageContainer>
      <Heading />
      <AboutVoltaCard />
      <UsecaseVolta />
      <Howtouse />
    </HomePageContainer>
  );
};

const HomePageContainer = styled(Box)(({ theme }) => ({
  paddingTop: '150px',
  [theme.breakpoints.down(450)]: {
    paddingTop: '100px'
  }
}));
