import { useRef } from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

interface MaxLogoInputProps {
  primaryText: string;
  secondaryText: string;
  state: number | string;
  setState: (value: any) => void;
  onMaxClick?: () => void;
  logo: string;
  logoText: string;
  type?: string;
}

export const MaxLogoInput = (props: MaxLogoInputProps) => {
  const { primaryText, secondaryText, state, setState, onMaxClick, logo, logoText, type } = props;

  const stakeRef = useRef<HTMLInputElement>(null);

  const handleChangeStakeAmount = (e: any) => {
    const value = e.target.value;
    setState(value);
  };

  const handleClickInside = () => {
    stakeRef.current?.focus();
  };

  return (
    <StakeVoltaInputContainer onClick={handleClickInside}>
      <StakeVoltaInputTitle>
        <StakeVoltaInputText>{primaryText}</StakeVoltaInputText>
        <StakeVoltaInputText>{secondaryText}</StakeVoltaInputText>
      </StakeVoltaInputTitle>
      <StakeVoltaInputArea>
        <StakeVoltaInputWrapper>
          <StakeVoltaInput
            value={state}
            onChange={handleChangeStakeAmount}
            type={type !== undefined ? type : 'text'}
            ref={stakeRef}
          />
          <MaxButton onClick={onMaxClick}>Max</MaxButton>
        </StakeVoltaInputWrapper>
        <StakeVoltaInputMark>
          <InputMarkImageContainer>
            <InputMarkImage src={logo} alt="input-mark" />
          </InputMarkImageContainer>
          {logoText}
        </StakeVoltaInputMark>
      </StakeVoltaInputArea>
    </StakeVoltaInputContainer>
  );
};

const StakeVoltaInputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  cursor: 'pointer'
}));

const StakeVoltaInputTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const StakeVoltaInputText = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '16px',
  color: '#A5A5A5'
}));

const StakeVoltaInputArea = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '50px'
}));

const StakeVoltaInputWrapper = styled(Box)(({ theme }) => ({
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

const StakeVoltaInput = styled('input')(({ theme }) => ({
  width: '80%',
  height: '100%',
  outline: 'none',
  textDecoration: 'none',
  color: '#A5A5A5',
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
  }
}));

const StakeVoltaInputMark = styled(Box)(({ theme }) => ({
  width: 'auto',
  height: '100%',
  padding: '13px 11px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '600',
  borderRadius: '0px 6px 6px 0px',
  border: '1px solid #1D1E1F',
  borderLeft: '0px'
}));

const InputMarkImageContainer = styled(Box)(({ theme }) => ({
  minWidth: '24px',
  maxWidth: '24px',
  minHeight: '24px',
  maxHeight: '24px',
  borderRadius: '50%',
  backgroundColor: '#090A0A',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const InputMarkImage = styled('img')(({ theme }) => ({
  width: '16px',
  height: '16px'
}));
