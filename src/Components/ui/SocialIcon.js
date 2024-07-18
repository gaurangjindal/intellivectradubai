import * as React from 'react';

export const SocialIcon = ({ children, link,color}) => {
  return (
    <a style={{color: color}} href={link}><div className='w-[35px] shadow-md shadow-[#FFAB2E]/50 bg-opacity-10 cursor-pointer h-[35px] flex items-center justify-center rounded-[50%] bg-black hover:bg-white'>
      {children}
    </div></a>
  )
}
