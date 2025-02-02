import { Link, useLocation, useNavigate } from "react-router-dom";
import scrollToView from "../utils/scrollToView";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollOrNavigate = (e, id) => {
    e.preventDefault();

    if (location.pathname === "/") {
      scrollToView(id);
    } else {
      navigate("/", { replace: true });
      setTimeout(() => scrollToView(id), 100);
    }
  };

  return (
    <header className="fixed top-0 z-10 h-nav w-full">
      <nav className="navbar-custom custom-padding-lg relative flex h-nav w-full items-center justify-between bg-primary px-2 py-0">
        {/* Mobile Dropdown */}
        <div className="navbar-start md:hidden">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost"
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
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a onClick={(e) => handleScrollOrNavigate(e, "hero")}>
                  About me
                </a>
              </li>
              <li>
                <a onClick={(e) => handleScrollOrNavigate(e, "work")}>Work</a>
              </li>
              <li>
                <a onClick={(e) => handleScrollOrNavigate(e, "contact")}>
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Link
          to="/"
          className="absolute left-1/2 h-[40px] -translate-x-1/2 transform md:relative md:left-auto md:transform-none"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img
            className="h-full"
            src="/assets/logos/rob-codes-header.png"
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu (Visible on medium screens and up) */}
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal flex p-0 text-darkBgText">
            <li>
              <a onClick={(e) => handleScrollOrNavigate(e, "hero")}>About me</a>
            </li>
            <li>
              <a onClick={(e) => handleScrollOrNavigate(e, "work")}>Work</a>
            </li>
            <li>
              <a onClick={(e) => handleScrollOrNavigate(e, "contact")}>
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
