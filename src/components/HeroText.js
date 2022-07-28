import React from 'react'

function HeroText(props) {
  return (
    <div className={'flex flex-col justify-center w-[100vw] items-center bg-cover bg-[url("/public/images/fondoMobile.png")]   md:hidden'}>
      {/* <div className='h-20'></div> */}
        {/* {<h1 className='py-20 font-[fontMstryTitle] text-5xl text-white'>
            Gyatso NFT<br/> Collection <br></br> x RMA
        </h1>} */}
        <img className='mr-6' src='./images/gyatsoRMA.png' />
        <p className={props.cA ? 'hidden' : 'text-white font-extrabold text-2xl mt-4'}>Our most Iconic Cap will be<br /> sold as an NFT </p>
        <p className={!props.cA ? 'hidden' : 'text-white font-extrabold text-2xl mt-4'}>{props.cA}</p>
    </div>
  )
}

export default HeroText