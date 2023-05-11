import { BackdropProps, Box, Button, ButtonGroup, Slider } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { MaxLogoInput } from 'src/components/Input/MaxLogoInput';
import { VoltLogoSvg } from 'src/config/images';

export const ManageVaultsCards = () => {
  return (
    <ManageVaultsCardsContainer>
      <VoltGNSCard />
    </ManageVaultsCardsContainer>
  );
};

const ManageVaultsCardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '25px'
}));

const marks = [
  {
    value: 0,
    label: '0x'
  },
  {
    value: 50,
    label: '1x'
  },
  {
    value: 100,
    label: '2x'
  }
];

const VoltGNSCard = () => {
  const [choose, setChoose] = useState(0);

  return (
    <VoltGNSCardContainer>
      <VoltGNSCardHeader>
        <VoltGNSCardName>Deposit VoltGNS</VoltGNSCardName>
        <VoltGNSCardId>
          <LogoContainer>
            <img src={VoltLogoSvg} alt="volt-gns-svg" />
          </LogoContainer>
          <p>VoltGNS</p>
          <span>#2</span>
        </VoltGNSCardId>
      </VoltGNSCardHeader>
      <VoltGNSCardContentContainer>
        <ChooserContainer variant="contained" aria-label="outlined primary button group">
          <ChooserButton selected={choose === 0 ? 1 : 0} onClick={() => setChoose(0)}>
            Deposit
          </ChooserButton>
          <ChooserButton selected={choose === 1 ? 1 : 0} onClick={() => setChoose(1)}>
            Borrow
          </ChooserButton>
          <ChooserButton selected={choose === 2 ? 1 : 0} onClick={() => setChoose(2)}>
            Repay
          </ChooserButton>
          <ChooserButton selected={choose === 3 ? 1 : 0} onClick={() => setChoose(3)}>
            Withdraw
          </ChooserButton>
        </ChooserContainer>
        <VoltGNSCardContent selected={choose} />
      </VoltGNSCardContentContainer>
    </VoltGNSCardContainer>
  );
};

const VoltGNSCardContainer = styled(Box)(({ theme }) => ({
  width: '740px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#131418',
  borderRadius: '8px'
}));

const VoltGNSCardHeader = styled(Box)(({ theme }) => ({
  padding: '26px 34px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #1D1E1F'
}));

const VoltGNSCardName = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '20px',
  color: '#FFFFFF'
}));

const VoltGNSCardId = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  p: {
    fontWeight: '600',
    fontSize: '18px',
    color: '#FFFFFF',
    margin: 0
  },
  span: {
    backgroundColor: '#1D1E1F',
    borderRadius: '4px',
    padding: '3px 8px',
    fontWeight: '500',
    fontSize: '15px',
    color: '#FFFFFF'
  }
}));

const VoltGNSCardContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '45px',
  padding: '26px 34px'
}));

const ChooserContainer = styled(ButtonGroup)(({ theme }) => ({
  width: 'fit-content'
}));

const ChooserButton = styled(Button)<{ selected: number }>(({ theme, selected }) => ({
  backgroundColor: selected === 1 ? 'rgba(0, 235, 136, 0.07)' : 'rgba(255, 255, 255, 0.02)',
  border: selected === 1 ? '1px solid #00EB88 !important' : '1px solid #1D1E1F !important',
  color: selected === 1 ? '#00EB88' : '#A5A5A5',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '30px',
  textTransform: 'none',
  height: '32px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.02)'
  }
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  minWidth: '38px',
  maxWidth: '38px',
  minHeight: '38px',
  maxHeight: '38px',
  borderRadius: '50%',
  backgroundColor: '#090A0A',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const InputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
}));

const MaxDepositText = styled(Box)(({ theme }) => ({
  color: '#A5A5A5',
  fontWeight: '500',
  fontSize: '14px',
  span: {
    fontWeight: '400',
    fontSize: '14px',
    color: '#FFFFFF'
  }
}));

const RatioContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '45px',
  p: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#A5A5A5',
    fontWeight: '500',
    margin: 0,
    span: {
      color: '#FFFFFF'
    }
  }
}));

const DepositFee = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const DepositFeeName = styled(Box)(({ theme }) => ({
  color: '#A5A5A5',
  fontWeight: '500',
  fontSize: '14px'
}));

const DepositFeeValue = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  color: '#FFFFFF',
  fontWeight: '600'
}));

const DepositButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#27272A',
  boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.043)',
  borderRadius: '4px',
  height: '48px',
  width: '100%',
  textTransform: 'none',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: '#27272A'
  }
}));

const VoltGNSCardContent = (props: { selected: number }) => {
  const { selected } = props;
  const [deposit, setDeposit] = useState(0);
  function valuetext(value: number) {
    return `${value}x`;
  }
  return (
    <VoltGNSCardContentWrapper>
      <InputContainer>
        <MaxLogoInput
          primaryText={`${
            selected === 0 ? 'Deposit' : selected === 1 ? 'Borrow' : selected === 2 ? 'Repay' : 'Withdraw'
          } amount`}
          secondaryText={`Balance: ${0}`}
          type="number"
          logo={VoltLogoSvg}
          state={deposit}
          setState={setDeposit}
          logoText="Volt/VoltGNS"
        />
        <MaxDepositText>
          Max.deposit: <span>1.878 Volt</span>
        </MaxDepositText>
      </InputContainer>
      <RatioContainer>
        <p>
          New collateral ratio: <span>--</span>
        </p>
        {(selected === 1 || selected === 3) && (
          <Slider
            aria-label="Custom marks"
            defaultValue={20}
            getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
            sx={{
              '& .MuiSlider-rail': {
                background: 'linear-gradient(90deg, #00FE90 0%, #00A2FF 100%)',
                opacity: 1
              },
              '& .MuiSlider-track': {
                backgroundColor: 'transparent',
                border: 'none'
              },
              '& .MuiSlider-mark': { display: 'none' },
              '& .MuiSlider-markLabel': {
                fontSize: '14px',
                color: '#FFFFFF',
                fontWeight: '500'
              }
            }}
          />
        )}
      </RatioContainer>
      <DepositFee>
        <DepositFeeName>
          {selected === 0 ? 'Deposit' : selected === 1 ? 'Borrow' : selected === 2 ? 'Repay' : 'Withdraw'}: fees:
        </DepositFeeName>
        <DepositFeeValue>~ 0.00%</DepositFeeValue>
      </DepositFee>
      <DepositButton>
        {selected === 0 ? 'Deposit' : selected === 1 ? 'Borrow' : selected === 2 ? 'Repay' : 'Withdraw'}
      </DepositButton>
    </VoltGNSCardContentWrapper>
  );
};

const VoltGNSCardContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '45px',
  transition: 'all linear 0.6s'
}));
