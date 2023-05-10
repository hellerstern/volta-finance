import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

interface CreateVaultCardProps {
  logo: string;
  title: string;
  id: number;
  collateral: number;
}

export const CreateVaultCard = (props: CreateVaultCardProps) => {
  return (
    <VaultCardContainer>
      <VaultCardHeader>
        <VaultCardHeaderTitleContainer>
          <VaultCardHeaderBadge>New vault</VaultCardHeaderBadge>
          <VaultCardHeaderTitle>
            <VoltaCardLogo src={props.logo} alt="volta-card-logo" />
            <VoltaCardTitleText>{props.title}</VoltaCardTitleText>
            <VoltaCardId>#{props.id}</VoltaCardId>
          </VaultCardHeaderTitle>
        </VaultCardHeaderTitleContainer>
        <VaultCardHeaderValueContainer>
          <VoltaCardHeaderValue>{props.collateral} %</VoltaCardHeaderValue>
          <VoltaCardHeaderValueText>Min.Collateral %</VoltaCardHeaderValueText>
        </VaultCardHeaderValueContainer>
      </VaultCardHeader>
      <VaultCardLine />
      <VaultCardValueContainer>
        <VaultCardValue name="Available Volt" value="15895.54" unit="VOLT" />
        <VaultCardValue name="Minimum Debt" value="0" unit="VOLT" />
        <VaultCardValue name="Deposit Fee" value="0.00 %" />
        <VaultCardValue name="Repayment Fee" value="0.05 %" />
      </VaultCardValueContainer>
      <CreateVaultButton>Create Vault</CreateVaultButton>
    </VaultCardContainer>
  );
};

const VaultCardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#131418',
  padding: '24px 30px',
  width: '100%',
  [theme.breakpoints.down(640)]: {
    padding: '24px'
  }
}));

const VaultCardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between'
}));

const VaultCardHeaderTitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px'
}));

const VaultCardHeaderBadge = styled(Box)(({ theme }) => ({
  padding: '4px 8px',
  backgroundColor: 'rgba(45, 189, 150, 0.08)',
  borderRadius: '4px',
  color: '#2DBD96',
  fontSize: '11px',
  width: 'fit-content'
}));

const VaultCardHeaderTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.down(640)]: {
    gap: '5px'
  }
}));

const VoltaCardLogo = styled('img')(({ theme }) => ({
  width: '38px',
  height: '38px'
}));

const VoltaCardTitleText = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '22px',
  [theme.breakpoints.down(640)]: {
    fontSize: '18px'
  }
}));

const VoltaCardId = styled(Box)(({ theme }) => ({
  backgroundColor: '#1D1E1F',
  borderRadius: '4px',
  padding: '3px 8px',
  fontSize: '15px',
  lineHeight: '15px',
  fontWeight: '500'
}));

const VaultCardHeaderValueContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '10px',
  [theme.breakpoints.down(640)]: {
    flexDirection: 'column',
    gap: '0px'
  }
}));

const VoltaCardHeaderValue = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '33px',
  [theme.breakpoints.down(640)]: {
    fontSize: '25px'
  }
}));

const VoltaCardHeaderValueText = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '11px',
  lineHeight: '22px',
  color: '#A5A5A5',
  paddingBottom: '10px',
  [theme.breakpoints.down(640)]: {
    paddingBottom: '0px'
  }
}));

const VaultCardLine = styled(Box)(({ theme }) => ({
  margin: '21px 0 30px 0',
  backgroundColor: '#1D1E1F',
  width: '100%',
  height: '1px'
}));

const VaultCardValueContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: '45px',
  [theme.breakpoints.down(640)]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 2fr)',
    columnGap: '72px',
    rowGap: '27px'
  },
  [theme.breakpoints.down(390)]: {
    columnGap: '32px'
  }
}));

const VaultCardValue = (props: { name: string; value: string | number; unit?: string }) => {
  return (
    <VaultCardValueWrapper>
      <VaultCardValueName>{props.name}:</VaultCardValueName>
      <VaultCardValueText>
        {props.value} {props.unit !== undefined && <span>{props.unit}</span>}
      </VaultCardValueText>
    </VaultCardValueWrapper>
  );
};

const VaultCardValueWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '7px',
  [theme.breakpoints.down(640)]: {
    width: 'fit-content'
  }
}));

const VaultCardValueName = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '20px',
  color: '#A5A5A5',
  [theme.breakpoints.down(640)]: {
    width: 'fit-content'
  }
}));

const VaultCardValueText = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '17px',
  lineHeight: '20px',
  color: '#FFFFFF',
  [theme.breakpoints.down(640)]: {
    width: 'fit-content'
  },
  span: {
    color: '#A5A5A5'
  },
  [theme.breakpoints.down(450)]: {
    fontSize: '15px'
  }
}));

const CreateVaultButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#00EB88',
  borderRadius: '6px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40px',
  textTransform: 'none',
  color: '#000000',
  fontSize: '16px',
  lineHeight: '25px',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: '#00EB88'
  }
}));
