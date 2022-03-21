import React from 'react'

function PerksDesktop() {
  return (
    <div className='my-28 hidden sm:flex'>
        <ul className='grid mx-auto grid-cols-3 gap-x-28 gap-y-10'>
            <li className='flex-col w-[15vw]'>
                <span className='flex mb-3'>
                    <i class="text-white fa-solid fa-key ml-3"></i>    
                </span>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>Attend private</p>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>IRL parties</p>
            </li>
            <li className='flex-col w-[15vw]'>
                <span className='flex mb-3'>
                    <i class="text-white fa-solid fa-bag-shopping ml-3"></i>    
                </span>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>Access to</p>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>Exclusive Merch</p>
            </li>
            <li className='flex-col w-[15vw]'>
                <span className='flex mb-3'>
                    <i class="text-white fa-solid fa-globe ml-3"></i>    
                </span>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>Metaverse</p>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>upcoming events</p>
            </li>
            <li className='flex-col w-[15vw]'>
                <span className='flex mb-3'>
                    <i class="text-white fa-solid fa-map ml-3"></i>    
                </span>  
                <p className='text-white font-semibold text-2xl ml-2 text-left'>Travel with</p>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>MST crew</p>
            </li>
            <li className='flex-col w-[15vw]'>
                <span className='flex mb-3'>
                    <i class="text-white fa-solid fa-pen-nib ml-3"></i>    
                </span>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>Be part of our</p>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>design team</p>
            </li>
            <li className='flex-col w-[15vw] my-auto'>
                <p className='text-[#B2FF97] font-semibold text-2xl ml-2 text-left'>More surprises...</p>
            </li>
        </ul>
    </div>
  )
}

export default PerksDesktop