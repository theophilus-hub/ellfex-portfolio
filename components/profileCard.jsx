

import Image from "next/image"
import Link from "next/link"
import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";



// import ProfilePic from ''

const ProfileCard = () => {
    const [openModal, setOpenModal] = useState(false);


  return (
    <div className='mx-2 md:mx-6 '>
         <div className='sm:w-full md:w-[30vw] rounded-2xl md:h-[90vh] bg-notblack p-4'>
            <div className="mx-2 flex flex-col justify-between h-full ">

                <div>
                    <Image
                        src='/profile.JPG'
                        alt="profile"
                        height={135}
                        width={135}
                        className="rounded-[10px]"
                    
                    />
                    <div className="my-4 ">
                        <h4 className="text-white text-lg font-bold font-sans my-2">Emokpaire Elijah</h4>
                        <p className="text-notnotblack text-xs font-normal">Community Builder, Project Manager and Ambassador</p>
                    </div>

                    <button className="flex flex-row border border-notnotblack rounded-[10px] w-28 py-2 px-2 my-4">
                        <a className="w-full h-full flex" href="mailto:infoellfex@gmail.com">
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                        </svg>
                        
                        <p className="text-sm font-semibold ml-2 text-white">
                            Mail Me
                        </p>
                        </a>
                        
                    </button>
                </div>
                
                
                <div className="flex flex-row space-x-4 mt-10">
                    <a href="https://x.com/EllFexx" className="border border-border rounded-[4px] w-8 py-1 px-1 my-4 ">
                        <Image 
                            src='/icons/twitter.png'
                            className="https://t.me/ellfexx"
                            width={40}
                            height={40}
                            
                        />
                    </a>
                    <a className="border border-border rounded-[4px] w-8 py-1 px-1 my-4 " onClick={() => setOpenModal(true)}>
                        <Image 
                            src='/icons/telegram.png'
                            className=""
                            width={40}
                            height={40}
                            
                        />
                    </a>
                    
                    <a href="https://www.tiktok.com/@i_am_ellfex?_t=8ofSNtZ363x&_r=1" className="border border-border rounded-[4px] p-1 w-8 my-4 ">
                        <Image 
                            src='/icons/tiktok.png'
                            className=""
                            width={50}
                            height={50}
                            
                        />
                    </a>
                    <a href="https://chat.whatsapp.com/GCbpMJAnKxl8ztsB7bY4Au" className="border border-border rounded-[4px] p-1 w-8 my-4 ">
                        <Image 
                            src='/icons/what.png'
                            className=""
                            width={50}
                            height={50}
                            
                        />
                    </a>

                
               
                </div>
                
               
                
            </div>
        </div>


        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} >
        <div className="absolute top-72 md:top-36 w-full h-full flex flex-col items-center ">
          <div className="w-[90%] md:w-[30%] flex flex-col items-center">
            <Modal.Header className="bg-notblack text-white h-6 w-full text-center p-6 rounded-t-2xl border-t-2  border-l-2 border-r-2">
             
            </Modal.Header>
            <Modal.Body className="bg-notblack text-white h-28 w-full text-center py-6 border-y-0  border-l-2 border-r-2">
              <div className="space-y-6">
                <p className="font-bold text-2xl">Telegram</p>
              </div>
            </Modal.Body>
            <Modal.Footer className="bg-notblack text-white h-20 rounded-b-2xl w-full text-center flex justify-center space-x-4 items-center py-6 border-y-0 border-b-2  border-l-2 border-r-2">
              <a href="https://t.me/EllfexBuildersHub">
                <Button >Builders Hub</Button>
                </a>
                <a href="https://t.me/ellfexx">
                    <Button >ELLFEX DM</Button>
                </a>
              
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    
    </div>
  )
}

export default ProfileCard
