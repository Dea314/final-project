import "./Footer.css";
import githublogo from "../img/githublogo.png";
import wbs from "../img/wbs.png";
import fflogo from "../img/fflogo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footerContent">
        <div>Copyright &copy; 2022 </div>
        <div>
          <NavLink to={{ pathname: "https://github.com" }} target="_blank">
            <img className="git" src={githublogo} alt="githublogo" />
          </NavLink>
        </div>
        {/*  how to get link without localhost */}
        <div>
          <NavLink
            to={{ pathname: "https://www.finalfantasyxiv.com/" }}
            target="_blank"
          >
            <img className="fflogo" src={fflogo} alt="fflogo" />
          </NavLink>
        </div>
        <div>
          <NavLink
            to={{ pathname: "https://www.wbscodingschool.com/" }}
            target="_blank"
          >
            <img className="wbs" src={wbs} alt="wbs-logo" />
          </NavLink>
        </div>
        <div>Made by Steffani, Francois & Danijela </div>
      </div>
    </>
  );
};

export default Footer;
