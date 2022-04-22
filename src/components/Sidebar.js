import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'

export default props => {
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
                <li className="mx-4 mb-4 text-black">
                    <a href="#roadmapMobile">
                      How to buy
                    </a>
                </li>
                <hr className='w-[150%] mb-4 ml-[-15vw]'/>
                
            </ul>
            <div className='h-[50vh]'/>
            <ul className="flex align-bottom">
              <hr className='w-[150%] mb-4 ml-[-15vw]'/>
              <li className="mx-4">
                <a href="https://opensea.io/MONASTERY_GYATSO" className='border-solid flex items-center justify-center font-bold w-40 h-12 bg-[#2f2f2f] text-white'>
                  <img src="/images/Group 2268.svg" className="mx-3 my-4"></img>OpenSea</a>
              </li>
              <li className="mx-4 my-4">
                <button className='border-solid bg-[#B2FF97] text-black w-40 h-12 border-2 border-[#B2FF97]'>Connect Wallet</button>
              </li>
            </ul>
    </Menu>
  );
};