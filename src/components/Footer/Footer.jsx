import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer" name="footer">
      <div className="container">
        <div className="top">
          <h3>Beaches.</h3>
          <div className="social">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <ul>
              <li>About</li>
              <li>Partnerships</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Avertising</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>Contact</li>
              <li>Terms</li>
              <li>Policy</li>
              <li>Privacy</li>
              <li>About us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
