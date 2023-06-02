/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState, useEffect } from 'react';
import { Box, Button, Collapse, Step, StepLabel, Stepper, Tab, TableContainer, Tabs } from '@mui/material';
import { styled } from '@mui/system';
import { ArbitrumLogoSvg, VoltLogoSvg } from 'src/config/images';
import { ArrowDropDown, ArrowDropUp, HelpOutline, Launch } from '@mui/icons-material';
import { TabPanel, a11yProps } from 'src/components/TabPanel';
import { SwitchButton } from 'src/components/Switch';
import { MaxLogoInput } from 'src/components/Input/MaxLogoInput';
import { StepConnectButton } from 'src/components/Button/StepConnectButton';
import { ALink } from 'src/components/ALink';
import { useTokenBalance } from 'src/hook/useToken';
import tokenAddys from '../../contracts/address.json';
import { commaSeparators } from 'src/utils/commaSeparators';
import { getGLPPrice, getGMXPrice, getGNSPrice, isApproved, tokenApprove, tokenDeposit } from 'src/contracts';
import { useAccount } from 'wagmi';
import { handleAsync } from 'src/utils/handleAsync';
import { useDepositBalance, useTvlBalance } from 'src/hook/useData';
import { rowDataProps } from 'src/constant/interface';
import { useVoltGNSBoost, useVoltGNSCap } from 'src/hook/useGNS';
import { ethers } from 'ethers';

const isDesktop = window.matchMedia('(min-width: 480px)').matches;

interface rowProps {
  state: number;
  setState: (value: number) => void;
  id: number;
  data: rowDataProps;
}

const rowData: rowDataProps[] = [
  {
    id: 1,
    assetIcon: VoltLogoSvg,
    assetPrimary: 'GNS',
    assetSecondary: 'VoltGNS',
    apr: '25.08',
    boost: '0',
    network: ArbitrumLogoSvg,
    token: tokenAddys.tokens.GNS.contract,
    contract: tokenAddys.tokens.voltGNS.address
  },
  {
    id: 2,
    assetIcon: tokenAddys.tokens.GLP.img,
    assetPrimary: 'GLP',
    assetSecondary: 'VoltGLP',
    apr: '22.21',
    boost: '3.5',
    network: ArbitrumLogoSvg,
    token: tokenAddys.tokens.GLP.contract,
    contract: tokenAddys.tokens.voltGLP.address
  },
  {
    id: 3,
    assetIcon: tokenAddys.tokens.GLP.img,
    assetPrimary: 'GMX',
    assetSecondary: 'VoltGMX',
    apr: '5.46',
    boost: '1.5',
    network: ArbitrumLogoSvg,
    token: tokenAddys.tokens.GMX.address,
    contract: tokenAddys.tokens.voltGMX.address
  }
];

const Row = (props: rowProps) => {
  const { state, setState, id, data } = props;

  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [gnsPrice, setGnsPrice] = useState(0);
  const [gmxPrice, setGmxPrice] = useState(0);
  const [glpPrice, setGlpPrice] = useState(0);

  const handleGNSPrice = async () => {
    const price = await getGNSPrice();
    setGnsPrice(price);
  };

  const handleGMXPrice = async () => {
    const price = await getGMXPrice();
    setGmxPrice(price);
  };

  const handleGLPPrice = async () => {
    const price = await getGLPPrice();
    setGlpPrice(price);
  };

  useEffect(() => {
    handleGNSPrice();
    handleGMXPrice();
    handleGLPPrice();
  }, []);

  const tokenPrice =
    data.assetPrimary === 'GNS'
      ? gnsPrice
      : data.assetPrimary === 'GMX'
      ? gmxPrice
      : data.assetPrimary === 'GLP'
      ? glpPrice
      : 0;

  const depositedValue = useDepositBalance(data.contract);
  const voltValue = Math.floor(Number(depositedValue) * tokenPrice * 100) / 100;

  return (
    <RowContainer>
      <CustomTableRow onClick={() => setState(state === id ? -1 : id)}>
        <CustomTableCell width={isDesktop ? 150 : 120} about="Asset">
          <AssetField icon={data.assetIcon} name={`${data.assetPrimary}/${data.assetSecondary}`} />
        </CustomTableCell>
        <CustomTableCell width={220} about="APR">
          <APRField name={data.assetSecondary} aprPro={data.apr} boost={data.boost} />
        </CustomTableCell>
        <CustomTableCell width={225} about="My Deposits">
          <MyDepsoitText>
            ${depositedValue} {data.assetPrimary} ≈{' '}
            <span>
              {voltValue} {data.assetSecondary}
            </span>
          </MyDepsoitText>
        </CustomTableCell>
        <CustomTableCell width={isDesktop ? 100 : 75} about="TVL">
          ${commaSeparators(useTvlBalance(data))}
        </CustomTableCell>
        <CustomTableCell width={isDesktop ? 70 : 20} about="Network" sx={{ textAlign: 'center' }}>
          <NetworkLogo src={data.network} alt="network-logo" />
        </CustomTableCell>
        <CustomTableCell width={20} about="Collapse">
          {state === id ? <ArrowDropUp /> : <ArrowDropDown />}
        </CustomTableCell>
      </CustomTableRow>
      <Collapse in={state === id} timeout="auto" unmountOnExit>
        <TableRowLine />
        <AdditionContainer>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#00EB88'
                }
              }}
            >
              <Tab label="Deposit" {...a11yProps(0)} disableRipple />
              <Tab label="Withdraw" {...a11yProps(1)} disableRipple />
              <Tab label="Info" {...a11yProps(2)} disableRipple />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <DepositTabPanel item={data} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <WithdrawTabPanel item={data} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <InfoTabPanel item={data} />
          </TabPanel>
        </AdditionContainer>
        <TableRowLine />
      </Collapse>
    </RowContainer>
  );
};

export const SearchBoardTable = () => {
  const [state, setState] = useState(-1);
  const [itemData, setItemData] = useState<rowDataProps[]>(rowData);
  const [apr, setApr] = useState<string>('0.0000');
  const [cap, setCap] = useState<number>(0);
  const [voltgnsBoost, setVoltGNSBoost] = useState<string>('0');

  const voltGNSLiveBoost = useVoltGNSBoost();
  const capLive = useVoltGNSCap();

  useEffect(() => {
    updateApr();
    const interval = setInterval(updateApr, 10000);
    return () => clearInterval(interval);
  }, []);

  function updateApr() {
    fetch('https://backend-arbitrum.gains.trade/apr')
      .then((res: any) => res.json())
      .then((data) => {
        try {
          setApr((data.sssApr * (1 - 0.075)).toFixed(4));
        } catch (error) {
          console.error(error);
        }
      })
      .catch(console.error);
  }

  useEffect(() => {
    setVoltGNSBoost(
      ethers.utils.formatEther(voltGNSLiveBoost !== undefined ? (voltGNSLiveBoost as ethers.BigNumberish) : 0)
    );
  }, [voltGNSLiveBoost]);

  useEffect(() => {
    setCap(Number(capLive));
  }, [capLive]);

  useEffect(() => {
    console.log('asdfasdf');
    const updatedItemData = [...itemData];
    updatedItemData[0].apr = (Number(apr) * (1 + Number(voltgnsBoost) / (cap / 1e18)))
      .toFixed(2)
      .replace('NaN%', 'Loading...');
    updatedItemData[0].boost = voltgnsBoost;
    setItemData(updatedItemData);
  }, [apr, capLive, voltgnsBoost]);

  return (
    <SearchBoardTableContainer>
      <CustomTableHeader>
        <TableHeaderField width={isDesktop ? 150 : 120} about="Asset">
          Asset
        </TableHeaderField>
        <TableHeaderField width={220} about="APR">
          APR
        </TableHeaderField>
        <TableHeaderField width={220} about="My Deposits">
          My Deposits
        </TableHeaderField>
        <TableHeaderField width={isDesktop ? 100 : 75} about="TVL">
          TVL
        </TableHeaderField>
        <TableHeaderField width={isDesktop ? 70 : 20} about="Network">
          Network
        </TableHeaderField>
        <TableHeaderField width={20} about="Collapse" />
      </CustomTableHeader>
      <TableRowLine />
      <CustomTableBody>
        {itemData.map((item: rowDataProps) => (
          <Row state={state} setState={setState} id={item.id} data={item} key={item.id} />
        ))}
      </CustomTableBody>
    </SearchBoardTableContainer>
  );
};

export const DepositTabPanel = (props: { item: rowDataProps }) => {
  const { item } = props;
  const [isOptimized, setOptimized] = useState(true);
  const [tokenAmount, setTokenAmount] = useState(0);
  const [isLoad, setLoad] = useState(false);
  const { address } = useAccount();

  const tokenBalance = useTokenBalance(item.token);

  const handleMaxClick = () => {
    setTokenAmount(parseFloat(tokenBalance));
  };

  const handleDeposit = async () => {
    if (address !== undefined) await tokenDeposit(tokenAmount, item.contract, address);
  };

  const depositedValue = useDepositBalance(item.contract);

  return (
    <TabPanelContainer>
      <TableFieldContainer>
        <TabletTableFieldContainer>
          <TabletTableField title="My Deposits" content={<MyDepsoitText>{depositedValue}</MyDepsoitText>} />
        </TabletTableFieldContainer>
        <MobileTableFieldContainer>
          <TabletTableField
            title="APR"
            content={<APRField name={item.assetSecondary} aprPro={item.apr} boost={item.boost} />}
          />
        </MobileTableFieldContainer>
      </TableFieldContainer>
      <TabPanelAction>
        <GNSContainer>
          <GetGNSButton>
            {isDesktop ? `Get ${item.assetPrimary}/${item.assetSecondary}` : `Get ${item.assetSecondary}`}
          </GetGNSButton>
          <GasOptimizeContainer>
            <GasOptimizeTitle>GAS OPTIMIZED</GasOptimizeTitle>
            <HelpOutline sx={{ width: '13px', height: '13px' }} />
            <SwitchButton isChecked={isOptimized} setChecked={setOptimized} />
          </GasOptimizeContainer>
        </GNSContainer>
        <MaxLogoInput
          primaryText={`Amount ${item.assetPrimary}`}
          secondaryText={`Balance: ${tokenBalance}`}
          state={tokenAmount}
          setState={setTokenAmount}
          logo={item.assetIcon}
          logoText={`${item.assetPrimary}/${item.assetSecondary}`}
          onMaxClick={handleMaxClick}
        />
        <StepAction
          buttonName={isLoad ? 'Loading...' : 'Deposit & Stake'}
          item={item}
          onClick={() => handleAsync(async () => await handleDeposit(), setLoad, 'Successfully deposited')}
        />
      </TabPanelAction>
      <TabPanelText>
        <p>
          Deposit liquidity into the {item.assetSecondary} pool (without staking in the GNS gauge), and then stake your
          tokens here to earn {item.assetSecondary} on top of native rewards.
        </p>
        <p>
          Performance fee : 15% of {item.assetPrimary} rewards <br />
          Harvest fee: 1% <br />
          No withdrawal fee, no management fee
        </p>
      </TabPanelText>
    </TabPanelContainer>
  );
};

export const WithdrawTabPanel = (props: { item: rowDataProps }) => {
  const { item } = props;
  const [isOptimized, setOptimized] = useState(true);
  const [tokenAmount, setTokenAmount] = useState(0);

  const tokenBalance = useTokenBalance(item.contract);

  console.log('withdraw: ', tokenBalance);

  const handleMaxClick = () => {
    setTokenAmount(parseFloat(tokenBalance));
  };

  const depositedValue = useDepositBalance(item.contract);

  return (
    <TabPanelContainer>
      <TableFieldContainer>
        <TabletTableFieldContainer>
          <TabletTableField title="My Deposits" content={<MyDepsoitText>{depositedValue}</MyDepsoitText>} />
        </TabletTableFieldContainer>
        <MobileTableFieldContainer>
          <TabletTableField
            title="APR"
            content={<APRField name={item.assetSecondary} aprPro={item.apr} boost={item.boost} />}
          />
        </MobileTableFieldContainer>
      </TableFieldContainer>
      <TabPanelAction>
        <GNSContainer>
          <GNSTitle>Withdraw {item.assetSecondary}:</GNSTitle>
          <GasOptimizeContainer>
            <GasOptimizeTitle>GAS OPTIMIZED</GasOptimizeTitle>
            <HelpOutline sx={{ width: '13px', height: '13px' }} />
            <SwitchButton isChecked={isOptimized} setChecked={setOptimized} />
          </GasOptimizeContainer>
        </GNSContainer>
        <MaxLogoInput
          primaryText={`Amount ${item.assetPrimary}`}
          secondaryText={`Balance: ${tokenBalance}`}
          state={tokenAmount}
          setState={setTokenAmount}
          logo={item.assetIcon}
          logoText={`${item.assetPrimary}/${item.assetSecondary}`}
          onMaxClick={handleMaxClick}
        />
        <WithdrawInfoContainer>
          <MaxWithdrawContainer>
            <WithdrawInfoName>Max.withdraw: </WithdrawInfoName>
            <WithdrawInfoValue>1.878 {item.assetSecondary} </WithdrawInfoValue>
          </MaxWithdrawContainer>
          <WithdrawFeeContainer>
            <WithdrawInfoName>Max.withdraw: </WithdrawInfoName>
            <WithdrawInfoValue sx={{ fontWeight: '600' }}>~ 0.00 % </WithdrawInfoValue>
          </WithdrawFeeContainer>
        </WithdrawInfoContainer>
      </TabPanelAction>
      <TabPanelContent>
        <TabPanelText>
          <p>
            Before proceeding, make sure you have the correct amount of tokens in your account and that you have
            sufficient funds to cover any associated fees.
          </p>
        </TabPanelText>
        <StepAction buttonName="Withdraw" item={item} />
      </TabPanelContent>
    </TabPanelContainer>
  );
};

export const InfoTabPanel = (props: { item: rowDataProps }) => {
  const { item } = props;
  const depositedValue = useDepositBalance(item.contract);
  return (
    <TabPanelContainer>
      <TableFieldContainer>
        <TabletTableFieldContainer>
          <TabletTableField title="My Deposits" content={<MyDepsoitText>{depositedValue}</MyDepsoitText>} />
        </TabletTableFieldContainer>
        <MobileTableFieldContainer>
          <TabletTableField
            title="APR"
            content={<APRField name={item.assetSecondary} aprPro={item.apr} boost={item.boost} />}
          />
        </MobileTableFieldContainer>
      </TableFieldContainer>
      <InfoTabPanelContainer>
        <InfoItem name="Vault" address="0xBbD4cC62a2C748206A03Adeb100027872601fc43" />
        <InfoItem name="cvxcrv-crv-f" address="0xBbD4cC62a2C748206A03Adeb100027872601fc43" />
        <InfoItem name="Liquidity gauge" address="0xBbD4cC62a2C748206A03Adeb100027872601fc43" />
        <InfoItem name="cvxCRV/CRV liquidity " address="0xBbD4cC62a2C748206A03Adeb100027872601fc43" />
        <InfoItem name="Strategy" address="0xBbD4cC62a2C748206A03Adeb100027872601fc43" />
        <InfoItem name="Gauge controller" address="0xBbD4cC62a2C748206A03Adeb100027872601fc43" />
        <InfoItem name="Volta Distributor" address="0xBbD4cC62a2C748206A03Adeb100027872601fc43" />
        <InfoItem name="Volta finance gauge " address="0xBbD4cC62a2C748206A03Adeb100027872601fc43" />
      </InfoTabPanelContainer>
    </TabPanelContainer>
  );
};

const SearchBoardTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: '#131418',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  borderRadius: '10px',
  width: '100%'
}));

const AssetField = (props: { icon: string; name: string }) => {
  return (
    <AssetFieldContainer>
      <AssetFieldLogo src={props.icon} alt="asset-logo" />
      <AssetFieldName>{props.name}</AssetFieldName>
    </AssetFieldContainer>
  );
};

const AssetFieldContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  [theme.breakpoints.down(480)]: {
    gap: '5px'
  }
}));

const AssetFieldLogo = styled('img')(({ theme }) => ({
  width: 'auto',
  height: '21px'
}));

const AssetFieldName = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  color: '#EDEDED',
  [theme.breakpoints.down(480)]: {
    fontSize: '14px'
  }
}));

interface APRFieldProps {
  name: string;
  aprPro: number | string;
  boost: number | string;
}

const APRField = (props: APRFieldProps) => {
  return (
    <APRFieldContainer>
      <AprProContainer>
        <AprProValue>{props.aprPro}%</AprProValue>
      </AprProContainer>
      <BoostText>
        {props.name}: Boost {props.boost}x
      </BoostText>
    </APRFieldContainer>
  );
};

const APRFieldContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '7px'
}));

const AprProContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const AprProValue = styled(Box)(({ theme }) => ({
  fontFamily: '500',
  fontSize: '16px',
  lineHeight: '16px',
  color: '#EDEDED'
}));

const ProjValue = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '16px',
  fontWeight: '500',
  span: {
    fontSize: '12px'
  }
}));

const BoostText = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '16px',
  color: '#A5A5A5'
}));

const MyDepsoitText = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#EDEDED',
  span: {
    color: '#A5A5A5'
  }
}));

const NetworkLogo = styled('img')(({ theme }) => ({
  width: '27px',
  height: '27px'
}));

const CustomTableHeader = styled(Box)(({ theme }) => ({
  padding: '18px 26px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const TableRowLine = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '1px',
  backgroundColor: 'rgba(255, 255, 255, 0.08)'
}));

const TableHeaderField = styled(Box)<{ width: number }>(({ theme, width, about }) => ({
  width: `${width}px`,
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
  color: '#A5A5A5',
  [theme.breakpoints.down(1120)]: {
    display: (about === 'Claimable' || about === 'My Deposits') && 'none'
  },
  [theme.breakpoints.down(768)]: {
    display: about === 'APR' && 'none'
  },
  [theme.breakpoints.down(480)]: {
    fontSize: '14px'
  }
}));

const CustomTableBody = styled(Box)(({ theme }) => ({
  padding: '8px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
}));

const CustomTableRow = styled(Box)(({ theme }) => ({
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const CustomTableCell = styled(Box)<{ width: number }>(({ theme, width, about }) => ({
  width: `${width}px`,
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#EDEDED',
  [theme.breakpoints.down(1120)]: {
    display: (about === 'Claimable' || about === 'My Deposits') && 'none'
  },
  [theme.breakpoints.down(768)]: {
    display: about === 'APR' && 'none'
  },
  [theme.breakpoints.down(480)]: {
    fontSize: '14px'
  }
}));

const AdditionContainer = styled(Box)(({ theme }) => ({
  padding: '17px'
}));

const RowContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '6px',
  background: '#0D0D0D',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  cursor: 'pointer'
}));

const TabPanelContainer = styled(Box)(({ theme }) => ({
  padding: '15px 0',
  backgroundColor: 'transparent',
  display: 'flex',
  gap: '40px',
  [theme.breakpoints.down(1120)]: {
    flexDirection: 'column'
  }
}));

const TabPanelAction = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%'
}));

const GNSContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const TabPanelText = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#A5A5A5',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  p: {
    margin: 0,
    padding: 0
  }
}));

const GetGNSButton = styled(Button)(({ theme }) => ({
  padding: '5px 12px',
  backgroundColor: '#131418',
  borderRadius: '6px',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  width: 'fit-content',
  textTransform: 'none'
}));

const GasOptimizeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '9px'
}));

const GasOptimizeTitle = styled(Box)(({ theme }) => ({
  fontSize: '12px',
  lineHeight: '16px',
  color: 'rgba(255, 255, 255, 0.592)'
}));

const TabletTableFieldContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down(1120)]: {
    display: 'flex',
    alignItems: 'center',
    gap: '36px'
  },
  [theme.breakpoints.down(480)]: {
    gap: '32px'
  }
}));

const TabletTableField = (props: { title: string; content: React.ReactNode }) => {
  return (
    <TabletTableFieldWrapper>
      <TabletTableFieldTitle>{props.title}</TabletTableFieldTitle>
      {props.content}
    </TabletTableFieldWrapper>
  );
};

const TabletTableFieldWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px'
}));

const TabletTableFieldTitle = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#A5A5A5'
}));

const MobileTableFieldContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down(768)]: {
    display: 'block'
  }
}));

interface StepActionProps {
  buttonName: string;
  item: rowDataProps;
  onClick?: () => void;
}

const StepAction = (props: StepActionProps) => {
  const { buttonName, item, onClick } = props;
  const [isApprove, setApprove] = useState(false);
  const { address } = useAccount();
  const [isLoad, setLoad] = useState(false);

  const handleTokenApprove = async () => {
    await tokenApprove(item.contract, item.token);
    setApprove(true);
  };

  const handleCheckApprove = async () => {
    const isProved = await isApproved(address, item.contract, item.token);
    setApprove(isProved ?? false);
  };

  useEffect(() => {
    handleCheckApprove();
  }, []);

  const steps = [
    // eslint-disable-next-line react/jsx-key
    <StepConnectButton
      isApproved={isApprove}
      isLoad={isLoad}
      onClick={() => handleAsync(async () => await handleTokenApprove(), setLoad, 'Successfully approved')}
    />,
    // eslint-disable-next-line react/jsx-key
    <StepActionButton disabled={!isApprove} onClick={onClick}>
      {buttonName}
    </StepActionButton>
  ];
  return (
    <StepActionContainer>
      <Stepper alternativeLabel activeStep={!isApprove ? 0 : 1}>
        {steps.map((item, index) => (
          <Step key={index}>
            <StepLabel>{item}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </StepActionContainer>
  );
};

const StepActionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '8px'
}));

const StepActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#131418',
  borderRadius: '6px',
  width: '295px',
  height: '40px',
  color: 'rgba(255, 255, 255, 0.92)',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '24px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#131418'
  },
  [theme.breakpoints.down(768)]: {
    width: '140px',
    fontSize: '14px'
  }
}));

const GNSTitle = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '500',
  color: '#FFFFFF'
}));

const TabPanelContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '54px'
}));

const WithdrawInfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '22px'
}));

const MaxWithdrawContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '7px'
}));

const WithdrawInfoName = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '500',
  color: '#A5A5A5'
}));

const WithdrawInfoValue = styled(Box)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '14px',
  color: '#FFFFFF'
}));

const WithdrawFeeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const InfoTabPanelContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
}));

const InfoItem = (props: { name: string; address: string }) => {
  return (
    <InfoItemContainer>
      <InfoItemName>{props.name}</InfoItemName>
      <InfoItemAddress>
        {props.address.slice(0, 6)}...{props.address.slice(-4)}
        <ALink link={`https://bscscan.com/address/${props.address}`}>
          <Launch sx={{ width: '17px', height: '17px' }} />
        </ALink>
      </InfoItemAddress>
    </InfoItemContainer>
  );
};

const InfoItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '164px',
  [theme.breakpoints.down(640)]: {
    justifyContent: 'space-between',
    gap: 0
  }
}));

const InfoItemName = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '400',
  color: '#A5A5A5',
  width: '210px',
  [theme.breakpoints.down(640)]: {
    width: '100%'
  },
  [theme.breakpoints.down(390)]: {
    fontSize: '12px'
  }
}));

const InfoItemAddress = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '500',
  color: 'rgba(255, 255, 255, 0.92)',
  display: 'flex',
  alignItems: 'center',
  gap: '17px',
  [theme.breakpoints.down(390)]: {
    fontSize: '12px'
  }
}));

const TableFieldContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down(1120)]: {
    padding: '36px 0 0 0',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '70px'
  },
  [theme.breakpoints.down(420)]: {
    gap: 0,
    justifyContent: 'space-between'
  }
}));
