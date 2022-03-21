import React from 'react'
import ReactPlayer from 'react-player'
import CallToAction from './CallToAction'
import HeroText from './HeroText'

function HeroDesktop() {
  return (
      <div className='hidden w-[95vw] items-center justify-around bg-[url("img/fondoHeader.png")] md:flex md:bg-none'>
        <div className='flex-col w-[40%] '>
            <h1 className=' leading-tight mt-14 font-extrabold  text-[5rem] text-white text-left'>
                Monastery <br/>Gyatso NFT<br/> Collection
            </h1>
            <p className='text-white mt-4 text-2xl text-left'>Our most Iconic Cap will be sold as an NFT </p>
            <form className='mt-6 flex w-full'>
                <input className='text-left pl-4 w-[60%] block mr-3' type='email' id='email' name='email' placeholder='Enter your email' />
                <button type='submit' value='pirobo' className='w-[38%] font-bold h-10 bg-[#B2FF97]'> Get early access now</button>
            </form>
        </div>
        <div className='mt-5'>
            <ReactPlayer className='' width={590} height={450} style={{ margin: '' }}  light='images/thumbnailVideo.png' controls url='https://monastery-nft.s3.us-east-1.amazonaws.com/resources/mst-video-nft.mp4'/>

        </div>

      </ div>
  )
}

export default HeroDesktop