import * as React from 'react';
import Image from 'next/image';
import { LuArrowUpRight } from "react-icons/lu";

export const TechPartCard = ({ imgsrc, link }) => {
    return (
        <div className='p-4 bg-[#FFAE2F] space-y-3 flex flex-col justify-center bg-opacity-[25%]'>
            <div className='relative h-[70px] w-[120px]'>
                <Image layout='fill' src={imgsrc}></Image>
            </div>
            <div>
                
                <a className='text-[#714400] space-x-2 flex items-center font-light' href={link}><span><LuArrowUpRight></LuArrowUpRight></span><span>Get Redirected</span></a>
            </div>

        </div>
    )
}
