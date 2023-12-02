import "./Footer.css"
// import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div>
      {/* <footer >
        <span id="copyright-tag">© </span>
      </footer> */}
      <footer className="footer mt-auto py-3 bg-light text-center" style={{ backgroundColor: '#f2f2f2' }}>
      <div className="container">
        <span className="text-muted">&copy; 2023 UnifiedRemoteHub. All rights reserved.</span>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
