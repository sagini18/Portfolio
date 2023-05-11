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
          <a
            href="https://web.facebook.com/profile.php?id=100090737522559"
            className="footer_social-link"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/sagini_n_/"
            className="footer_social-link"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://twitter.com/sagini_n" className="footer_social-link">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
