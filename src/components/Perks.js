import React from 'react'
import { useTranslation } from 'react-i18next'

function Perks() {
    const { t } = useTranslation();
  return (
    <div className='mt-12 md:hidden'>
        <span className='flex my-8 justify-start ml-4 items-center'>
            <i class="text-white fa-solid fa-key"></i>
            <p className='text-white font-semibold text-xl ml-2'>{t('perks11')} {t('perks12')}</p>
        </span>
        <span className='flex my-8 justify-start ml-4 items-center'>
            <i class="text-white fa-solid fa-bag-shopping"></i>
            <p className='text-white font-semibold text-xl ml-2'>{t('perks21')} {t('perks22')}</p>
        </span>
        <span className='flex my-8 justify-start ml-4 items-center'>
            <i class="text-white fa-solid fa-globe"></i>
            <p className='text-white font-semibold text-xl ml-2'>{t('perks31')} {t('perks32')}</p>
        </span>
        <span className='flex my-8 justify-start ml-4 items-center'>
            <i class="text-white fa-solid fa-map"></i>
            <p className='text-white font-semibold text-xl ml-2'>{t('perks41')} {t('perks42')}</p>
        </span>
        <span className='flex my-8 justify-start ml-4 items-center'>
            <i class="text-white fa-solid fa-pen-nib"></i>
            <p className='text-white font-semibold text-xl ml-2'>{t('perks51')} {t('perks52')}</p>
        </span>
        <span className='flex my-8 justify-start ml-4 items-center'> 
            <p className='text-[#B2FF97] font-semibold text-xl ml-2'>{t('perks61')}</p>
        </span>

    </div>
  )
}

export default Perks