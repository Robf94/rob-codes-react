function Footer() {
  return (
    <footer className="flex flex-col items-center p-24 bg-primary text-darkBgText">
      <ul className="list-none">
        <li>
          <a
            href="https://github.com/Robf94"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i> Check out my GitHub page
          </a>
        </li>
      </ul>
      <h6 className="uppercase mt-4">
        &copy; {new Date().getFullYear()} Rob Codes
      </h6>
      <h6 className="uppercase">Built with React</h6>
    </footer>
  );
}

export default Footer;