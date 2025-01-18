function Header() {
  return (
    <header className="fixed top-0 w-full">
      <nav className="navbar navbar-custom custom-padding-lg flex h-full w-full justify-between">
        <a
          href="/"
          className="h-full"
        >
          <img
            className="h-full"
            src="./src/assets/logos/rob-codes-header.png"
            alt="Logo"
          />
        </a>
        {/* <div className="flex h-full"> */}
        <ul className="flex menu menu-horizontal p-0">
          <li>
            <a>About me</a>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>Get in touch</a>
          </li>
        </ul>
        {/* </div> */}
      </nav>
    </header>
  );
}

export default Header;
