import React from 'react'

function CallToAction(props) {
  return (
    <form target="_blank" className={props.cA ? 'hidden' : 'mt-6 md:hidden'} action="https://monasterynft.us8.list-manage.com/subscribe/post?u=f7008c544caa2ef5d5d99950e&amp;id=bd15e4e84a" method="POST">
        <input className='text-center block my-3 mx-auto w-full h-10' type='email' id='email' required name='email' placeholder='Enter your email' />
        <input type='submit' value="Get early access now" className='font-bold w-full h-10 bg-[#B2FF97]'/>
    </form>
  )
}

export default CallToAction