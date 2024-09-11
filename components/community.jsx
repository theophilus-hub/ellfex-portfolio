"use client";

import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";

function Community() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className='w-full bg-black p-4 rounded-2xl space-y-6'>
        <h1 className="font-semibold text-lg">ELLFEXX BUILDERS HUB</h1>
        <p className="text-notnotblack">The ELLFEXX BUILDERS HUB is a web3 / Tech based community and project in motion aimed at Creating a strong foudation of builders with multiple streams of income whilst creating awareness about the world of Tech and the opportunity it brings, and of course giving back to the community by helping other projects Drive in more adoption for their products
        </p>
        <button  className="flex flex-row border border-notnotblack rounded-[10px] w-min whitespace-nowrap py-2 px-2 my-4 bg-black" onClick={() => setOpenModal(true)}>
                <p className="text-sm font-semibold  text-white">
                  Join Now
                </p>
          </button>
      </div>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} >
        <div className="absolute top-72 md:top-36 w-full h-full flex flex-col items-center ">
          <div className="w-[90%] md:w-[30%] flex flex-col items-center">
            <Modal.Header className="bg-notblack text-white h-6 w-full text-center p-6 rounded-t-2xl border-t-2  border-l-2 border-r-2">
             
            </Modal.Header>
            <Modal.Body className="bg-notblack text-white h-28 w-full text-center py-6  border-l-2 border-r-2">
              <div className="space-y-6">
                <p className="font-bold text-2xl">Join Builders Hub<br /> Community</p>
              </div>
            </Modal.Body>
            <Modal.Footer className="bg-notblack text-white h-20 rounded-b-2xl w-full text-center flex justify-center space-x-4 items-center py-6 border-y-0 border-b-2  border-l-2 border-r-2">
                <a href="https://t.me/EllfexBuildersHub">
                  <Button >Join Telegram</Button>
                </a>
                <a href="https://chat.whatsapp.com/GCbpMJAnKxl8ztsB7bY4Au">
                  <Button >Join Whatsapp</Button>
                </a>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
    
  )
}

export default Community
