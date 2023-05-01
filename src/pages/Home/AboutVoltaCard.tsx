import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { East } from '@mui/icons-material';

export const AboutVoltaCard = () => {
  return (
    <AboutVoltaCardContainer>
      <AboutVoltaExplain>
        <AuditText>Audited and Verified</AuditText>
        <ProtocolText>Volta is a community-run, community-governed protocol</ProtocolText>
        <GotoLaunchApp>
          LAUNCH APP
          <East />
        </GotoLaunchApp>
      </AboutVoltaExplain>
      <VoltaServiceCardContainer>
        <VoltaSericeCard value="$200M+" content="Assets under management" />
        <VoltaSericeCard value="$30M+" content="Paid out to customers" />
        <VoltaSericeCard value="10,000+" content="Active investors earning daily yield" />
        <VoltaSericeCard value="Over 15" content="Assets available for yield" />
      </VoltaServiceCardContainer>
    </AboutVoltaCardContainer>
  );
};

const AboutVoltaCardContainer = styled(Box)(({ theme }) => ({
  marginTop: '130px',
  padding: '73px 53px',
  backgroundColor: '#131418',
  borderRadius: '4px',
  display: 'flex',
  gap: '36px'
}));

const AboutVoltaExplain = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '23px'
}));

const AuditText = styled(Box)(({ theme }) => ({
  color: '#657786',
  fontSize: '24px',
  lineHeight: '32px',
  fontWeight: '500'
}));

const ProtocolText = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '35px',
  lineHeight: '48px',
  color: '#FFFFFF'
}));

const GotoLaunchApp = styled(Box)(({ theme }) => ({
  color: '#00D395',
  fontSize: '18px',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  cursor: 'pointer'
}));

const VoltaServiceCardContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 2fr)',
  rowGap: '45px',
  columnGap: '79px'
}));

const VoltaSericeCard = (props: { value: string; content: string }) => {
  return (
    <VoltaSericeCardContainer>
      <VoltaServiceCardValue>{props.value}</VoltaServiceCardValue>
      <VoltaServiceCardContent>{props.content}</VoltaServiceCardContent>
    </VoltaSericeCardContainer>
  );
};

const VoltaSericeCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '7.6px',
  flexDirection: 'column'
}));

const VoltaServiceCardValue = styled(Box)(({ theme }) => ({
  fontSize: '40px',
  lineHeight: '46px',
  width: 'fit-content'
}));

const VoltaServiceCardContent = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '24px',
  color: 'rgba(255, 255, 255, 0.36)',
  width: '204px'
}));
