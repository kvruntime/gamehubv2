import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.webp"
import ThemeToogler from "./theme-toggler";
import SearchBar from "./search-bar";
import { IoLogoGameControllerB } from "react-icons/io";

function NavBar() {
  return (<nav className="flex flex-row items-center justify-between pt-3 px-3">
    <div>
      <Link href={"/"}>
        {/* <Image alt="logo" src={logo} width={50} height={50} priority /> */}
        <IoLogoGameControllerB width={100} height={100} fontSize={20} className="text-4xl font-extrabold text-sky-950" />
      </Link>
    </div>

    <SearchBar />
    <ThemeToogler />

  </nav>);
}

export default NavBar;