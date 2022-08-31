import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation, Trans } from 'react-i18next'

function RoadmapMobile() {
    const { t } = useTranslation();
  return (
    <div className='sm:hidden' id="roadmapMobile">
        <h1 className='text-white text-5xl font-extrabold mb-6'>Roadmap</h1>
        <p className='text-white fon text-lg mb-16'>Once we hit a target sell through percentage, MST will deliver each goal.<br/> More news will deploy in the future.</p>
        <Carousel showStatus={false} showArrows={false} className="mb-36 w-[85vw] h-[20vh] mx-auto flex-col sm:hidden">
            <div className="flex-col">
                <h1 className=' bg-white align-middle pt-[10%] font-extrabold text-2xl  block h-24'>20%</h1>   
                <p className='block h-24 px-4 text-white mb-14 border-2 border-white pt-[6%]'>{t("roadmap1")}</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-white align-middle pt-[10%] font-extrabold text-2xl  block h-24'>35%</h1>   
                <p className='block h-24 px-4  text-white mb-14 border-2 border-white pt-[6%]'>{t("roadmap2")}</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-white align-middle pt-[10%] font-extrabold text-2xl  block h-24'>50%</h1>   
                <p className='block h-36 px-4 text-white mb-14 border-2 border-white pt-[6%]'>{t("roadmap3")}</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-white align-middle pt-[10%] font-extrabold text-2xl  block h-24'>65%</h1>   
                <p className='block h-40 px-4  text-white mb-14 border-2 border-white pt-[6%]'>MST Convention<br/><br/>Network with MST in Medellin ONLY for Gyatso NFT holders.</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-white align-middle pt-[10%] font-extrabold text-2xl  block h-24'>75%</h1>   
                <p className='block h-24 px-4 text-white mb-14 border-2 border-white pt-[6%]'>{t("roadmap5")}</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-white align-middle pt-[10%] font-extrabold text-2xl  block h-24'>80%</h1>   
                <p className='block h-24 px-4 text-white mb-14 border-2 border-white pt-[6%]'>{t("roadmap6")}</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-white align-middle pt-[10%] font-extrabold text-2xl  block h-24'>95%</h1>   
                <p className='block h-24 px-4 text-white mb-14 border-2 border-white pt-[6%]'>{t("roadmap7")}</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-white align-middle pt-[10%] font-extrabold text-2xl  block h-24'>100%</h1>   
                <p className='block h-36 px-4 text-white mb-14 border-2 border-white pt-[6%]'>Get Access to the 
                            MONASTERY FESTIVAL in cartagena. <br/><br/>Concerts, beach, models and yatchs.</p>
            </div>
        </Carousel>
    </div>
  )
}

export default RoadmapMobile