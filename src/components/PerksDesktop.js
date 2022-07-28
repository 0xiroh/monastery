import React from 'react'
import { useTranslation } from 'react-i18next';

function PerksDesktop() {
  const { t } = useTranslation();
  return (
    <div className='my-28 hidden sm:flex'>
        <ul className='grid mx-auto grid-cols-3 gap-x-28 gap-y-10'>
            <li className='flex-col w-[15vw]'>
                <span className='flex mb-3'>
                    <i class="text-white fa-solid fa-key ml-3"></i>    
                </span>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>{t('perks11')}</p>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>{t('perks12')}</p>
            </li>
            <li className='flex-col w-[15vw]'>
                <span className='flex mb-3'>
                    <i class="text-white fa-solid fa-bag-shopping ml-3"></i>    
                </span>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>{t('perks21')}</p>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>{t('perks22')}</p>
            </li>
            <li className='flex-col w-[15vw]'>
                <span className='flex mb-3'>
                    <i class="text-white fa-solid fa-globe ml-3"></i>    
                </span>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>{t('perks31')}</p>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>{t('perks32')}</p>
            </li>
            <li className='flex-col w-[15vw]'>
                <span className='flex mb-3'>
                    <i class="text-white fa-solid fa-map ml-3"></i>    
                </span>  
                <p className='text-white font-semibold text-2xl ml-2 text-left'>{t('perks41')}</p>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>{t('perks42')}</p>
            </li>
            <li className='flex-col w-[15vw]'>
                <span className='flex mb-3'>
                    <i class="text-white fa-solid fa-pen-nib ml-3"></i>    
                </span>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>{t('perks51')}</p>
                <p className='text-white font-semibold text-2xl ml-2 text-left'>{t('perks52')}</p>
            </li>
            <li className='flex-col w-[15vw] my-auto'>
                <p className='text-[#B2FF97] font-semibold text-2xl ml-2 text-left'>{t('perks61')}</p>
            </li>
        </ul>
    </div>
  )
}

export default PerksDesktop