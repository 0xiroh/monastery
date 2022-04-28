import React from 'react'

function CallToAction() {
  return (
    <form target="_blank" className='mt-6 md:hidden' action="https://formsubmit.co/martin72.gutierrez@hotmail.com" method="POST">
        <input className='text-center block my-3 mx-auto w-full h-10' type='email' id='email' required name='email' placeholder='Enter your email' />
        <button type='submit' className='font-bold w-full h-10 bg-[#B2FF97]'> Get early access now</button>
    </form>
  )
}

export default CallToAction