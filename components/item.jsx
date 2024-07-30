import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function Item({img, name, pos, link}) {
  return (
    <CarouselItem className="basis-3/4 md:basis-1/2 lg:basis-1/4">
      <div className="p-2">
        <Card className="bg-black text-white rounded-2xl h-full border-notnotblack">
          <CardContent className=" flex flex-col aspect-square  p-2 h-full items-center justify-center">
            
            <a href={link} className=" items-center justify-around flex flex-col  h-full py-2">
                
              <Image
                src={img}
                className="rounded-full"
                width={55}
                height={55}
              />
              <div className="flex flex-col items-center">
                <h2 className="text-sm font-semibold">{name}</h2>
              <h4 className="text-notnotblack text-xs md:text-sm">{pos}</h4>
              </div>
              
            </a>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}

export default Item;
