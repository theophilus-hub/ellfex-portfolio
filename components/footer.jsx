import Image from "next/image"
import logo from "@/public/ellfexb.png"

function Footer() {
  return (
    <div className="w-full">
      <Image 
        src={logo}
        className="w-full"
      />
    </div>
  )
}

export default Footer
