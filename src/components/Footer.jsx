function Footer() {
  return (
    <footer className="flex flex-col items-center bg-primary p-24 text-darkBgText">
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
      <h6 className="mt-4 uppercase">
        &copy; {new Date().getFullYear()} Rob Codes
      </h6>
      <h6 className="uppercase">Built with React</h6>
    </footer>
  );
}

export default Footer;
