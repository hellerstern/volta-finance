import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const ManageStakeBreadcrumb = () => {
  const navigate = useNavigate();
  return (
    <ManageStakeBreadcrumbContainer>
      <CurrentBreadcrumbContainer>
        <KeyboardArrowLeft sx={{ cursor: 'pointer' }} onClick={() => navigate('/staking')} />
        <PrimaryText>Manage Volta Stake</PrimaryText>
      </CurrentBreadcrumbContainer>
      <AllBreadcrumbContainer>
        <Breadcrumbs separator="/" aria-label="breadcrumb">
          <Link underline="hover" key="1" color="#01A9F7" href="/manage-stake">
            Staking
          </Link>
          <Link underline="hover" key="2" color="inherit" href="/manage-stake">
            Manage Stake
          </Link>
          <Typography key="3" color="text.primary">
            Volta Stake
          </Typography>
        </Breadcrumbs>
      </AllBreadcrumbContainer>
    </ManageStakeBreadcrumbContainer>
  );
};

const ManageStakeBreadcrumbContainer = styled(Box)(({ theme }) => ({
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
  fontWeight: '700'
}));

const AllBreadcrumbContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '7px'
}));
