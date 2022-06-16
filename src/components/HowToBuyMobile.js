import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function HowToBuyMobile() {
  return (
    <Carousel showStatus={false} showArrows={false} showThumbs={false} className="mb-36 w-[85vw] h-[70vh] mx-auto flex-col sm:hidden">
                <div className='mb-12'>
                    <h1 className='text-white'> MetaMask</h1>
                    <img src="images/mm1.png" />
                </div>
                <div>
                    <h1 className='text-white'> MetaMask</h1>
                    <img src="images/mm2.png" />
                </div>
                <div>
                    <h1 className='text-white'> MetaMask</h1>
                    <img src="images/mm3.png" />
                </div>
                <div>
                    <h1 className='text-white'> MetaMask</h1>
                    <img src="images/mm4.png" />
                </div>
            </Carousel>
  )
}

export default HowToBuyMobile