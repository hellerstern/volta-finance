import { useState, useEffect } from 'react';
import { Campaign } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Slider } from '@mui/material';
import { styled } from '@mui/system';
import { MaxLogoInput } from 'src/components/Input/MaxLogoInput';
import { VoltLogoSvg } from 'src/config/images';
import { useTokenBalance } from 'src/hook/useToken';
import tokenAddys from '../../contracts/address.json';

export const ManageVaultsCards = () => {
  return (
    <ManageVaultsCardsContainer>
      <VoltGNSCard />
      <DetailsCard />
    </ManageVaultsCardsContainer>
  );
};

const ManageVaultsCardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '25px',
  [theme.breakpoints.down(1120)]: {
    flexDirection: 'column'
  }
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
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#131418',
  borderRadius: '8px',
  [theme.breakpoints.down(1120)]: {
    width: '100%'
  }
}));

const VoltGNSCardHeader = styled(Box)(({ theme }) => ({
  padding: '26px 34px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #1D1E1F',
  [theme.breakpoints.down(640)]: {
    padding: '18px'
  }
}));

const VoltGNSCardName = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '20px',
  color: '#FFFFFF',
  [theme.breakpoints.down(640)]: {
    fontSize: '17px'
  }
}));

const VoltGNSCardId = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  p: {
    fontWeight: '600',
    fontSize: '18px',
    color: '#FFFFFF',
    margin: 0,
    [theme.breakpoints.down(400)]: {
      display: 'none'
    }
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
  padding: '26px 34px',
  [theme.breakpoints.down(640)]: {
    padding: '18px'
  }
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
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '14px',
    padding: '0px 8px'
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
  const [amount, setAmount] = useState(0);
  const isDesktop = window.matchMedia('(min-width: 480px)').matches;
  const [errText, setErrText] = useState('');

  const voltGNSBalance = useTokenBalance(tokenAddys.tokens.voltGNS.address);

  function valuetext(value: number) {
    return `${value}x`;
  }

  useEffect(() => {
    if (Number(amount) === 0) {
      setErrText('Enter the amount of token first');
    }
  }, [amount]);

  useEffect(() => {
    if (Number(amount) !== 0 && errText !== '') {
      setErrText('');
    }
  }, [amount, errText]);

  return (
    <VoltGNSCardContentWrapper>
      <InputContainer>
        <MaxLogoInput
          primaryText={`${
            selected === 0 ? 'Deposit' : selected === 1 ? 'Borrow' : selected === 2 ? 'Repay' : 'Withdraw'
          } amount`}
          secondaryText={`Balance: ${voltGNSBalance}`}
          type="number"
          logo={VoltLogoSvg}
          state={amount}
          setState={setAmount}
          logoText={isDesktop ? 'Volt/VoltGNS' : 'Volt'}
          isError={errText !== ''}
          errorText={errText}
        />
        <MaxDepositText>
          Max.{selected === 0 ? 'Deposit' : selected === 1 ? 'Borrow' : selected === 2 ? 'Repay' : 'Withdraw'}:{' '}
          <span>1.878 Volt</span>
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

const DetailsCard = () => {
  return (
    <DetailsCardContainer>
      <DetailsCardHeader>Details</DetailsCardHeader>
      <DetailsCardContent>
        <DetailsItem name="Collateral" value={'0.00 VoltGNS'} />
        <DetailsItem name="Collateral value" value={'--'} />
        <DetailsItem name="Max collateral amount" value={'--'} />
        <DetailsItem name="Liquidation price" value={'--'} />
        <DetailsItem name="Dept" value={'0.00 Volt'} />
        <DetailsItem name="Dept value" value={'--'} />
        <DetailsItem name="Current collateral percentage" value={<MaxBadge>Max</MaxBadge>} />
        <DetailsItem name="Collateral" value={'150%'} />
        <DetailsItem name="Minimum dept" value={'0.00 VoltGNS'} />
        <Premonition>
          <PremonitionTitle>
            <Campaign />
            Premonition about risks
          </PremonitionTitle>
          <PremonitionContent>
            Leveraged vaults borrow funds from in one currency and invest them into a strategy. In general the strategy
            will involve some amount of risk, meaning that the assets in the leveraged vault could decline in value. If
            the value of the assets in the vault falls too low, the vault is at risk of becoming insolvent.
          </PremonitionContent>
        </Premonition>
      </DetailsCardContent>
    </DetailsCardContainer>
  );
};

const DetailsCardContainer = styled(Box)(({ theme }) => ({
  width: '475px',
  backgroundColor: '#131418',
  borderRadius: '8px',
  [theme.breakpoints.down(1120)]: {
    width: '100%'
  }
}));

const DetailsCardHeader = styled(Box)(({ theme }) => ({
  padding: '26px 34px',
  borderBottom: '1px solid #1D1E1F',
  fontWeight: '600',
  fontSize: '20px',
  [theme.breakpoints.down(640)]: {
    padding: '18px'
  }
}));

const DetailsCardContent = styled(Box)(({ theme }) => ({
  padding: '34px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  [theme.breakpoints.down(640)]: {
    padding: '18px'
  }
}));

const MaxBadge = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(90deg, #00FE90 0%, #00A2FF 100%)',
  borderRadius: '4px 4px 4px 0px',
  padding: '3px 6px',
  fontWeight: '600',
  fontSize: '12px',
  color: '#000000'
}));

const DetailsItem = (props: { name: string; value: React.ReactNode | string }) => {
  return (
    <DetailsItemContainer>
      <DetailsItemName>{props.name}</DetailsItemName>
      <DetailsItemValue>{props.value}</DetailsItemValue>
    </DetailsItemContainer>
  );
};

const DetailsItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const DetailsItemName = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '500',
  color: '#a5a5a5'
}));

const DetailsItemValue = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '14px',
  color: '#FFFFFF'
}));

const Premonition = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '11px',
  padding: '19px 16px',
  borderRadius: '4px',
  border: '1px solid #F7A600'
}));

const PremonitionTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#F7A600',
  fontSize: '700',
  fontWeight: '700'
}));

const PremonitionContent = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '13px',
  color: '#A5A5A5'
}));
