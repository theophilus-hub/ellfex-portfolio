import Image from "next/image";
import Link from "next/link";

function CaseStudy({heading, des, tweet, img}) {
  return (
    <div className="w-full md:w-[25vw] bg-black border border-notnotblack p-4 rounded-2xl space-y-4">
      <div className="mx-auto bg-notblack w-full rounded-2xl">
        <Image
          src={img}
          className="w-full rounded-2xl"
          width={200}
          height={200}
        />
      </div>
      <div>
        <h1 className="font-semibold text-lg">{heading}</h1>
        <p className="text-notnotblack">{des}</p>
        <Link href={`${tweet}`} className="flex items-center space-x-1 mt-8">
          <p>Read more</p>
          <Image src="/icons/next2.png" width={15} height={15} />
        </Link >
      </div>
    </div>
  );
}

export default CaseStudy;
