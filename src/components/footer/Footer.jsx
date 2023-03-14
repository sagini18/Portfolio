import "../footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Sagini</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer_link">
              Qualifications
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a href="" className="footer_social-link">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="" className="footer_social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/sagini_n"
            target="_blank"
            className="footer_social-link"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer_copy">&#169; Sagini. All rights reserved </span>
      </div>
    </footer>
  );
};

export default Footer;
