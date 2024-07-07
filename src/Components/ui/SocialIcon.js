import * as React from 'react';

export const SocialIcon = ({children,link}) => {
  return (
    <div className='w-[40px] cursor-pointer h-[40px] flex items-center justify-center rounded-[50%] bg-gray-400 hover:bg-black hover:text-blue-600'>
        {children}
    </div>
  )
}
