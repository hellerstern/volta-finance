import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { VoltaLogoSvg } from 'src/config/images';

export const VoltaLogo = () => {
  return (
    <VoltaLogoContainer>
      <VoltaLogoImg src={VoltaLogoSvg} alt="volta-logo" />
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
  fontWeight: 800,
  fontSize: '20px',
  lineHeight: '28px'
}));

const VoltaLogoImg = styled('img')(({ theme }) => ({
  width: '36px',
  height: '36px'
}));
