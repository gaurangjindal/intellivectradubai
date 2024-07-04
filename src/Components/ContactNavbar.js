import * as React from 'react';
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";

export const ContactNavbar = () => {
  return (
    <div className='bg-[#D9D9D9] px-2 text-[16px] font-semibold text-[#000000] md:flex  hidden items-center justify-end w-full h-[29px]'>
        <div className='flex space-x-10'>
            <div className='flex items-center space-x-2'>
                <MdOutlineLocalPhone fontSize={20}/>
                <span className='text-sm cursor-pointer'><a href="tel:+97145667357">+971&nbsp;4&nbsp;5667357</a></span>
            </div>
            <div className='flex items-center space-x-2'>
                <CiMail fontSize={20}/>
                <span className='text-sm cursor-pointer'><a href="mailto:info@intellivectra.com">info@intellivectra.com</a></span>
            </div>
        </div>
    </div>
  )
}
