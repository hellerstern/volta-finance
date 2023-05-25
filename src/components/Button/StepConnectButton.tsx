import { ConnectButton } from '@rainbow-me/rainbowkit';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const StepConnectButton = (props: { onClick?: () => void; isApproved: boolean; isLoad: boolean }) => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const isReady = mounted && authenticationStatus !== 'loading';
        const hasConnected =
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          isReady &&
          account != null &&
          chain != null &&
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!isReady && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none'
              }
            })}
          >
            {(() => {
              if (!hasConnected) {
                return (
                  <StepButtonContainer onClick={openConnectModal} type="button" status="connect">
                    {/* <ConnectButtonIcon>
                        <AccountBalanceWallet sx={{ width: '24px', height: '24px' }} />
                      </ConnectButtonIcon> */}
                    <span>Connect Wallet</span>
                  </StepButtonContainer>
                );
              }
              if (chain.unsupported ?? false) {
                return (
                  <StepButtonContainer onClick={openChainModal} type="button" status="wrong">
                    {/* <ConnectButtonIcon>
                        <IoWarningOutline style={{ width: '24px', height: '24px' }} />
                      </ConnectButtonIcon> */}
                    <span>Wrong Network</span>
                  </StepButtonContainer>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  {/* <VoltaWalletConnectButton
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                    status="connected"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 24,
                          height: 24,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4
                        }}
                      >
                        {chain.iconUrl != null && (
                          <img alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} style={{ width: 24, height: 24 }} />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </VoltaWalletConnectButton> */}
                  <StepButtonContainer
                    onClick={props.onClick}
                    type="button"
                    status="connected"
                    disabled={props.isApproved || props.isLoad}
                  >
                    {/* <ConnectButtonIcon>
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: '24px',
                              height: '24px',
                              borderRadius: 999,
                              overflow: 'hidden',
                              marginRight: 4
                            }}
                          >
                            {chain.iconUrl != null && (
                              <img
                                alt={chain.name ?? 'Chain icon'}
                                src={chain.iconUrl}
                                style={{ width: '24px', height: '24px' }}
                              />
                            )}
                          </div>
                        )}
                      </ConnectButtonIcon> */}
                    <span>{!props.isLoad ? (props.isApproved ? 'Approved' : 'Approve') : 'Loading...'}</span>
                  </StepButtonContainer>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

const StepButtonContainer = styled(Button)<{ status: string }>(({ theme, status }) => ({
  borderRadius: '6px',
  color: '#161616',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '24px',
  textTransform: 'none',
  width: '295px',
  height: '40px',
  backgroundColor: status === 'wrong' ? '#F55050' : '#ffffff',
  '&:hover': {
    backgroundColor: status === 'wrong' ? '#F55050' : '#ffffff'
  },
  [theme.breakpoints.down(768)]: {
    width: '140px',
    fontSize: '14px'
  },
  span: {
    color: '#000000'
  }
}));
