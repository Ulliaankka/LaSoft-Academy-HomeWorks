import React from "react";
import './footer-links.css';
import { Link } from "react-router-dom";

const FooterLinks = () => {
    return (
            <div className='footer-list'>
                <Link to='/' className='footer-list-el footer-list-link'>Terms</Link>
                <Link to='/' className='footer-list-el footer-list-link'>Privacy policy</Link>
                <Link to='/' className='footer-list-el footer-list-link'>Help&Support</Link>
            </div>
    );
  };
  
  export default FooterLinks;