import "./header.css";
import logo from "../../assets/techm_logo.png";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div>
          {" "}
          <img src={logo} alt="logo" />{" "}
        </div>
        <div>
          <div className="header-menu">
            <p className="item">Life in tech</p>
            <p className="item">get Started</p>
            <p className="item">alumni</p>
            <p className="item">contact us</p>
            <Button variant="outlined">sign up/login</Button>
          </div>
        </div>
      </div>
      <div className="warning-bar">
        <div>
          <b>Scam Alert :</b>
          To all Tech Mahindra job aspirants and applications, beware of
          fraudulent job offers
          <a href="/images/IT_Fraud/Recruitment_Fraud.pdf" target="_blank">
            Learn More..{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
