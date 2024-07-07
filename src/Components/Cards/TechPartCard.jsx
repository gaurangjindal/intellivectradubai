import * as React from 'react';
import Image from 'next/image';
import { IoMdArrowRoundForward } from "react-icons/io";



export const TechPartCard = ({ imgsrc, link }) => {
    return (
        <div className='p-4 bg-gray-400 hover:bg-gray-500 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] space-y-1 flex flex-col flex-wrap justify-center items-center '>
            <div className='flex justify-end w-full'>
                <a className='text-white space-x-2 hover:bg-black flex items-center font-light rounded-[50%] p-1 border' href={link}><span><IoMdArrowRoundForward></IoMdArrowRoundForward></span></a>
            </div>
            <div className='relative h-[60px] w-[120px] z-[100] md:h-[120px] md:w-[250px]'>
                <Image layout='fill' src={imgsrc}></Image>
            </div>
        </div>
    )
}
