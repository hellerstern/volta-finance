import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { VoltaLogoSvg } from 'src/config/images';

export const VoltaLogo = (props: { size?: 'small'; name?: 'footer' }) => {
  const { size, name } = props;
  const navigate = useNavigate();

  return (
    <VoltaLogoContainer onClick={() => navigate('/')} name={name}>
      <VoltaLogoImg src={VoltaLogoSvg} alt="volta-logo" imageSize={size} />
      <span>Volta Finance</span>
    </VoltaLogoContainer>
  );
};

const VoltaLogoContainer = styled(Box)<{ name?: string }>(({ theme, name }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  background: 'linear-gradient(90deg, #00FE90 0%, #00A2FF 100%);',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: '800',
  fontFamily: 'Inter-Bold',
  fontSize: '20px',
  lineHeight: '28px',
  cursor: 'pointer',
  span: {
    [theme.breakpoints.down(768)]: {
      display: name !== 'footer' && 'none'
    }
  }
}));

const VoltaLogoImg = styled('img')<{ imageSize: 'small' | undefined }>(({ theme, imageSize }) => ({
  width: imageSize === 'small' ? '25px' : '36px',
  height: imageSize === 'small' ? '25px' : '36px',
  [theme.breakpoints.down(768)]: {
    width: '25px',
    height: '25px'
  }
}));
