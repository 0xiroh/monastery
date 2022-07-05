import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function HowToBuyMobile() {
  return (
    <Carousel showStatus={false} showArrows={false} showThumbs={false} className="mb-36 w-[85vw] h-[70vh] mx-auto flex-col md:hidden">
                <div className='mb-12'>
                    <h1 className='text-white text-2xl font-bold my-2'> Download Metamask</h1>
                    <p className='text-white text-sm w-48 mx-auto text-center my-2'>We will need a Metamask wallet, download it <a className='text-[#B2FF97]' href="https://metamask.io/">here</a></p>
                    <img src="images/mm1.png" />
                </div>
                <div>
                <h1 className='text-white text-2xl font-bold my-2'> Have your ether ready</h1>
                    <p className='text-white text-sm w-48 mx-auto text-center my-2'>You will need 0.3 ETH plus gas to mint your Gyatso Cap</p>
                    <img src="images/mm2.png" />
                </div>
                <div>
                    <h1 className='text-white'> Connect your wallet </h1>
                    <img src="images/mm3.png" />
                </div>
                <div>
                    <h1 className='text-white'> Select the quantity and mint</h1>
                    <img src="images/mm4.png" />
                </div>
            </Carousel>
  )
}

export default HowToBuyMobile