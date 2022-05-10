import React from "react";
import ActionAreaCard from "./ActionAreaCard";

const Home = ({ response }) => {
  console.log("response from home", response);

  return (
    <>
      <div className="home_intro_h1">
        <h1>The RESTful Game Characters API</h1>
      </div>
      <div className="home_intro_h2">
        <p>All the data of the characters from Final Fantasy
          <br></br>
          at your fingure tips accessible through our RESTful API</p>
          <p>
            Check out the <a href="/Documents">documentation</a> or try out our <a href="/Playground">playground</a> now!
          </p>

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
