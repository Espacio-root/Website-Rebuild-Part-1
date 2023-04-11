import React from 'react'
import { Logo } from './Svg'

function Navbar() {
    return (
        <nav className='bg-black h-[88px] flex justify-between items-center px-20'>
            
            <div className='flex space-x-8 justify-center items-center'>
                <Logo className='h-8 w-auto' />
                <p className='text-white text-2xl font-semibold relative before:absolute before:top-[-4px] before:left-[-20px] before:border-l-[3px] before:inset-0 before:content=""'>Help Center</p>
            </div>

            <div className='flex items-center justify-center gap-4 h-full'>
                <button className='button-ghost h-14'>Submit a request</button>
                <button className='button h-14'>Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar