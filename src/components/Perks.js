import React from 'react'

function Perks() {
  return (
    <div className='mt-12 md:hidden'>
        <span className='flex my-8 justify-start ml-4 items-center'>
            <i class="text-white fa-solid fa-key"></i>
            <p className='text-white font-semibold text-xl ml-2'>Attend private IRL parties</p>
        </span>
        <span className='flex my-8 justify-start ml-4 items-center'>
            <i class="text-white fa-solid fa-bag-shopping"></i>
            <p className='text-white font-semibold text-xl ml-2'>Access to exclusive merch</p>
        </span>
        <span className='flex my-8 justify-start ml-4 items-center'>
            <i class="text-white fa-solid fa-globe"></i>
            <p className='text-white font-semibold text-xl ml-2'>Metaverse upcoming events</p>
        </span>
        <span className='flex my-8 justify-start ml-4 items-center'>
            <i class="text-white fa-solid fa-map"></i>
            <p className='text-white font-semibold text-xl ml-2'>Travel with the MST crew</p>
        </span>
        <span className='flex my-8 justify-start ml-4 items-center'>
            <i class="text-white fa-solid fa-pen-nib"></i>
            <p className='text-white font-semibold text-xl ml-2'>Be part of our design team</p>
        </span>
        <span className='flex my-8 justify-start ml-4 items-center'> 
            <p className='text-[#B2FF97] font-semibold text-xl ml-2'>More surprises...</p>
        </span>

    </div>
  )
}

export default Perks