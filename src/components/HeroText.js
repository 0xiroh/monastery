import React from 'react'

function HeroText() {
  return (
    <div className='flex flex-col justify-center items-center bg-[url("/public/images/fondoMobile.png")] md:hidden'>
      {/* <div className='h-20'></div> */}
        <h1 className='py-20 font-[fontMstryTitle] text-5xl text-white'>
            Gyatso NFT<br/> Collection <br></br> x RMA
        </h1>
        <p className='text-white fontbol text-lg'>Our most Iconic Cap will be<br /> sold as an NFT </p>
    </div>
  )
}

export default HeroText