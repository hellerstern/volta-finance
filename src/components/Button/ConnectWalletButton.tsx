import { ConnectButton } from '@rainbow-me/rainbowkit';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const ConnectWalletButton = () => {
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
                  <VoltaWalletConnectButton onClick={openConnectModal} type="button" status="connect">
                    Connect Wallet
                  </VoltaWalletConnectButton>
                );
              }
              if (chain.unsupported ?? false) {
                return (
                  <VoltaWalletConnectButton onClick={openChainModal} type="button" status="wrong">
                    Wrong Network
                  </VoltaWalletConnectButton>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  {/* <AwesomeButtonContainer
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4
                        }}
                      >
                        {chain.iconUrl != null && (
                          <img alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} style={{ width: 12, height: 12 }} />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </AwesomeButtonContainer> */}
                  <VoltaWalletConnectButton onClick={openAccountModal} type="button" status="connected">
                    {account.displayName}
                    {/* {account.displayBalance != null ? ` (${account.displayBalance})` : ''} */}
                  </VoltaWalletConnectButton>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

const VoltaWalletConnectButton = styled(Button)<{ status: string }>(({ theme, status }) => ({
  borderRadius: '6px',
  padding: '6px 11px',
  color: status === 'connect' ? '#000000' : '#ffffff',
  backgroundColor: status === 'connect' ? '#00EB88' : status === 'wrong' ? '#F55050' : '#131418',
  fontSize: '14px',
  lineHeight: '24px',
  textTransform: 'none'
}));
