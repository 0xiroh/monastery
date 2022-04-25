import React from 'react'

function HeroText() {
  return (
    <div className='flex flex-col justify-center items-center bg-[url("/public/images/fondo.png")] md:hidden'>
      {/* <div className='h-20'></div> */}
        <h1 className='pt-12 font-[fontMstryTitle] text-5xl text-white'>
            Monastery <br/>Gyatso NFT<br/> Collection
        </h1>
        <p className='text-white fontbol text-lg mt-4'>Our most Iconic Cap will be<br /> sold as an NFT </p>
    </div>
  )
}

export default HeroText