import React from 'react'
import Cap from './Cap'
import Chakra from './Chakra'
import Nifty from './Nifty'

function MetaverseKey() {
  return (
    <>
        <div className='flex-col my-16 justify-center items-center sm:grid sm:grid-cols-2 sm:gap-6'>
            <div className='flex flex-col justify-center items-center'>

            <h1 className='text-white text-4xl font-extrabold mb-10 sm:my-0'>This will be the key for the metaverse</h1>
            <p className='text-white text-justify w-72 mx-auto pt-4' >The GYATSO NFT is going to be our genesis collection. The art you are receiving, specially designed by MST and RMA DESIGNS, will unlock all the perks mentioned here and more.</p>
            </div>
            <div className='flex justify-center'>
                <video autoplay controls loop className='mb-8 w-[80vw] h-[60vh] mx-auto sm:mx-2 sm:mb-0 sm:w-[25vw] sm:h-[33vh]' >
                    <source src="https://monastery-nft.s3.us-east-1.amazonaws.com/resources/MSTxRMA.mp4" width={250} height={200} type="video/mp4" />
                </video>
            </div>
            <div className='flex-col py-10 sm:order-4 sm:mx-auto'>
                <h1 className='text-white text-4xl block text-center font-extrabold myb-10 sm:my-0'>Wear MST<br/> in the metaverse</h1>
                <p className='text-white text-justify w-72 mx-auto pt-4'>Wear our most iconic cap in the metaverse. 
Holders will be airdropped with the GYATSO cap to be used in DECENTRALAND.
Missions will be deployed in DECENTRALAND to unlock more perks.</p>
            </div>
            <div className="flex justify-center">
                <section className="sombra w-88 h-[100%] flex-col sm:h-[vh] sm:w-[25vw] bg-[#2f2f2f] rounded-2xl">
                    <div className="flex justify-flex-start items-center mt-5 mx-auto">
                        <img src="https://cdn.cdnlogo.com/logos/d/92/decentraland.svg" className="h-16"/>
                        <div class="flex-col items-center justify-center">
                            <h2 className="text-white text-2xl font-bold text-left decentraland ">Decentraland</h2>
                            <p className="text-white text-sm text-left ">360º Experience</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-10 border-0 rounded-2xl ">
                    <model-viewer
                        height="100%"
                        src="/models/nohair.gltf"
                        camera-controls
                        ar
                        auto-rotate
                        rotation-per-second="20deg"
                        style={{backgroundColor: '#2f2f2f'}}
                        orientation="0 0 -95deg"
                        min-field-of-view="10deg"
                        />
                    </div>
                    <img src="images/refresh.png" className="mx-auto my-6"/>
                </section>
            </div>
        </div>
    </>
  )
}

export default MetaverseKey