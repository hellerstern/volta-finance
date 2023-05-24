import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const SearchCards = () => {
  return (
    <SearchCardsContainer>
      <SearchCard name="Total Deposit" value="$56,483" />
      <SearchCard name="Total Value locked" value="$310,818" />
      <SearchCard name="Total Claimable" value="$117,689" />
      <SearchCard name="Collateral to debt" value="171%" />
    </SearchCardsContainer>
  );
};

const SearchCardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '25px',
  [theme.breakpoints.down(1120)]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 2fr)',
    gap: '18px'
  },
  [theme.breakpoints.down(640)]: {
    gap: '9px'
  },
  [theme.breakpoints.down(450)]: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const SearchCard = (props: { name: string; value: string }) => {
  return (
    <SearchCardWrapper>
      <SearchCardName>{props.name}</SearchCardName>
      <SearchCardValue>{props.value}</SearchCardValue>
    </SearchCardWrapper>
  );
};

const SearchCardWrapper = styled(Box)(({ theme }) => ({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  backgroundColor: '#131418',
  borderRadius: '6px',
  width: '100%',
  [theme.breakpoints.down(640)]: {
    gap: '5px'
  }
}));

const SearchCardName = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '20px',
  color: '#A5A5A5',
  [theme.breakpoints.down(640)]: {
    fontSize: '13px'
  }
}));

const SearchCardValue = styled(Box)(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '20px',
  fontWeight: 500,
  [theme.breakpoints.down(640)]: {
    fontSize: '16px'
  }
}));
