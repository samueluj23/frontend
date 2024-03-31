import Router from "./routes";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ToastContainer } from "react-toastify";

import {
  LedgerWalletAdapter,
  Coin98WalletAdapter,
  FractalWalletAdapter,
  CoinbaseWalletAdapter,
  TrustWalletAdapter,
  PhantomWalletAdapter,
  TorusWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { useMemo } from "react";
import "./App.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // const Url = "https://capable-delicate-arrow.solana-mainnet.quiknode.pro/b187bad0fc00e49cc84567ecadb0a370c4ca06d8/";
  const Url = "https://bold-sleek-star.solana-mainnet.quiknode.pro/6b36d57823014834a80262b13f0ed5acc898240b/";

  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => Url, []);


  const wallets = useMemo(
    () => [
      new SolflareWalletAdapter(),
      new PhantomWalletAdapter(),
      new TrustWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new Coin98WalletAdapter(),
      new FractalWalletAdapter(),
      new CoinbaseWalletAdapter(),
    ],
    [network])
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="App">
            <ToastContainer />
            <Router />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
