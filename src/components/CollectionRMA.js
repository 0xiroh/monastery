import React from 'react'
import Cap from './Cap'
import Chakra from './Chakra'
import Nifty from './Nifty'

function CollectionRMA() {
  return (
    <>
        <div className='grid my-16 justify-center items-center md:grid md:grid-cols-2 md:gap-3'>
            <div className='row-span-2 mx-auto order-2 md:order-1'>
                <a href="https://rmadesign.tv">

                <img src="images/rma2.png" className='md:ml-40 md:w-[25vw] w-80 my-8'/>
                </a>
                {/* <video autoplay controls poster='https://monastery-nft.s3.us-east-1.amazonaws.com/resources/THUMBNAILNFT.jpeg' loop className='mb-8 w-[80vw] h-[60vh] mx-auto sm:mx-2 sm:mb-0  sm:w-[25vw] sm:h-[33vh]'>
                    <source src="https://monastery-nft.s3.us-east-1.amazonaws.com/resources/rma.mp4" type="video/mp4" />
                </video> */}
            </div>
            <div className='flex flex-col order-1 justify-center items-center'>

            <h1 className='text-white text-4xl font-extrabold mb-10 md:my-0'>About the collection</h1>
            <p className='text-white text-justify w-72 md:w-[16vw] mx-auto pt-4' >The GYATSO NFT is going to be our genesis collection. The art you are receiving, specially designed by MST and RMA, it will unlock all the perks mentioned here and more.</p>
            </div>
            <div className='flex mt-12 md:mt-0 flex-col order-3 justify-center items-center'>
                <h1 className='text-white text-4xl block text-center font-extrabold myb-10 md:my-0'>About<br/>RMA</h1>
                <p className='text-white text-justify w-72 md:w-[20vw] mx-auto pt-4'>
                    RMA is Alejandro Robledo, a vfx artists aNd designer with 10+ years of experience. RMA's art is built upon technical and artistic excellence. Some of his clients include Marvel, Paramount Pictures, Legendary, Apple, Netflix, HBO and MTV. His work has been featured on major films including; Transformes, Xmen, Jumanji, ChangChi and Iron Fist. He created and directed Malumas world tour and has created artwork for major celebrities including; Dj Khaled, Miley Cirus, Ludacris, Chainsmokers, Madonna, Katy Perry, Rhianna, Bruna Mars, Kendrick Lamar and others. RMA's work translated seamlesly into the NFT world. Creating powerful collaborations with Maluma, Tamara Delempicka and Monastery. His work can be seen at www.rmadesign.tv
                </p>
            </div>
        </div>
    </>
  )
}

export default CollectionRMA