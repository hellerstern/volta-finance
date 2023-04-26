import { Box, Button, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/system';
import { commaSeparators } from '../utils/commaSeparators';
import { a11yProps } from 'src/components/TabPanel';
import { useStore } from '../context/StoreContext';
import { VoltaLogo } from 'src/components/VoltaLogo';
import { LocalGasStation } from '@mui/icons-material';
import { ConnectWalletButton } from 'src/components/Button/ConnectWalletButton';
import { VoltaLogoSvg } from 'src/config/images';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { page, setPage } = useStore();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setPage(newValue);
  };

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <TvlDataContainer>
        <TvlData name="TVL" value={65615783} />
        <TvlData name="TVL In Lockers" value={34978821} />
        <TvlData name="TVL in Strategies" value={30636962} />
      </TvlDataContainer>
      <HeaderWrapper>
        <VoltaLogo />
        <TabContainer>
          <Tabs
            TabIndicatorProps={{ style: { height: '0px' } }}
            value={page}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <CustomTab
              label="Wrapper"
              {...a11yProps(0)}
              style={{ color: page === 0 ? '#FFFFFF' : '#B1B5C3', fontWeight: page === 0 ? 500 : 400 }}
            />
            <CustomTab
              label="Vaults"
              {...a11yProps(1)}
              style={{ color: page === 1 ? '#FFFFFF' : '#B1B5C3', fontWeight: page === 0 ? 500 : 400 }}
            />
            <CustomTab
              label="Swap"
              {...a11yProps(2)}
              style={{ color: page === 2 ? '#FFFFFF' : '#B1B5C3', fontWeight: page === 0 ? 500 : 400 }}
            />
            <CustomTab
              label="Stake"
              {...a11yProps(3)}
              onClick={() => navigate('/staking')}
              style={{ color: page === 3 ? '#FFFFFF' : '#B1B5C3', fontWeight: page === 0 ? 500 : 400 }}
            />
          </Tabs>
        </TabContainer>
        <HeaderActionContainer>
          <ShellWalletButton value={0.78} />
          <VoltaLogoButton />
          <ConnectWalletButton />
        </HeaderActionContainer>
      </HeaderWrapper>
      <HeaderLine />
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const TvlDataContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40px',
  backgroundColor: '#131418',
  gap: '27px',
  width: '100%'
}));

interface TvlDataProps {
  name: string;
  value: number;
}

const TvlData = (props: TvlDataProps) => {
  const { name, value } = props;
  return (
    <TvlDataWrapper>
      <TvlDataName>{name}</TvlDataName>
      <TvlDataValue>${commaSeparators(value)}</TvlDataValue>
    </TvlDataWrapper>
  );
};

const TvlDataWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const TvlDataName = styled(Box)(({ theme }) => ({
  color: '#00EB88',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '700'
}));

const TvlDataValue = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  color: '#EDEDED'
}));

const TabContainer = styled(Box)(({ theme }) => ({
  borderBottom: 1,
  borderColor: 'divider'
}));

const CustomTab = styled(Tab)({
  color: '#ffffff',
  textTransform: 'none',
  disableRipple: 'true',
  disableFocusRipple: 'true'
});

const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1280px',
  padding: '0 40px',
  width: '100%'
}));

const HeaderLine = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 0,
  border: '1px solid #1D1E1F'
}));

const HeaderActionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}));

const ShellWalletButton = (props: { value: number }) => {
  const { value } = props;
  return (
    <ShellWalletButtonContainer>
      <LocalGasStation />
      {value}
    </ShellWalletButtonContainer>
  );
};

const ShellWalletButtonContainer = styled(Button)(({ theme }) => ({
  borderRadius: '6px',
  backgroundColor: '#131418',
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  gap: '9px',
  paddingLeft: '18px',
  paddingRight: '18px',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '500'
}));

const VoltaLogoButton = () => {
  return (
    <VoltaLogoButtonContainer>
      <Img src={VoltaLogoSvg} alt="volta-logo" />
    </VoltaLogoButtonContainer>
  );
};

const VoltaLogoButtonContainer = styled(Button)(({ theme }) => ({
  borderRadius: '6px',
  backgroundColor: '#131418',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '37px',
  minHeight: '37px',
  maxWidth: '37px',
  maxHeight: '37px'
}));

const Img = styled('img')(({ theme }) => ({
  width: '18px',
  height: '18px'
}));
