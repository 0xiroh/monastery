import WalletConnect from "@walletconnect/web3-provider";

export const providerOptions = {
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: '98729269926443ecb2eb50891137531b' // required
    }
  }
};
