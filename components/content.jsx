import React from 'react'

function Content({children}) {
  return (
    <div className='flex flex-col md:flex-row w-[97vw] md:h-[95vh] justify-center m-0 space-y-16 md:space-y-2 overflow-hidden p-2'>
        {children}
    </div>
    
    
  )
}

export default Content
