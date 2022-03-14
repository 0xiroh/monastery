import { useEffect, useRef, useState } from "react"

function Navbar() {
  const [isPaused, setIsPaused] = useState(true);

  var snd = new Audio("https://mstry.s3.amazonaws.com/mstrTrimmed.mp3");
  const togglePlay = sound => sound.pause ? (sound.play() && console.log(sound.paused)) : (sound.pause() && console.log(sound.paused));
  return (
    <nav class="flex justify-end align-center items-center mt-4 sm:justify-around">
        <div className="items-center justify-center hidden sm:flex sm:ml-[-5%]">
            <ul className="flex items-center justify-center">
                <li className="mx-4 cursor-pointer" onClick={() => togglePlay(snd)}>
                <i class="fa-solid fa-play text-white text-3xl" />
                </li>
                <li className="mx-4 cursor-pointer" onClick={() => snd.pause()}>
                <i class="fa-solid fa-pause text-white text-3xl" />
                </li>
                <li className="text-white mx-4">
                    <a href="#roadmap">Roadmap</a>
                </li>
                <li className="text-white mx-4">
                    How to buy
                </li>
                
            </ul>
        </div>
        <div className=''>
            <img className='w-44' src='/images/logoHeader.svg' alt='Monastery Logo'></img>
        </div>
        <div className="items-center justify-center hidden sm:flex">
            <ul className="flex items-center justify-center ">
                <li className="mx-4">
                  <button className='border-solid flex items-center justify-center font-bold w-40 h-12 bg-[#2f2f2f] text-white'><img src="/images/Group 2268.svg" className="mr-3"></img>OpenSea</button>
                </li>
                <li className="mx-4">
                  <button className='border-solid text-white'>Connect Wallet</button>
                </li>
            </ul>
        </div>
        <img className='w-9 ml-[15%] md:hidden' src='/images/burgerMenu.svg' alt='burger menu'></img>
    </nav>
  )
}

export default Navbar