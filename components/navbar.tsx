import Link from "next/link";

function NavBar() {
  return (<nav className="flex flex-row items-center justify-between">
    <div>
      <Link href={"/"}>
        Home
      </Link>
    </div>

    <div>Search bar</div>
    <div>Toggler</div>

  </nav>);
}

export default NavBar;