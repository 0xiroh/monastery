import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { ethers } from 'ethers';
import MstNFT from '../utils/MstNFT.json';
import Sidebar from "./Sidebar";
import { setLoadingMsg } from "../store";
import { useGlobalState, getGlobalState, setGlobalState } from "../store";
import { useTranslation, Trans } from 'react-i18next'


    

function Navbar(props) {
  //const [isPaused, setIsPaused] = useState(true);

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
                const signer = props.cA.getSigner();
                const contract = new ethers.Contract(CONTRACT_ADDRESS, MstNFT.abi, signer);
                const connection = contract.connect(signer);
                const addr = connection.address;
                <h1>Minting NFT</h1>
                console.log("Going to pop wallet now to pay gas...")
                const result = await contract.payToMint(2, { value: ethers.utils.parseEther('0.15') });
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

    // Render Methods
    const renderNotConnectedContainer = () => (
        <button onClick={props.cWallet} className="border-solid text-[#B2FF97] w-40 h-12 border-2 border-[#B2FF97]">
        Conectar Wallet
        </button>
    );
    useEffect(() => {
        props.checkWallet();
    }, [])

  var snd = new Audio("https://mstry.s3.amazonaws.com/mstrTrimmed.mp3");
  

    const lngs = {
        en: {nativeName: 'English', flag: '🇺🇸'},
        es: {nativeName: 'Spanish', flag: '🇪🇸'},
    }
    const { t, i18n } = useTranslation();
  const togglePlay = sound => sound.pause ? (sound.play() && console.log(sound.paused)) : (sound.pause() && console.log(sound.paused));
  return (
    <nav class="flex max-w-[95vw] justify-center align-center items-center mt-4 sm:justify-around sm:mx-auto sm:mb-10 static">
        <div className="items-center justify-center hidden md:flex md:ml-[-3%]">
            <ul className="flex items-center justify-center">
                {/* <li>
                    {Object.keys(lngs).map(lng => (
                        <button type="submit" key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}> {lngs[lng].flag} </button>
                    ))}
                </li> */}
                <li className="mx-4 cursor-pointer" onClick={() => togglePlay(snd)}>
                <img src="images/playButton.png" className="" />
                </li>
                <li className="mx-4 cursor-pointer" onClick={() => snd.pause()}>
                <i class="fa-solid fa-pause text-white text-3xl" />
                </li>
                <li className="text-white ml-4">
                    <a href="#Roadmap" className="relative inline-block">
                      <span>Roadmap</span>
                    </a>
                </li>
                <li className="text-white mx-8">
                    <a href="#HowToBuyD">Como comprar</a>
                </li>
                
            </ul>
        </div>
        <div className=''>
            <Link to='/'><img className='w-44' src='///cdn.shopify.com/s/files/1/0252/0173/7780/files/Logo_Monastery_Mesa_de_trabajo_1_400x.png?v=1612014887' alt='Monastery Logo'></img></Link>
        </div>
        <div className="items-center justify-center hidden md:flex">
            <ul className="flex items-center justify-center ">
                <li className="mx-4">
                  <a href="https://opensea.io/Monastery_NFT" className='border-solid flex items-center justify-center font-bold w-40 h-12 bg-[#2f2f2f] text-white'>
                    <img src="/images/Group 2268.svg" className="mr-3"></img>OpenSea</a>
                </li>
                <li className="mx-4">
                {!props.cA ? (
            renderNotConnectedContainer()
          ) : (
            <button className="cta-button connect-wallet-button border-solid text-[#B2FF97] w-40 h-12 border-2 border-[#B2FF97]">
              Connected
            </button>)}
                  {/*<button className='border-solid text-[#B2FF97] w-40 h-12 border-2 border-[#B2FF97]' onClick={connectWallet}>Connect Wallet</button>*/}
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar