import React from 'react'

function CallToAction() {
  return (
    <form className='mt-6 md:hidden'>
        <input className='text-center block my-3 mx-auto w-full h-10' type='email' id='email' name='email' placeholder='Enter your email' />
        <button type='submit' value='pirobo' className='font-bold w-full h-10 bg-[#B2FF97]'> Get early access now</button>
    </form>
  )
}

export default CallToAction