import Contact from "./Contact.js";
import wallpaper from "../img/wallpaper.jpg";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <img src={wallpaper} alt="wallpaper" style={{ width: "100%" }} />

        <Typography variant="h4" align="center" className="wrapper-about">
          <div className="about-tittle">WHO</div>
        </Typography>
        <Typography className="wrapper-about">
          We are proud developers from WBS Coding School - Berlin whose
          intention is to showcase our skills developed throughout the course
          with a full-stack application and thus, contribute to the Web Dev
          community. The Game Characters API took place as our final project,
          and we intend to keep this project up and running with updates and
          data development. You can follow us on GitHub, we will have to be in
          touch!
        </Typography>
        <Typography variant="h4" align="center" className="wrapper-about">
          <div className="about-tittle">WHAT</div>
        </Typography>
        <Typography className="wrapper-about">
          This website provides a RESTful API interface to highly detailed
          objects built from data related to the Final Fantasy game. Through
          this API information is provided about the characters inclusive with
          images and personal traits.
        </Typography>
        <Typography variant="h4" align="center" className="wrapper-about">
          <div className="about-tittle">WHAT IS AN API?</div>
        </Typography>
        <Typography className="wrapper-about">
          An API (Application Programming Interface) is a contract that allows
          developers to interact with an application through a set of
          interfaces. In this case, the application is a database of Final
          Fantasy characters, and the interfaces are URL links. A RESTful API is
          an API that conforms to a set of loose conventions based on HTTP
          verbs, errors, and hyperlinks.
        </Typography>
        <Typography variant="h4" align="center" className="wrapper-about">
          <div className="about-tittle">WHY</div>
        </Typography>
        <Typography className="wrapper-about">
          We all love fantasy books, movies, and games, so we decided to
          contribute an API for other developers to use as a "playground" for
          practicing, learning, etc.
        </Typography>
        <Typography variant="h4" align="center" className="wrapper-about">
          <div className="about-tittle">COPYRIGHT</div>
        </Typography>
        <Typography className="wrapper-about">
          The characters' data is used without a claim of ownership and belong
          to their respective owners. This API is open source and uses a BSD
          license.
        </Typography>
        <Typography variant="h4" align="center" className="wrapper-about">
          <div className="about-tittle">WHERE TO START</div>
        </Typography>
        <Typography className="wrapper-about">
          We have an awesome &nbsp;
          <NavLink
            className="navlink"
            activeclassname="active"
            to="/documents"
            // sx={{ display: { xs: "none", md: "flex" } }}
            style={{
              textDecoration: "none",
              color: "#5279ec",
            }}
          >
            documentation
          </NavLink>
          &nbsp; on how to use this API. It takes minutes to get started.
        </Typography>

        <Contact />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "20px auto 60px",
        }}
      ></div>
    </>
  );
};

export default About;
