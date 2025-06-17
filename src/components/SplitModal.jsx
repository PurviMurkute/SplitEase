import React from 'react'
import { CircleX } from 'lucide-react';

const SplitModal = ({isOpen, onClose, children}) => {

    if(!isOpen){
        return null;
    }

  return (
    <div className='fixed top-0 left-0 min-h-screen w-full flex justify-center items-center'>
        <div className='bg-gray-300/50 w-1/3 relative px-5 py-5'>
        <CircleX color='#2b257e' className='top-2 right-2 absolute cursor-pointer' onClick={onClose} />
        {children}
        </div>
    </div>
  )
}

export default SplitModal