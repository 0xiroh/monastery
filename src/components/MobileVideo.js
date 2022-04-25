import React from 'react'
import ReactPlayer from 'react-player'

function MobileVideo() {
  return (
      <div className='sm:hidden'>
        <ReactPlayer className='' width={"100%"} height={500} style={{ margin: '20px 0' }}  light='' controls url='/videos/oculus.mp4'/>
      </div>
  )
}

export default MobileVideo