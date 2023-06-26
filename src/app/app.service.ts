import { Injectable } from '@angular/core';
import {
  coinbaseModule,
  Init,
  injectedModule,
  ledgerModule,
  trustModule,
  tallyHoModule,
  walletConnectModule,
  cedeStoreModule,
  sequenceModule,
  fortmaticModule,
  portisModule,
  infinityWalletModule,
} from "@b-ee/web3-connect";

import {defaultTestAppIcon} from "./components/connect-btn/b-ee-icon";
@Injectable()
export class AppService {
  private injected = injectedModule();
  private cedeStore = cedeStoreModule();
  private trust = trustModule();
  private sequence = sequenceModule();
  private walletConnect =  walletConnectModule({
    connectFirstChainId: true,
    version: 2,
    projectId: 'f6bd6e2911b56f5ac3bc8b2d0e2d7ad5',
    qrcodeModalOptions: {
      mobileLinks: [
        'rainbow',
        'metamask',
        'argent',
        'trust',
        'imtoken',
        'pillar'
      ]
    },
    requiredChains:[1, 56]
  });
  private coinbase = coinbaseModule({ darkMode: true });
  private ledger = ledgerModule();
  private tallyho = tallyHoModule();
  private infinityWallet = infinityWalletModule();
  private fortmatic = fortmaticModule({
    apiKey: 'pk_test_886ADCAB855632AA'
  });
  private portis = portisModule({
    apiKey: 'b2b7586f-2b1e-4c30-a7fb-c2d1533b153b'
  });
  public web3Connect = Init({
    wallets: [
      this.injected,
      this.trust,
      this.walletConnect,
      this.coinbase,
      this.ledger,
      this.tallyho,
      this.cedeStore,
      this.sequence,
      this.fortmatic,
      this.portis,
      this.infinityWallet,
    ],
    chains: [
      {
        id: '0x1',
        token: 'ETH',
        label: 'Ethereum',
        rpcUrl: `https://mainnet.infura.io/v3/eb6704a4ab16437ea16afafb91ec8337`
      },
      {
        id: '0x5',
        token: 'ETH',
        label: 'Goerli',
        rpcUrl: `https://goerli.infura.io/v3/eb6704a4ab16437ea16afafb91ec8337`
      },
      {
        id: 11155111,
        token: 'ETH',
        label: 'Sepolia',
        rpcUrl: 'https://rpc.sepolia.org/'
      },
      {
        id: '0x13881',
        token: 'MATIC',
        label: 'Polygon - Mumbai',
        rpcUrl: 'https://matic-mumbai.chainstacklabs.com'
      },
      {
        id: '0x38',
        token: 'BNB',
        label: 'Binance',
        rpcUrl: 'https://bsc-dataseed.binance.org/'
      },
      {
        id: '0x89',
        token: 'MATIC',
        label: 'Polygon',
        rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
      },
      {
        id: '0xfa',
        token: 'FTM',
        label: 'Fantom',
        rpcUrl: 'https://rpc.ftm.tools/'
      },
      {
        id: '0xA',
        token: 'OETH',
        label: 'Optimism',
        rpcUrl: 'https://mainnet.optimism.io'
      },
      {
        id: '0xA4B1',
        token: 'ARB-ETH',
        label: 'Arbitrum',
        rpcUrl: 'https://rpc.ankr.com/arbitrum'
      },
      {
        id: 84531,
        token: 'ETH',
        label: 'Base Goerli',
        rpcUrl: 'https://goerli.base.org'
      }
    ],
    connect: {
      autoConnectLastWallet: false,
      autoConnectAllPreviousWallet: false
    },
    accountCenter: {
      desktop: {
        position: 'topRight',
        enabled: true,
        showTokenList: true
      }
    },
    appMetadata: {
      icon: defaultTestAppIcon,
      name: 'Dmytro Zeleniuk',
      description: 'Senior Software Developer',
      recommendedInjectedWallets: [
        { name: 'MetaMask', url: 'https://metamask.io' },
        { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
      ],
      agreement: {
        version: '1.0.0',
        termsUrl: 'https://www.b-ee.io',
        privacyUrl: 'https://www.b-ee.io'
      },
      gettingStartedGuide: 'https://b-ee.io',
      explore: 'https://b-ee.io'
    }
  });
}
