import React from 'react'
import Mint from './Mint'

function MintMobile(props) {
  return (
    <div className='block md:hidden'>
        <Mint cA={props.cA}/>
    </div>
  )
}

export default MintMobile