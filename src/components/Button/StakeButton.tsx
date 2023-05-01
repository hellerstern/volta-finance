import { ConnectButton } from '@rainbow-me/rainbowkit';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const StakeButton = (props: { onClick?: () => void }) => {
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
                  <StakeButtonContainer onClick={openConnectModal} type="button" status="connect">
                    {/* <ConnectButtonIcon>
                        <AccountBalanceWallet sx={{ width: '24px', height: '24px' }} />
                      </ConnectButtonIcon> */}
                    <span>Connect Wallet</span>
                  </StakeButtonContainer>
                );
              }
              if (chain.unsupported ?? false) {
                return (
                  <StakeButtonContainer onClick={openChainModal} type="button" status="wrong">
                    {/* <ConnectButtonIcon>
                        <IoWarningOutline style={{ width: '24px', height: '24px' }} />
                      </ConnectButtonIcon> */}
                    <span>Wrong Network</span>
                  </StakeButtonContainer>
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
                  <StakeButtonContainer onClick={props.onClick} type="button" status="connected">
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
                    <span>Stake</span>
                  </StakeButtonContainer>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

const StakeButtonContainer = styled(Button)<{ status: string }>(({ theme, status }) => ({
  borderRadius: '6px',
  padding: '14px 25px',
  color: '#000000',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '17px',
  textTransform: 'none',
  backgroundColor: status === 'wrong' ? '#F55050' : '#00EB88',
  '&:hover': {
    backgroundColor: status === 'wrong' ? '#F55050' : '#00EB88'
  },
  [theme.breakpoints.down(768)]: {
    width: '100%'
  }
}));
