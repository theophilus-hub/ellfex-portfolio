import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import CaseStudy from "./caseStudy"

import Autoplay from "embla-carousel-react"
import Image from "next/image"
import case1 from "@/public/case/case1.jpg"
import event1 from "@/public/case/event1.jpg"
import event2 from "@/public/case/event2.jpg"
import comm from "@/public/case/comm.jpg"
import onbspot from "@/public/case/onbspot.jpg"


function Case() {
  return (
    <div className=" flex justify-center items-center  w-full px-8 py-4">
    <Carousel
   opts={{
     align: "start",
   }}
   className="w-full  m-auto"
 >
   <CarouselContent className=''>
     
       <CarouselItem  className=" md:basis-1/2 lg:basis-1/2">
         <div className="">
         <CaseStudy img={case1} heading={"Project Spotlight"} des={"Awarded as the best ambassador by two different projects at the same time"} tweet={"https://x.com/EllFexx/status/1804918339330040173"} />
         </div>
       </CarouselItem>
       <CarouselItem  className=" md:basis-1/2 lg:basis-1/2">
         <div className="">
         <CaseStudy img={event1} heading={"Event Spotlight 1"} des={"Hosted over 4 in-real-life web3 events for projects in 2024 and more coming"} tweet={"https://x.com/EllFexx/status/1807119104454652373?t=9B65uyBVLLxcVgUi62fexw&s=19"} />
         </div>
       </CarouselItem>
       <CarouselItem  className=" md:basis-1/2 lg:basis-1/2">
         <div className="">
         <CaseStudy img={onbspot} heading={"Onboarding Spotlight"} des={"Helping projects gain Visibility via Onboarding for the Best talents in Web3"} tweet={"https://x.com/EllFexx/status/1810958434935709771"} />
         </div>
       </CarouselItem>
       <CarouselItem  className=" md:basis-1/2 lg:basis-1/2">
         <div className="">
         <CaseStudy img={event2} heading={"Event Spotlight 2"} des={"Partnered with Blockchain Futuristic Conference to host the largest web3 event in Canada"} tweet={"https://x.com/EllFexx/status/1810260701971091742"} />
         </div>
       </CarouselItem>
       <CarouselItem  className=" md:basis-1/2 lg:basis-1/2">
         <div className="">
         <CaseStudy img={comm} heading={"Community Spotlight"} des={"Creating a strong community of builders to increase the adoption and knowledge of Web3 in Africa and beyond"} tweet={"https://t.me/EllfexBuildersHub "} />
         </div>
       </CarouselItem>
       

      
   </CarouselContent>
   <CarouselPrevious className='bg-black' />
   <CarouselNext className='bg-black' />
 </Carousel>
 </div>

  )
}

export default Case
