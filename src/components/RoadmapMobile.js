import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function RoadmapMobile() {
  return (
    <div className='sm:hidden'>
        <h1 className='text-white text-5xl font-extrabold mb-6'>Roadmap</h1>
        <p className='text-white fon text-lg mb-16'>Once we hit a target sell through percentage, MST will deliver each goal.<br/> More news will deploy in the future.</p>
        <Carousel showStatus={false} showArrows={false} className="mb-36 w-[85vw] h-[20vh] mx-auto flex-col sm:hidden">
            <div className="flex-col">
                <h1 className=' bg-[rgb(255,255,255,0.875)] align-middle pt-[10%] font-extrabold text-2xl  block h-24'>35%</h1>   
                <p className='block h-24  text-white mb-14 border-2 border-white pt-[6%]'>Random invitations to travel and witness MST operations.</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-[rgb(255,255,255,0.875)] align-middle pt-[10%] font-extrabold text-2xl  block h-24'>35%</h1>   
                <p className='block h-24  text-white mb-14 border-2 border-white pt-[6%]'>Random invitations to travel and witness MST operations.</p>
            </div>
            <div className="flex-col">
                <h1 className=' bg-[rgb(255,255,255,0.875)] align-middle pt-[10%] font-extrabold text-2xl  block h-24'>35%</h1>   
                <p className='block h-24  text-white mb-14 border-2 border-white pt-[6%]'>Random invitations to travel and witness MST operations.</p>
            </div>
        </Carousel>
    </div>
  )
}

export default RoadmapMobile