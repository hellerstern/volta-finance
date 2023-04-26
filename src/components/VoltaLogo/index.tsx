import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { VoltaLogoSvg } from 'src/config/images';

export const VoltaLogo = (props: { size?: 'small' }) => {
  const { size } = props;
  const navigate = useNavigate();

  return (
    <VoltaLogoContainer onClick={() => navigate('/')}>
      <VoltaLogoImg src={VoltaLogoSvg} alt="volta-logo" imageSize={size} />
      Volta Finance
    </VoltaLogoContainer>
  );
};

const VoltaLogoContainer = styled(Box)(({ theme }) => ({
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
  cursor: 'pointer'
}));

const VoltaLogoImg = styled('img')<{ imageSize: 'small' | undefined }>(({ theme, imageSize }) => ({
  width: imageSize === 'small' ? '25px' : '36px',
  height: imageSize === 'small' ? '25px' : '36px'
}));
