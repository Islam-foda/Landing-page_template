import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";

export default function Footer() {
  return (
    <footer>
          <div className="panner">
          <FiLayers/>
          <span>Fylo</span>
          </div>
      <div className="footer">
        <div className="contactMe">
          <div className="mob">
            <img src="./images/icon-phone.svg" alt="mobile-icon" />
            <p>Phone: +1-543-123-4567</p>
          </div>
          <div className="email">
            <img src="./images/icon-email.svg" alt="mail-icon" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <div className="aboutUs">
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="contactUs">
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="social">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaInstagram />
          </span>
        </div>
      </div>
    </footer>
  );
}
