function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="flex-1">
          <a href="/">
            <img className="img-fluid header-logo" src="./src/assets/logos/rob-codes-header.png" alt="Logo" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
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
        </div>
      </nav>
    </header>
  );
}

export default Header;