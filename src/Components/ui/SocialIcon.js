import * as React from 'react';

export const SocialIcon = ({ children, link,color}) => {
  return (
    <a style={{color: color}} href={link}><div className='w-[40px] bg-opacity-10 cursor-pointer h-[40px] flex items-center justify-center rounded-[50%] bg-black hover:bg-white'>
      {children}
    </div></a>
  )
}
