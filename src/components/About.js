import Contact from "./Contact.js";
import wallpaper from "../img/wallpaper.jpg";

const About = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <img src={wallpaper} alt="wallpaper" style={{ width: "100%" }} />
        {/* responsive? */}
        <Contact />
      </div>
    </>
  );
};

export default About;
