"use client";

import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";

function Modalc() {
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    
   setTimeout(() => {
     setOpenModal(false)
   }, 12000);
  
     
   }, [])

  return (
    <>
      
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
            <Modal.Footer className="bg-notblack text-white h-20 rounded-b-2xl w-full text-center flex flex-col items-center py-6 border-y-0 border-b-2  border-l-2 border-r-2">
            <a href="https://t.me/EllfexBuildersHub" >
              <Button className="bg-blue-700 border-0 font-bold" >Join</Button>
              </a>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Modalc;
