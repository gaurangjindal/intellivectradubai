import * as React from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image'
export const ContentCard = ({ content }) => {
    return (
        <div className='bg-gray-200 text-black space-y-4 p-4 md:w-[400px] w-[320px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg'>
            <div className="w-[100%] h-[220px] relative">
                <Image alt='' layout='fill' src={content.imageSrc} />
            </div>

            <div className='flex items-center space-x-4'>
                <Image alt='' height={40} width={40} src={content.userImageSrc} className='rounded-[50%]' />
                <div>
                    <p>Admin</p>
                    <p className='text-xs'>{`Published By ${content.username}`}</p>
                </div>
            </div>
            <div className="h-[70px] overflow-hidden">
                {content.description}
            </div>

            <div>
                {content.date}
            </div>

            <div>
                <a target='_blank' href={content.link}><button className='cursor-pointer rounded-lg p-2 px-4 h-fit w-fit text-white bg-[#F19F1F]' buttonText={"Read More"}>Read More</button></a>
            </div>
        </div>
    )
}
