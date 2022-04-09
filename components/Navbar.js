import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h2>
          <Link href={"/"}>
            <a>Next Blog</a>
          </Link>
        </h2>
        <ul className="menu">
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a>Popular</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
