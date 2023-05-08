import { useRef } from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { SwapChooser } from '../Dropdown/SwapChooser';
import { swapCoinArrayProps } from 'src/constant/interface';

interface SwapInputProps {
  primaryText: string;
  secondaryText: string;
  state: number | string;
  setState: (value: any) => void;
  coinState: swapCoinArrayProps;
  setCoinState: (value: swapCoinArrayProps) => void;
  coinArray: swapCoinArrayProps[];
  onMaxClick?: () => void;
  type?: string;
}

export const SwapInput = (props: SwapInputProps) => {
  const { primaryText, secondaryText, state, setState, coinState, setCoinState, coinArray, onMaxClick, type } = props;

  const stakeRef = useRef<HTMLInputElement>(null);

  const handleChangeStakeAmount = (e: any) => {
    const value = e.target.value;
    setState(value);
  };

  const handleClickInside = () => {
    stakeRef.current?.focus();
  };

  return (
    <SwapInputContainer onClick={handleClickInside}>
      <SwapInputTitle>
        <SwapInputText>{primaryText}</SwapInputText>
        <SwapInputText>{secondaryText}</SwapInputText>
      </SwapInputTitle>
      <SwapInputArea>
        <SwapInputWrapper>
          <SwapInputField
            value={state}
            onChange={handleChangeStakeAmount}
            type={type !== undefined ? type : 'text'}
            ref={stakeRef}
          />
          <MaxButton onClick={onMaxClick}>Max</MaxButton>
        </SwapInputWrapper>
        <SwapInputMark>
          <SwapChooser arrayData={coinArray} name="coin-choose" state={coinState} setState={setCoinState} />
        </SwapInputMark>
      </SwapInputArea>
    </SwapInputContainer>
  );
};

const SwapInputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  cursor: 'pointer'
}));

const SwapInputTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const SwapInputText = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '16px',
  color: '#A5A5A5'
}));

const SwapInputArea = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '50px'
}));

const SwapInputWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  borderRadius: '6px 0 0 6px',
  border: '1px solid #1D1E1F',
  padding: '13px 16px',
  [theme.breakpoints.down(480)]: {
    padding: '3px 10px'
  }
}));

const SwapInputField = styled('input')(({ theme }) => ({
  width: '80%',
  height: '100%',
  outline: 'none',
  textDecoration: 'none',
  color: '#FFFFFF',
  fontSize: '18px',
  fontWieght: '500',
  backgroundColor: 'transparent',
  border: 'none'
}));

const MaxButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#0D0D0D',
  borderRadius: '4px',
  color: 'rgba(255, 255, 255, 0.92)',
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: '500',
  '&:hover': {
    color: '#00EB88'
  },
  [theme.breakpoints.down(540)]: {
    minWidth: 'inherit'
  }
}));

const SwapInputMark = styled(Box)(({ theme }) => ({
  width: '142px',
  height: '100%',
  border: '1px solid #1D1E1F',
  borderRadius: '0px 6px 6px 0px',
  padding: '5px 7px'
}));
