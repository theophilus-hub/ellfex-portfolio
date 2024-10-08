import Image from "next/image"
import logo from "@/public/foot.jpg"

function Footer() {
  return (
    <div className="w-full">
      <Image 
        src={logo}
        className="w-full rounded-xl"
      />
    </div>
  )
}

export default Footer
