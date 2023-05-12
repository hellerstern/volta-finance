import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { CommonSelect } from 'src/components/Select';
import { VaultHeader, VaultHeaderAction, VaultHeaderText, VaultPrimaryText, VaultSecondaryText } from './CreateVault';
import { SearchIconSvg } from 'src/config/images';
import { commaSeparators } from 'src/utils/commaSeparators';
import { HelpOutline } from '@mui/icons-material';
import { networkArr, vaultsArr, vaultsData } from 'src/constant/array';
import { VaultsDataProps } from 'src/constant/interface';

export const UserVault = () => {
  const [vaults, setVaults] = useState('');
  const [network, setNetwork] = useState('');
  return (
    <UserVaultContainer>
      <VaultHeader>
        <VaultHeaderText>
          <VaultPrimaryText>My vaults</VaultPrimaryText>
          <VaultSecondaryText>Create a vault to start borrowing</VaultSecondaryText>
        </VaultHeaderText>
        <VaultHeaderAction>
          <CommonSelect label="Vaults" state={vaults} setState={setVaults} arrayData={vaultsArr} width={160} />
          <CommonSelect label="Networks" state={network} setState={setNetwork} arrayData={networkArr} width={160} />
        </VaultHeaderAction>
      </VaultHeader>
      {vaultsData.length === 0 ? (
        <NotFound />
      ) : (
        <VaultsCardContainer>
          {vaultsData.map((item, index) => (
            <VaultCard
              key={index}
              logo={item.logo}
              title={item.title}
              id={item.id}
              ratio={item.ratio}
              collateral={item.collateral}
              collateralUSD={item.collateralUSD}
              dept={item.dept}
            />
          ))}
        </VaultsCardContainer>
      )}
    </UserVaultContainer>
  );
};

const UserVaultContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '37px'
}));

const VaultsCardContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '25px',
  [theme.breakpoints.down(1220)]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.down(768)]: {
    gridTemplateColumns: 'repeat(1, 1fr)'
  }
}));

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src={SearchIconSvg} alt="search-icon" />
      <NotFoundTitle>Vaults not found</NotFoundTitle>
      <NotFoundText>
        If you're a new user to a digital platform that offers a vault service, you may not have any existing vaults
        created yet.
      </NotFoundText>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '320px',
  width: '100%',
  flexDirection: 'column',
  backgroundColor: '#131418',
  borderRadius: '4px',
  gap: '20px'
}));

const NotFoundTitle = styled(Box)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '28px',
  color: '#FFFFFF'
}));

const NotFoundText = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#A5A5A5',
  textAlign: 'center',
  [theme.breakpoints.down(1120)]: {
    width: '444px'
  },
  [theme.breakpoints.down(560)]: {
    width: '260px'
  }
}));

const VaultCard = (props: VaultsDataProps) => {
  const { logo, title, id, dept, ratio, collateral, collateralUSD } = props;
  return (
    <VaultCardContainer>
      <VaultCardWrapper>
        <VaultCardHeader>
          <VaultCardLogoContainer>
            <VaultCardLogo src={logo} alt="vaultcard-logo" />
            <VaultCardTitle>{title}</VaultCardTitle>
          </VaultCardLogoContainer>
          <span>#{id}</span>
        </VaultCardHeader>
        <VaultCardRatioContainer>
          <p>Ratio %</p>
          <div>{ratio}%</div>
        </VaultCardRatioContainer>
        <VaultCardContent>
          <VaultCardItem
            name={<CollateralName />}
            value={
              <>
                <span>{commaSeparators(collateral)} </span>gDAI
              </>
            }
          />
          <VaultCardItem
            name={'Collateral ($):'}
            value={
              <>
                <span>${commaSeparators(collateralUSD)} </span>USD
              </>
            }
          />
          <VaultCardItem
            name={'Dept:'}
            value={
              <>
                <span>${commaSeparators(dept)} </span>VOLT
              </>
            }
          />
        </VaultCardContent>
        <VaultCardAction>
          <ManageButton>Manage</ManageButton>
        </VaultCardAction>
      </VaultCardWrapper>
    </VaultCardContainer>
  );
};

const VaultCardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#131418',
  boxShadow: ' 0px 4px 24px rgba(0, 0, 0, 0.05)',
  borderRadius: '8px'
}));

const VaultCardWrapper = styled(Box)(({ theme }) => ({
  padding: '21px',
  display: 'flex',
  flexDirection: 'column'
}));

const VaultCardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  span: {
    backgroundColor: '#1D1E1F',
    borderRadius: '4px',
    fontWeight: '500',
    fontSize: '15px',
    padding: '0px 8px'
  }
}));

const VaultCardLogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}));

const VaultCardLogo = styled('img')(({ theme }) => ({
  width: '33px',
  height: '33px'
}));

const VaultCardTitle = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '24px'
}));

const VaultCardRatioContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  paddingTop: '20px',
  p: {
    fontWeight: '400',
    fontSize: '14px',
    color: '#A5A5A5',
    margin: 0
  },
  div: {
    fontWeight: '500',
    fontSize: '30px',
    color: '#21C397'
  }
}));

const CollateralName = () => {
  return (
    <CollateralNameContainer>
      <p>Collateral: </p>
      <HelpOutline sx={{ width: '13px', height: '13px', cursor: 'pointer', color: '#FFFFFF' }} />
    </CollateralNameContainer>
  );
};

const CollateralNameContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
  p: {
    fontSize: '14px',
    color: '#A5A5A5',
    fontWeight: '400',
    margin: 0
  }
}));

const VaultCardContent = styled(Box)(({ theme }) => ({
  paddingTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '17px'
}));

const VaultCardItem = (props: { name: React.ReactNode | string; value: React.ReactNode }) => {
  return (
    <VaultCardItemContainer>
      <VaultCardItemName>{props.name}</VaultCardItemName>
      <VaultCardItemValue>{props.value}</VaultCardItemValue>
    </VaultCardItemContainer>
  );
};

const VaultCardItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const VaultCardItemName = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  color: '#A5A5A5',
  fontWeight: '400'
}));

const VaultCardItemValue = styled(Box)(({ theme }) => ({
  fontSize: '17px',
  fontWeight: '500',
  color: '#A5A5A5',
  span: {
    color: '#EDEDED'
  }
}));

const VaultCardAction = styled(Box)(({ theme }) => ({
  paddingTop: '36px'
}));

const ManageButton = styled(Button)(({ theme }) => ({
  border: '1px solid #21Ce97',
  borderRadius: '6px',
  height: '40px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  textTransform: 'none'
}));
