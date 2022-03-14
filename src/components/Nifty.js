import React from 'react'

function Nifty() {
  return (
    <div className='flex-col'>
        <h1 className='text-white text-4xl font-extrabold mb-10'>This will be the key for the metaverse</h1>
        <video autoplay muted loop className='mb-8 mx-auto h-[50vh]' >
            <source src="https://openseauserdata.com/files/d1bfa3050f09c7a76ea55043abb83b90.mp4#t=0.001" width={300} height={200} type="video/mp4" />
        </video>
    </ div>  
  )
}

export default Nifty