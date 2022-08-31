import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { ethers } from 'ethers';
import MstNFT from '../utils/MstNFT.json';
import Sidebar from "./Sidebar";
import { setLoadingMsg, setAlert, setTx } from "../store";
import { useGlobalState, getGlobalState, setGlobalState } from "../store";

function Mint(props) {
  const [mintNumber, setMintNumber] = useState(1);

  const numberUp = () => {
    mintNumber < 5 ? setMintNumber(mintNumber + 1) : setMintNumber(5);
  }
  const numberDown = () => {
    mintNumber > 1 ? setMintNumber(mintNumber - 1) : setMintNumber(1);
  }

  const askContractToMintNft = async () => {
    console.log(props.pA);
    const CONTRACT_ADDRESS = "0x780ce0f66FBD2f953C9A229d163551A83c4B0F6b";
    setGlobalState('loading', { show: true, msg: 'Retrieving IPFS data...' })

    try {
        const { ethereum } = window;

        if (props.cA) {
            //const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = props.pA.getSigner();
            const contract = new ethers.Contract(CONTRACT_ADDRESS, MstNFT.abi, signer);
            const connection = contract.connect(signer);
            setLoadingMsg('NFT minting in progress...');
            <h1>Minting NFT</h1>
            const addr = connection.address
            console.log("Going to pop wallet now to pay gas...")
            const result = await contract.mint( { value: ethers.utils.parseEther('0.15') });
            console.log("Mining...please wait.")
            await result.wait();
            console.log('result: ', result)
            console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${result.hash}`);
            setAlert('Congrats, click to see your nft')
            setTx(`https://testnets.opensea.io/${result.from}`)

        } else {
        console.log("Ethereum object doesn't exist!");
        }
    } catch (error) {
        <div className="w-[50vw] h-[50vh] bg-white">Nopeeee</div>
        console.log(error)
    }
  }

  return (
    <div className={props.cA ? 'block' : 'hidden'}>
      <h1 className='text-2xl font-extrabold text-white mb-6'>Mint your Gyatso NFT's</h1>
      <div className='h-20 grid grid-cols-6'>
              <button onClick={numberDown} className='h-10 white px-5 mx-2 text-xl font-bold col-span-1 bg-[#B2FF97]'> - </button>
              <input id='mintNumber' type="number" min={1} max={5} value={mintNumber} placeholder={1} className=' col-span-4 h-10 text-center outline-none' />
              <button onClick={numberUp} className='white px-5 mx-2 h-10 bg-[#B2FF97] text-xl col-span-1 font-bold'> + </button>
      </div>
      <button onClick={askContractToMintNft} className='white px-5 mx-2 bg-[#B2FF97] h-10  font-extrabold text-xl'>Mint</button>
    </div>
  )
}

export default Mint;