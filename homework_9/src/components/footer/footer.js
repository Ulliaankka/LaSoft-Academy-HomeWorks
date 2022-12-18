import React from "react";
import FooterLinks from "./Footer-links/footer-links";
import FooterText from "./Footer-text/footer-text";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="elements-footer">
          <FooterText />
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
