import { useEffect, useState } from 'react';
import { CurrencyExchange, SwapHoriz } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { SwapInput } from 'src/components/Input/SwapInput';
import { CRVLogoSvg, VoltaTokenSvg } from 'src/config/images';
import { swapCoinArray } from 'src/constant/array';
import { ReceiveInput } from 'src/components/Input/ReceiveInput';
import tokenAddys from '../../contracts/address.json';
import { useTokenBalance } from 'src/hook/useToken';

export const VoltaSwap = () => {
  const [swapValue, setSwapValue] = useState(0);
  const [coin, setCoin] = useState(swapCoinArray[0]);
  const [receiveValue, setReceiveValue] = useState(0);

  const coinBalance = useTokenBalance(
    coin.name === 'USDC' ? tokenAddys.tokens.USDC.address : tokenAddys.tokens.USDT.address
  );

  const handleMaxClick = () => {
    setSwapValue(parseFloat(coinBalance));
  };

  useEffect(() => {
    setSwapValue(0);
  }, [coin]);

  return (
    <VoltaSwapContainer>
      <VoltaSwapModal>
        <VoltaSwapHeader>
          <VoltaSwapHeaderTitle>Swap</VoltaSwapHeaderTitle>
          <VoltaSwapHeaderMark>
            <VoltaSwapLogos>
              <VoltaSwapLogo src={coin.logo} alt="volta-swap-logo" />
              <VoltaSwapLogo src={VoltaTokenSvg} alt="volta-swap-logo" />
            </VoltaSwapLogos>
            <ExchangeCoinNames>
              <CoinName>{coin.name}</CoinName>
              <SwapHoriz sx={{ color: '#707A8A' }} />
              <CoinName>VOLT</CoinName>
            </ExchangeCoinNames>
          </VoltaSwapHeaderMark>
        </VoltaSwapHeader>
        <VoltaSwapContent>
          <VoltaSwapContentTitle>
            <VoltaSwapContentTitleText>Swap {coin.name} to receive VOLT</VoltaSwapContentTitleText>
            <VoltaSwapSlippage>
              Slippage: <span>1.00</span> %
            </VoltaSwapSlippage>
          </VoltaSwapContentTitle>
          <SwapInputContainer>
            <SwapInput
              primaryText={`${coin.name} amount`}
              secondaryText={`Balance: $${coinBalance} ${coin.name}`}
              state={swapValue}
              setState={setSwapValue}
              coinState={coin}
              setCoinState={setCoin}
              coinArray={swapCoinArray}
              onMaxClick={handleMaxClick}
              type="number"
            />
          </SwapInputContainer>
          <SwapCoinButtonContainer>
            <SwapCoinButton>
              <CurrencyExchange />
            </SwapCoinButton>
          </SwapCoinButtonContainer>
          <ReceiveInput
            primaryText="You will receive"
            secondaryText="Balance:"
            state={receiveValue}
            setState={setReceiveValue}
            logo={VoltaTokenSvg}
            logoText="Volt"
          />
          <QuoteCointainer>
            <QuoteText>Quote price:</QuoteText>
            <QuoteValue>1 {coin.name} ≈ 1 VOLT</QuoteValue>
          </QuoteCointainer>
        </VoltaSwapContent>
        <VoltaSwapAction>
          <SwapButton>Swap</SwapButton>
          <CopyRight>
            Powered by <img src={CRVLogoSvg} alt="crv-logo" /> Curve USDT/USDC
          </CopyRight>
        </VoltaSwapAction>
      </VoltaSwapModal>
    </VoltaSwapContainer>
  );
};

const VoltaSwapContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '120px'
}));

const VoltaSwapModal = styled(Box)(({ theme }) => ({
  width: '730px',
  backgroundColor: '#131418',
  borderRadius: '8px',
  [theme.breakpoints.down(840)]: {
    width: '100%'
  }
}));

const VoltaSwapHeader = styled(Box)(({ theme }) => ({
  padding: '26px 34px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #1D1E1F',
  [theme.breakpoints.down(540)]: {
    padding: '18px'
  }
}));

const VoltaSwapHeaderTitle = styled(Box)(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '28px',
  fontWeight: '600',
  [theme.breakpoints.down(540)]: {
    fontSize: '17px'
  }
}));

const VoltaSwapHeaderMark = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}));

const VoltaSwapLogos = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '68px',
  height: '38px',
  [theme.breakpoints.down(540)]: {
    width: '45px',
    height: '25px'
  }
}));

const VoltaSwapLogo = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '38px',
  height: '38px',
  [theme.breakpoints.down(540)]: {
    width: '25px',
    height: '25px'
  },
  '&:last-of-type': {
    left: '30px',
    [theme.breakpoints.down(540)]: {
      left: '20px'
    }
  }
}));

const ExchangeCoinNames = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
}));

const CoinName = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '17px',
  lineHeight: '22px',
  color: '#FFFFFF',
  [theme.breakpoints.down(540)]: {
    fontSize: '15px'
  }
}));

const VoltaSwapContent = styled(Box)(({ theme }) => ({
  padding: '35px 34px',
  [theme.breakpoints.down(540)]: {
    padding: '18px'
  }
}));

const VoltaSwapContentTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const VoltaSwapContentTitleText = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '20px',
  [theme.breakpoints.down(640)]: {
    display: 'none'
  }
}));

const VoltaSwapSlippage = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '20px',
  color: '#A5A5A5',
  span: {
    padding: '0 6px',
    border: '1px solid #303234',
    borderRadius: '4px'
  }
}));

const SwapInputContainer = styled(Box)(({ theme }) => ({
  paddingTop: '50px'
}));

const SwapCoinButtonContainer = styled(Box)(({ theme }) => ({
  padding: '27px',
  display: 'flex',
  justifyContent: 'center'
}));

const SwapCoinButton = styled(IconButton)(({ theme }) => ({
  width: '50px',
  height: '50px',
  backgroundColor: '#00D085',
  color: '#000000',
  '&:hover': {
    backgroundColor: '#00D085'
  }
}));

const QuoteCointainer = styled(Box)(({ theme }) => ({
  paddingTop: '22px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const QuoteText = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '20px',
  color: '#A5A5A5'
}));

const QuoteValue = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px'
}));

const VoltaSwapAction = styled(Box)(({ theme }) => ({
  padding: '70px 34px 35px 34px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '20px',
  [theme.breakpoints.down(540)]: {
    padding: '70px 18px 18px 18px'
  }
}));

const SwapButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#00D085',
  boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.043)',
  borderRadius: '4px',
  width: '100%',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000000',
  textTransform: 'none',
  fontSize: '16px',
  '&:hover': {
    backgroundColor: '#00D085'
  }
}));

const CopyRight = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '14px',
  color: '#A5A5A5'
}));
