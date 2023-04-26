import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { Volt2CRVLogoSvg, VoltaLogoSvg } from 'src/config/images';
import { commaSeparators } from 'src/utils/commaSeparators';

export const StakingBadges = () => {
  return (
    <StakingBadgesContainer>
      <StakingBadge icon={VoltaLogoSvg} name="Total VOLTA Staked" value={commaSeparators(2928345.13)} />
      <StakingBadge icon={VoltaLogoSvg} name="Total Value Locked ($)" value={`$ ${commaSeparators(1100.0)}`} />
      <StakingBadge icon={Volt2CRVLogoSvg} name="Total VOLTA Staked" value={commaSeparators(229578.28)} />
      <StakingBadge icon={Volt2CRVLogoSvg} name="Total VOLTA Staked" value={`$ ${commaSeparators(229578.28)}`} />
    </StakingBadgesContainer>
  );
};

const StakingBadgesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '45px',
  [theme.breakpoints.down(1064)]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 2fr)',
    columnGap: '160px',
    rowGap: '40px'
  }
}));

const StakingBadge = (props: { icon: string; name: string; value: number | string }) => {
  const { icon, name, value } = props;
  return (
    <StakingBadgeContainer>
      <BadgeIconContainer>
        <Img src={icon} alt="badge-icon" />
      </BadgeIconContainer>
      <StakingBadgeDetail>
        <StakingBadgeName>{name}</StakingBadgeName>
        <StakingBadgeValue>{value}</StakingBadgeValue>
      </StakingBadgeDetail>
    </StakingBadgeContainer>
  );
};

const StakingBadgeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
}));

const BadgeIconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '42px',
  height: '42px',
  backgroundColor: '#131418',
  boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)',
  borderRadius: '6px'
}));

const Img = styled('img')(({ theme }) => ({
  width: '22px',
  height: '22px'
}));

const StakingBadgeDetail = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px'
}));

const StakingBadgeName = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#A5A5A5'
}));

const StakingBadgeValue = styled(Box)(({ theme }) => ({
  fontWeight: '800',
  fontSize: '18px',
  lineHeight: '28px',
  color: '#F1F1F3'
}));
