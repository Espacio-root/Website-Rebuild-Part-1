'use client'

import React from 'react'
import { Arrow } from './Svg'

function Hero() {

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target[0].value
      window.open(`https://help.abstract.com/hc/en-us/search?utf8=%E2%9C%93&query=${query}`, '_blank')

    e.target[0].value = ''
  }

  return (
      <div className='h-[397px] bg-[#dadbf1] flex flex-col justify-center items-center'>
        <h1 className='text-7xl font-semibold mb-8'>How can we help?</h1>
        <form className='relative' onSubmit={handleSubmit}>
            <input type='text' placeholder='Search' className='h-[66px] w-[720px] outline-none border-2 border-black placeholder:text-[22px] pl-5 pr-14 py-3 text-[19px] font-semibold rounded-md' />
            <Arrow className='h-8 w-auto absolute top-1/2 right-5 -translate-y-1/2' />
        </form>
    </div>
  )
}

export default Hero