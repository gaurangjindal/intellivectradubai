import * as React from 'react';
import Image from 'next/image';
import { IoMdArrowRoundForward } from "react-icons/io";



export const TechPartCard = ({ imgsrc, link,out }) => {
    return (
        <div className='p-4 rounded-lg shadow-md space-y-1 flex flex-col flex-wrap justify-center items-center '>

            <div className='relative h-[60px] w-[120px] z-[100] md:h-[120px] md:w-[210px]'>
                <Image layout='fill' objectFit={out ? 'fill' : 'cover'} src={imgsrc}></Image>
            </div>

            <div className='flex justify-end w-full'>
                <a className='text-white space-x-2 bg-black flex items-center font-light rounded-[50%] p-1 border' href={link}  target="_blank"><span><IoMdArrowRoundForward></IoMdArrowRoundForward></span></a>
            </div>
        </div>
    )
}
