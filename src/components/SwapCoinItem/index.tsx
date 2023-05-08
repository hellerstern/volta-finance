import { swapCoinArrayProps } from 'src/constant/interface';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const SwapCoin = (props: swapCoinArrayProps) => {
  return (
    <SwapCoinContainer>
      <SwapCoinLogo src={props.logo} alt="swap-coin-logo" />
      <SwapCoinName>{props.name}</SwapCoinName>
    </SwapCoinContainer>
  );
};

const SwapCoinContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const SwapCoinLogo = styled('img')(({ theme }) => ({
  width: '18px',
  height: '18px'
}));

const SwapCoinName = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#EDEDED'
}));
