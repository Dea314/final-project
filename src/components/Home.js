import React from "react";
import ActionAreaCard from "./ActionAreaCard";
import wallpaper from "../img/wallpaper.jpg";

const Home = ({ response }) => {
  console.log("response from home", response);

  return (
    <>
      <div className="home_intro_p1">
        <h1>The RESTful Game Characters API</h1>
      </div>
      <div style={{ width: "100%" }}>
        <img src={wallpaper} alt="wallpaper" style={{ width: "100%" }} />
      </div>

      <div className="home_intro_p2">
        <p>
          A collection of character details from the series
          <br></br>
          Final Fantasy at your finger tips through our RESTful API.
          <br></br>
          <br></br>
          <div>
            Have a look at the{" "}
            <a class="anchor-tags" href="/Documents">
              documentation
            </a>{" "}
            or have a go at the{" "}
            <a class="anchor-tags" href="/Playground">
              playground
            </a>{" "}
            right now!
          </div>
        </p>
      </div>
      <div></div>
      <div className="home">
        {response.map((item) => {
          return <ActionAreaCard character={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
