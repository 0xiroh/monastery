import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'

export default props => {
  return (
    <Menu {...props}>
      
            <ul className="flex-col items-center justify-center">
                <li className="mx-4">
                  <a href="https://opensea.io/MONASTERY_GYATSO" className='border-solid flex items-center justify-center font-bold w-40 h-12 bg-[#2f2f2f] text-white'>
                    <img src="/images/Group 2268.svg" className="mx-3 my-8"></img>OpenSea</a>
                </li>
                <li className="mx-4 my-8">
                  <button className='border-solid bg-[#B2FF97] text-black w-40 h-12 border-2 border-[#B2FF97]'>Connect Wallet</button>
                </li>
            </ul>
    </Menu>
  );
};