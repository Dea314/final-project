import React from "react";
import ActionAreaCard from "./ActionAreaCard";

const Home = ({ response }) => {
  console.log("response from home", response);

  return (
    <>
    <div className = "home_intro_p1">
      <h1>The RESTful Games Character API</h1>
    </div>
    <div className = "home_intro_p2">
      <p>A collection of character details from the series
        <br></br> 
         Final Fantasy at your finger tips through our RESTful API.
        <br></br>
        <br></br>
          Have a look at the <a href = "/Documents">documents</a> or have a go at the <a href = "/Playground">playground</a> right now!
        </p>

    </div>
    <div>

    </div>
      <div className="home">
        {response.map((item) => {
          return <ActionAreaCard character={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
