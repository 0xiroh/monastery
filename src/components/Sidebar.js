import { React, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'

export default props => {
  const renderNotConnectedContainer = () => (
      <button onClick={props.cWallet} className="border-solid bg-[#b2ff97] text-black w-40 h-12 border-2 border-[#B2FF97]">
      Connectar Wallet
      </button>
  );
  useEffect(() => {
      props.checkWallet();
  }, [renderNotConnectedContainer])
  return (
    
    <Menu {...props}>
            <img src="./images/logoBlack.png" className="mt-[-5vh] mx-auto"/>
            <ul className="flex-col items-center justify-center gap-5">
                <hr className='w-[150%] mb-4 ml-[-15vw]'/>
                <li className="mx-4 mb-4 text-black">
                    <a href="#roadmapMobile">
                      Roadmap
                    </a>
                </li>
                <hr className='w-[150%] my-4 ml-[-15vw]'/>
                {/* <li className="mx-4 mb-4 text-black">
                    <a href="#howToBuyMobile">
                      Como comprar
                    </a>
                </li> */}
                <hr className='w-[150%] mb-4 ml-[-15vw]'/>
                
            </ul>
            <div className='h-[30vh]'/>
            <ul className="flex align-bottom">
              <hr className='w-[150%] mb-4 ml-[-15vw]'/>
              <li className="mx-4">
                <a href="https://opensea.io/Monastery_nft" className='border-solid flex items-center justify-center font-bold w-40 h-12 bg-[#2f2f2f] text-white'>
                  <img src="/images/Group 2268.svg" className="mx-3 my-4"></img>OpenSea</a>
              </li>
              <li className="mx-4 my-4">
              {!props.cA ? (
            renderNotConnectedContainer()
          ) : (
            <button className="cta-button connect-wallet-button border-solid text-black w-40 bg-[#b2ff97] h-12 border-2 border-[#B2FF97]">
              Conectado
            </button>)}
              </li>
              {/* <li className="mx-4">
                <a href="https://shop.monasterynft.com/products/niftty" className='border-solid flex items-center border-2 text-center border-[#B2FF97] justify-center w-40 h-12 bg-[#b2ff97] text-black'>
                  Compra con T.C.</a>
              </li> */}

            </ul>
    </Menu>
  );
};