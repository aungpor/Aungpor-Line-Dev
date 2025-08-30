const AppFooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="/en/about-us">About Us</a>
          <a href="/en/contact-us">Contact Us</a>
          <a href="/en/changelog">Changelog</a>
          <a href="/en/dmca">DMCA</a>
          <a href="/en/cookie-policy">Cookie Policy</a>
          <a href="/en/privacy-policy">Privacy Policy</a>
          <a href="/en/terms-of-use">Terms of Use</a>
          <a href="/en/public-stats">Stats</a>
        </div>

        <hr />

        <div className="footer-bottom">
          <span>Copyright © 2022 - aungpor-web.com</span>
          <a href="/en/changelog">
            <b>v1.9.11</b>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
