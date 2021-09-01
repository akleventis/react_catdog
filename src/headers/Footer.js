import "./headers.css";

const Footer = () => {
  return (
    <footer className="footer headers">
      <p>
        <a href="https://alexleventis.com" target="_blank" rel="noreferrer">
          © Alex Leventis
        </a>
        <span>
          <a href="http://alexcod.es/github" className="links" target="_blank" rel="noreferrer">
            Github
          </a>
          <a href="http://alexcod.es/linkedin" className="links" target="_blank" rel="noreferrer">
            Linkdin
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
