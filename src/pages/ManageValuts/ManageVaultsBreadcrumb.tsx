import { KeyboardArrowLeft } from '@mui/icons-material';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

export const ManageVaultsBreadcrumb = () => {
  const navigate = useNavigate();
  return (
    <ManageVaultsBreadcrumbContainer>
      <CurrentBreadcrumbContainer>
        <KeyboardArrowLeft sx={{ cursor: 'pointer' }} onClick={() => navigate('/vaults')} />
        <PrimaryText>VoltGNS #55 Vault</PrimaryText>
      </CurrentBreadcrumbContainer>
      <AllBreadcrumbContainer>
        <CustomBreadcrumbs separator="/" aria-label="breadcrumb">
          <Link underline="hover" key="1" color="#01A9F7" href="/manage-vaults">
            Vaults
          </Link>
          <Link underline="hover" key="2" color="inherit" href="/manage-vaults">
            Manage Vaults
          </Link>
          <CurrentPage key="3">VoltGNS-55-Vault</CurrentPage>
        </CustomBreadcrumbs>
      </AllBreadcrumbContainer>
    </ManageVaultsBreadcrumbContainer>
  );
};

const ManageVaultsBreadcrumbContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  paddingTop: '70px'
}));

const CurrentBreadcrumbContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
}));

const PrimaryText = styled(Box)(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '28px',
  color: 'rgba(255, 255, 255, 0.92)',
  fontWeight: '700',
  [theme.breakpoints.down(640)]: {
    fontSize: '17px'
  }
}));

const AllBreadcrumbContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '7px'
}));

const CustomBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '400',
  color: '#A5A5A5',
  [theme.breakpoints.down(640)]: {
    fontSize: '13px'
  }
}));

const CurrentPage = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '400',
  color: '#A5A5A5',
  [theme.breakpoints.down(640)]: {
    fontSize: '13px'
  }
}));
