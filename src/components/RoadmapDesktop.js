import React from 'react'

function RoadmapDesktop() {
  return (
    <div className='mt-20 hidden sm:block' id="roadmap">
        <h1 className='text-white text-5xl font-extrabold mb-6'>Roadmap</h1>
        <p className='text-white fon text-lg mb-16'>Once we hit a target sell through percentage, MST will deliver each goal.<br/> More news will deploy in the future.</p>
        <div className='flex'>
            <ul className='grid mx-auto text-center grid-cols-4 gap-x-28 gap-y-10 mb-20'>
                <li className='flex-col w-[15vw]'>
                    <h1 className=' bg-[rgb(255,255,255,1)] font-extrabold text-2xl pt-11 block h-28 mb-3'>20%</h1>   
                    <p className='text-white font-light w-40 mx-auto text-md text-justify'>Claim your Gyatso cap for the metaverse and IRL.</p>
                </li>
                <li className='flex-col w-[15vw]'>
                    <h1 className=' bg-[rgb(255,255,255,1)] font-extrabold text-2xl pt-11 block h-28 mb-3'>30%</h1>   
                    <p className='text-white font-light text-md  w-40 mx-auto text-justify'>Claim 3 extra items of exclusive merchandise of MST.</p>
                </li>
                <li className='flex-col w-[15vw]'>
                    <h1 className=' bg-[rgb(255,255,255,0.875)] font-extrabold text-2xl pt-11 block h-28 mb-3'>35%</h1>   
                    <p className='text-white font-light text-md w-40 mx-auto text-justify'>Random invitations to travel and witness MST operations.</p>
                </li>
                <li className='flex-col w-[15vw]'>
                    <h1 className=' bg-[rgb(255,255,255,0.75)] font-extrabold text-2xl pt-11 block h-28 mb-3'>50%</h1>   
                    <p className='text-white font-light text-md w-40 mx-auto text-justify'>Exclusive MST party for Gyatso NFT holders.</p>
                </li>
                <li className='flex-col w-[15vw]'>
                    <h1 className=' bg-[rgb(255,255,255,0.625)] font-extrabold text-2xl pt-11 block h-28 mb-3'>65%</h1>   
                    <p className='text-white font-light text-md w-40 mx-auto text-justify'>Exclusive metaverse concert with MST.</p>
                </li>
                <li className='flex-col w-[15vw]'>
                    <h1 className=' bg-[rgb(255,255,255,0.5)] font-extrabold text-2xl pt-11 block h-28 mb-3'>75%</h1>   
                    <p className='text-white font-light text-md w-40 mx-auto text-justify'>Random invitations to create a new cap with MST.</p>
                </li>
                <li className='flex-col w-[15vw]'>
                    <h1 className=' bg-[rgb(255,255,255,0.375)] font-extrabold text-2xl pt-11 block h-28 mb-3'>80%</h1>   
                    <p className='text-white font-light text-md w-40 mx-auto text-justify'>Exclusive AMAs with MST and recognized artist.</p>
                </li>
                <li className='flex-col w-[15vw]'>
                    <h1 className=' bg-[rgb(255,255,255,0.25)] font-extrabold text-2xl pt-11 block h-28 mb-3'>100%</h1>   
                    <p className='text-white font-light text-md w-40 mx-auto text-justify'>Yatch party exlusive invitation.</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default RoadmapDesktop