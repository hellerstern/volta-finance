import { useState } from 'react';
import { Box, Button, IconButton, ListItem, ListItemButton, ListItemText, Modal, Tab, Tabs } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/system';
import { commaSeparators } from '../utils/commaSeparators';
import { a11yProps } from 'src/components/TabPanel';
import { useStore } from '../context/StoreContext';
import { Close, LocalGasStation, Menu } from '@mui/icons-material';
import { ConnectWalletButton } from 'src/components/Button/ConnectWalletButton';
import { VoltaLogoSvg, VoltaNameLogoSvg } from 'src/config/images';
import { useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

export const Header = () => {
  const { page, setPage } = useStore();
  const [isOpen, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setPage(newValue);
  };

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <TvlDataContainer>
        <Marquee>
          <TvlData name="TVL" value={65615783} />
          <TvlData name="TVL In Lockers" value={34978821} />
          <TvlData name="TVL in Strategies" value={30636962} />
        </Marquee>
      </TvlDataContainer>
      <HeaderWrapper>
        <VoltaLogoContainer>
          <MobileNavButton onClick={handleClickOpen} />
          <VoltaLogo alt="volta-name-logo" onClick={() => navigate('/')} />
          <MobileNavBar isOpen={isOpen} onClose={handleClose} />
        </VoltaLogoContainer>
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
              onClick={() => navigate('/wrapper')}
              style={{ color: page === 0 ? '#FFFFFF' : '#B0B5C3', fontWeight: page === 0 ? 500 : 400 }}
            />
            <CustomTab
              label="Vaults"
              {...a11yProps(1)}
              onClick={() => navigate('/vaults')}
              style={{ color: page === 1 ? '#FFFFFF' : '#B1B5C3', fontWeight: page === 1 ? 500 : 400 }}
            />
            <CustomTab
              label="Swap"
              onClick={() => navigate('/swap')}
              {...a11yProps(2)}
              style={{ color: page === 2 ? '#FFFFFF' : '#B1B5C3', fontWeight: page === 2 ? 500 : 400 }}
            />
            <CustomTab
              label="Stake"
              {...a11yProps(3)}
              onClick={() => navigate('/staking')}
              style={{ color: page === 3 ? '#FFFFFF' : '#B1B5C3', fontWeight: page === 3 ? 500 : 400 }}
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
  alignItems: 'center',
  position: 'relative'
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
  gap: '8px',
  paddingLeft: '27px'
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
  borderColor: 'divider',
  [theme.breakpoints.down(1120)]: {
    display: 'none'
  }
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
  width: '100%',
  height: '70px',
  [theme.breakpoints.down(480)]: {
    padding: '0 20px'
  }
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
    <VoltaTooltip title={<TooltipBox />}>
      <ShellWalletButtonContainer>
        <LocalGasStation />
        {value}
      </ShellWalletButtonContainer>
    </VoltaTooltip>
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

const VoltaLogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.down(768)]: {
    gap: '5px'
  }
}));

const MobileNavButton = (props: { onClick: () => void }) => {
  return (
    <MobileNavButtonContainer onClick={props.onClick}>
      <Menu />
    </MobileNavButtonContainer>
  );
};

const MobileNavButtonContainer = styled(IconButton)(({ theme }) => ({
  width: '40px',
  height: '40px',
  color: '#ffffff',
  display: 'none',
  [theme.breakpoints.down(1120)]: {
    display: 'block'
  }
}));

interface MobileNavBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavBar = (props: MobileNavBarProps) => {
  const { isOpen, onClose } = props;
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
  };

  const style = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: 340,
    maxHeight: '100vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: 'auto'
  };

  const handleNavigate = (nav: string) => {
    navigate(nav);
    handleClose();
  };

  return (
    <Modal
      keepMounted
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <ModalHeader>
          <MobileNavBarLogo src={VoltaNameLogoSvg} alt="volta-logo" onClick={() => handleNavigate('/')} />
          <IconButton size="small" onClick={handleClose}>
            <Close fontSize="small" />
          </IconButton>
        </ModalHeader>
        <ModalContent>
          <ListItem disablePadding>
            <CustomListItemButton onClick={() => handleNavigate('/wrapper')}>
              <ListItemText primary="Wrapper" />
            </CustomListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <CustomListItemButton onClick={() => handleNavigate('/vaults')}>
              <ListItemText primary="Vaults" />
            </CustomListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <CustomListItemButton onClick={() => handleNavigate('/swap')}>
              <ListItemText primary="Swap" />
            </CustomListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <CustomListItemButton onClick={() => handleNavigate('/staking')}>
              <ListItemText primary="Stake" />
            </CustomListItemButton>
          </ListItem>
        </ModalContent>
      </Box>
    </Modal>
  );
};

const ModalHeader = styled(Box)(({ theme }) => ({
  padding: '21px 31px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #1D1E1F'
}));

const VoltaLogo = styled('img')(({ theme }) => ({
  height: '25px',
  width: 'auto',
  cursor: 'pointer',
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  content: `url(${VoltaNameLogoSvg})`,
  [theme.breakpoints.down(768)]: {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    content: `url(${VoltaLogoSvg})`
  }
}));

const MobileNavBarLogo = styled('img')(({ theme }) => ({
  height: '25px',
  width: 'auto',
  cursor: 'pointer'
}));

const ModalContent = styled(Box)(({ theme }) => ({
  padding: '25px 31px'
}));

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#08090A'
  }
}));

const VoltaTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#131418'
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#131418'
  }
}));

const TooltipBox = () => {
  return (
    <TooltipBoxContainer>
      <TooltopBoxContent>
        <TooltipBoxTitle>Connected to Ethereum</TooltipBoxTitle>
        <TooltipBoxText>Base fee: 28.87</TooltipBoxText>
        <TooltipBoxText>Suggeste priority fee: 0.19</TooltipBoxText>
      </TooltopBoxContent>
      <Close sx={{ cursor: 'pointer', width: '20px', height: '20px' }} />
    </TooltipBoxContainer>
  );
};

const TooltipBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '30px',
  padding: '9px 16px'
}));

const TooltopBoxContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column'
}));

const TooltipBoxTitle = styled(Box)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '24px'
}));

const TooltipBoxText = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '20px'
}));
