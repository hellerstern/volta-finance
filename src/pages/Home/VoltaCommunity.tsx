import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { ALink } from 'src/components/ALink';
import { DiscordLogoSvg, GitbookLogoSvg, MediumLogoSvg, TelegramLogoSvg, TwitterLogoSvg } from 'src/config/images';

export const VoltaCommunity = () => {
  return (
    <VoltaCommunityContainer>
      <VoltaCommunityText>
        <VoltaCommunityName>Volta community</VoltaCommunityName>
        <VoltaCommunityTitle>Join the Community Volta finance</VoltaCommunityTitle>
        <VoltaCommunityContent>
          Volta.finance is an open source project built on the belief in open source and the creative contributions of
          people with broad interests and skills. Join us
        </VoltaCommunityContent>
      </VoltaCommunityText>
      <VoltaCommunityLinks>
        <VoltaCommunityLinkWrapper>
          <VoltaCommunityLink
            icon={DiscordLogoSvg}
            text="Join our"
            boldText="Discord Server"
            link="https://discord.gg/qYEWSVahFh"
          />
          <LinkLine />
        </VoltaCommunityLinkWrapper>
        <VoltaCommunityLinkWrapper isMobile={true}>
          <VoltaCommunityLink
            icon={TelegramLogoSvg}
            text="Contact us on"
            boldText="Telegram"
            link="https://t.me/VoltaFinance"
          />
          <LinkLine isMobile={true} />
        </VoltaCommunityLinkWrapper>
        <VoltaCommunityLinkWrapper isTablet={true}>
          <VoltaCommunityLink
            icon={TwitterLogoSvg}
            text="twitter.com"
            boldText="volta_protocol"
            link="https://twitter.com/volta_protocol"
          />
          <LinkLine isTablet={true} />
        </VoltaCommunityLinkWrapper>
        <VoltaCommunityLinkWrapper>
          <VoltaCommunityLink
            icon={MediumLogoSvg}
            text="medium.com"
            boldText="@volta_protocol"
            link="https://medium.com/@volta_protocol"
          />
          <LinkLine isMobile={true} />
        </VoltaCommunityLinkWrapper>
        <VoltaCommunityLinkWrapper>
          <VoltaCommunityLink
            icon={GitbookLogoSvg}
            text="Join our docs on"
            boldText="Gitbook"
            link="https://volta-finance.gitbook.io/voltafinance/protocol/general-introduction"
          />
          <LinkLine />
        </VoltaCommunityLinkWrapper>
      </VoltaCommunityLinks>
    </VoltaCommunityContainer>
  );
};

const VoltaCommunityContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '120px'
}));

const VoltaCommunityText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const VoltaCommunityName = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '32px',
  color: '#657786',
  [theme.breakpoints.down(1240)]: {
    fontSize: '20px'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '17px'
  }
}));

const VoltaCommunityTitle = styled(Box)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '55px',
  lineHeight: '87px',
  paddingTop: '8px',
  [theme.breakpoints.down(1240)]: {
    fontSize: '35px'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '23px',
    fontWeight: '600',
    lineHeight: '42px',
    textAlign: 'center'
  }
}));

const VoltaCommunityContent = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '28px',
  color: '#CDCDCD',
  paddingTop: '10px',
  textAlign: 'center',
  [theme.breakpoints.down(640)]: {
    fontSize: '18px',
    lineHeight: '24 px'
  }
}));

const VoltaCommunityLinks = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 0fr)',
  columnGap: '50px',
  rowGap: '15px',
  paddingTop: '75px',
  paddingBottom: '200px',
  [theme.breakpoints.down(1240)]: {
    gridTemplateColumns: 'repeat(2, 0fr)'
  },
  [theme.breakpoints.down(840)]: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '90px'
  }
}));

const VoltaCommunityLink = (props: { icon: string; text: string; boldText: string; link: string }) => {
  return (
    <ALink link={props.link}>
      <VoltaCommunityLinkContainer>
        <VoltaCommunityLinkIcon src={props.icon} alt="link-icon" />
        <VoltaCommunityLinkText>
          {props.text}
          <span> {props.boldText}</span>
        </VoltaCommunityLinkText>
      </VoltaCommunityLinkContainer>
    </ALink>
  );
};

const VoltaCommunityLinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8.5px'
}));

const VoltaCommunityLinkIcon = styled('img')(({ theme }) => ({
  width: '31px',
  height: '31px'
}));

const VoltaCommunityLinkText = styled(Box)(({ theme }) => ({
  fontSize: '18px',
  lineHeight: '29px',
  fontWeight: '400',
  span: {
    fontWeight: '700'
  },
  [theme.breakpoints.down(640)]: {
    fontSize: '16px'
  }
}));

const LinkLine = styled(Box)<{ isTablet?: boolean; isMobile?: boolean }>(({ theme, isTablet, isMobile }) => ({
  width: '1px',
  height: '72px',
  backgroundColor: '#272727',
  display: isTablet === true ? 'none' : 'block',
  [theme.breakpoints.down(1240)]: {
    display: isMobile === true ? 'none' : 'block'
  },
  [theme.breakpoints.down(840)]: {
    display: 'none'
  }
}));

const VoltaCommunityLinkWrapper = styled(Box)<{ isMobile?: boolean; isTablet?: boolean }>(
  ({ theme, isMobile, isTablet }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: isTablet === true ? '270px' : '372px',
    height: '72px',
    [theme.breakpoints.down(1240)]: {
      width: isMobile === true ? '270px' : '330px'
    },
    [theme.breakpoints.down(840)]: {
      width: '275px'
    }
  })
);
