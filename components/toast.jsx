"use client"


import { useState, useEffect } from "react";

function Toast() {
    const [show, setShow] = useState(false)

  useEffect(() => {
    
   setTimeout(() => {
    setShow(true)
  }, 2000);

  setTimeout(() => {
    setShow(false)
  }, 6000);
 
    
  }, [])
    
  return (
    <div className="w-full flex md:justify-end justify-center items-center fixed top-2 md:right-2 ">
    <div className='rounded-2xl bg-notblack w-min whitespace-nowrap p-4 space-y-2 flex flex-col justify-center items-center border border-notnotblack'>
      <h1 className='font-semibold text-white text-base md:text-xl'>JOIN BUILDERS HUB COMMUNITY NOW</h1>
      
      <a href="https://t.me/EllfexBuildersHub" className="flex flex-row border border-notblack rounded-[10px] w-min whitespace-nowrap py-2 px-2 my-4 bg-blue-800">
               
        <p className="text-sm font-semibold  text-white">
          Join Now
        </p>
      </a>
    </div>
  </div>
  )
}

export default Toast
