import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="container max-w-[1440px] w-full flex justify-between items-center py-5 mx-auto px-6 lg:px-20 3xl:px-0 ">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
        <ul className="hidden lg:flex justify-between gap-12 h-full  items-center py-3 ">
          {NAV_LINKS.map((nav)=>{
            return <li key={nav.key} className="hover:font-bold  transition duration-300 cursor-pointer ">
              {nav.label}
            </li>
          })}
        </ul>
        <button   className="hidden lg:flex rounded-full bg-black h-14 w-36 text-white font-bold  gap-3 justify-center items-center hover:bg-green-50 transition duration-500 ">
          <Image width={24} alt="login" src="/user.svg" height={24} />
          Login
        </button>
        
        <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />


    </nav>
  )
}

export default NavBar

