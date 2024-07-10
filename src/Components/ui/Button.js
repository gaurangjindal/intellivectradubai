import * as React from 'react';

export const Button = ({functionToPerform,buttonText}) => {
  return (
    <div className='cursor-pointer rounded-lg p-2 px-4 h-fit w-fit text-white bg-[#F19F1F]' onClick={functionToPerform}>
        <p className='text-lg'>{buttonText}</p>
    </div>
  )
}
