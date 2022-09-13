import React from 'react'
import ReactPlayer from 'react-player'
import { useTranslation, Trans } from 'react-i18next'

function MobileVideo() {
  const {t} = useTranslation();
  return (
    <div className=' md:hidden'>
    <div className='h-20'/>
    <h1 className='text-white text-[2rem] font-extrabold'>{t('splitTitle1')}<br/>{t('splitTitle2')}</h1>
    <div className='flex justify-center'>
        <ReactPlayer className='' width={800} height={450} style={{ margin: '' }}  light='' controls url='https://monastery-nft.s3.amazonaws.com/resources/oculusVrFinal.mp4'/>

    </div>
</div>
  )
}

export default MobileVideo