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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "20px auto 60px",
        }}
      >
        <h3>What?</h3>
        <p>
          The Game Characters is a REST based API based on the game series Final
          Fantasy. Through this API information is provided about the characters
          inclusive with images and personal traits.
        </p>
        <h3>Who?</h3>
        <p>We are Steffani, Danijela and Francois ............... </p>
        <h3>Why?</h3>
        <p>
          We decided we wanted to contribute an API for other developers to use
          as a "playground" for practicing, learning, etc.
        </p>
        <h3>Copyright?</h3>
        <p>
          The data and images are used without claim of ownership and belong to
          their respective owners.
        </p>
        <p style={{ color: "red" }}>(ALERT!!! Can we say this?)</p>
        <p>This API is open source and uses a BSD license.</p>
      </div>
    </>
  );
};

export default About;
