import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { SearchCards } from './SearchCards';
import { SearchBoard } from './SearchBoard';

export const SearchPage = () => {
  return (
    <SearchContainer>
      <SearchCards />
      <SearchBoard />
    </SearchContainer>
  );
};

const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
  paddingTop: '30px'
}));
