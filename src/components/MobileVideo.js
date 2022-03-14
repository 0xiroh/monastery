import React from 'react'
import ReactPlayer from 'react-player'

function MobileVideo() {
  return (
      <div className='sm:hidden'>
        <ReactPlayer className='' width={"100%"} height={500} style={{ margin: '20px 0' }}  light='images/thumbnailVideo.png' controls url='https://monastery-nft.s3.us-east-1.amazonaws.com/resources/mst-video-nft.mp4'/>
      </div>
  )
}

export default MobileVideo