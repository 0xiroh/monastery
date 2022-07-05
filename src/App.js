
import { useGlobalState, getGlobalState, setGlobalState } from "./store/index";
import './App.css';
import CallToAction from './components/CallToAction';
import HeroText from './components/HeroText';
import Navbar from './components/Navbar';
import Perks from './components/Perks';
import ReactPlayer from 'react-player'
import Nifty from './components/Nifty';
import Cap from './components/Cap';
import HowToBuy from './components/HowToBuy';
import Chakra from './components/Chakra';
import PerksDesktop from './components/PerksDesktop';
import HeroDesktop from './components/HeroDesktop';
import Footer from './components/Footer';
import { setLoadingMsg } from "./store";
import MobileVideo from './components/MobileVideo';
import MetaverseKey from './components/MetaverseKey';
import RoadmapDesktop from './components/RoadmapDesktop';
import RoadmapMobile from './components/RoadmapMobile';
import Sidebar from './components/Sidebar';
import Loading from './components/Loading';
import Faqs from './components/Faqs';
import FQ from './components/FQ';
import CollectionRMA from './components/CollectionRMA';
import HowToBuyMobile from './components/HowToBuyMobile';
import Mint from './components/Mint';
import { useState } from 'react';
import { ethers } from 'ethers';
import MstNFT from './utils/MstNFT.json';
import BuyButton from "./components/BuyButton";
import Alert from "./components/Alert";
import MintMobile from "./components/MintMobile";

function App() {

  const [currentAccount, setCurrentAccount] = useState("");
  
    const checkIfWalletIsConnected = async () => {
        const { ethereum } = window;

        if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
        } else {
        console.log("We have the ethereum object", ethereum);
        }

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account)
        } else {
        console.log("No authorized account found")
        }
    }

    /*
    * Implement your connectWallet method here
    */
    const connectWallet = async () => {
        try {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Get MetaMask!");
            return;
        }

        /*
        * Fancy method to request access to account.
        */
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });

        /*
        * Boom! This should print out public address once we authorize Metamask.
        */
        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]); 
        } catch (error) {
        console.log(error)
        }
    }



    const askContractToMintNft = async () => {
        const CONTRACT_ADDRESS = "0x780ce0f66FBD2f953C9A229d163551A83c4B0F6b";
        setGlobalState('loading', { show: true, msg: 'Retrieving IPFS data...' })

        try {
            const { ethereum } = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(CONTRACT_ADDRESS, MstNFT.abi, signer);
                const connection = contract.connect(signer);
                const addr = connection.address;
                <h1>Minting NFT</h1>
                console.log("Going to pop wallet now to pay gas...")
                const result = await contract.mint({ value: ethers.utils.parseEther('0.15') });
                const contract2 = await getGlobalState('contract')
                setLoadingMsg('NFT minting in progress...')

                console.log("Mining...please wait.")
                await result.wait();
                
                console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${result.hash}`);
                setLoadingMsg('Minting successful...')

            } else {
            console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            <div className="w-[50vw] h-[50vh] bg-white">Nopeeee</div>
            console.log(error)
        }
    }
  return (
    <div className="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} cA={currentAccount} cWallet={connectWallet} checkWallet={checkIfWalletIsConnected} mint={askContractToMintNft} />
      <div id='page-wrap'>
        <Navbar cA={currentAccount} cWallet={connectWallet} checkWallet={checkIfWalletIsConnected}  />
        <HeroDesktop cA={currentAccount} />
        <HeroText cA={currentAccount} />
        <MintMobile cA={currentAccount} />
        <CallToAction cA={currentAccount} />
        <MobileVideo />
        <PerksDesktop />
        <Perks />
        <Chakra/>
        <MetaverseKey />
        <Chakra />
        <CollectionRMA />
        <Chakra/>
        <RoadmapMobile />
        <RoadmapDesktop />
        <FQ/>
        <Chakra/>
        <HowToBuy />
        <HowToBuyMobile />
        <hr className='mt-40'></hr>
        <Footer />
        <Loading />
        <Alert />
      </div>
    </div>
  );
}

export default App;
