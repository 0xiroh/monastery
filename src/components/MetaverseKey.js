import React from 'react'
import Cap from './Cap'
import Chakra from './Chakra'
import Nifty from './Nifty'

function MetaverseKey() {
  return (
    <>
        <h1 className='text-white text-4xl font-extrabold mb-16'>This will be the key for the metaverse</h1>
        <div className='flex-col mb-16 justify-center items-center sm:flex-row sm:flex'>
            <video autoplay controls muted loop className='mb-8 h-[50vh] mx-auto sm:mx-2 sm:mb-0' >
                <source src="/gyatsonft.mp4" width={300} height={200} type="video/mp4" />
            </video>
            <div className="flex justify-center">
                <section className="sombra w-88 h-80 flex-col sm:ml-10 sm:h-[50vh] md:w-96 bg-[#2f2f2f] rounded-2xl">
                    <div className="flex justify-around items-center mt-5 mx-auto">
                        <img src="https://cdn.cdnlogo.com/logos/d/92/decentraland.svg" className="h-16"/>
                        <div class="flex-col items-center justify-center">
                            <h2 className="text-white text-2xl decentraland">Decentraland</h2>
                            <p className="text-white text-sm ">Use our best selling cap in the Metaverse.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-10 border-0 rounded-2xl ">
                    <model-viewer
                        height="100%"
                        src="/models/cap2.gltf"
                        camera-controls
                        ar
                        auto-rotate
                        rotation-per-second="20deg"
                        style={{backgroundColor: '#2f2f2f'}}
                        orientation="0 0 -95deg"
                        min-field-of-view="10deg"
                        />
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default MetaverseKey