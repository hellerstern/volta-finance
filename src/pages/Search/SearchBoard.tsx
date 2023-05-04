import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Search } from '@mui/icons-material';
import { VoltaInput } from 'src/components/Input';
import { CommonSelect } from 'src/components/Select';

const networkArr = ['All', 'Ethereum', 'Arbitrum'];
const extraCoinArr = ['BUSD', 'USDT', 'BNB'];

export const SearchBoard = () => {
  const [searchValue, setSearchValue] = useState('');
  const [network, setNetwork] = useState('');
  const [extraCoin, setExtraCoin] = useState('');
  const [currency, setCurrency] = useState('');

  return (
    <SearchBoardContainer>
      <SearchBoardHeader>
        <SearchBoardHeaderTitle>Auto-Compounding assets</SearchBoardHeaderTitle>
        <SearchBoardHeaderText>
          The auto-compounding feature is beneficial because it allows investors to take advantage of compounding
          returns
        </SearchBoardHeaderText>
      </SearchBoardHeader>
      <SearchBoardAction>
        <VoltaInputContainer>
          <VoltaInput icon={<Search />} value={searchValue} setValue={setSearchValue} />
        </VoltaInputContainer>
        <SelectSearch>
          <CommonSelectContainer>
            <CommonSelect label="Network" state={network} setState={setNetwork} arrayData={networkArr} width={170} />
            <MobileContainer>
              <CommonSelect
                label="More"
                state={extraCoin}
                setState={setExtraCoin}
                arrayData={extraCoinArr}
                width={120}
              />
            </MobileContainer>
          </CommonSelectContainer>
          <CoinSelectContainer>
            <ChooseButton onClick={() => setCurrency('All')} selected={currency === 'All'}>
              All
            </ChooseButton>
            <ChooseButton onClick={() => setCurrency('USDC')} selected={currency === 'USDC'}>
              USDC
            </ChooseButton>
            <ChooseButton onClick={() => setCurrency('USD')} selected={currency === 'USD'}>
              USD
            </ChooseButton>
            <ChooseButton onClick={() => setCurrency('ETH')} selected={currency === 'ETH'}>
              ETH
            </ChooseButton>
          </CoinSelectContainer>
          <DesktopContainer>
            <CommonSelect label="More" state={extraCoin} setState={setExtraCoin} arrayData={extraCoinArr} width={120} />
          </DesktopContainer>
        </SelectSearch>
      </SearchBoardAction>
    </SearchBoardContainer>
  );
};

const SearchBoardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '25px'
}));

const SearchBoardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '13px'
}));

const SearchBoardHeaderTitle = styled(Box)(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '28px',
  fontWeight: '700'
}));

const SearchBoardHeaderText = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '500',
  color: '#A5A5A5'
}));

const VoltaInputContainer = styled(Box)(({ theme }) => ({
  width: '525px',
  [theme.breakpoints.down(1120)]: {
    width: '100%'
  }
}));

const SearchBoardAction = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
  [theme.breakpoints.down(1120)]: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start'
  }
}));

const SelectSearch = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignitems: 'center',
  gap: '8px',
  [theme.breakpoints.down(640)]: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}));

const CoinSelectContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const ChooseButton = styled(Button)<{ selected: boolean }>(({ theme, selected }) => ({
  border: '1px solid #1D1E1F',
  borderRadius: '6px',
  padding: '12px',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '16px',
  color: 'rgba(255, 255, 255, 0.92)',
  textTransform: 'none',
  width: 'fit-content',
  height: '40px',
  minWidth: 'inherit',
  backgroundColor: selected ? '#131418' : 'transparent'
}));

const CommonSelectContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const DesktopContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down(640)]: {
    display: 'none'
  }
}));

const MobileContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down(640)]: {
    display: 'block'
  }
}));
