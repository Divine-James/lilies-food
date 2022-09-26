import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-item">
            <h4 className="footer-head">Company</h4>
            <div className="footer-list">
              <a href="www.google.com">About Us</a>
              <a href="www.google.com">Careers</a>
              <a href="www.google.com">Contact Us</a>
            </div>
          </div>
          <div className="footer-item">
            <h4 className="footer-head">Support</h4>
            <div className="footer-list">
              <a href="www.google.com">Help Center</a>
              <a href="www.google.com">Safety Center</a>
            </div>
          </div>
          <div className="footer-item">
            <h4 className="footer-head">Legal</h4>
            <div className="footer-list">
              <a href="www.google.com">Cookies Policy</a>
              <a href="www.google.com">Privacy Policy</a>
              <a href="www.google.com">Terms of Service</a>
              <a href="www.google.com">Dispute Resolution</a>
            </div>
          </div>
          <div className="footer-item">
            <h4 className="footer-head">Install App</h4>
            <div className="footer-list">
              <img
                src="img/Google-Play-Badge.svg"
                alt="google"
                className="footer-img"
              />
              <img
                src="img/App-Store-Badge.svg"
                alt="app store"
                className="footer-img"
              />
            </div>
          </div>
        </div>
      </footer>
      <hr></hr>
      <div className="footer-bottom">
        <p>© 2021 LILIES, All rights reserved</p>
        <div className="social-list">
          <img src="img/instagram.svg" alt="instagram" />

          <img src="img/twitter.svg" alt="twitter" />

          <img src="img/youtube.svg" alt="youtube" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
