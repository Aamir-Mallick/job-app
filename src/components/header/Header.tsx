import "./header.css";
import logo from "../../assets/techm_logo.png";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { headerDataItems } from "../../constants";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const tabs = {
  lifeAtTechM: "lifeAtTechM",
  getStarted: "getStarted"
}

const Header = () => {
  const [show, setShow] = useState(false);
  const [navMenu, setNavMenu] = useState("");
  const [menu, setMenu] = useState({});
  const [firstSubMenu, setFirstSubMenu] = useState(false);
  const [secondSubMenu, setSecondSubMenu] = useState(false);

  const handleFirstSubMenu = () => {
    setFirstSubMenu(!firstSubMenu)
  }

  const handleSecondSubMenu = () => {
    setSecondSubMenu(!secondSubMenu)
  }

  const showMenuItems = () => {
    setShow(!show);
  }

  const handleMouseOver = (value: keyof typeof tabs | null) => {
    console.log(value);
    if (value !== null && headerDataItems[value]) {
      setNavMenu(value);
      setMenu(headerDataItems[value])
    } else if (value === null) {
      setNavMenu("");
    }
  }

  return (
    <div className="header">
      <div className="header-container">
        <div>
          {" "}
          <img src={logo} alt="logo" />{" "}
        </div>
        <div className="header-menu">
          <ul className="header-menu-content">
            <li onMouseOver={() => handleMouseOver("lifeAtTechM")} className="item">
              <a>Life at techM</a>
              {(navMenu === 'lifeAtTechM') &&
                <div className="sub-menu">
                  <div className="sub-menu-header">{headerDataItems[navMenu].header}</div>
                  <div className="sub-menu-list">
                    <div>{headerDataItems[navMenu].ul[0]}</div>
                    <div>{headerDataItems[navMenu].ul[1]}</div>
                    <div>{headerDataItems[navMenu].ul[2]}</div>
                  </div>
                  <div className="sub-menu-img">
                    <div><img src={headerDataItems[navMenu].img[0]} /></div>
                    <div><img src={headerDataItems[navMenu].img[1]} /></div>
                  </div>
                </div>
              }
            </li>
            <li onMouseOver={() => handleMouseOver("getStarted")} className="item">
              <a>get Started</a>
              {(navMenu === 'getStarted') &&
                <div className="sub-menu">
                  <div className="sub-menu-header">{headerDataItems[navMenu].header}</div>
                  <div className="sub-menu-list">
                    <div>{headerDataItems[navMenu].ul[0]}</div>
                    <div>{headerDataItems[navMenu].ul[1]}</div>
                    <div>{headerDataItems[navMenu].ul[2]}</div>
                  </div>
                  <div className="sub-menu-img">
                    <div><img src={headerDataItems[navMenu].img[0]} /></div>
                    <div><img src={headerDataItems[navMenu].img[1]} /></div>
                  </div>
                </div>
              }
            </li>
            <li className="item"><a>alumni</a></li>
            <li className="item"><a>contact us</a></li>
            <li>
              <Button variant="outlined">sign up/login</Button>
            </li>
          </ul>
        </div>
        <div className="header-menu-mobile">
          <div className="menu-icon" onClick={showMenuItems}>
            <MenuIcon />
          </div>
        </div>
      </div>
      {
        show &&
        <div className="menu-overlay">
          <div>
            <div className="mobile-header" onClick={handleFirstSubMenu}>
              <span>{headerDataItems.lifeAtTechM.header}</span>
              <span className="up-down-icon">{!firstSubMenu ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
            </div>
            {firstSubMenu && 
              <div className="mobile-header-inner">
                <div>{headerDataItems.lifeAtTechM.ul[0]}</div>
                <div>{headerDataItems.lifeAtTechM.ul[1]}</div>
                <div>{headerDataItems.lifeAtTechM.ul[2]}</div>
              </div>
            }
          </div>
          <div>
            <div className="mobile-header" onClick={handleSecondSubMenu}>
              <span>{headerDataItems.getStarted.header}</span>
              <span className="up-down-icon">{!secondSubMenu ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
            </div>
            {secondSubMenu && 
              <div className="mobile-header-inner">
                <div>{headerDataItems.getStarted.ul[0]}</div>
                <div>{headerDataItems.getStarted.ul[1]}</div>
                <div>{headerDataItems.getStarted.ul[2]}</div>
              </div>
            }
          </div>
          <div><div className="mobile-header"><span>ALUMNI</span></div></div>
          <div><div className="mobile-header"><span>CONTACT US</span></div></div>
        </div>
      }
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
