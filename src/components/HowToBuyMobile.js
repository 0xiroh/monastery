import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next'

function HowToBuyMobile() {
    const { t } = useTranslation();
  return (
    <Carousel showStatus={false} showArrows={false} showThumbs={false} className="mb-36 w-[85vw] h-[70vh] mx-auto flex-col md:hidden">
                <div className='mb-12'>
                    <h1 className='text-white text-2xl font-bold my-2'>{t('howToBuy1')}</h1>
                    <p className='text-white text-sm w-48 mx-auto text-center my-2'>{t('howToBuy1Description')} <a className='text-[#B2FF97]' href="https://metamask.io/">here</a></p>
                    <img src="images/mm1.png" />
                </div>
                <div>
                    <h1 className='text-white text-2xl font-bold my-2'> {t('howToBuy2')}</h1>
                    <p className='text-white text-sm w-48 mx-auto text-center my-2'>{t('howToBuy2Description')}</p>
                    <img src="images/mm2.png" />
                </div>
                <div>
                <h1 className='text-white text-2xl font-bold my-2'>{t('howToBuy3')}</h1>
                    <p className='text-white text-sm w-48 mx-auto text-center my-2'>{t('howToBuy3Description')}</p>
                    <img src="images/mm3.png" />
                </div>
                <div>
                    <h1 className='text-white text-2xl font-bold my-2'>{t('howToBuy4')}</h1>
                    <p className='text-white text-sm w-48 mx-auto text-center my-2'>{t('howToBuy4Description')}</p>
                    <img src="images/mm4.png" className='mt-[-34px]' />
                </div>
    </Carousel>
  )
}

export default HowToBuyMobile