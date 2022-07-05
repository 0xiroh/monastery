import {React, useState } from 'react'


function HowToBuy() {
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [isActive4, setActive4] = useState(false);
  const [url, setUrl] = useState("1");

  const toggleClass1 = () => {
    setActive1(!isActive1);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setUrl("1");
  }
  const toggleClass2 = () => {
    setActive2(!isActive2);
    setActive1(false);
    setActive3(false);
    setActive4(false);
    setUrl("2");
  }
  const toggleClass3 = () => {
    setActive3(!isActive3);
    setActive2(false);
    setActive1(false);
    setActive4(false);
    setUrl("3");
  }
  const toggleClass4 = () => {
    setActive4(!isActive4);
    setActive2(false);
    setActive3(false);
    setActive1(false);
    setUrl("4");
  }
  return (
    <section className='hidden md:block'>
      <h1 className='text-white font-extrabold text-4xl mb-24'>How to buy</h1>
      <div className='grid grid-cols-2'>
        <ul className='text-white'>
          <li className={isActive1 ? 'my-28 text-white-600 cursor-pointer' : 'cursor-pointer my-24 border-gray-500 text-gray-500'} onClick={toggleClass1}>
            <span className='ml-8 text-2xl border-4 border-inherit rounded-full py-6 px-8 '>1</span>
            <span className='text-2xl ml-12'>Download  Metamask<span className='mt-2 ml-52 text-sm block'>We will need a Metamask wallet, download it <a className='text-[#B2FF97]' href="https://metamask.io/">here</a></span></span>
          </li>
          <li className={isActive2 ? 'my-28 text-white-600 cursor-pointer' : 'cursor-pointer my-24 border-gray-500 text-gray-500'} onClick={toggleClass2}>
            <span className='ml-8 text-2xl border-4 border-inherit rounded-full py-6 px-8 '>2</span>
            <span className='text-2xl ml-12'>Have your ether ready<span className='mt-2 ml-60 text-sm block'>You will need 0.3 ETH plus gas to mint your Gyatso Cap</span></span>
          </li>
          <li className={isActive3 ? 'my-28 text-white-600 cursor-pointer' : 'cursor-pointer my-24 border-gray-500 text-gray-500'} onClick={toggleClass3}>
            <span className='text-2xl border-4 border-inherit rounded-full py-6 px-8 '>3</span>
            <span className='text-2xl ml-12'>Connect your wallet<span className='mt-2 text-sm block'>please</span></span>
          </li>
          <li className={isActive4 ? 'my-28 text-white-600 cursor-pointer' : 'cursor-pointer my-28 border-gray-500 text-gray-500'} onClick={toggleClass4}>
            <span className='text-2xl mr-24 border-4 border-inherit rounded-full py-6 px-8 '>4</span>
            <span className='text-2xl'>Select the mint<span className='mt-2 text-sm block'>please</span></span>
          </li>
        
        </ul>
        <img src={"images/mm" + url + ".png"} />
      </div>
    </section>
  )
}

export default HowToBuy