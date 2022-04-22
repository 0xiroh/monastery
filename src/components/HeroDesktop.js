import React from 'react'
import ReactPlayer from 'react-player'
import CallToAction from './CallToAction'
import HeroText from './HeroText'

function HeroDesktop() {
  return (
      <>
        <div className='hidden w-[95vw] bg-[url("/public/images/fondo2.png")] items-center justify-around md:flex'>
            <div className='flex-col w-[40%]'>
                <h1 className='leading-tight mt-14 font-[900]  text-[6rem] text-white text-center'>
                    Monastery <br/>Gyatso NFT<br/> Collection x RMA
                </h1>
                <p className='text-white mt-4 text-2xl text-center'>Our most Iconic Cap will be sold as an NFT </p>
                <form className='mt-6 flex w-full'>
                    <input className='text-left pl-4 w-[60%] block mr-3' type='email' id='email' name='email' placeholder='Enter your email' />
                    <button type='submit' value='pirobo' className='w-[38%] font-bold h-10 bg-[#B2FF97]'> Get early access now</button>
                </form>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
        <div className='hidden md:block'>
            <div className='h-20'/>
            <h1 className='text-white text-[3rem] mb-8 font-extrabold'>Get to experience <br></br> the monastery lifestyle</h1>
            <div className='h-20'/>
            <div className='flex justify-center'>
                <ReactPlayer className='' width={800} height={450} style={{ margin: '' }}  light='images/thumbnailVideo.png' controls url='https://monastery-nft.s3.us-east-1.amazonaws.com/resources/mst-video-nft.mp4'/>

            </div>
        </div>
      </>
  )
}

export default HeroDesktop