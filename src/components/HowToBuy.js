import {React, useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'


function HowToBuy() {
  const { t } = useTranslation();
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [isActive4, setActive4] = useState(false);
  const [url, setUrl] = useState("1");

  const toggleClass1 = () => {
    setActive1(!isActive1);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setUrl("1");
  }
  const toggleClass2 = () => {
    setActive2(!isActive2);
    setActive1(false);
    setActive3(false);
    setActive4(false);
    setUrl("2");
  }
  const toggleClass3 = () => {
    setActive3(!isActive3);
    setActive2(false);
    setActive1(false);
    setActive4(false);
    setUrl("3");
  }
  const toggleClass4 = () => {
    setActive4(!isActive4);
    setActive2(false);
    setActive3(false);
    setActive1(false);
    setUrl("4");
  }
  return (
    <section className='hidden md:block' id="HowToBuyD">
      <h1 className='text-white font-extrabold text-4xl mb-24'>{t('howToBuyTitle')}</h1>
      <div className='grid grid-cols-2 justify-between items-center'>
        <ul className='text-white ml-40 flex flex-col items-center'>
          <li className={isActive1 ? 'my-28 text-white-600 cursor-pointer flex gap-4' : 'cursor-pointer min-w-[30vw] my-12 border-gray-500 text-gray-500 flex gap-4'} onClick={toggleClass1}>
            <span className='text-2xl border-4 border-inherit rounded-full py-6 px-8 block '>1</span>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-2xl mx-0'>{t('howToBuy1')}</span>
              <span className='mt-2 text-sm block'>{t('howToBuy1Description')}</span>
              </div>
          </li>
          <li className={isActive2 ? 'my-28 text-white-600 cursor-pointer flex gap-4' : 'cursor-pointer my-12 min-w-[30vw] border-gray-500 text-gray-500 flex gap-4'} onClick={toggleClass2}>
            <span className='text-2xl border-4 border-inherit rounded-full py-6 px-8 block '>2</span>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-2xl mx-0'>{t('howToBuy2')}</span>
              <span className='mt-2 text-sm block'>{t('howToBuy2Description')}</span>
              </div>
          </li>
          <li className={isActive3 ? 'my-28 text-white-600 cursor-pointer flex gap-4' : 'cursor-pointer my-12 border-gray-500 min-w-[30vw] text-gray-500 flex gap-4'} onClick={toggleClass3}>
            <span className='text-2xl border-4 border-inherit rounded-full py-6 px-8 block '>3</span>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-2xl mx-0'>{t('howToBuy3')}</span>
              <span className='mt-2 text-sm block'>{t('howToBuy3Description')}</span>
              </div>
          </li>
          <li className={isActive4 ? 'my-28 text-white-600 cursor-pointer flex gap-4' : 'cursor-pointer my-12 min-w-[30vw] border-gray-500 text-gray-500 flex gap-4'} onClick={toggleClass4}>
            <span className='text-2xl border-4 border-inherit rounded-full py-6 px-8 block '>4</span>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-2xl mx-0'>{t('howToBuy4')}</span>
              <span className='mt-2 text-sm block'>{t('howToBuy4Description')}</span>
              </div>
          </li>
        
        </ul>
        {url == 4 ? <img src={"images/mm" + url + ".png"} className="h-[95vh] mt-8 ml-20" /> : <img src={"images/mm" + url + ".png"} className="h-[75vh] mt-20 ml-20" />}
        
      </div>
    </section>
  )
}

export default HowToBuy