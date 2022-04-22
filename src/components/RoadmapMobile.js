import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function RoadmapMobile() {
  return (
    <div className='sm:hidden' id="roadmapMobile">
        <h1 className='text-white text-5xl font-extrabold mb-6'>Roadmap</h1>
        <p className='text-white fon text-lg mb-16'>Once we hit a target sell through percentage, MST will deliver each goal.<br/> More news will deploy in the future.</p>
        <Carousel showStatus={false} showArrows={false} className="mb-36 w-[85vw] h-[20vh] mx-auto flex-col sm:hidden">
            <div className="flex-col">
                <h1 className=' bg-[rgb(255,255,255,1)] align-middle pt-[10%] font-extrabold text-2xl  block h-24'>20%</h1>   
                <p className='block h-24 px-4 text-white mb-14 border-2 border-white pt-[6%]'>Claim your  Gyatso cap for the metaverse and IRL. </p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-[rgb(255,255,255,0.95)] align-middle pt-[10%] font-extrabold text-2xl  block h-24'>35%</h1>   
                <p className='block h-24 px-4  text-white mb-14 border-2 border-[rgb(255,255,255,0.95)] pt-[6%]'>Claim 3 extra items of exclusive merchandise of MST.</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-[rgb(255,255,255,0.875)] align-middle pt-[10%] font-extrabold text-2xl  block h-24'>50%</h1>   
                <p className='block h-36 px-4 text-white mb-14 border-2 border-[rgb(255,255,255,0.875)] pt-[6%]'>Random invitations to get to know Medellín MST style. <br/><br/> Events, luxury restaurants and experiences.</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-[rgb(255,255,255,0.75)] align-middle pt-[10%] font-extrabold text-2xl  block h-24'>65%</h1>   
                <p className='block h-40 px-4  text-white mb-14 border-2 border-[rgb(255,255,255,0.75)] pt-[6%]'>Party with MST in Medellin ONLY for Gyatso NFT holders. <br/><br/>Party the MST style , DJs , artists , models and more.</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-[rgb(255,255,255,0.625)] align-middle pt-[10%] font-extrabold text-2xl  block h-24'>75%</h1>   
                <p className='block h-24 px-4 text-white mb-14 border-2 border-[rgb(255,255,255,0.625)] pt-[6%]'>Claim 1 exclusive new merch from this collection, inspired by the metaverse</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-[rgb(255,255,255,0.5)] align-middle pt-[10%] font-extrabold text-2xl  block h-24'>80%</h1>   
                <p className='block h-24 px-4 text-white mb-14 border-2 border-[rgb(255,255,255,0.5)] pt-[6%]'>Random invitations to create a new cap with MST and RMA DESIGNS.</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-[rgb(255,255,255,0.375)] align-middle pt-[10%] font-extrabold text-2xl  block h-24'>95%</h1>   
                <p className='block h-24 px-4 text-white mb-14 border-2 border-[rgb(255,255,255,0.375)] pt-[6%]'>Private AMAs with MST and recognized artists and models.</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-[rgb(255,255,255,0.25)] align-middle pt-[10%] font-extrabold text-2xl  block h-24'>100%</h1>   
                <p className='block h-36 px-4 text-white mb-14 border-2 border-[rgb(255,255,255,0.25)] pt-[6%]'>Get Access to the 
                            MONASTERY FESTIVAL in cartagena. <br/><br/>Concerts, beach, models and yatchs.</p>
            </div>
        </Carousel>
    </div>
  )
}

export default RoadmapMobile