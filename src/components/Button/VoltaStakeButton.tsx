import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const VoltaStakeButton = (props: { children: React.ReactNode }) => {
  return <VoltaStakeButtonContainer>{props.children}</VoltaStakeButtonContainer>;
};

const VoltaStakeButtonContainer = styled(Button)(({ theme }) => ({
  backgroundColor: '#00EB88',
  borderRadius: '6px',
  padding: '15px 40px',
  color: '#000000',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '17px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#00EB88'
  }
}));
