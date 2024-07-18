import * as React from 'react';
import Image from 'next/image'

export const BenifitCard = ({ title, description, imagesrc }) => {
    return (
        <div className='w-full md:w-fit h-full relative'>
            <div className='md:w-[200px] w-[75%] border-4 border-[#F19F1F] bg-[#FFFFFF] z-[1001] tracking-wide py-2 mx-[15%] md:mx-[22%] text-[10px] md:text-lg'><p className='text-center'>{title}</p></div>
            <div className='space-y-2 md:w-[330px] h-full w-full flex flex-col items-center mt-[-15px] md:pt-8 pt-6 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg'>
                <Image alt='' height={60} width={60} src={imagesrc} />
                <div className='text-sm px-4 py-2 md:text-lg'>
                    {description}
                </div>
            </div>
        </div>
    )
}
