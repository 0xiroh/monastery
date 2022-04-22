import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";


    

function Navbar() {
  const [isPaused, setIsPaused] = useState(true);
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

    // Render Methods
    const renderNotConnectedContainer = () => (
        <button onClick={connectWallet} className="bg-primary font-bold rounded-lg py-2 px-4">
        Connect Wallet
        </button>
    );
    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])

  var snd = new Audio("https://mstry.s3.amazonaws.com/mstrTrimmed.mp3");
  const togglePlay = sound => sound.pause ? (sound.play() && console.log(sound.paused)) : (sound.pause() && console.log(sound.paused));
  return (
    <nav class="flex max-w-[95vw] justify-center align-center items-center mt-4 sm:justify-around sm:mx-auto sm:mb-10">
        <div className="items-center justify-center hidden sm:flex sm:ml-[-3%]">
            <ul className="flex items-center justify-center">
                <li className="mx-4 cursor-pointer" onClick={() => togglePlay(snd)}>
                <img src="images/playButton.png" className="" />
                </li>
                <li className="mx-4 cursor-pointer" onClick={() => snd.pause()}>
                <i class="fa-solid fa-pause text-white text-3xl" />
                </li>
                <li className="text-white mx-8">
                    <a href="#roadmap" className="relative inline-block">
                      <span>Roadmap</span>
                      <span className="text-black absolute top-[-20px] right-[-50px] text-xs rounded-xl py-[5px] px-[10px] bg-[#B2FF97]">coming soon</span>
                    </a>
                </li>
                <li className="text-white mx-8">
                    How to buy
                </li>
                
            </ul>
        </div>
        <div className=''>
            <Link to='/'><img className='w-44' src='///cdn.shopify.com/s/files/1/0252/0173/7780/files/Logo_Monastery_Mesa_de_trabajo_1_400x.png?v=1612014887' alt='Monastery Logo'></img></Link>
        </div>
        <div className="items-center justify-center hidden sm:flex">
            <ul className="flex items-center justify-center ">
                <li className="mx-4">
                  <a href="https://opensea.io/MONASTERY_GYATSO" className='border-solid flex items-center justify-center font-bold w-40 h-12 bg-[#2f2f2f] text-white'>
                    <img src="/images/Group 2268.svg" className="mr-3"></img>OpenSea</a>
                </li>
                <li className="mx-4">
                  <button className='border-solid text-[#B2FF97] w-40 h-12 border-2 border-[#B2FF97]' onClick={connectWallet}>Connect Wallet</button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar