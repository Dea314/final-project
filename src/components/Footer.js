import "./Footer.css";
import githublogo from "../img/githublogo.png";
import wbs from "../img/wbs.png";
import fflogo from "../img/fflogo.png";


const Footer = () => {
  return (
    <>
    
      <div className="footerContent">
        <div className="copyright" >Copyright &copy; 2022 </div>
        <div>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <img className="git" src={githublogo} alt="githublogo" />
          </a>
        </div>

        <div>
          <a
            href="https://www.finalfantasyxiv.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="fflogo" src={fflogo} alt="fflogo" />
          </a>
        </div>
        <div>
          <a
            href="https://www.wbscodingschool.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="wbs" src={wbs} alt="wbs-logo" />
          </a>
        </div>
        <div className="sfd-footer">Made by Steffani, Francois & Danijela </div>
      </div>
    </>
  );
};

export default Footer;
