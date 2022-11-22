import './App.css';
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

import { DissconnectWallet, GetChainId, getUserAddress, MetaMasklogin, WalletConnect } from './Connection_Web3/Wallet';
import { useEffect, useState } from 'react';


function App() {

 
  const [account, setAccount] = useState();

  useEffect(() => {
    const init = async () => {
      const wallet = window.localStorage.getItem("wallet");
      if (wallet) {
        await Metamask();
      }
      const id = await GetChainId();
      console.log(id);
      if (Number(id) != 5) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x5" }], // chainId must be in hexadecimal numbers
        });
      }
    };

    init();
  }, []);

  const WalletC = async () => {
    await WalletConnect();
    const add = await getUserAddress();
    setAccount(add);
   
  };

  const Metamask = async () => {
    await MetaMasklogin();
    const add = await getUserAddress();
    window.localStorage.setItem("wallet", "wallet");
    setAccount(add);
   
  };
  const Dissconnect = async () => {
    await DissconnectWallet();
    setAccount(undefined);
  
    window.localStorage.removeItem("wallet");
  };

  try {
    window.ethereum.on("accountsChanged", function (accounts) {
      setAccount(accounts[0]);
    });
  } catch (error) {}

  try {
    window.ethereum.on("chainChanged", function () {
      window.location.reload();
    });
  } catch (error) {}


  return (
    <div className="App">
      <Main account={account} Dissconnect={Dissconnect} Metamask={Metamask} WalletC={WalletC}/>
    </div>
  );
}

export default App;
