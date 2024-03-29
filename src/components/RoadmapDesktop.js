import React from 'react';
import { useTranslation, Trans } from 'react-i18next'

function RoadmapDesktop() {
    const { t } = useTranslation();
  return (
    <div className='mt-20 hidden sm:block' id="Roadmap">
        <h1 className='text-white text-5xl font-extrabold mb-6'>{t("roadmapTitle")}</h1>
        <p className='text-white fon text-lg mb-16' >
            <Trans i18nKey="roadmapSubtitle"></Trans>
        </p>
        <div className='flex'>
            <div className='grid mx-auto text-center grid-cols-2 gap-x-28 gap-y-10 mb-20'>
                <li className='flex-col w-[18vw]'>
                    <h1 className=' bg-[rgb(255,255,255,1)] font-extrabold text-2xl pt-11 block h-28 mb-3'>20%</h1> 
                    <p className='text-white font-light w-40 mx-auto text-md text-justify'>{t("roadmap1")}</p>
                </li>
                <li className='flex-col w-[18vw]'>
                    <h1 className=' bg-white font-extrabold text-2xl pt-11 block h-28 mb-3'>40%</h1> 
                    <p className='text-white font-light text-md w-40 mx-auto text-justify'>{t("roadmap2")}</p>
                </li>
                <li className='flex-col w-[18vw]'>
                    <h1 className=' bg-white font-extrabold text-2xl pt-11 block h-28 mb-3'>60%</h1> 
                    <p className='text-white font-light text-md w-40 mx-auto text-justify'>{t("roadmap3")}</p>
                </li>
                <li className='flex-col w-[18vw]'>
                    <h1 className=' bg-white font-extrabold text-2xl pt-11 block h-28 mb-3'>80%</h1> 
                    <p className='text-white font-light text-md w-40 mx-auto text-justify'><Trans i18nKey="roadmap4"></Trans></p>
                </li>
                {/* <li className='flex-col w-[18vw]'>
                </li> */}
                <li className='col-span-2'>
                    <h1 className=' bg-white font-extrabold text-2xl pt-11 block h-28 mb-3'>100%</h1> 
                    <p className='text-white font-light text-md w-40 mx-auto text-justify'>{t("roadmap5")}</p>
                </li>
                {/* <li className='flex-col w-[18vw]'>
                    <h1 className=' bg-white font-extrabold text-2xl pt-11 block h-28 mb-3'>80%</h1> 
                    <p className='text-white font-light text-md w-40 mx-auto text-justify'>{t("roadmap6")}</p>
                </li>
                <li className='flex-col w-[18vw]'>
                    <h1 className=' bg-white font-extrabold text-2xl pt-11 block h-28 mb-3'>95%</h1> 
                    <p className='text-white font-light text-md w-40 mx-auto text-justify'>{t("roadmap7")}</p>
                </li>
                <li className='flex-col w-[18vw]'>
                    <h1 className=' bg-white font-black text-2xl pt-11 block h-28 mb-3'>100%</h1> 
                    <p className='text-white font-light text-md w-[80%] mx-auto text-justify'>{t("roadmap8")}</p>
                </li> */}
            </div>
        </div>
    </div>
  )
}

export default RoadmapDesktop