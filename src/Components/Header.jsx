import scrollToView from "../utils/scrollToView";

function Header() {
  return (
    <header className="fixed top-0 z-10 w-full">
      <nav className="navbar-custom custom-padding-lg flex w-full justify-between items-center relative px-2 py-0">
        {/* Mobile Dropdown (visible on small screens) */}
        <div className="navbar-start md:hidden">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>About Me</a>
              </li>
              <li>
                <a
                  className="nav-link cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToView("work");
                  }}
                >
                  Work
                </a>
              </li>
              <li>
                <a>Get in touch</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo Container (Centered on Mobile, Left-aligned on Desktop) */}
          <a
            href="/"
            className="h-auto absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none"
            style={{ height: "40px" }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              className="h-full"
              src="/assets/logos/rob-codes-header.png"
              alt="Logo"
            />
          </a>

          {/* Desktop Menu (Visible only on medium screens and up) */}
        <div className="navbar-end hidden md:flex">
          <ul className="flex menu menu-horizontal p-0 text-darkBgText">
            <li>
              <a>About me</a>
            </li>
            <li>
              <a
                className="nav-link cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToView("work");
                }}
              >
                Work
              </a>
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
