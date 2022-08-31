import React from 'react'
import Cap from './Cap'
import Chakra from './Chakra'
import Nifty from './Nifty'
import { useTranslation, Trans } from 'react-i18next';

function CollectionRMA() {
    const { t } = useTranslation();
  return (
    <>
        <div className='grid my-16 justify-center items-center md:grid md:grid-cols-2 md:gap-3'>
            <div className='row-span-2 mx-auto order-2 md:order-1'>
                <a href="https://rmadesign.tv">

                <img src="https://monastery-nft.s3.amazonaws.com/resources/rma2.webp" className='md:ml-40 md:w-[25vw] w-80 my-8'/>
                </a>
                {/* <video autoplay controls poster='https://monastery-nft.s3.us-east-1.amazonaws.com/resources/THUMBNAILNFT.jpeg' loop className='mb-8 w-[80vw] h-[60vh] mx-auto sm:mx-2 sm:mb-0  sm:w-[25vw] sm:h-[33vh]'>
                    <source src="https://monastery-nft.s3.us-east-1.amazonaws.com/resources/rma.mp4" type="video/mp4" />
                </video> */}
            </div>
            <div className='flex flex-col order-1 justify-center items-center'>

                <h1 className='text-white text-4xl font-extrabold mb-10 md:my-0'><Trans i18nKey="aboutTitle"></Trans></h1>
                <p className='text-white text-justify w-72 md:w-[16vw] mx-auto pt-4' >{t('aboutDescription')}</p>
            </div>
            <div className='flex mt-12 md:mt-0 flex-col order-3 justify-center items-center'>
                <h1 className='text-white text-4xl block text-center font-extrabold myb-10 md:my-0'><Trans i18nKey="aboutRmaTitle"></Trans></h1>
                <p className='text-white text-justify w-72 md:w-[20vw] mx-auto pt-4'>{t('aboutRmaDescription')}</p>
            </div>
        </div>
    </>
  )
}

export default CollectionRMA