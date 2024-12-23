import logo from "../../../assets/techm_logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-desktop">
        <div className="main-footer-container">
          <div>
            {" "}
            <img src={logo} alt="logo" />{" "}
          </div>
          <div className="footer-content">
            <a>Why TechM</a>
            <a>The TechM Way</a>
            <a>Diversity & Inclusion</a>
            <a>Contact Us</a>
          </div>
          <div className="footer-content">
            <a>Register</a>
            <a>Sign In</a>
            <a>IT Opportunities</a>
            <a>BPS Opportunities</a>
          </div>
          <div className="footer-content-icons">
            <FacebookIcon />
            <XIcon />
            <LinkedInIcon />
            <YouTubeIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div className="footer-container-mobile">
        <div className="main-footer-container">
          <div>
            {" "}
            <img src={logo} alt="logo" />{" "}
          </div>
          <div className="footer-content-parent">
            <div className="footer-content">
              <a>Why TechM</a>
              <a>The TechM Way</a>
              <a>Diversity & Inclusion</a>
              <a>Contact Us</a>
            </div>
            <div className="footer-content">
              <a>Register</a>
              <a>Sign In</a>
              <a>IT Opportunities</a>
              <a>BPS Opportunities</a>
            </div>
          </div>
          <div className="footer-content-icons">
            <FacebookIcon />
            <XIcon />
            <LinkedInIcon />
            <YouTubeIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div>
        <hr />
        <div className="footer-map">
          <div><p>© 2024 Tech Mahindra Limited</p></div>
          <div className="term-and-policy">
            <div><p>Terms of Use</p></div>
            <div><p>Privacy Policy</p></div>
            <div><p>Cookie Policy</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
