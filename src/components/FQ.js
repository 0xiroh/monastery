import React from 'react'
import { Link } from 'react-router-dom'
import Faqs from './Faqs'
import { useTranslation, Trans } from 'react-i18next'

function FQ() {
        const { t } = useTranslation();
  return (
    <div className='mt-60 sm:mt-4'>
        <h1 className='text-white text-4xl block text-center font-extrabold my-12'>FAQ'S</h1>
        <Faqs q={t('faq1')} a={t("faq1Description")}/>
        <Faqs q={t("faq2")} a={t("faq2Description")}/>
        <Faqs q={t("faq3")} a={t('faq3Description')}/>
        <Faqs q={t("faq4")} a={t('faq4Description')}/>
        <Faqs q={t("faq5")} a={t('faq5Description')}/>
        <Faqs q={t("faq6")} a={t('faq6Description')}/>
        <Faqs q={t("faq7")} a={<div>{t('faq7Description')} <Link className='text-[#B2FF97]' to="https://www.rmadesign.tv/">rmadesign.tv</Link></div>}/>
        <Faqs q={t("faq8")} a={t('faq8Description')}/>
        <Faqs q={t("faq9")} a={t('faq9Description')}/>
        <Faqs q={t("faq10")} a={t('faq10Description')}/>
        <Faqs q={t("faq11")} a={<Trans i18nKey={'faq11Description'} />} />
        <Faqs q={t("faq12")} a={t('faq12Description')}/>
    </div>
  )
}

export default FQ