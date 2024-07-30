import React from 'react'

function Header({text}) {
  return (
    <div className='w-min h-12 flex flex-row space-x-4 py-2 px-4 rounded-[10px] justify-center items-center bg-notblack border border-border'>
      <div className='bg-white w-2 h-2 rounded-full'></div>
      <div className=''>
        <h1 className='text-white font-normal text-xl whitespace-nowrap'>{text}</h1>
      </div>

    </div>
  )
}

export default Header
