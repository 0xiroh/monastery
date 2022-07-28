import React from 'react'
import ReactPlayer from 'react-player'

function MobileVideo() {
  return (
    <div className=' md:hidden'>
    <div className='h-20'/>
    <h1 className='text-white text-[3rem] font-extrabold'>Get to experience <br></br> the MST lifestyle</h1>
    <div className='flex justify-center'>
        <ReactPlayer className='' width={800} height={450} style={{ margin: '' }}  light='' controls url='https://monastery-nft.s3.amazonaws.com/resources/oculus.mp4'/>

    </div>
</div>
  )
}

export default MobileVideo