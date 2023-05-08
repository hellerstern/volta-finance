import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Check, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { swapCoinArrayProps } from 'src/constant/interface';
import { SwapCoin } from '../SwapCoinItem';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  }
}));

interface CommonDropProps {
  arrayData: swapCoinArrayProps[];
  name: string;
  state: swapCoinArrayProps;
  setState: (value: swapCoinArrayProps) => void;
}

export const SwapChooser = (props: CommonDropProps) => {
  const { arrayData, name, state, setState } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClicked = (item: swapCoinArrayProps) => {
    handleClose();
    setState(item);
  };

  return (
    <>
      <Dropdown
        id="demo-customized-button"
        aria-controls={isOpen ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      >
        <SwapCoin logo={state.logo} name={state.name} />
      </Dropdown>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button'
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
      >
        {arrayData.map((item: swapCoinArrayProps, index: number) => (
          <CustomMenuItem onClick={() => handleMenuClicked(item)} key={index}>
            <SwapCoin logo={item.logo} name={item.name} />
            {item === state && <Check sx={{ color: '#00EB88 !important', margin: 'none' }} />}
          </CustomMenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

const Dropdown = styled(Button)({
  background: '#222630',
  borderRadius: '2px',
  fontSize: '12px',
  color: '#FFFFFF',
  textTransform: 'none',
  padding: '10px',
  width: '100%',
  height: '36px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '&:hover': {
    background: '#222630'
  }
});

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
  gap: '27px',
  width: '145px !important',
  height: '32px !important',
  minWidth: 'inherit',
  minHeight: 'inherit'
}));
