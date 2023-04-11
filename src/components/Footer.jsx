import React from 'react'
import { Logo } from './Svg'

function Footer() {

    const data = [{ title: 'Abstract', links: ['Start Trial', 'Pricing', 'Download'] },
    { title: 'Resources', links: ['Blog', 'Help Center', 'Release Notes', 'Status'] },
    { title: 'Community', links: ['Tiwtter', 'LinkedIn', 'Facebook', 'Dribble', 'Podcast'] },
    { title: 'Company', links: ['About Us', 'Careers', 'Legal'] }]

    return (
        <div className='w-full bg-black text-white flex gap-5 px-24 py-12 justify-between mt-24'>
            {data.map((item, index) => {
                return (
                    <div key={index} className='flex flex-col items-start'>
                        <h1 className='text-3xl font-bold mb-4'>{item.title}</h1>
                        {item.links.map((links, index) => {
                            return (
                                <p key={index} className='cursor-pointer hover:underline text-lg italic'>{links}</p>
                            )
                        })}
                    </div>
                )
            })}
            <div className='flex flex-col justify-between pt-8'>

                <div className='flex flex-col items-start'>
                    <h1 className='text-2xl font-bold tracking-wide'>Contact Us</h1>
                    <p className='text-lg font-bold tracking-wide font-semibold'>info@abstract.com</p>
                </div>

                <div className='flex flex-col items-start mt-12'>
                    <Logo className='h-8 w-auto mb-4' />
                    <p>
                        © Copyright 2023 <br />

                        Abstract Studio Design, Inc. <br />

                        All rights reserved <br />
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Footer