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
  gap: '36px',
  [theme.breakpoints.down(1240)]: {
    flexDirection: 'column',
    gap: '62px',
    padding: '68px 53px'
  },
  [theme.breakpoints.down(640)]: {
    padding: '31px',
    gap: '48px'
  }
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
  fontWeight: '500',
  [theme.breakpoints.down(1240)]: {
    fontSize: '20px'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '17px'
  }
}));

const ProtocolText = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '35px',
  lineHeight: '48px',
  color: '#FFFFFF',
  [theme.breakpoints.down(1240)]: {
    fontSize: '30px'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '23px',
    lineHeight: '35px'
  }
}));

const GotoLaunchApp = styled(Box)(({ theme }) => ({
  color: '#00D395',
  fontSize: '18px',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  cursor: 'pointer',
  [theme.breakpoints.down(640)]: {
    fontSize: '14px'
  }
}));

const VoltaServiceCardContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 2fr)',
  rowGap: '45px',
  columnGap: '79px',
  [theme.breakpoints.down(640)]: {
    columnGap: '58px'
  }
}));

const VoltaSericeCard = (props: { value: string; content: string }) => {
  return (
    <VoltaSericeCardContainer>
      <VoltaServiceCardValue>{props.value}</VoltaServiceCardValue>
      <VoltaServiceCardContent> {props.content}</VoltaServiceCardContent>
    </VoltaSericeCardContainer>
  );
};

const VoltaSericeCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '7.6px',
  flexDirection: 'column',
  [theme.breakpoints.down(640)]: {
    gap: '0px'
  }
}));

const VoltaServiceCardValue = styled(Box)(({ theme }) => ({
  fontSize: '40px',
  lineHeight: '46px',
  width: 'fit-content',
  fontWeight: '700',
  [theme.breakpoints.down(1240)]: {
    fontSize: '30px'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '20px'
  }
}));

const VoltaServiceCardContent = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '24px',
  color: 'rgba(255, 255, 255, 0.36)',
  width: '204px',
  [theme.breakpoints.down(1240)]: {
    fontSize: '18px'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '15px',
    width: 'auto'
  },
  [theme.breakpoints.down(450)]: {
    fontSize: '13px'
  }
}));
