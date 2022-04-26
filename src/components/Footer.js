import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <ul className="footer-list">
          <li>Copyright 2022 &copy;</li>
          <li>{<FaGithub />}</li>
          <li>WBS</li>
          <li>Made by Steffani, Francois & Danijela</li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
