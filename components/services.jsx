import Image from "next/image";
import Link from "next/link";

function Services() {
  return (
    <div className="w-full space-y-4">
      <div className="rounded-2xl bg-notblack w-full p-4 space-y-4">
        <h1 className="font-semibold text-white text-base md:text-xl">
          Community Building and Management
        </h1>
        <p className="font-normal text-sm md:font-medium text-notnotblack">
          With over 3 years of experience and having worked with multiple
          projects overtime, as a seasoned manager, moderator, and community
          ambassador in the Web3 space, I bring a diverse set of skills and
          experience that make me a valuable asset to projects I work with.
        </p>
        <Link href={"https://x.com/EllFexx/status/1796782566999052387?t=vu_8eSVAU8f8T7M1ISRq9g&s=19"}>
          <div className="flex items-center space-x-1 ">
          <p>Read more</p>
          <Image src="/icons/next2.png" width={15} height={15} />
        </div>
        </Link>
        
      </div>
      <div className="rounded-2xl bg-notblack w-full p-4 space-y-4">
        <h1 className="font-semibold text-white text-base md:text-xl">
          Community Onboarding
        </h1>
        <p className="font-normal text-sm md:font-medium text-notnotblack">
          Besides working alongside projects personally, I also help scout the
          finest talents across the web3 space with the aid of my community.
          This approach not only creates more visibility for the projects but
          also helps them recruit the best of the best
        </p>
        <Link href={"https://x.com/EllFexx/status/1810958434935709771"}>
        <div className="flex items-center space-x-1 ">
          <p>Read more</p>
          <Image src="/icons/next2.png" width={15} height={15} />
        </div>
        </Link>
        
      </div>
      <div className="rounded-2xl bg-notblack w-full p-4 space-y-4">
        <h1 className="font-semibold text-white text-base md:text-xl">
          Event Hosting [LIVE AND VIRTUAL]
        </h1>
        <p className="font-normal text-sm md:font-medium text-notnotblack">
          One of the best ways to help a project gain more visibility is through
          live events and not just online meetups. Thus I leverage on my
          connection and aid projects that i come in contact with Host these
          events to gain more adoption.
        </p>
        <Link href={"https://x.com/EllFexx/status/1812888752882094201"}>
        <div className="flex items-center space-x-1 ">
          <p>Read more</p>
          <Image src="/icons/next2.png" width={15} height={15} />
        </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Services;
