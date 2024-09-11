import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

import Autoplay from "embla-carousel-react";
import Image from "next/image";
import Item from "./item";

function Projects() {
  return (
    <div className=" flex justify-center items-center  w-full px-12 py-4">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full  m-auto"
      >
        <CarouselContent>
          <Item
            img="/projects/ellfex.jpg"
            pos={"FOUNDER"}
            name={"Ellfex"}
            link={"https://x.com/EllFexx"}
          />
          <Item
            img="/projects/ayetu.jpg"
            pos={"AMB & MOD"}
            name={"Ayetu Network"}
            link={
              "https://x.com/ayetunetwork/status/1800912165651488876?t=Kl_yg3DGd-Pxq2Rocg8oNA&s=19"
            }
          />
          <Item
            img="/projects/transfer.jpg"
            pos={"AMB"}
            name={"Transfermole"}
            link={"https://x.com/GoTransferMole"}
          />
          <Item
            img="/projects/digi.jpg"
            pos={"AMB"}
            name={"Digifinex"}
            link={
              "https://x.com/EllFexx/status/1800823459389522356?t=Uj40K03xobjQU1Wd6ymXWA&s=19"
            }
          />
          <Item
            img="/projects/piggylet.jpg"
            pos={"AMB"}
            name={"Piggylet"}
            link={
              "https://x.com/EllFexx/status/1759688396471963998?t=IbOzHjJ6b8NtmBF-9gjycQ&s=19"
            }
          />
          <Item
            img="/projects/metale.jpg"
            pos={"AMB"}
            name={"Matale Protocol"}
            link={"https://x.com/EllFexx/status/1821507870204064152?t=SFPL6LAmkwp_DOo6JWFSyw&s=19"}
          />
          <Item
            img="/projects/eywa.jpg"
            pos={"AMB"}
            name={"EYWA"}
            link={"https://x.com/eywaprotocol"}
          />
          <Item
            img="/projects/contentfi.jpg"
            pos={"MOD"}
            name={"ContentFi"}
            link={
              "https://x.com/0xContentFi/status/1660594720609820676?t=yuYzP7feZ6jjaSSt1yd3Gw&s=19"
            }
          />
          <Item
            img="/projects/Archway.jpg"
            pos={"AMB"}
            name={"Archway"}
            link={
              "https://x.com/EllFexx/status/1716858280578809979?t=I5mmsc5ZIF0ghTh60FuIUg&s=19"
            }
          />
          <Item
            img="/projects/hourglass.jpg"
            pos={"AMB"}
            name={"Hourglass World"}
            link={"https://x.com/hourglassworld/status/1812886983305208009"}
          />
          <Item
            img="/projects/Deriv.jpg"
            pos={"AMB"}
            name={"Deriv"}
            link={
              "https://x.com/EllFexx/status/1750950591218475053?t=-gGox--CXhIpJrXkTdiTIQ&s=19"
            }
          />
          <Item
            img="/projects/invidao.jpg"
            pos={"AMB"}
            name={"invigorate Dao"}
            link={"https://x.com/Invigorate_DAO?t=jEGQuEtB9YoV7gH2xnIwuw&s=09"}
          />

          <Item
            img="/projects/gdscfuo.jpg"
            pos={"MOD"}
            name={"GDSC"}
            link={
              "https://x.com/EllFexx/status/1687414452079976448?t=y9Yz-uPjrNyOSLB4FSqcxw&s=19"
            }
          />
          <Item
            img="/projects/agg.jpg"
            pos={"MOD"}
            name={"AGG"}
            link={
              "https://x.com/EllFexx/status/1609209138638094339?t=ALsuofBIMSNsIdwcdNtjLw&s=1"
            }
          />
          <Item
            img="/projects/chaidex.jpg"
            pos={"AMB"}
            name={"Chaidex"}
            link={
              "https://x.com/EllFexx/status/1709357546765509109?t=v4ESJQUUFtKktuRRcSZ9ng&s=19"
            }
          />
          <Item
            img="/projects/lumyn.jpg"
            pos={"MOD"}
            name={"Lumyn Labs"}
            link={"/"}
          />
          <Item
            img="/projects/horns.jpg"
            pos={"MOD"}
            name={"Horns"}
            link={
              "https://x.com/whatabullwears/status/1811634519226876048?t=AoUYgInDJMpHXxmshlkHsg&s=19"
            }
          />
          <Item
            img="/projects/hive.jpg"
            pos={"MOD"}
            name={"Hive"}
            link={
              "https://x.com/EllFexx/status/1636307264679170048?t=JmacigK1IQhNED5fbue6ZQ&s=19"
            }
          />
          <Item
            img="/projects/orbix.jpg"
            pos={"AMB"}
            name={"Orbix"}
            link={
              "https://x.com/orbix_ng/status/1733899395907674273?t=rNg_164D4A7rsEsIi2DLZQ&s=19"
            }
          />
          <Item
            img="/projects/sumex.jpg"
            pos={"AMB"}
            name={"Sumex"}
            link={"/"}
          />
          <Item
            img="/projects/bth.jpg"
            pos={"MOD"}
            name={"BTH"}
            link={"https://x.com/bayelsatechhub"}
          />
          <Item
            img="/projects/viosam.jpg"
            pos={"MOD"}
            name={"Viosam Tech"}
            link={"https://x.com/Viosamtech/status/1276798200813215744"}
          />
          <Item
            img="/projects/incrypto.jpg"
            pos={"MOD"}
            name={"Incrypto encrypted"}
            link={"https://x.com/InCryptoEncrypt/status/1808434770776391745"}
          />
        </CarouselContent>
        <CarouselPrevious className="bg-black" />
        <CarouselNext className="bg-black" />
      </Carousel>
    </div>
  );
}

export default Projects;
